import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'prices',
        loadComponent: () => import('./pages/prices/prices.component').then(m => m.PricesComponent)
    },
    {
        path: 'gallery',
        loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
    },
    {
        // DÜZELTME: Yol tanımı, butonlardaki routerLink ile eşleşmesi için 'appointment' olarak güncellendi.
        path: 'appointment',
        loadComponent: () => import('./pages/appointment/appointment.component').then(m => m.AppointmentComponent)
    },
    { path: '**', redirectTo: '' } // Eşleşmeyen rotaları ana sayfaya yönlendir
];
