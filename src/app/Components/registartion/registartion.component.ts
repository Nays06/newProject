import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../Services/account.service';

@Component({
  selector: 'app-registartion',
  imports: [FormsModule],
  templateUrl: './registartion.component.html',
  styleUrl: './registartion.component.css'
})
export class RegistartionComponent {
  private _accountService: AccountService;
  login: String = ''
  email: String = ''
  password: String = ''
  logLogin: String = ''
  logPassword: String = ''

  constructor(accountService: AccountService){
      this._accountService = accountService
    }

    register(){
      this._accountService.registerUser(this.login, this.email, this.password)
    }

    logIn(){
      this._accountService.loginUser(this.logLogin, this.logPassword)
    }

  
}
