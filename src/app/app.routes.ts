import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import("./layouts/app/pages/app-layout/app-layout").then(m => m.AppLayout),
        title: 'Inicio'
    },
    {
        path: 'login',
        loadComponent: () => import("./layouts/auth/pages/login/login").then(m => m.Login),
        title: 'Autoboxex - Login'
    }
];
