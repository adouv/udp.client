import { Routes, RouterModule } from '@angular/router';

import { MenusOneComponent } from './menus-one/menus-one.component';
import { MenusTwoComponent } from './menus-two/menus-two.component';

const MenusRouters: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'menusOne'
    },
    {
        path: 'menusOne',
        component: MenusOneComponent
    },
    {
        path: 'menusTwo',
        component: MenusTwoComponent
    }
];

export const routing = RouterModule.forChild(MenusRouters);