import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { HttpUtilService } from "src/app/shared/services/http-util.service";


@Injectable()
export class AdminGuard implements CanActivate{

    constructor(private httpUltilService: HttpUtilService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.httpUltilService.obterPerfil() === 'ROLE_ADMIN'){
            return true;
        }

        this.router.navigate(['/funcionario']);

        return false;

        
    }
    
}