import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { InitialLoaderComponent } from '@/widgets/initial-loader';
import { ThemeService } from '@/shared/lib/providers';
import { UserStore, VocabularyStore } from '@/shared/lib/stores';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, MatSidenavModule, InitialLoaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'postcards';
    inited = false;

    themeService = inject(ThemeService);
    userStore = inject(UserStore);
    vocabularyStore = inject(VocabularyStore);
}
