import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  public deletedHero?:string;
  public heroes: string[]=[
    'Hulk','Ironman','Thor','Gatubela'
  ]

  removeLastHero():void{
    this.deletedHero = this.heroes.pop();
  }
}
