import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice:AuthService, public progressBar: ProgressBarService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    this.progressBar .startLoading();
    const registerObserver = {
        next: x => {
          console.log("User Created.");
          this.progressBar.completeLoading();
          this.progressBar.setSuccess();
        },
        error: err => {
          console.log(err);
          this.progressBar.completeLoading();
          this.progressBar.setError();
        }
    };
    this.authservice.register(f.value).subscribe(registerObserver); 
    console.log(f.value);
  }
}
