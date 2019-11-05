//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//Routes
import { AppRouts } from './app-routing.module';

//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(AppRouts)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
