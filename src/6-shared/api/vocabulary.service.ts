import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpOptions, API_WORDS } from '../lib';

@Injectable({
    providedIn: 'root',
})
export class VocabularyService {
    constructor(private http: HttpClient) {}

    getUserVocabulary(): Observable<unknown> {
        return this.http.get<{ accessToken: string }>(`${API_WORDS}/vocabulary`, httpOptions);
    }
}
