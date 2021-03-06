import nodeResolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import replace from '@rollup/plugin-replace'
import nodeGlobals from 'rollup-plugin-node-globals'
import { terser } from 'rollup-plugin-terser'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'

const input = './src/index.js'

const globals = {
  react      : 'React',
  'react-dom': 'ReactDOM'
}

const babelOptions = {
  configFile    : '../../babel.config.js',
  // We are using @babel/plugin-transform-runtime
  exclude       : /node_modules/,
  runtimeHelpers: true
}

const commonjsOptions = {
  ignoreGlobal: true,
  include     : /node_modules/
  // namedExports: {
  //   'prop-types': [
  //     'elementType',
  //     'bool',
  //     'func',
  //     'object',
  //     'oneOfType',
  //     'element'
  //   ],
  //   'react-is': [
  //     'isForwardRef',
  //     // 'ForwardRef',
  //     'isFragment',
  //     'isLazy',
  //     'isMemo',
  //     'Memo',
  //     'isValidElementType'
  //   ]
  // }
}

function onwarn(warning) {
  if(
    warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
    warning.source === 'react'// &&
    // warning.names.filter((identifier) => identifier !== 'useDebugValue').length === 0
  )
    // only warn for
    // import * as React from 'react'
    // if (__DEV__) React.useDebugValue()
    // React.useDebug not fully dce'd from prod bundle
    // in the sense that it's still imported but unused. Downgrading
    // it to a warning as a reminder to fix at some point
    console.warn(warning.message)
  else
    throw Error(warning.message)
}

export default [
  {
    external: Object.keys(globals),
    input,
    onwarn,
    output  : {
      file  : 'build/umd/krowdy-ui.development.js',
      format: 'umd',
      globals,
      name  : 'KrowdyUI'
    },
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
    ]
  },
  {
    external: Object.keys(globals),
    input,
    onwarn,
    output  : {
      file  : 'build/umd/krowdy-ui.production.min.js',
      format: 'umd',
      globals,
      name  : 'KrowdyUI'
    },
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot({ snapshotPath: 'size-snapshot.json' }),
      terser()
    ]
  }
]
