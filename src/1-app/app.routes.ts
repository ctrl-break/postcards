import { Routes } from '@angular/router';
import { MainComponent } from '@/pages/main/main.component';
import { SigninComponent } from '@/pages/signin/signin.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
    },
    {
        path: 'main',
        component: MainComponent,
    },
    {
        path: 'signin',
        component: SigninComponent,
    },
];
