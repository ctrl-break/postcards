import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageDto, WordDto } from '@/shared/api/generated';

@Component({
    selector: 'app-postcard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './postcard.component.html',
    styleUrl: './postcard.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostcardComponent {
    @Input() word!: WordDto;
    @Input() wordImage?: ImageDto | null;

    flipped = false;
}
