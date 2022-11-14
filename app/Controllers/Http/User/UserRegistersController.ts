import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserStoreValidator from 'App/Validators/UserStoreValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UserRegistersController {
  public async store({ request }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      const { email, password, name, surname } = await request.validate(UserStoreValidator)
      const user = new User()
      user.useTransaction(trx)
      user.email = email
      user.password = password
      user.name = name
      user.surname = surname
      await user.save()
    })
  }

  public async update({ }: HttpContextContract) { }
}
