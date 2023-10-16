import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';

import { Subject, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})


export class SearchBoxComponent implements OnInit, OnDestroy{
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder:string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(500)
    ).subscribe(value=>{
        this.onDebounce.emit( value );
      })

  }

  ngOnDestroy(): void {
    console.log("Component destroyed")
  }
  emitValue( value:string ): void{
    this.onValue.emit(value)
  }

  onKeyPress( term:string ):void{
    this.debouncer.next(term)
  }
}
