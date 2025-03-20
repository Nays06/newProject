import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  movies: any = []
  favoriteMovies: any = []

  constructor() { }

  async getMovies(){
    let url = "https://api.bhcesh.me/list?token=eedefb541aeba871dcfc756e6b31c02e&sort=-views&limit=20&type=cartoon"

    await fetch(url).then(data => data.json()).then(data => this.movies = data)
    return this.movies
  }

  async getFavoriteMovies(){
    this.favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies") || '[]')
    return this.favoriteMovies
  }

  addMovieToFavourite(movie: any){
    let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies") || '[]')
    if (!favoriteMovies.some((basketProduct: any) => basketProduct.id === movie.id)) {
      const favoriteMovies: any =  JSON.parse(localStorage.getItem("favoriteMovies") || '[]')
      favoriteMovies.push(movie)
      localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies))
    } else {
      let favoriteMovies: any =  JSON.parse(localStorage.getItem("favoriteMovies") || '[]')
      favoriteMovies = favoriteMovies.filter((favoriteMovie: any) => favoriteMovie.id !== movie.id)
      localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies))
    }
  }
}
