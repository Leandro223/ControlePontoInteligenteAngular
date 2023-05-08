import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LogarComponent } from './components/logar.component';


export const LoginRoutes = [
    {
        package: 'login',
        component: LogarComponent,
        children: [{path: '', component: LoginComponent}]
    }
];

@NgModule({
    imports: [RouterModule.forChild(LoginRoutes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {
}
