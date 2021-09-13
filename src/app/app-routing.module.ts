import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GLTFAppComponent } from './gltfapp/gltfapp.component';
import { HomeComponent } from './gltfapp/home/home.component';
import { UploadFilesComponent } from './gltfapp/upload-files/upload-files.component';
import { ViewFilesComponent } from './gltfapp/view-files/view-files.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  {
    path: 'GLTFApplication',
    component: GLTFAppComponent,
    children: [
      { path: 'Home', component: HomeComponent },
      { path: 'UploadFiles', component: UploadFilesComponent },
      { path: 'ViewFiles', component: ViewFilesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
