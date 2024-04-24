/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VocabularyDto } from '../../models/vocabulary-dto';

export interface VocabularyControllerGetUserVocabulary$Params {}

export function vocabularyControllerGetUserVocabulary(
    http: HttpClient,
    rootUrl: string,
    params?: VocabularyControllerGetUserVocabulary$Params,
    context?: HttpContext,
): Observable<StrictHttpResponse<Array<VocabularyDto>>> {
    const rb = new RequestBuilder(rootUrl, vocabularyControllerGetUserVocabulary.PATH, 'get');
    if (params) {
    }

    return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
            return r as StrictHttpResponse<Array<VocabularyDto>>;
        }),
    );
}

vocabularyControllerGetUserVocabulary.PATH = '/api/v1/words/vocabulary';
