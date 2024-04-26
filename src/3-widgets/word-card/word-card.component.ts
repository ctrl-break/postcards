import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { PostcardComponent } from '@/features/postcard';
import { ApiService, WordDto } from '@/shared/api/generated';

@Component({
    selector: 'app-word-card',
    standalone: true,
    imports: [CommonModule, PostcardComponent],
    templateUrl: './word-card.component.html',
    styleUrl: './word-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordCardComponent {
    apiService = inject(ApiService);
    route = inject(ActivatedRoute);

    wordId$ = this.route.params.pipe(map(({ id }) => id));
    word$: Observable<WordDto> = this.wordId$.pipe(switchMap((id) => this.apiService.wordControllerFindOne({ id })));
    wordImage$ = this.wordId$.pipe(switchMap((id) => this.apiService.wordControllerFindOneAndUpdateImage({ id })));
}
