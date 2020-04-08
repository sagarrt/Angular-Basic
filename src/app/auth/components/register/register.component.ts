import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice:AuthService, public progressBar: ProgressBarService, 
    private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    this.alertService.info('New User Creation InProcess');
    this.progressBar .startLoading();
    const registerObserver = {
        next: x => {
          console.log("User Created.");
          this.progressBar.setSuccess();
          this.alertService.success('User Created Successfully');
          this.progressBar.completeLoading();
        },
        error: err => {
          console.log(err);
          this.progressBar.setError();
          this.alertService.danger('Error in User Creation');
          this.progressBar.completeLoading();
        }
    };
    this.authservice.register(f.value).subscribe(registerObserver); 
    console.log(f.value);
  }
}
