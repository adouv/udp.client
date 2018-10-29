import { Routes, RouterModule } from '@angular/router';

import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';

const PagesRouters: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'fourZeroFour'
    },
    {
        path: 'fourZeroFour',
        component: FourZeroFourComponent
    }
];

export const routing = RouterModule.forChild(PagesRouters);