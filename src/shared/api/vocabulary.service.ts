import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpOptions } from '../constants';
import { API_WORDS } from '../constants/api';

@Injectable({
    providedIn: 'root',
})
export class VocabularyService {
    constructor(private http: HttpClient) {}

    getUserVocabulary(): Observable<unknown> {
        return this.http.get<{ accessToken: string }>(`${API_WORDS}/vocabulary`, httpOptions);
    }
}
