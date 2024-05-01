import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { PostcardComponent } from '@/features/postcard';
import { ApiService, ImageDto, WordDto } from '@/shared/api/generated';
import { VocabularyStore } from '@/shared/lib/stores';

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
    vocabularyStore = inject(VocabularyStore);

    isVocabulary: boolean = false;

    wordId$ = this.route.data.pipe(
        tap((res) => {
            if (res?.['type'] === 'vocabulary') {
                this.isVocabulary = true;
            }
        }),
        switchMap(() => this.route.params.pipe(map(({ id }) => id))),
    );
    word$: Observable<WordDto> = this.wordId$.pipe(switchMap((id) => this.getWord(id)));
    wordImage$ = this.wordId$.pipe(switchMap((id) => this.updateWordImage(id)));

    getWord = (id: string): Observable<WordDto> =>
        this.isVocabulary
            ? this.apiService.vocabularyControllerFindOne({ id }).pipe(
                  map((voc) => ({
                      ...voc.word!,
                  })),
              )
            : this.apiService.wordControllerFindOne({ id });

    updateWordImage = (id: string): Observable<ImageDto | null> => {
        if (this.isVocabulary) {
            const wordId = this.vocabularyStore.wordIds().find((voc) => voc.vocabularyId.toString() === id)?.wordId;
            return this.apiService.wordControllerFindOneAndUpdateImage({ id: wordId!.toString() });
        }
        return this.apiService.wordControllerFindOneAndUpdateImage({ id });
    };
}

/*
    createdAt: string;
    id: number;
    imageId?: number;
    meaning?: string;
    transcription?: string;
    translation?: string;
    updatedAt: string;
    userId: number;
    userWord: string;
    word?: WordDto;
    wordId?: number;

    context?: string;
    defaultImage?: ImageDto;
    defaultImageId?: number;
    id: number;
    isVisible: boolean;
    meaning?: string;
    pos?: PartOfSpeech;
    transcription?: string;
    translateVariants: {
        [key: string]: any;
    };
    translation: string;
    usages?: Array<WordUsageDto>;
    word: string;


}


*/
