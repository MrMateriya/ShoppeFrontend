import { NextResponse } from 'next/server'
import {cookies} from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const refreshToken = cookies().get('refreshToken')
  const resetPasswordToken = cookies().get('resetPasswordToken')

  if (!resetPasswordToken && request.nextUrl.pathname.startsWith('/reset-password')) {
    console.log('resetPasswordToken has not found (middleware)')
    return NextResponse.redirect(new URL('/my-account', request.url))
  }
  if (!refreshToken && !request.nextUrl.pathname.startsWith('/reset-password'))
  {
    console.log('redirect')
    return NextResponse.redirect(new URL('/my-account', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/account/:sections*', '/reset-password'],
}