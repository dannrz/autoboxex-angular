import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import("./layouts/auth/pages/login/login").then(m => m.Login),
        canActivate: [guestGuard],
        title: 'Autoboxex - Login'
    },
    {
        path: '',
        loadComponent: () => import("./layouts/app/pages/app-layout/app-layout").then(m => m.AppLayout),
        title: 'Autoboxex - Inicio',
        canActivate: [authGuard],
        children: [
            {
                path: 'catalogue',
                children: [
                    {
                        path: 'brands',
                        loadComponent: () => import("./features/catalogue/brands/pages/brand-page/brand-page").then(m => m.BrandPage),
                        title: "Catálogos - Marcas"
                    }
                ]
            }
        ]
    }
];
