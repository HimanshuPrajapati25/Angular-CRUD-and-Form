import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PracticeFormComponent } from './practice-form/practice-form.component';

const routes: Routes = [
  { path: 'Crud', component: CrudComponent },
  { path: 'Template-Form', component: TemplateFormComponent },
  { path: 'Reactive-Form', component: ReactiveFormComponent },
  { path: 'Practice-Form', component: PracticeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
