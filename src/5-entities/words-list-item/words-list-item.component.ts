import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CategoryDto } from '@/shared/api/generated';

@Component({
    selector: 'app-words-list-item',
    standalone: true,
    imports: [],
    templateUrl: './words-list-item.component.html',
    styleUrl: './words-list-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsListItemComponent {
    @Input() word!: CategoryDto;
}
