import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  model : any = {};
  constructor(private route:ActivatedRoute, private authservice:AuthService, 
    public progressBar: ProgressBarService, private alertService: AlertService) { }

  ngOnInit() {
    this.model.token = this.route.snapshot.queryParamMap.get("token");
    this.model.userid = this.route.snapshot.queryParamMap.get("userid");

  }

  changePassword(){
    this.alertService.info('Password Chanage in Process');
    this.progressBar.startLoading();
    this.authservice.chagePassword(this.model).subscribe(() => {
        console.log("success");
        this.progressBar.setSuccess();
        this.alertService.success('Password Changes Successfully');
        this.progressBar.completeLoading();
    },error =>{
        console.log(error);
        this.progressBar.setError();
        this.alertService.success('Password Change Failed');
        this.progressBar.completeLoading();
    })
  }
}
