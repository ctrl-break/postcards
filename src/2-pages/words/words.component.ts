import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from '../layout';

@Component({
    selector: 'app-words',
    standalone: true,
    imports: [LayoutComponent],
    templateUrl: './words.component.html',
    styleUrl: './words.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsComponent {}
