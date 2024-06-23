import {Injectable} from "@angular/core";
import {Character} from "../interfaces/character";
import {v4 as uuid} from 'uuid';
@Injectable({
  providedIn:'root'
})
export class DbzService{
  public characters: Character[]=[
    {id:uuid(), name :'Krillin', power:1000},
    {id:uuid(),name:'Goku',power:10}
  ];
  constructor() {
  }

  addCharacter(character:Character):void{
    const newCharacter: Character={
      id:uuid(),...character //spread command, tomar un objeto y esparcirlo (clonarlo)
    }
    this.characters.push(newCharacter);
  }
  deleteCharacterById(id:string):void{
    this.characters =  this.characters.filter(character=>character.id!==id);
    // this.characters.splice(index,1);//remueve o reemplaza
  }
}
