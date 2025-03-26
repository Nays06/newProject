import { Component } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  imports: [MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private _productService: ProductsService;
  movies: any;

  constructor(productService: ProductsService){
    this._productService = productService

    this.movies = productService.getMovies()
  }

  async ngOnInit() {
    this.movies = await this._productService.getMovies();
    console.log(this.movies);
  }

  addMovieFavorite(movie: any){
    this._productService.addMovieToFavourite(movie)
  }

  isFavorite(movieId: any){
    let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies") || '[]')
    if (!favoriteMovies.some((basketProduct: any) => basketProduct.id === movieId)) {
      return true
    } else{
      return false
    }
  }
}
