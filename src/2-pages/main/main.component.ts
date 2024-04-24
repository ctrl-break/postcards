import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from '@/pages/layout';
import { ApiService } from '@/shared/api/generated';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [CommonModule, LayoutComponent, MatButtonModule, MatDividerModule, MatIconModule],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
    apiService = inject(ApiService);

    ngOnInit(): void {
        this.apiService.profileControllerGetUserVocabulary().subscribe((res) => {
            console.log(res);
        });

        this.apiService.vocabularyControllerGetUserVocabulary().subscribe((res) => {
            console.log(res);
        });

        this.apiService.categoryControllerFindBasicCategories({}).subscribe((res) => {
            console.log(res);
        });
    }
}
