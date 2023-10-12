import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input()
  public placeholder:string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue( value:string ): void{
    console.log(value)
  }
}
