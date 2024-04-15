import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PROFILE, httpOptions } from '../lib';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    getUserInfo(): Observable<unknown> {
        return this.http.get<{ accessToken: string }>(`${API_PROFILE}`, httpOptions);
    }
}
