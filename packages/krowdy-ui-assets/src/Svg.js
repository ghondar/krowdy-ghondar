import React from 'react'

export const WIDTH = 406
export const HEIGHT = 305
export const aspect = WIDTH / HEIGHT

const Svg = ({ children, width, height }) => (
  <svg
    fill='none'
    height={width ? width * 1 / aspect : height ?? HEIGHT}
    viewBox='0 0 406 305'
    width={height ? height * aspect : width ?? WIDTH}>
    {children}
  </svg>
)

export default Svg
