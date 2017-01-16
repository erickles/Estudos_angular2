import {Injectable} from '@angular/core';

// Estou usando aqui a injeção de dependencia. Esta classe serve como se fosse a camada Model do MVC
@Injectable()
export class LoginScreenService{

    getUser(){
        return '3076';
    }

}