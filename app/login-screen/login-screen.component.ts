import { Component } from '@angular/core';

import { LoginScreenService } from './login-screen.service';

@Component({
    moduleId: module.id,
    selector: 'login-screen',
    templateUrl: 'login-screen.component.html',
    providers: [LoginScreenService]

})
export class LoginScreenComponent {    
   
    userCode: string;
    // Como a classe LoginScreenService é um injectable, eu já coloco uma variavel
    // com o tipo dela no constructor da classe, e essa variavel já será instanciada
    // automaticamente
    constructor(loginScreenService: LoginScreenService) {        
       this.userCode = loginScreenService.getUser();
    }
    
    urlImg = 'images/logodsm.jpg';        
}