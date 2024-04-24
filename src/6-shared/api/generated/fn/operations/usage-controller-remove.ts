/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WordUsageDto } from '../../models/word-usage-dto';

export interface UsageControllerRemove$Params {
    id: string;
}

export function usageControllerRemove(
    http: HttpClient,
    rootUrl: string,
    params: UsageControllerRemove$Params,
    context?: HttpContext,
): Observable<StrictHttpResponse<WordUsageDto>> {
    const rb = new RequestBuilder(rootUrl, usageControllerRemove.PATH, 'delete');
    if (params) {
        rb.path('id', params.id, {});
    }

    return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
            return r as StrictHttpResponse<WordUsageDto>;
        }),
    );
}

usageControllerRemove.PATH = '/api/v1/words/usage/{id}';
