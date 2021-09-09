import Route from '@ioc:Adonis/Core/Route'

Route.resource('user', 'UsersController').apiOnly()
Route.resource('category', 'CategoriesController').apiOnly()
Route.resource('category.professional', 'ProfessionalsController').apiOnly()
