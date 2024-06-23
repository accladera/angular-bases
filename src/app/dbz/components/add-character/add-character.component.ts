import {Component, EventEmitter, Output, output} from '@angular/core';
import {Character} from "../../interfaces/character";

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Output()
  public  onNewCharacter:EventEmitter<Character> = new EventEmitter<Character>();
  public character: Character={
    name:'abc',
    power:100
  }
  emitCharacter(){
    //debugger;
    if(this.character.name.length===0)return;
    this.onNewCharacter.emit({...this.character});
    // {...this.character} nuevo objeto
    this.character= {name:'', power:0};
  }
}
