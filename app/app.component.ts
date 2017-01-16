import { Component } from '@angular/core';

import { LoginScreenComponent } from './login-screen/login-screen.component';

@Component({
  selector: 'my-app',
  template: `
            <login-screen></login-screen>
  `,
  entryComponents: [LoginScreenComponent]
})
export class AppComponent  { name = 'Angular'; }
