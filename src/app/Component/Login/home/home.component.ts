import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mensajeBienvenida: string = "¡Bienvenido a CampusCompass! Explora nuestras sedes:";

}
