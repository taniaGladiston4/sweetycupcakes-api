import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateCommentValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    comment: schema.string({ trim: true })
  })
  public messages: CustomMessages = {}
}
