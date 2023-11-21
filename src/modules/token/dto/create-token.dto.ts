import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenDto {
  @ApiProperty({
    description: 'Nome de usuario',
    example: 'DEV',
  })
  user: string;

  @ApiProperty({
    description: 'Senha com apenas numeros',
    example: 123456,
  })
  password: number;
}
