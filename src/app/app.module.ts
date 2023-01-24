import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { TranslateServiceLoader } from './shared/translate.loader';
import { SharedModule } from './shared/shared.module';
import { ApiModule } from './api';

/**
 * Init translation service @ngx-translate
 *
 * @param http
 */
export function TranslateLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateServiceLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ApiModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    SharedModule,
    TranslateModule.forRoot(),
  ],
  providers: [{
      provide: TranslateLoader,
      useFactory: TranslateLoaderFactory,
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
