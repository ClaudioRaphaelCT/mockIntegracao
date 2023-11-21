/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { msgOk } from '../token/responses/token.responses';
import { boletoNOK, boletoOK } from './responses/boleto.responses';

@Injectable()
export class BoletoService {
  obterBoleto(headers) {
    const auth = headers['authorization'];
    if(auth !== msgOk.token) {
      throw new HttpException(boletoNOK, HttpStatus.BAD_REQUEST);
    }
    return boletoOK;
  }
}
