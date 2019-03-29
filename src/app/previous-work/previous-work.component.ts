import { Component, OnInit } from '@angular/core';

import { WorkHistoryService } from '../Shared/work-history.service';

@Component({
  selector: 'app-previous-work',
  templateUrl: './previous-work.component.html',
  styleUrls: ['./previous-work.component.css']
})
export class PreviousWorkComponent implements OnInit {
  workHistory: any = [];

  constructor(private workHistorySvc: WorkHistoryService) { }

  ngOnInit() {
    this.workHistorySvc.GetWorkHistory().subscribe(data => {
     
      this.workHistory = data;
      this.workHistory.forEach(item => {
        
        item.WorkItemTimeStart = new Date(item.WorkItemTimeStart);
        if(item.WorkItemTimeEnd == "01-01-2019"){
          item.WorkItemTimeEnd = new Date();
        } else {
          item.WorkItemTimeEnd = new Date(item.WorkItemTimeEnd);
        }
        
      });
      console.log(data);  
    });
    console.log(this.workHistory);
  }

}
