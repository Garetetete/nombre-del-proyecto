import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
        children: [
                    {
        path: 'treding',
        loadComponent: () => import('./gifs/pages/treding-page/treding-page')
            
    },

        {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page/search-page')
            
    },

        {
        path: '**',
        redirectTo: 'treding',
    }
        ]
    },



    {
        path: '**',
        redirectTo: 'dashboard',
    }
];