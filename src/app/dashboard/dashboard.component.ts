import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Usuario } from '../core/models';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy{

  showFiller = false;

  authUser: Usuario | null = null;

  authUserObs$: Observable<Usuario>;

  suscripcionAuthUser: Subscription | null = null

  destroyed$ = new Subject<void>();



  constructor(private authService: AuthService) {


    this.authUserObs$ = this.authService.obtenerUsuarioAutenticado()

    this.authService.obtenerUsuarioAutenticado()
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((usuario) => this.authUser = usuario);
}

  ngOnDestroy(): void {
    //this.suscripcionAuthUser?.unsubscribe();
    this.destroyed$.next();
    this.destroyed$.complete();
  }


}
