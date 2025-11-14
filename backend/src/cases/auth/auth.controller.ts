import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { type AuthDTO } from './dtos/auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() credential: AuthDTO) {
    return this.authService.login(credential); 
  }
}