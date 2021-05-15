// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index() {
    return [
      {
        name: 'Lucas',
        email: 'test@test.com',
        phone: '865468165',
        password: 'test',
      },
      {
        name: 'Jorge',
        email: 'test1@test.com',
        phone: '865468165',
        password: 'test21',
      },
    ]
  }
}
