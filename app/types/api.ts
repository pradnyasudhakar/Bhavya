// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// User Types
export interface CreateUserDto {
  email: string
  name?: string
  password: string
}

export interface UpdateUserDto {
  email?: string
  name?: string
  password?: string
}

// Post Types
export interface CreatePostDto {
  title: string
  content?: string
  published?: boolean
  authorId: number
}

export interface UpdatePostDto {
  title?: string
  content?: string
  published?: boolean
}