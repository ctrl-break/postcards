/* tslint:disable */
/* eslint-disable */
import { API } from '@/shared/lib';
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
    providedIn: 'root',
})
export class ApiConfiguration {
    rootUrl: string = API;
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
    rootUrl?: string;
}
