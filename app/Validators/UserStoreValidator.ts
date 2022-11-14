import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserStoreValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    email: schema.string({ trim: true}, [rules.email()]),
    name: schema.string({ trim: true }),
    surname: schema.string({ trim: true }),
    password: schema.string({ trim: true }),
    confirmPassword: schema.string({ trim: true })
  })
  public messages: CustomMessages = {}
}
