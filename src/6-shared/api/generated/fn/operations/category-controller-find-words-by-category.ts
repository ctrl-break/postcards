/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryAssociationDto } from '../../models/category-association-dto';
import { PageDto } from '../../models/page-dto';
import { PageMetaDto } from '../../models/page-meta-dto';

export interface CategoryControllerFindWordsByCategory$Params {
    id: string;
    page: string;
    perPage: string;
}

export function categoryControllerFindWordsByCategory(
    http: HttpClient,
    rootUrl: string,
    params: CategoryControllerFindWordsByCategory$Params,
    context?: HttpContext,
): Observable<
    StrictHttpResponse<
        PageDto & {
            data?: Array<CategoryAssociationDto>;
            meta?: PageMetaDto;
        }
    >
> {
    const rb = new RequestBuilder(rootUrl, categoryControllerFindWordsByCategory.PATH, 'get');
    if (params) {
        rb.path('id', params.id, {});
        rb.query('page', params.page, {});
        rb.query('perPage', params.perPage, {});
    }

    return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
            return r as StrictHttpResponse<
                PageDto & {
                    data?: Array<CategoryAssociationDto>;
                    meta?: PageMetaDto;
                }
            >;
        }),
    );
}

categoryControllerFindWordsByCategory.PATH = '/api/v1/words/category/{id}/list';
