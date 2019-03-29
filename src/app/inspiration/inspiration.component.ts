import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

import { WorkHistoryService } from '../Shared/work-history.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {

  inspirationInfo: any;
  photoGallery: any = [];

  constructor(private workHistorySvc: WorkHistoryService, private _lightbox: Lightbox) { 

  }

  open(index: number){
    index = index - 1;
    this._lightbox.open(this.photoGallery, index);
  }

  ngOnInit() {
    this.workHistorySvc.GetInspirationInfo().subscribe(data => {
      this.inspirationInfo = data;
      this.inspirationInfo.forEach(photo => {
        const src = photo.Img;
        const caption = photo.Title;
        const thumb = photo.Img;
        const album = {
          src: src,
          caption: caption,
          thumb: thumb
       };
        this.photoGallery.push(album);
      });
      console.log(data);  
    });
  }

}
