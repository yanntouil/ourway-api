import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegistrerValidator from 'App/Validators/User/RegistrerValidator'

export default class AuthController {
    /**
     * 
     */
    public async registrer({ request, response }: HttpContextContract) {
        // Test username exist
        // Test email exist
        const payload = await request.validate(RegistrerValidator)
        // Create user
        const user =  await User.create(payload)
        // Generate token
        // Save user
        // Send mail
        // Status 201
        return response.created([])
    }
    /**
     * 
     */
    public async login({ request }: HttpContextContract) {
        const { username, email, password } = request.body()
        console.log({ username, email, password })
        // Get user by username or email
        // Check validity
        // Check password
        // Create session
        // Create access token and refresh token
        // Status 200 with 2 tokens
        return []
    }
    /**
     * 
     */
    public async logout(ctx: HttpContextContract) {
        console.log(ctx)
        // Clear session
        // Status 200
        return []
    }
    /**
     * 
     */
    public async recoverEmailToken({ request }: HttpContextContract) {
        console.log(request.body())
        
        return []
    }
    /**
     * 
     */
    public async emailToken({ params }: HttpContextContract) {
        console.log(params.token)
        
        return []
    }
    /**
     * 
     */
     public async recoverPassword({ request }: HttpContextContract) {
        console.log(request.body())
        
        return []
    }
    /**
     * 
     */
    public async authenticationToken({ params }: HttpContextContract) {
        console.log(params.token)
        
        return []
    }

}
