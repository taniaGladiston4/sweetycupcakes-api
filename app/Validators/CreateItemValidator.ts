import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateItemValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string({ trim: true }),
    description: schema.string({ trim: true }),
    price: schema.number(),
    image: schema.file({
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    }),
  })
  public messages: CustomMessages = {}
}
