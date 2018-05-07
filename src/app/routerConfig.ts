import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  { path: 'create', 
    component: CreateComponent 
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: '',
    component: HomeComponent
  }
];