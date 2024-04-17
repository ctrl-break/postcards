/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserSettingDto } from '../../models/user-setting-dto';

export interface SettingsControllerGetUserSettings$Params {
}

export function settingsControllerGetUserSettings(http: HttpClient, rootUrl: string, params?: SettingsControllerGetUserSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserSettingDto>>> {
  const rb = new RequestBuilder(rootUrl, settingsControllerGetUserSettings.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UserSettingDto>>;
    })
  );
}

settingsControllerGetUserSettings.PATH = '/api/v1/profile/settings';