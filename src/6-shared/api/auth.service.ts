import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { API_AUTH, httpOptions } from '../lib';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
    ) {}

    setTokensCookie(accessToken: string) {
        const decodedToken = jwtDecode(accessToken);
        const expires = new Date(decodedToken.exp! * 1000);
        this.cookieService.set('accessToken', accessToken, {
            expires,
            sameSite: 'Lax',
        });
    }

    signin(email: string, password: string): Observable<{ accessToken: string }> {
        return this.http.post<{ accessToken: string }>(
            `${API_AUTH}/login`,
            { email, password },
            { ...httpOptions, withCredentials: true },
        );
    }

    logout() {
        return this.http.get<unknown>(`${API_AUTH}/logout`);
    }

    refreshToken(): Observable<{ accessToken: string }> {
        return this.http.get<{ accessToken: string }>(`${API_AUTH}/refresh-tokens`, {
            ...httpOptions,
            withCredentials: true,
        });
    }
}
