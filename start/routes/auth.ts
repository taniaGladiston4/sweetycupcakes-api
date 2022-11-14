import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/', 'Auth/AuthController.store')
    Route.delete('/', 'Auth/AuthController.destroy').middleware('auth')
}).prefix('/auth')