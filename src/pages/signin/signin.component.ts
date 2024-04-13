import { SigninFormComponent } from '@/widgets/signin-form';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [CommonModule, SigninFormComponent],
    templateUrl: './signin.component.html',
    styleUrl: './signin.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent {}
