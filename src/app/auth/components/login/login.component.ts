import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "src/app/shared/services/auth.service";
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,  public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit() {
  }
  
  onSubmit(f:NgForm){
    this.alertService.info('Checking User Info');
    this.progressBar.startLoading();
    const loginObserver = {
        next: x => {
          this.progressBar.setSuccess();
          console.log("User logged in");
          this.alertService.success('User logged in');
          this.progressBar.completeLoading();
          
        },
        error: err => {
          this.progressBar.setError();
          console.log(err);
          this.alertService.danger('Login Failed');
          this.progressBar.completeLoading();
          
        }
    };
    this.authservice.login(f.value).subscribe(loginObserver); 
    console.log(f.value);
  }
}
