import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
   name:string='Tony';
   age:number =1;

// get son propiedades en forma de metodos
   get capitalizedName():string{
     return this.name.toUpperCase();
   }
getHeroDescription():string{
     return `${this.name} - ${this.age}`;
}
changeHero(): void{
     this.name = 'Spiderman'
}
changeAge():void{
     this.age = 25;
}
resetForm():void{
     this.name='Tony';
     this.age=1;
}

}
