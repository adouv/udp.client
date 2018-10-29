import { Routes, RouterModule } from '@angular/router';

import { SingInComponent } from './sing-in/sing-in.component';
import { SingInClassComponent } from './sing-in-class/sing-in-class.component';

const LoginRouters: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signIn'
    },
    {
        path: 'signIn',
        component: SingInComponent
    },
    {
        path: 'signInClass',
        component: SingInClassComponent
    }
];

export const routing = RouterModule.forChild(LoginRouters);