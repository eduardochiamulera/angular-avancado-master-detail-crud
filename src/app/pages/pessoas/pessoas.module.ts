import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoaListComponent } from "./pessoa-list/pessoa-list.component";

@NgModule({
  declarations: [PessoaListComponent],
  imports: [
    SharedModule,
    PessoasRoutingModule,
  ]
})
export class PessoasModule { }
