import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GLTFAppComponent } from './gltfapp/gltfapp.component';
import { HomeComponent } from './gltfapp/home/home.component';
import { UploadFilesComponent } from './gltfapp/upload-files/upload-files.component';
import { ViewFilesComponent } from './gltfapp/view-files/view-files.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GLTFAppComponent,
    HomeComponent,
    UploadFilesComponent,
    ViewFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
