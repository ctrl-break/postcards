import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from '@/shared/api/generated';

@Component({
    selector: 'app-words-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './words-list.component.html',
    styleUrl: './words-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsListComponent {
    apiService = inject(ApiService);
    route: ActivatedRoute = inject(ActivatedRoute);

    words$ = this.route.params.pipe(
        switchMap(({ id }) => {
            console.log(id);
            const params = {
                id,
                perPage: '100',
                page: '1',
            };
            return this.apiService.categoryControllerFindMany(params);
        }),
    );
}
