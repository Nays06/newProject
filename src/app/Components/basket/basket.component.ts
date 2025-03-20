import { Component } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  private _productService: ProductsService;
  movies: any;

  constructor(productService: ProductsService){
    this._productService = productService
  }

  async ngOnInit() {
    this.movies = await this._productService.getFavoriteMovies();
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
