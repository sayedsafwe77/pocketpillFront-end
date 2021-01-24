import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo: any=[];

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.authService.authUser();
    this.authService.getUser().subscribe((data) => {
      // console.log(data);
      this.userInfo = data;
    });
  }

}
