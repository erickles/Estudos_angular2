import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,LoginScreenComponent ],
  bootstrap:    [ AppComponent,LoginScreenComponent ]
})
export class AppModule { }
