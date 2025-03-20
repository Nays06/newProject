import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BasketComponent } from './Components/basket/basket.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'basket',
        component: BasketComponent
    }
];
