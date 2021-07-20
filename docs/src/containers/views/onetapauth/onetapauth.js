import React from 'react'
import { AuthContext } from '@krowdy-ui/auth'
import Test from './test'

export default function () {
  return (
    <AuthContext
      baseUrl='http://localhost:9876'
      clientId='candidate'
      clientSecret='nuevo'
      social={{
        facebook: {
          clientId: '910223665841563'
        },
        google: {
          clientId: '612106570053-ke4agjifh4j78e4od0i5l3duh85u6tl7.apps.googleusercontent.com'
        },
        linkedin: {
          clientId   : '7745ijxvz0u4gq',
          redirectUri: 'http://localhost:3000'
        },
        microsoft: {
          clientId   : '8a78aebe-f6c7-4371-9974-c72d6cd019bc',
          redirectUri: 'http://localhost:3000/views/onetapauth'
        }
      }}
      urlLogin='http://localhost:3000/views/onetapauth'>
      <Test />
    </AuthContext>
  )
}
