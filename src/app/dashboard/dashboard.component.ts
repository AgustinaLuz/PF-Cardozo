import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Usuario } from '../core/models';
import { Observable, Subject, Subscription, map, takeUntil } from 'rxjs';
import links, { NavItem } from './nav-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy{

  showFiller = false;

  authUser: Usuario | null = null;

  authUserObs$: Observable<Usuario | null>;

  links = links;

  suscripcionAuthUser: Subscription | null = null

  destroyed$ = new Subject<void>();



  constructor(private authService: AuthService, private router: Router) {


    this.authUserObs$ = this.authService.obtenerUsuarioAutenticado()

    this.authService.obtenerUsuarioAutenticado()
      // .pipe(
      //   takeUntil(this.destroyed$),
      //   map(usuario => ({...usuario, name: usuario.name.toUpperCase()}))
      // )
      // .subscribe((usuario) => this.authUser = usuario);
}

  ngOnDestroy(): void {
    //this.suscripcionAuthUser?.unsubscribe();
    this.destroyed$.next();
    this.destroyed$.complete();
  }


  logout(): void {
    this.authService.logout();
  }

  verifyRole(link: NavItem): Observable<boolean>{
    return this.authUserObs$.pipe(map((usuarioAuth) =>
        link.allowedRoles.some((r) => r === usuarioAuth?.role)
    )
    );
    
  }
}
