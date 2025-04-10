import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BasketComponent } from './Components/basket/basket.component';
import { SearchComponent } from './Components/search/search.component';
import { RegistartionComponent } from './Components/registartion/registartion.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'favorites',
        component: BasketComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'registartion',
        component: RegistartionComponent
    },
];
