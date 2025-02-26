import { NextResponse } from 'next/server'
import {cookies} from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const refreshToken = request.cookies.has('refreshToken')
  const resetPasswordToken = request.cookies.has('resetPasswordToken')

  console.log(refreshToken)
  console.log(resetPasswordToken)

  if (refreshToken && request.nextUrl.pathname.startsWith('/my-account')) {
    console.log('authed ' + refreshToken)
    return NextResponse.redirect(new URL('/account/dashboard', request.url))
  }
  if (!resetPasswordToken
      && request.nextUrl.pathname.startsWith('/reset-password')) {
    console.log('resetPasswordToken has not found (middleware)')
    return NextResponse.redirect(new URL('/my-account', request.url))
  }
  if (!refreshToken
      && !request.nextUrl.pathname.startsWith('/reset-password')
      && !request.nextUrl.pathname.startsWith('/my-account'))
  {
    console.log('redirect')
    return NextResponse.redirect(new URL('/my-account', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/account/:sections*', '/reset-password', '/contact-us', '/my-account'],
}