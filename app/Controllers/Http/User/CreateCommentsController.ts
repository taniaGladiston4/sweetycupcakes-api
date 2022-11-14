import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import CreateCommentValidator from 'App/Validators/CreateCommentValidator'

export default class CreateCommentsController {
  public async store({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const { comment } = await request.validate(CreateCommentValidator)
    const c = new Comment()
    c.comment = comment
    c.user_id = user.id
    await c.save()
  }

  public async show({}: HttpContextContract) {
    const comments = await Comment.query().preload('user')
    return comments
  }
}
