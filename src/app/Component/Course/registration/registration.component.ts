import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from 'src/app/Services/course.service';
import Swal from 'sweetalert2';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements AfterViewInit {
 // @ViewChild('stepper')  stepper!: MatStepper; // Referencia al stepper

  @ViewChild(MatPaginator) paginator: any = MatPaginator; 
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'carnet_professor',
    'schedule',
    'size',
    'room',
    'action',
  ]; 
  
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
  constructor(private service_course:CourseService, private router: Router) {
    let id = localStorage.getItem('idAccount');
    if(id==""){
      this.router.navigate(['/'])
    }else{
this.rut();
    }
  
 
   
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
  selectCourse(id:any){
    this.formData.id_course = id 
   /// this.stepper.next(); // Avanzar al siguiente paso

  }

  ngOnInit(): void {
    this.get();
  }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  get() {
    let name = localStorage.getItem('name');
    let lastname = localStorage.getItem('lastname');

     this.service_course.getCourseDisabled(name,lastname).subscribe((data: any) => {
      this.dataSource.data = data;
    })
  }

  submitForm() {
    this.service_course.registration(this.formData).subscribe(
      result => {
        console.log('La solicitud se completó con éxito:', result);
        Swal.fire('Buen trabajo!', 'La matrícula fue exitosa!', 'success');
        this.router.navigate(['/home']) 
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        // Puedes manejar el error aquí
      }
    );
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}



 