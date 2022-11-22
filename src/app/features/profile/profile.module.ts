import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'curriculo', component: CurriculumComponent},
]

@NgModule({
  declarations: [
    ProfileComponent,
    CurriculumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
