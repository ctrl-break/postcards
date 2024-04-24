import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryListComponent } from '@/widgets/category-list';
import { LayoutComponent } from '../layout';

@Component({
    selector: 'app-words',
    standalone: true,
    imports: [LayoutComponent, CategoryListComponent],
    templateUrl: './words.component.html',
    styleUrl: './words.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsComponent {}
