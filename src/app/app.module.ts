import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, APP_BASE_HREF } from '@angular/common';
import en from '@angular/common/locales/en';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppStoreModule } from './store.module';
import { RootStoreModule } from './root-store/root-store.module';
import { AppErrorHandler } from './services/handlers/error-handlers.service';
import { HttpErrorInterceptor } from './services/handlers/http-error.interceptor';
import { RouterModule } from '@angular/router';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    AppStoreModule,
    RootStoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ]
})
export class AppModule { }
