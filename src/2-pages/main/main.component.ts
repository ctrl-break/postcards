import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '@/widgets/header';
import { ApiService } from '@/shared/api/generated';
import { UserService } from '@/shared/api/user.service';
import { VocabularyService } from '@/shared/api/vocabulary.service';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [CommonModule, HeaderComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
    userService = inject(UserService);
    vocabularyService = inject(VocabularyService);

    apiService = inject(ApiService);

    ngOnInit(): void {
        this.userService.getUserInfo().subscribe(
            (res) => {
                console.log(res);
            },
            (err) => console.error(err),
        );

        this.vocabularyService.getUserVocabulary().subscribe(
            (res) => {
                console.log(res);
            },
            (err) => console.error(err),
        );

        this.apiService.categoryControllerFindBasicCategories({}).subscribe((res) => {
            console.log(res);
        });
    }
}
