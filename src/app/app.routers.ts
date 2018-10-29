import { Routes, RouterModule } from '@angular/router';

const AppRouters: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'menus'
    },
    {
        path: 'menus',
        loadChildren: './modules/menus/menus.module#MenusModule'
    },
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
    },
    {
        path: 'classroomExercises',
        loadChildren: './modules/classroom-exercises/classroom-exercises.module#ClassroomExercisesModule'
    },
    {
        path: 'studentManage',
        loadChildren: './modules/student-manage/student-manage.module#StudentManageModule'
    },
    {
        path: 'store',
        loadChildren: './modules/store/store.module#StoreModule'
    },
    {
        path: 'pages',
        loadChildren: './modules/pages/pages.module#PagesModule'
    },
    {
        path: '**',
        redirectTo: 'pages/fourZeroFour'
    }
];

export const routing = RouterModule.forRoot(AppRouters);