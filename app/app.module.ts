import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginScreenService } from './login-screen/login-screen.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,LoginScreenComponent ],
  providers:    [LoginScreenService],
  bootstrap:    [ AppComponent,LoginScreenComponent ]
  
})
export class AppModule { }
