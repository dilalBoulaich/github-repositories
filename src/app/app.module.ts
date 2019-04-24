import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RepositoriesListDisplayComponent } from './repositories-list-display/repositories-list-display.component';
import { RepositoryViewComponent } from './repositories-list-display/repository-view/repository-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesListDisplayComponent,
    RepositoryViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
