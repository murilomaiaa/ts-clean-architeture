export type HttpResponse<T = any> = {
  statusCode: number
  body: T
}

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error.message
})

export const ok = <T = any>(body: T): HttpResponse<T> => ({
  statusCode: 200,
  body
})