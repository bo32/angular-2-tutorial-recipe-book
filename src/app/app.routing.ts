import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const MY_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent }
];
export const routing = RouterModule.forRoot(MY_ROUTES);
