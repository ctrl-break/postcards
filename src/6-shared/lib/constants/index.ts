import { HttpHeaders } from '@angular/common/http';
import { env } from '../../config/env';

export const API = env.api;

export const PATH_AUTH = '/auth';
export const API_AUTH = API + PATH_AUTH;

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
