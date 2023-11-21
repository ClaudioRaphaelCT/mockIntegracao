/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { msgOk, msgNOK} from './responses/token.responses'; 
@Injectable()
export class TokenService {
  obterToken(user: string, password: number){
   if(user !== "DevTOP" || password !== 2023){
   throw new HttpException(msgNOK, HttpStatus.FORBIDDEN)
   }
   return msgOk
  }
}
