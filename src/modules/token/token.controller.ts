/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { TokenService } from './token.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Token')
@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post()
  obterToken(@Body() request: CreateTokenDto) {
    const {user, password} = request
    return this.tokenService.obterToken(user,password)
  }
}
