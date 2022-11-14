import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import File from 'App/Models/File'
import Item from 'App/Models/Item'
import { FileCategory } from 'App/utils'
import CreateItemValidator from 'App/Validators/CreateItemValidator'
import Drive from '@ioc:Adonis/Core/Drive'

export default class CreateItemsController {
  public async store({ request }: HttpContextContract) {
    const { name, description, price, image } = await request.validate(CreateItemValidator)
    const item = new Item()
    item.name = name
    item.description = description
    item.price = price
    const file = new File()
    file.ownerId = item.id
    const savePayLoad = { fileCategory: 'product' as FileCategory, fileName: `${new Date().getTime()}.${image.extname}` }
    const photo = await item.related('image').create(savePayLoad)
    await image.moveToDisk('', { name: photo.fileName })
    await item.save()
  }
  public async show({ params }: HttpContextContract) {
    console.log(params.id)
    const item = await Item.query().where('id', params.id).preload('image')
    return item
  }

  public async update({}: HttpContextContract) {}

  public async destroy({ params }: HttpContextContract) {
    const item = await Item.findOrFail(params.id)
    const photo = await File.findOrFail(params.id)
    await Drive.delete(photo.fileName)
    await item.delete()
  }
}
