import Route from '@ioc:Adonis/Core/Route'

Route.post('/admin', 'Auth/AuthController.store')
Route.group(() => {
    Route.delete('/logout', 'Auth/AuthController.destroy')
    Route.put('/createitem', 'Admin/ItemsController.store')
    Route.delete('/deleteitem/:id', 'Admin/ItemsController.destroy')
}).prefix('/admin').middleware('admin:admin')