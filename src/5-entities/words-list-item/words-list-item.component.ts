import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { WordDto } from '@/shared/api/generated';

@Component({
    selector: 'app-words-list-item',
    standalone: true,
    imports: [RouterLink, MatButtonModule],
    templateUrl: './words-list-item.component.html',
    styleUrl: './words-list-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsListItemComponent {
    @Input() word!: WordDto;
}
