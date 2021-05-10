import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from'@angular/forms';

import { ImagesListComponent } from './images-list/images-list.component';
import { ImagesEditComponent } from './images-edit/images-edit.component';
import { ImagesCreateComponent } from './images-create/images-create.component';

@NgModule({
  declarations: [
    AppComponent, 
    ImagesListComponent,
    ImagesEditComponent,
    ImagesCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
