import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { WordDto } from '@/shared/api/generated';
import { VocabularyStore } from '@/shared/lib/stores';

@Component({
    selector: 'app-words-list-item',
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatIconModule, CommonModule],
    templateUrl: './words-list-item.component.html',
    styleUrl: './words-list-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsListItemComponent {
    vocabularyStore = inject(VocabularyStore);

    @Input() word!: WordDto;
    @Input() isVocabulary?: boolean = false;

    toggleVocabularyWord(wordId: number) {
        if (this.isVocabulary) {
            this.vocabularyStore.removeFromVocabulary(wordId).then(() => (this.isVocabulary = false));
        } else {
            this.vocabularyStore.addToVocabulary(wordId).then(() => (this.isVocabulary = true));
        }
    }
}
