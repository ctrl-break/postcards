import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ApiService, WordDto } from '@/shared/api/generated';

@Component({
    selector: 'app-word-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './word-card.component.html',
    styleUrl: './word-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordCardComponent {
    apiService = inject(ApiService);
    route = inject(ActivatedRoute);

    word$: Observable<WordDto> = this.route.params.pipe(
        switchMap(({ id }) => {
            console.log(id);

            return this.apiService.wordControllerFindOne({ id });
        }),
    );
}
