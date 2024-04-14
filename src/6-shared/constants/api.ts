import { env } from '../config/env';

export const API = env.api;

export const PATH_AUTH = '/auth';
export const PATH_PROFILE = '/profile';
export const PATH_USER = '/user';
export const PATH_WORDS = '/words';

export const API_AUTH = API + PATH_AUTH;
export const API_PROFILE = API + PATH_PROFILE;
export const API_USER = API + PATH_USER;
export const API_WORDS = API + PATH_WORDS;
