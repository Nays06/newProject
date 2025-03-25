import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() {}

  registerUser(login: String, email: String, password: String){
    const allUser = JSON.parse(localStorage.getItem('allUsers') || '[]')
    allUser.push({login: login, email: email, password: password})
    localStorage.setItem('allUsers', JSON.stringify(allUser))
    alert(allUser)
  }

  loginUser(login: String, password: String){
    const allUser = JSON.parse(localStorage.getItem('allUsers') || '[]')
  }
}