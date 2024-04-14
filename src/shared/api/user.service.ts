import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpOptions } from '../constants';
import { API_PROFILE } from '../constants/api';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    getUserInfo(): Observable<unknown> {
        return this.http.get<{ accessToken: string }>(`${API_PROFILE}`, httpOptions);
    }
}
