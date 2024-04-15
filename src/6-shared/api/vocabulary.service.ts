import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_WORDS, httpOptions } from '../lib';

@Injectable({
    providedIn: 'root',
})
export class VocabularyService {
    constructor(private http: HttpClient) {}

    getUserVocabulary(): Observable<unknown> {
        return this.http.get<{ accessToken: string }>(`${API_WORDS}/vocabulary`, httpOptions);
    }
}
