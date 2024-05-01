import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ImageDto, WordDto } from '@/shared/api/generated';

@Component({
    selector: 'app-postcard',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule],
    templateUrl: './postcard.component.html',
    styleUrl: './postcard.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostcardComponent {
    @Input() word!: WordDto;
    @Input() wordImage?: ImageDto | null;

    private location = inject(Location);

    flipped = false;

    goBack() {
        this.location.back();
    }
}
