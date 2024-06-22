import {NgModule} from "@angular/core";
import {HeroComponent} from "./components/hero/hero.component";
import {HeroesListComponent} from "./components/heroes-list/heroes-list.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations:[
    HeroComponent,
    HeroesListComponent
  ],
  exports:[
    HeroComponent,
    HeroesListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{}
