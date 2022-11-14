import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>, allowedRole: string) {
    const user = await auth.authenticate()
    if(!allowedRole.includes(user.role)){
      return response.unauthorized({ error: { message: 'access denied'}})
    }
    await next()
  }
}
