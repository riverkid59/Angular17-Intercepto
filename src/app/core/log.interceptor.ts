import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable()

export  class  LogInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const start = Date.now();

    return next.handle(req).pipe(
      tap((response) => {
        if (response  instanceof  HttpResponse) {
          const elapsed = Date.now() - start;
          const msg = `${req.method} "${req.urlWithParams}" excécutée en ${elapsed} miliseconde.`;
          console.log(msg);
        }
      })
    );
  }

}