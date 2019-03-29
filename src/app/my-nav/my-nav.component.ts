import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private _router: Router) {}

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit(){
    this._router.events.subscribe(() => {
      if (this.isHandset$) {
        this.sidenav.close();
      }
    });
  }
  



}
