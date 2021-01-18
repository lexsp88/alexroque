import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ConocemeComponent } from './components/conoceme/conoceme.component';

const APP_ROUTES: Routes = [
    //{ path: 'home', component: HomeComponent },
    { path: 'home', component: HomeComponent},
    { path: 'proyectos', component: ProyectosComponent},
    { path: 'conoceme', component: ConocemeComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: '**', pathMatch: 'full', redirectTo:  'home'  }  

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);