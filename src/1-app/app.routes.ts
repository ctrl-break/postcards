import { Routes } from '@angular/router';
import { MainComponent } from '@/pages/main/main.component';
import { SigninComponent } from '@/pages/signin/signin.component';
import { signinGuard, userGuard } from '@/shared/lib/guards';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
    },
    {
        path: 'main',
        component: MainComponent,
        canActivate: [userGuard],
    },
    {
        path: 'signin',
        component: SigninComponent,
        canActivate: [signinGuard],
    },
];
