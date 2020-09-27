import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
 
import { KatexModule } from 'ng-katex';
import { KaTeXNewComponent } from './ka-te-xnew/ka-te-xnew.component'; 
import {MathModule} from './math/math.module';
@NgModule({
  declarations: [
    AppComponent,
    KaTeXNewComponent
  ],
  imports: [
    BrowserModule,
    KatexModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MathModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
