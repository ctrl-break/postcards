/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryDto } from '../../models/category-dto';
import { CreateCategoryDto } from '../../models/create-category-dto';

export interface CategoryControllerCreate$Params {
    body: CreateCategoryDto;
}

export function categoryControllerCreate(
    http: HttpClient,
    rootUrl: string,
    params: CategoryControllerCreate$Params,
    context?: HttpContext,
): Observable<StrictHttpResponse<CategoryDto>> {
    const rb = new RequestBuilder(rootUrl, categoryControllerCreate.PATH, 'post');
    if (params) {
        rb.body(params.body, 'application/json');
    }

    return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
            return r as StrictHttpResponse<CategoryDto>;
        }),
    );
}

categoryControllerCreate.PATH = '/api/v1/words/category';
