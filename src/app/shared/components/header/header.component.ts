import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../../services/progress-bar.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private progress: NgProgress, public progressBar: ProgressBarService) { }

  ngOnInit() {
    this.progressBar.progressRef = this.progress.ref('progressBar');
  }

}
