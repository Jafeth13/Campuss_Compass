import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData: any;

  constructor(private route: ActivatedRoute,private account:AuthService,
    private router: Router) {
      let id = localStorage.getItem('idAccount');
      if(id==""){
        this.router.navigate(['/'])
      }
   }

  ngOnInit(): void {
    let id = localStorage.getItem('idAccount');
    this.account.getAccount(id).subscribe((data: any) => {
      this.userData = data;
    })

  }
}
