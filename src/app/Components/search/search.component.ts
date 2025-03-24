import { Component } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private _productService: ProductsService;
  searchOutput: any;
  movieTitle: String = '';

  constructor(productService: ProductsService){
    this._productService = productService
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

  async search(){
    this.searchOutput = await this._productService.searchMovieByName(this.movieTitle)
    console.log(this.searchOutput);
  }
}
