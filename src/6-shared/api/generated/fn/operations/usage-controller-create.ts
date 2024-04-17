/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateUsageDto } from '../../models/create-usage-dto';
import { WordUsageDto } from '../../models/word-usage-dto';

export interface UsageControllerCreate$Params {
      body: CreateUsageDto
}

export function usageControllerCreate(http: HttpClient, rootUrl: string, params: UsageControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<WordUsageDto>> {
  const rb = new RequestBuilder(rootUrl, usageControllerCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<WordUsageDto>;
    })
  );
}

usageControllerCreate.PATH = '/api/v1/words/usage';
