import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: any = MatPaginator; 
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'carnet_professor',
    'schedule',
    'size',
    'room',
  ]; 
  
  constructor(private service_course:CourseService) {

  }


  ngOnInit(): void {
    this.get();
  }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  get() {
   
     this.service_course.get().subscribe((data: any) => {
      this.dataSource.data = data;
    })
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



 