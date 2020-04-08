import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authservice: AuthService, public progressBar: ProgressBarService, 
    private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
      this.alertService.info('Password Reset InProcess');
      this.progressBar.startLoading();
      const resetPasswordObserver = {
          next: x => {
            console.log("Reset Password");
            this.progressBar.setSuccess();
            this.progressBar.completeLoading();
          },
          error: err => {
            console.log(err);
            this.progressBar.setError();
            this.progressBar.completeLoading();
          }
      };
      this.authservice.resetPassword(f.value).subscribe(resetPasswordObserver); 
  }

}
