import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { MainComponent } from '@/pages/main/main.component';
import { SigninComponent } from '@/pages/signin/signin.component';
import { AuthService } from '@/shared/api/auth.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
    },
    {
        path: 'main',
        component: MainComponent,
        canActivate: [() => inject(AuthService).isLoggedIn],
    },
    {
        path: 'signin',
        component: SigninComponent,
    },
];
