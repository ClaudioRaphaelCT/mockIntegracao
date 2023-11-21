/* eslint-disable prettier/prettier */
import { Controller, Headers, Post, Response} from '@nestjs/common';
import { BoletoService } from './boleto.service';
import { ApiTags } from '@nestjs/swagger';


@Controller('boleto')
export class BoletoController {
  constructor(private readonly boletoService: BoletoService) {}

@ApiTags('Boleto')
@Post()
getBoleto(@Response() res, @Headers() headers)
{
  return res.status(200).send(this.boletoService.obterBoleto(headers));
}
}