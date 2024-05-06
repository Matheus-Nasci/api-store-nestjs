import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { EmailExisteValidator } from "./validacao/email-existe.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService, EmailExisteValidator]
})
export class UsuarioModule {}