import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './routes/auth/auth.component';
import { HomeComponent } from './routes/home/home.component';
import { LogsComponent } from './routes/logs/logs.component';
import { CanvassersComponent } from './routes/canvassers/canvassers.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'logs',
        component: LogsComponent
    },
    {
        path: 'canvassers',
        component: CanvassersComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
