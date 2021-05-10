import { ImagesListComponent } from './images-list/images-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesCreateComponent } from './images-create/images-create.component';
import { ImagesEditComponent } from './images-edit/images-edit.component';

const routes: Routes = [
  {path:'',component:ImagesListComponent},
  {path:'imageList',component:ImagesListComponent},
  {path:'imageCreate',component:ImagesCreateComponent},
  {path:'imageEdit',component:ImagesEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
