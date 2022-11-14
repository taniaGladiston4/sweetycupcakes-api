import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './register'
import './admin'
import './uploads'
import './user'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('cupcake/:id', 'Admin/ItemsController.show')
Route.get('comments', 'User/CreateCommentsController.show')