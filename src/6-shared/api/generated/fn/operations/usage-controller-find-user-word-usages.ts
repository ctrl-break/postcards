/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WordUsageDto } from '../../models/word-usage-dto';

export interface UsageControllerFindUserWordUsages$Params {
    id: string;
}

export function usageControllerFindUserWordUsages(
    http: HttpClient,
    rootUrl: string,
    params: UsageControllerFindUserWordUsages$Params,
    context?: HttpContext,
): Observable<StrictHttpResponse<Array<WordUsageDto>>> {
    const rb = new RequestBuilder(rootUrl, usageControllerFindUserWordUsages.PATH, 'get');
    if (params) {
        rb.path('id', params.id, {});
    }

    return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
            return r as StrictHttpResponse<Array<WordUsageDto>>;
        }),
    );
}

usageControllerFindUserWordUsages.PATH = '/api/v1/words/usage/{id}/user';
