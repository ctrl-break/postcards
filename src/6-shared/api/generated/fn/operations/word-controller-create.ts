/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateWordDto } from '../../models/create-word-dto';
import { WordDto } from '../../models/word-dto';

export interface WordControllerCreate$Params {
      body: CreateWordDto
}

export function wordControllerCreate(http: HttpClient, rootUrl: string, params: WordControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<WordDto>> {
  const rb = new RequestBuilder(rootUrl, wordControllerCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<WordDto>;
    })
  );
}

wordControllerCreate.PATH = '/api/v1/words/word';
