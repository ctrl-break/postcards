/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateImageDto } from '../../models/create-image-dto';
import { ImageDto } from '../../models/image-dto';

export interface ImageControllerCreate$Params {
    body: CreateImageDto;
}

export function imageControllerCreate(
    http: HttpClient,
    rootUrl: string,
    params: ImageControllerCreate$Params,
    context?: HttpContext,
): Observable<StrictHttpResponse<ImageDto>> {
    const rb = new RequestBuilder(rootUrl, imageControllerCreate.PATH, 'post');
    if (params) {
        rb.body(params.body, 'application/json');
    }

    return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
            return r as StrictHttpResponse<ImageDto>;
        }),
    );
}

imageControllerCreate.PATH = '/api/v1/images';
