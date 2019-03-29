import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PreviousWorkComponent } from './previous-work/previous-work.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { InspirationComponent } from './inspiration/inspiration.component';

const routes: Routes = [
  {path: "", redirectTo: "about", pathMatch: "full"},
  {path: "landing", component:LandingPageComponent},
  {path: "work-history", component: PreviousWorkComponent},
  {path: "about", component: AboutMeComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "contact", component: ContactComponent},
  {path: "inspiration", component: InspirationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
