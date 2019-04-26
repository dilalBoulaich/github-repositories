import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { RepositoriesListDisplayComponent } from './repositories-list-display/repositories-list-display.component';
import { RepositoryViewComponent } from './repositories-list-display/repository-view/repository-view.component';
import { NumberFormatterPipe } from './pipes/number-formatter.pipe';
import { PriorDaysNumberPipe } from './pipes/prior-days-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesListDisplayComponent,
    RepositoryViewComponent,
    NumberFormatterPipe,
    PriorDaysNumberPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
