import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '@/shared/api/auth.service';
import { UserStore, VocabularyStore } from '@/shared/lib/stores';
import { MatForms } from '@/shared/ui/mat-forms';

@Component({
    selector: 'app-profile-data',
    standalone: true,
    imports: [CommonModule, MatForms],
    templateUrl: './profile-data.component.html',
    styleUrl: './profile-data.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDataComponent {
    userStore = inject(UserStore);
    private authService = inject(AuthService);
    private router = inject(Router);
    private vocabularyStore = inject(VocabularyStore);
    private destroyRef = inject(DestroyRef);
    private cookieService = inject(CookieService);

    isRunningLogout = false;

    logout() {
        if (this.isRunningLogout) {
            return;
        }
        this.isRunningLogout = true;
        // BUG - failed with json parse error on subscribe in console
        this.authService.logout().subscribe();
        // this functions must run after subscribe
        this.cookieService.delete('accessToken');
        this.userStore.resetProfile();
        this.vocabularyStore.resetVocabulary();
        this.router.navigateByUrl('/signin');
    }
}
