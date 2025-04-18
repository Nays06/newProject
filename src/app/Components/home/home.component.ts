import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [MovieCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private _productService: ProductsService;
  movies = signal<any>([])
  movieObject: any = {
    name: "",
    poster: "",
  }

  http = inject(HttpClient)

  constructor(productService: ProductsService){
    this._productService = productService

    this.movies.set(productService.movies)
  }

  async ngOnInit() {
  this.movies.set(await this._productService.getMovies())
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

  addMovie(){
    this.http.post("https://67c966760acf98d0708a1df9.mockapi.io/cars/cartoons", this.movieObject).subscribe((res: any) => {
      if(res.id){
        alert("Фильм добавлен")
        this.movies.update(movies => [...movies, this.movieObject])
      } else {
        alert("Произошла ошибка, попробуйте позже")
      }
    })
  }
}
