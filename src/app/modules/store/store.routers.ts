import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';

const StoreRouters: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: ListComponent
    }
];

export const routing = RouterModule.forChild(StoreRouters);