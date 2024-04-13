import { AuthService } from '@/shared/api/auth.service';
import { MatForms } from '@/shared/ui/mat-forms';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin-form',
    standalone: true,
    imports: [MatForms],
    templateUrl: './signin-form.component.html',
    styleUrl: './signin-form.component.scss',
})
export class SigninFormComponent {
    authService = inject(AuthService);
    router = inject(Router);

    signInForm = new FormGroup({
        login: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
    });

    submitForm() {
        console.log(this.signInForm);
        if (this.signInForm.invalid) {
            return;
        }
        this.authService.signin();
        this.router.navigateByUrl('/main');
    }
}
