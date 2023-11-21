import { ApiProperty } from '@nestjs/swagger';
export class CreateBoletoDto {
  @ApiProperty({
    description: 'Token obtido em /token',
    example: 'TextoBase64',
  })
  token: string;
}
