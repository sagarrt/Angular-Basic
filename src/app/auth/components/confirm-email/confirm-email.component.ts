import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  emailConfirm : boolean = true;
  urlParam: any ={};

  constructor(private route:ActivatedRoute, private authservice:AuthService) { }

  ngOnInit() {
      this.urlParam.token = this.route.snapshot.queryParamMap.get("token");
      this.urlParam.userid = this.route.snapshot.queryParamMap.get("userid");
      this.confirmEmail();
  }

  confirmEmail(){
    console.log(this.urlParam);
    this.authservice.confirmEmail(this.urlParam).subscribe(() => {
        console.log("success");
        this.emailConfirm = true;
    },error =>{
      console.log(error);
        this.emailConfirm =false;
    })
  }
}
