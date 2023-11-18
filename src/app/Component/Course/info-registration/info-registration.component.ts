import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-info-registration',
  templateUrl: './info-registration.component.html',
  styleUrls: ['./info-registration.component.scss']
})
export class InfoRegistrationComponent implements OnInit {
  id_course: number=0;

  formData: any = {
    id_matricula: 0,
    id_course: 0,
    name_s: '',
    lastname_s: '',
    cost: 20000,
    datetime: '',
    status: 'string',
    nota: 100
  };

  constructor(private route: ActivatedRoute, private service_course:CourseService) {}

  ngOnInit() {
    this.rut();
    this.route.params.subscribe(params => {

      this.formData.id_course = +params['id_course']; 
    });
    console.log(this.formData)
    
  }

  rut(){
    let name = localStorage.getItem('name');
  let lastname = localStorage.getItem('lastname');
this.formData.name_s=name;
this.formData.lastname_s=lastname;

const fechaActual = new Date();

// Obtenemos el año, mes y día
const year = fechaActual.getUTCFullYear();
const month = String(fechaActual.getUTCMonth() + 1).padStart(2, '0'); // Sumamos 1 al mes, ya que los meses se cuentan desde 0 (enero)
const day = String(fechaActual.getUTCDate()).padStart(2, '0');

// Obtenemos la hora, minutos y segundos
const hours = String(fechaActual.getUTCHours()).padStart(2, '0');
const minutes = String(fechaActual.getUTCMinutes()).padStart(2, '0');
const seconds = String(fechaActual.getUTCSeconds()).padStart(2, '0');

// Formateamos la fecha y hora en una cadena en formato datetime con 'Z'
const datetimeString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
this.formData.datetime=datetimeString;

  }

  submitForm() {
    this.service_course.registration(this.formData).subscribe(
      result => {
        console.log('La solicitud se completó con éxito:', result);
        // Puedes manejar el resultado aquí
      },
      error => {
        console.error('Error al realizar la solicitud:', error);
        // Puedes manejar el error aquí
      }
    );
  }


}