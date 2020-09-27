import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KaTeXNewComponent } from './ka-te-xnew/ka-te-xnew.component';


const routes: Routes = [
  
  {path:'Mathtest', component: KaTeXNewComponent},
  {path:'*', component: AppComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
