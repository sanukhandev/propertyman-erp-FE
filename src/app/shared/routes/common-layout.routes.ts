import { Routes } from '@angular/router';
import {AuthGuard} from '../../guard/auth.guard';

// tslint:disable-next-line:variable-name
export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    }
];
