import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({}: HttpContextContract) {
    const categories = await Category.query().preload('professionals')
    return categories
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const name = request.input('name')
      const category = await Category.create({ name })
      return category
    } catch (error) {
      return response.status(400).json({ error: 'Category already exists' })
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const category = await Category.findByOrFail('id', params.id)
      return category
    } catch (error) {
      return response.status(400).json({ error: 'Category not found' })
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const name = request.input('name')
      const category = await Category.findByOrFail('id', params.id)
      await category.merge({ name }).save()
      return category
    } catch (error) {
      response.status(400).json({ error: 'Category not found' })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const category = await Category.findByOrFail('id', params.id)
      await category.delete()
      return response.status(204)
    } catch (error) {
      return response.status(400).json({ error: 'Category not found' })
    }
  }
}
