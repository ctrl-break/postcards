import { Routes } from '@angular/router';
import { CardsComponent } from '@/pages/cards/cards.component';
import { CategoriesComponent } from '@/pages/categories/categories.component';
import { MainComponent } from '@/pages/main/main.component';
import { ProfileComponent } from '@/pages/profile/profile.component';
import { SigninComponent } from '@/pages/signin/signin.component';
import { WordsComponent } from '@/pages/words/words.component';
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
        path: 'cards',
        component: CardsComponent,
        canActivate: [userGuard],
    },
    {
        path: 'words/:id/list',
        pathMatch: 'full',
        component: WordsComponent,
        canActivate: [userGuard],
    },
    {
        path: 'words',
        component: CategoriesComponent,
        canActivate: [userGuard],
    },

    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [userGuard],
    },
    {
        path: 'signin',
        component: SigninComponent,
        canActivate: [signinGuard],
    },
];
