import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { CriaUsuarioDto } from "./dto/criando-usuario.dto";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private UsuarioService: UsuarioService) { }
    @Post()
    async criarUsuario(@Body() novoUsuario: CriaUsuarioDto) {
        return { 'status': 'Criando um novo usuário' };
    }
}