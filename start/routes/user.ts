import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.put('/rate', 'User/CreateCommentsController.store')
}).middleware('auth')