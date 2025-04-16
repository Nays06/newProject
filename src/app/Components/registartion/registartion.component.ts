import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../Services/account.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-registartion',
  imports: [FormsModule, NgIf],
  templateUrl: './registartion.component.html',
  styleUrl: './registartion.component.css'
})
export class RegistartionComponent {
  private _accountService: AccountService;
  authorazationMode: String = 'registration'
  name: String = ''
  login: String = ''
  age: Number = 0
  email: String = ''
  password: String = ''
  logLogin: String = ''
  logPassword: String = ''

  constructor(accountService: AccountService){
      this._accountService = accountService
    }

    register(){
      this._accountService.registerUser(this.name, this.login, this.age, this.email, this.password )
    }

    logIn(){
      this._accountService.loginUser(this.logLogin, this.logPassword)
    }  
}
