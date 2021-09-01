import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Professional from 'App/Models/Professional'

export default class CreateProfessionalSeeder extends BaseSeeder {
  public async run() {
    await Professional.createMany([
      {
        name: 'John',
        cpf: '1453.321.456-99',
        category_id: 1,
      },
      {
        name: 'Matheus',
        cpf: '1467.321.466-99',
        category_id: 1,
      },
      {
        name: 'Joshua',
        cpf: '2562.321.456-79',
        category_id: 2,
      },
    ])
  }
}
