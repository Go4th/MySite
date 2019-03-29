import { Component, OnInit } from '@angular/core';

import { WorkHistoryService } from '../Shared/work-history.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutInfo: any;

  constructor(private workHistorySvc: WorkHistoryService) { }

  ngOnInit() {
    this.workHistorySvc.GetAboutInfo().subscribe(data => {
      this.aboutInfo = data;
      console.log(data);  
    });
  }

}
