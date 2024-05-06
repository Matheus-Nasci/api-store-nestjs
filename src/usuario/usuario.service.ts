import { Injectable } from "@nestjs/common";
import { UsuarioRespository } from "./usuario.repository";
import { IUsuarioRepository } from "./usuario.interface";

@Injectable()
export class UsuarioService implements IUsuarioRepository{
    
    // constructor( private readonly UsuarioRepositoryService: UsuarioRespository) {}

    salvar(usuario: any) {
        throw new Error("Method not implemented.");
    }
    listar() {
        throw new Error("Method not implemented.");
    }
}