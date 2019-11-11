//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


//Routes
import { AppRouts } from './app-routing.module';

//Components
import { AppComponent } from './app.component';

//Services
import { AuthService } from './services/auth.service';
import { FinsmartService } from './services/finsmart.service';
import { ClientService } from './services/client.service';

//Security
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, RouterModule.forRoot(AppRouts)],
  exports: [],
  providers: [AuthService, FinsmartService, ClientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
