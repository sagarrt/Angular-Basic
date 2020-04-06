import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "src/app/shared/services/auth.service";
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,  public progressBar: ProgressBarService) { }

  ngOnInit() {
  }
  onSubmit(f:NgForm){
    this.progressBar.startLoading();
    const loginObserver = {
        next: x => {
          console.log("User logged in");
          this.progressBar.completeLoading();
          this.progressBar.setSuccess();
        },
        error: err => {
          console.log(err);
          this.progressBar.completeLoading();
          this.progressBar.setError();
        }
    };
    this.authservice.login(f.value).subscribe(loginObserver); 
    console.log(f.value);
  }
}
