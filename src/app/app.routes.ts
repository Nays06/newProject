import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BasketComponent } from './Components/basket/basket.component';
import { SearchComponent } from './Components/search/search.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'basket',
        component: BasketComponent
    },
    {
        path: 'search',
        component: SearchComponent
    }
];
