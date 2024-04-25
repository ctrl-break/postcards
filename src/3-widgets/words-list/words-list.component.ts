import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, delay, map, of, scan, switchMap, tap } from 'rxjs';
import { WordsListItemComponent } from '@/entities/words-list-item';
import { ApiService } from '@/shared/api/generated';
import { INFINITE_SCROLL_PAGE_SIZE } from '@/shared/lib';
import { InfiniteScrollDirective } from '@/shared/ui/infinitive-scroll';

@Component({
    selector: 'app-words-list',
    standalone: true,
    imports: [CommonModule, WordsListItemComponent, InfiniteScrollDirective, MatProgressBarModule],
    templateUrl: './words-list.component.html',
    styleUrl: './words-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsListComponent {
    apiService = inject(ApiService);
    route: ActivatedRoute = inject(ActivatedRoute);

    currentPage$ = new BehaviorSubject(1);
    words$ = combineLatest([this.route.params, this.currentPage$]).pipe(
        switchMap(([params, pageNumber]) => {
            this.categoryId = params['id'];
            return this.getPage(pageNumber);
        }),
        scan((acc, current) => [...acc, ...current]),
    );

    categoryId: string | undefined;
    lastPage = 1;
    loading = false;

    getPage(pageNumber: number) {
        if (this.loading || !this.categoryId) {
            return of([]);
        }
        this.loading = true;
        const params = {
            id: this.categoryId.toString(),
            perPage: INFINITE_SCROLL_PAGE_SIZE.toString(),
            page: pageNumber.toString(),
        };
        return this.apiService.categoryControllerFindWordsByCategory(params).pipe(
            delay(300),
            tap(({ meta }) => {
                this.loading = false;
                this.lastPage = meta?.lastPage ?? 1;
            }),
            map(({ data }) => (data?.length ? data : [])),
        );
    }

    getNextPage() {
        this.currentPage$.next(this.currentPage$.value + 1);
    }
}
