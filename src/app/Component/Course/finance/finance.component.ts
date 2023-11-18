import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from 'src/app/Services/course.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: any = MatPaginator; 
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'carnet_professor',
    'schedule',
   
    'room',
    'amount',
    'action',
  ]; 
  
  constructor(private service_course:CourseService,private router: Router) {
    let id = localStorage.getItem('idAccount');
    if(id==""){
      this.router.navigate(['/'])
    }
  }


  ngOnInit(): void {
    this.get();
  }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  get() {
   
     this.service_course.get().subscribe((data: any) => {
      data.forEach((element: any) => {
        element.amount = 25000;
      });
      
      this.dataSource.data = data;
    })
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



 