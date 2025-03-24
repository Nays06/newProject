import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() {}

  registerUser(login: string, email: string, password: string){
    const allUser = JSON.parse(localStorage.getItem('allUsers') || '[]')
    allUser.push({login: login, email: email, password: password})
    localStorage.setItem('allUsers', JSON.stringify(allUser))
  }
}
