import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const jwt = request.cookies.get('reifferce.jwt')
  const isUserLogged = !!jwt?.value
  
  if ((request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register') && isUserLogged) {
    console.log('Middleware: redirecting user')
    return NextResponse.redirect(new URL('/home', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/register'],
}