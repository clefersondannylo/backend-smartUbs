import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professional from 'App/Models/Professional'
import User from 'App/Models/User'

export default class UserProfessionalsController {
  public async index({ params }: HttpContextContract) {
    const user = await User.query().where('id', params.id).preload('schedule')
    return user
  }

  public async store({ request, response, params, auth }: HttpContextContract) {
    try {
      const user = await auth.authenticate()
      const { professional, date } = request.only(['professional', 'date'])
      const findProfessional = await Professional.findBy('id', professional)
      if (findProfessional) {
        await user.related('schedule').attach({
          [professional]: {
            date,
          },
        })
        return response.status(204)
      } else {
        return response.status(400).json({ error: 'Professional not found' })
      }
    } catch (error) {
      response.status(400).json({ error: 'User not found' })
    }
  }
}
