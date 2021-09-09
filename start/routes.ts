import Route from '@ioc:Adonis/Core/Route'

Route.post('session', 'SessionsController.store')

Route.group(() => {
  Route.resource('user', 'UsersController').apiOnly()
  Route.resource('category', 'CategoriesController').apiOnly()
  Route.resource('category.professional', 'ProfessionalsController').apiOnly()
  Route.post('schedule/:id', 'UserProfessionalsController.store')
  Route.get('schedule/:id', 'UserProfessionalsController.index')
  Route.delete('session', 'SessionsController.destroy')
}).middleware('auth')
