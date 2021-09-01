import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Cleferson Dannylo',
        cpf: '123113154564',
        email: 'cleferson@gmail.com',
        password: 'secret',
        profile: 'Admin',
      },
      {
        name: 'Kâmylla Nascimento',
        cpf: '12311314587564',
        email: 'Kâmylla@gmail.com',
        password: 'secret',
        profile: 'User',
      },
      {
        name: 'José Maria',
        cpf: '454545454//754564',
        email: 'josegmail.com',
        password: 'secret',
        profile: 'Patient',
      },
    ])
  }
}
