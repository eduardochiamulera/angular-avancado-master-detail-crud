import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from "@angular/forms";

import { Entry } from "../shared/entry.model";
import { EntryService } from "../shared/entry.service";

import { Category } from "../../categories/shared/category.model";
import { CategoryService } from "../../categories/shared/category.service";
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent extends BaseResourceFormComponent<Entry> implements OnInit{

  categories : Array<Category>;

  imaskConfig = {
    mask: Number, //tipo da mascara
    scale: 2, //escala decimal ...,00
    thousandsSeparator: '', //separador de milhares - em branco
    padFractionalZeros: true, //adicionar zeros depois da virgula -> 2,2 = 2,20
    normalizeZeros: true, 
    radix: ',' //separador de decimais
  }
  
  ptBR = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  }

  ngOnInit(){
    this.loadCategories();
    super.ngOnInit(); //continuar a chamada da classe mãe
  }

  constructor(
    protected entryService: EntryService,
    protected categoryService : CategoryService,
    protected injector: Injector) { 
      super(injector, new Entry(), entryService, Entry.fromJson)
    }

  get typeOptions() : Array<any>{
    return Object.entries(Entry.types).map(
      ([value, text]) => {
        return {
          text : text,
          value : value
        }
      }
    )
  }

  protected buildResourceForm(){
    this.resourceForm = this.formBuilder.group({
      id:[null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null],
      type: ["expense", [Validators.required]],
      amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      paid: [null, [Validators.required]],
      categoryId: [null, [Validators.required]],
    });
  }
  
  private loadCategories(){
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories
    );
  }

  protected creationPageTitle(): string{
    return "Cadastro de Novo Lançamento";
  }

  protected editionPageTitle(): string{
    const resourceName = this.resource.name || "";
    return `Editando Lançamento: ${resourceName}`
  }
}
