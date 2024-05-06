import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRespository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailExisteValidator implements ValidatorConstraintInterface {

    constructor(private readonly usuarioRepository: UsuarioRespository) { }

    async validate(email: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuarioEmailExiste = await this.usuarioRepository.existeEmail(email);
        return !usuarioEmailExiste
    }
}

export const EmailUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            name: "EmailUnico",
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailExisteValidator,
        })
    }
}