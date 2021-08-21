import { Component, OnInit, Input} from '@angular/core';

interface IBreadCrumbItem{
  text: string,
  link?: string
}

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  @Input() itens: Array<IBreadCrumbItem> = [];

  constructor() { }

  ngOnInit() {
  }

  isTheLastItem(item: IBreadCrumbItem): boolean{
    const index = this.itens.indexOf(item);

    return index + 1 == this.itens.length;
  }

}
