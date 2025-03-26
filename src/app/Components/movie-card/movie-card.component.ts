import { Component, Input } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  private _productService: ProductsService;

  @Input() movie = {
    poster: '',
    name: '',
    id: '',
  };

  constructor(productService: ProductsService) {
    this._productService = productService;
  }

  addMovieFavorite(movie: any) {
    this._productService.addMovieToFavourite(movie);
  }

  isFavorite(movieId: any) {
    let favoriteMovies = JSON.parse(
      localStorage.getItem('favoriteMovies') || '[]'
    );
    if (
      !favoriteMovies.some((basketProduct: any) => basketProduct.id === movieId)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
