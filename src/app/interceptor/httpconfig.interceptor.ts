import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import {
  makeStateKey,
  StateKey,
  TransferState,
} from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {
  token: any;

  constructor(
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // this.token = localStorage.getItem('token');
    // if (this.token) {
    //   request = request.clone({
    //     url: this.prepareUrl(request.url),
    //     setHeaders: {
    //       // enctype: 'multipart/form-data',
    //       'Access-Control-Allow-Origin': '*',
    //       'Content-Type': 'application/json',
    //       // Authorization: `Bearer ${this.token}`,

    //       'x-token': `${this.token}`,
    //     },
    //   });
    // } else {
    request = request.clone({
      url: this.prepareUrl(request.url),
      setHeaders: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    // // }
    // return next.handle(request);

    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const key: StateKey<string> = makeStateKey<string>(request.url);

    if (isPlatformServer(this.platformId)) {
      return next.handle(request).pipe(
        tap((event) => {
          this.transferState.set(key, (<HttpResponse<any>>event).body);
        })
      );
    } else {
      const storedResponse = this.transferState.get<any>(key, null);
      if (storedResponse) {
        const response = new HttpResponse({
          body: storedResponse,
          status: 200,
        });
        this.transferState.remove(key);
        return of(response);
      } else {
        return next.handle(request);
      }
    }
  }

  private isAbsoluteUrl(url: string): boolean {
    const absolutePattern = /^https?:\/\//i;
    return absolutePattern.test(url);
  }
  private prepareUrl(url: string): string {
    url = this.isAbsoluteUrl(url) ? url : environment.api + url;
    return url;
  }
  public isAuthenticated(): boolean {
    return this.token != null;
  }
}
