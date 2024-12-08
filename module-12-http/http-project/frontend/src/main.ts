import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tap } from 'rxjs';

function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
    // Copying and modifying request data. Though below code crashes application.
    /* const req = request.clone({
        headers: request.headers.set('X-DEBUG', 'TESTING')
    }); */
    console.log('[Outgoing Request]', request);
    return next(request).pipe(
        tap({
            next: event => {
                if (event.type === HttpEventType.Response) {
                    console.log('[Incoming Response]', event.status, event.body);
                }
            }
        })
    );
}

bootstrapApplication(AppComponent, {
    providers: [provideHttpClient(
        withInterceptors([loggingInterceptor]) // used to watch overall app incoming and outgoing http request/response
    )]
}).catch((err) => console.error(err));
