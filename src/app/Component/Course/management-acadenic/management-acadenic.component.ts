import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from 'src/app/Services/course.service';
import { NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-management-acadenic',
  templateUrl: './management-acadenic.component.html',
  styleUrls: ['./management-acadenic.component.scss']
})
export class ManagementAcadenicComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: any = MatPaginator; 
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'carnet_professor',
    'schedule',
    'room',
    'status'
    
  ]; 
  
  constructor(private service_course:CourseService ,private router: Router) {
   

    let id = localStorage.getItem('idAccount');
    if(id==""){ 
    
      this.router.navigate(['/']) 
     
    }else{

    }
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
     this.service_course.getCourseUses(name,lastname).subscribe((data: any) => {
     
      
      this.dataSource.data = data;
    })
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



 
