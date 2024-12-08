import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';

function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
    // Copying and modifying request data. Though below code crashes application.
    /* const req = request.clone({
        headers: request.headers.set('X-DEBUG', 'TESTING')
    }); */
    console.log('[Outgoing Request]', request);
    return next(request);
}

bootstrapApplication(AppComponent, {
    providers: [provideHttpClient(
        withInterceptors([loggingInterceptor]) // used to watch overall app incoming and outgoing http request/response
    )]
}).catch((err) => console.error(err));
