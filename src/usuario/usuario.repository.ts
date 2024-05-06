import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRespository {
    private usuarios = [];

    async salvar(usuario) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }

    async existeEmail(email: string) {
        return false;
    }
}