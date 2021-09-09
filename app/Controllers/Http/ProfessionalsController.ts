import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import Professional from 'App/Models/Professional'

export default class ProfessionalsController {
  public async index({ params, response }: HttpContextContract) {
    try {
      const category = await Category.findBy('id', params.category_id)
      const professionals = await category?.load('professionals')
      return Object.assign(category, professionals)
    } catch (error) {
      return response.status(400).json({ error: 'Professional not Found' })
    }
  }

  public async store({ request, params }: HttpContextContract) {
    const data = request.only(['name', 'cpf'])
    const category = await Category.findBy('id', params.category_id)
    const professional = await category?.related('professionals').create(data)
    return professional
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const professional = await Professional.findByOrFail('id', params.id)
      return professional
    } catch (error) {
      return response.status(400).json({ error: 'Professional not found' })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const data = request.only(['name', 'cpf'])
      const professional = await Professional.findByOrFail('id', params.id)
      await professional.merge(data).save()
      return professional
    } catch (error) {
      return response.status(400).json({ error: 'Professional not found' })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const professional = await Professional.findByOrFail('id', params.id)
      await professional.delete()
    } catch (error) {
      response.status(400).json({ error: 'Professional not found' })
    }
  }
}
