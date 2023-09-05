import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "./services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    protected token!: string;

    constructor(protected authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.token = this.authService.getToken();
        if ( request.headers.has("skip") ) {
            request = request.clone({
                headers: request.headers.delete('skip')
            });
        } else {
            request = request.clone({
                headers:  request.headers.set('Authorization', this.token)
            } );
        }

        return next.handle(request);

    }
}
