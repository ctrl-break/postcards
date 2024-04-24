import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from '../layout';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [LayoutComponent],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
