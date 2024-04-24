import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from '../layout';

@Component({
    selector: 'app-cards',
    standalone: true,
    imports: [LayoutComponent],
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {}
