import {NgModule} from "@angular/core";
import {CounterComponent} from "./components/counter/counter.component";



//los componentes que declaramos estan visible en el scope del modulo
//si queremos exponer(utilizar) el componente al mundo externo debemos exportarlos
@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{}
