/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

Route.get('/', async () => {
  const user = new User()
  user.fill({
    username: 'Yann',
    email: 'yann@ourway.io',
    password: 'lorem',
  })
  await user.save()
  return { hello: 'world', user }
})

/**
 * Auth
 */
Route
    .group(() => {
        Route.post('/registrer', 'AuthController.registrer')
        Route.post('/login', 'AuthController.login')
        Route.get('/logout', 'AuthController.logout')
        
        Route.post('/recover-email-token', 'AuthController.recoverEmailToken')
        Route.get('/email-token/:token', 'AuthController.emailToken')
        
        Route.post('/recover-password', 'AuthController.recoverPassword')
        Route.get('/authentication-token/:token', 'AuthController.authenticationToken')
    })
    .prefix('/auth')