import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { MATERIALS_MODULES } from '.';
import { BadgeComponent } from './components/badge/badge.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SharedService } from './services/shared.service';
import { StorageService, StorageSessionService } from './services/storage.service';

@NgModule({
  imports: [
    MATERIALS_MODULES,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }),
  ],
  exports: [
    MATERIALS_MODULES,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule,
    LoggerModule,
    BadgeComponent,
    PaginatorComponent,
  ],
  declarations: [
    BadgeComponent,
    PaginatorComponent,
  ],
  providers: [
    StorageService,
    StorageSessionService,
    SharedService,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [

      ],
    };
  }
}
