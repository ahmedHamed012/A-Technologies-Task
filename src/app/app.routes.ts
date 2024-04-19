import { Route } from '@angular/router';
import { HomeComponent } from './Core/Modules/home/home.component';

export const routes: Route[] = [
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
];
