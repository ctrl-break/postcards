import { AuthService } from '@/shared/api/auth.service';
import { PATH_AUTH } from '@/shared/constants/api';
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, catchError, delay, filter, of, switchMap, take, tap, throwError } from 'rxjs';

let isRefreshing = false;
const refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

const addToken = (req: HttpRequest<any>, accessToken: string): HttpRequest<any> =>
    req.clone({
        setHeaders: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

export const authInterceptor: HttpInterceptorFn = (
    request: HttpRequest<unknown>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
    const authService = inject(AuthService);
    const cookieService = inject(CookieService);

    const accessToken = cookieService.get('accessToken');
    if (accessToken) {
        request = addToken(request, accessToken);
    }

    const handle401Error: HttpInterceptorFn = (
        request: HttpRequest<unknown>,
        next: HttpHandlerFn,
    ): Observable<HttpEvent<unknown>> => {
        if (!isRefreshing) {
            isRefreshing = true;
            refreshTokenSubject.next(null);

            return authService.refreshToken().pipe(
                switchMap(({ accessToken }) => {
                    isRefreshing = false;
                    if (accessToken) {
                        authService.setTokensCookie(accessToken);
                        request = addToken(request, accessToken);
                        refreshTokenSubject.next(accessToken);
                        return next(request);
                    } else {
                        // If refresh token fails, logout user or handle as needed
                        // authService.logout();
                        return throwError(() => 'Refresh token failed');
                    }
                }),
                catchError((error) => {
                    // If refresh token fails, logout user or handle as needed
                    // authService.logout();
                    return throwError(() => 'Refresh token failed');
                }),
            );
        } else {
            return refreshTokenSubject.pipe(
                filter((token) => token !== null),
                take(1),
                switchMap((token) => {
                    return next(addToken(request, token));
                }),
            );
        }
    };

    return next(request).pipe(
        catchError((error) => {
            if (
                error instanceof HttpErrorResponse &&
                !(request.url.includes(PATH_AUTH + '/login') || request.url.includes(PATH_AUTH + '/refresh-tokens')) &&
                error.status === 401
            ) {
                return handle401Error(request, next);
            }
            return throwError(() => error);
        }),
    );
};
