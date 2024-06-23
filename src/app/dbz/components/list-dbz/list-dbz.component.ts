import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character";
import {publish} from "rxjs";

@Component({
  selector: 'app-list-dbz',
  templateUrl: './list-dbz.component.html',
  styleUrl: './list-dbz.component.css'
})
export class ListDbzComponent {
  @Input()
  public characterList: Character[]=[
  {name:'nuevo', power:10000}
  ];
  @Output()
  public onDeleted: EventEmitter<string>= new EventEmitter<string>();



  emitDelete(id?:string):void{
    if(!id) return;
    this.onDeleted.emit(id);
  }
}
