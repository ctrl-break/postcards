import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, map, switchMap, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
    req = req.clone({
        withCredentials: true,
    });

    return next(req).pipe(
        catchError((error) => {
            if (error instanceof HttpErrorResponse && !req.url.includes('signin') && error.status === 401) {
                return handle401Error(req, next);
            }

            return throwError(() => error);
        }),
    );
};

export const handle401Error: HttpInterceptorFn = (req, next) => {
    // if (!this.isRefreshing) {
    //     this.isRefreshing = true;

    //     if (this.storageService.isLoggedIn()) {
    //         return this.authService.refreshToken().pipe(
    //             switchMap(() => {
    //                 this.isRefreshing = false;

    //                 return next.handle(req);
    //             }),
    //             catchError((error) => {
    //                 this.isRefreshing = false;

    //                 if (error.status == '403') {
    //                     this.eventBusService.emit(new EventData('logout', null));
    //                 }

    //                 return throwError(() => error);
    //             }),
    //         );
    //     }
    // }

    return next(req);
};
