import { Route, Routes } from '@angular/router';

export const routes: Routes = [
    /* {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, */
    {
        path: 'login',
        loadComponent: () => import("./layouts/auth/pages/login/login").then(m => m.Login),
        title: 'Autoboxex - Login'
    },
    {
        path: '',
        loadComponent: () => import("./layouts/app/pages/app-layout/app-layout").then(m => m.AppLayout),
        children: [
            {
                path: 'catalogue',
                children: [
                    {
                        path: 'brands',
                        loadComponent: () => import("./features/catalogue/brands/pages/brand-page/brand-page").then(m => m.BrandPage)
                    }
                ]
            }
        ]
    }
];
