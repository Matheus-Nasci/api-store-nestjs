import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CriaUsuarioDto {
    @IsNotEmpty({ message: "O nome não pode ser vázio" })
    nome: string;
    @IsEmail(undefined, { message: "E-mail informado é inválido" })
    email: string;
    @MinLength(8, { message: "Senha precisa conter no minímo 8 caracteres " })
    senha: string;
}