import { useRouter } from 'next/router.js'
import React from 'react'

function Login() {
  const router = useRouter();

  return (
    <div>Login { router.asPath }</div>
  )
}

export default Login