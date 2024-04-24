/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryDto } from '../../models/category-dto';

export interface CategoryControllerFindMany$Params {
    id: string;
    page: string;
    perPage: string;
}

export function categoryControllerFindMany(
    http: HttpClient,
    rootUrl: string,
    params: CategoryControllerFindMany$Params,
    context?: HttpContext,
): Observable<StrictHttpResponse<CategoryDto>> {
    const rb = new RequestBuilder(rootUrl, categoryControllerFindMany.PATH, 'get');
    if (params) {
        rb.path('id', params.id, {});
        rb.query('page', params.page, {});
        rb.query('perPage', params.perPage, {});
    }

    return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
            return r as StrictHttpResponse<CategoryDto>;
        }),
    );
}

categoryControllerFindMany.PATH = '/api/v1/words/category/{id}/list';
