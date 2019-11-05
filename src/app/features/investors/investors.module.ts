import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Router
import { InvestorsRoutes } from './investors.routes';

//Components
import { InvestorsComponent } from './components/investors/investors.component';

@NgModule({
  declarations: [InvestorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(InvestorsRoutes)
  ]
})
export class InvestorsModule { }
