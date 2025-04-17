import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  http = inject(HttpClient)

  constructor() {}

  registerUser(name: String, login: String, age: Number, email: String, password: String){
    // const allUsers = JSON.parse(localStorage.getItem('allUsers') || '[]');

    // const loginExists = allUsers.some((user: any) => user.login === login);
    // const emailExists = allUsers.some((user: any) => user.email === email);

    // if (loginExists) {
    //     alert("Логин уже занят");
    //     return;
    // }

    // if (emailExists) {
    //     alert("Почта уже знята");
    //     return;
    // }

    // allUsers.push({name, username: login, age, email, password});
    // localStorage.setItem('allUsers', JSON.stringify(allUsers));

      let user = {
        name,
        username: login,
        age,
        email,
        password
      }
  
      this.http.post('http://localhost:5000/auth/registration', user).subscribe({
        next: (res: any) => {
          console.log(res);
          
        },
        error: (err) => {
          console.error('HTTP errorrrrrrrrrrrrrr:', err.error.message || err.error.errors);
        },
        complete: () => {
          console.log(123);
        }
      });
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