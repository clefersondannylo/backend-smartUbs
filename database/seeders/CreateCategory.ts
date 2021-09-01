import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Category from 'App/Models/Category'

export default class CreateCategorySeeder extends BaseSeeder {
  public async run() {
    await Category.createMany([
      {
        name: 'Médico',
      },
      {
        name: 'Dentista',
      },
      {
        name: 'Psicólogo',
      },
      {
        name: 'Agente de Saúde',
      },
    ])
  }
}
