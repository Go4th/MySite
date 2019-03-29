import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatMenuModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { LightboxModule } from 'ngx-lightbox';

//Routing
import { AppRoutingModule } from './app-routing.module';

//COmponents
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PreviousWorkComponent } from './previous-work/previous-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

//Services
import { WorkHistoryService } from './Shared/work-history.service';

//Pipes
import { SortOrderPipe } from './Shared/Pipes/SortPipes';
import { ContactComponent } from './contact/contact.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PreviousWorkComponent,
    AboutMeComponent,
    SortOrderPipe,
    PortfolioComponent,
    ContactComponent,
    InspirationComponent,
    MyNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    LightboxModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [PreviousWorkComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
