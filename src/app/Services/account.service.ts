import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() {}

  registerUser(login: String, email: String, password: String){
    const allUsers = JSON.parse(localStorage.getItem('allUsers') || '[]');

    const loginExists = allUsers.some((user: any) => user.login === login);
    const emailExists = allUsers.some((user: any) => user.email === email);

    if (loginExists) {
        alert("Логин уже занят");
        return;
    }

    if (emailExists) {
        alert("Почта уже знята");
        return;
    }

    allUsers.push({login: login, email: email, password: password});
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
    alert("Регистрация прошла успешно!");
  }

  loginUser(login: String, password: String){
    const allUser = JSON.parse(localStorage.getItem('allUsers') || '[]')
    const user = allUser.find((user: any) => user.login.toLowerCase() === login.toLowerCase() && user.password === password)

    if (user) {
      alert("Вход прошел успешно")
    } else {
      alert("Логин или пароль введены неверно")
    }
    
  }
}