import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  model : any = {};
  constructor(private route:ActivatedRoute, private authservice:AuthService) { }

  ngOnInit() {
    this.model.token = this.route.snapshot.queryParamMap.get("token");
    this.model.userid = this.route.snapshot.queryParamMap.get("userid");

  }

  changePassword(){
    this.authservice.chagePassword(this.model).subscribe(() => {
        console.log("success");
    },error =>{
      console.log(error);
    })
  }
}
