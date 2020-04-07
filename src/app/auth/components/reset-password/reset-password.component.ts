import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authservice: AuthService, public progressBar: ProgressBarService) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
      this.progressBar.startLoading();
      const resetPasswordObserver = {
          next: x => {
            console.log("Reset Password");
            this.progressBar.completeLoading();
            this.progressBar.setSuccess();
          },
          error: err => {
            console.log(err);
            this.progressBar.completeLoading();
            this.progressBar.setError();
          }
      };
      this.authservice.resetPassword(f.value).subscribe(resetPasswordObserver); 
  }

}
