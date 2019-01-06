import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // HttpClientModule
  ],
  providers: [
    AuthInterceptorService
  ]
})
export class CoreModule { }
