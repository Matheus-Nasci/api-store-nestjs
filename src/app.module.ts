import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioService } from './usuario/usuario.service';

@Module({
  imports: [UsuarioModule]
})
export class AppModule { }
