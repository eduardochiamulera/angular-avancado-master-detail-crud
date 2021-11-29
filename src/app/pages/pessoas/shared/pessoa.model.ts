import { Guid } from "guid-typescript";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";
//import { BasePlatformModel } from "src/app/shared/models/base-platform.model";

export class Pessoa extends BaseResourceModel{
    constructor(
        public nome?: string,
        public description?: string,
        public tipoDocumento?: string,
        public cpfcnpj?: string,
        public endereco?: string,
        public numero?: string,
        public complemento?: string,
        public bairro?: string,
        public estadoId?: string,
        public Telefone?: string,
        public celular?: string,
        public contato?: string,
        public observacao?: string,
        public email?: string,
        public nomeComercial?: string,
        public cliente?: boolean,
        public fornecedor?: boolean,

    ) { super() }

    static fromJson(jsonData: any): Pessoa {
        debugger;
        console.log(jsonData)
        return Object.assign(new Pessoa(), jsonData);
    }
}