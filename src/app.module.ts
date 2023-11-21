import { Module } from '@nestjs/common';
import { TokenModule } from './modules/token/token.module';
import { BoletoModule } from './modules/boleto/boleto.module';

@Module({
  imports: [TokenModule, BoletoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
