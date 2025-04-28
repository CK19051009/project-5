// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Danh sách các route cần bảo vệ
const protectedRoutes = ['/wishlist',"/logout"]
// Danh sách các route auth (login, register)
const pubRoutes = ['/login', '/register']

export function middleware(request: NextRequest) {
  // 1. Lấy token từ cookie
  const token = request.cookies.get('authToken')?.value
  // console.log("middelware ", token)
  // 2. Lấy pathname hiện tại
  const currentPath = request.nextUrl.pathname
  // 3. Kiểm tra route được bảo vệ
  if (protectedRoutes.some(route => currentPath.startsWith(route))) {
    if (!token) {
      // Nếu không có token, redirect đến trang login
      const loginUrl = new URL('/login', request.url)
      // Lưu URL hiện tại để redirect lại sau khi login
      loginUrl.searchParams.set('from', currentPath)
      return NextResponse.redirect(loginUrl)
    }
  }

  // 4. Kiểm tra auth routes
  if (pubRoutes.includes(currentPath)) {
    if (token) {
      // Nếu đã login thì redirect về trang chủ
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // 5. Cho phép tiếp tục với các route khác
  return NextResponse.next()
}

// Cấu hình matcher để middleware chỉ chạy trên các route cụ thể
export const config = {
    matcher: [[...protectedRoutes], [...pubRoutes]],
}