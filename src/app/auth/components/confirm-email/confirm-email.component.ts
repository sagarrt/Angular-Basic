import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  emailConfirm : boolean = true;
  urlParam: any ={};

  constructor(private route:ActivatedRoute, private authservice:AuthService, 
    public progressBar: ProgressBarService, private alertService: AlertService) { }

  ngOnInit() {
      this.urlParam.token = this.route.snapshot.queryParamMap.get("token");
      this.urlParam.userid = this.route.snapshot.queryParamMap.get("userid");
      this.confirmEmail();
  }

  confirmEmail(){
    this.alertService.info('Confirm mail in Process');
    console.log(this.urlParam);
    this.progressBar.startLoading();
    this.authservice.confirmEmail(this.urlParam).subscribe(() => {
        console.log("success");
        this.emailConfirm = true;
        this.progressBar.setSuccess();
        this.alertService.success('Email Confirm Successfully');
        this.progressBar.completeLoading();
        
    },error =>{
        console.log(error);
        this.emailConfirm =false;
        this.progressBar.setError();
        this.alertService.danger('Email Confirm Error');
        this.progressBar.completeLoading();
    })
  }
}
