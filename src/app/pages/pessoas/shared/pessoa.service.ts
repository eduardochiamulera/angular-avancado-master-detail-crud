import { Injectable, Injector } from "@angular/core";
import { BaseResourceService } from "src/app/shared/services/base-resource.service";
import { Pessoa } from "./pessoa.model";

@Injectable({
  providedIn: "root",
})
export class PessoaService extends BaseResourceService<Pessoa> {
  
  constructor(protected injector: Injector) {
    super("/pessoa", injector, Pessoa.fromJson);
  }
}