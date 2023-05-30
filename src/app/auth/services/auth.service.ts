import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  map,
  of,
  throwError,
} from 'rxjs';
import { Usuario } from '../../core/models';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { EstablecerUsuarioAutenticado, QuitarUsuarioAutenticado } from 'src/app/store/auth/auth.actions';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

export interface LoginFormValue {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private authUser$ = new BehaviorSubject<Usuario | null>(null);
  authUserObs$: any;

  constructor(private router: Router, private httpClient: HttpClient, private store: Store<AppState>,) {}

  obtenerUsuarioAutenticado(): Observable<Usuario | null> {
    return this.store.select(selectAuthUser);
  }

  establecerUsuarioAutenticado(usuario: Usuario): void {
    this.store.dispatch(EstablecerUsuarioAutenticado({ payload: usuario}));
  }

  login(formValue: LoginFormValue): void {
    // const usuario: Usuario = {
    //   id: 1,
    //   name: 'MOCK',
    //   lastName: 'USER',
    //   email: formValue.email,
    //   role: 'user'
    // }
    // localStorage.setItem('auth-user', JSON.stringify(usuario));
    // this.authUser$.next(usuario);
    // this.router.navigate(['dashboard']);

    this.httpClient
      .get<Usuario[]>(`http://localhost:3000/users?`, {
        params: {
          ...formValue,
        },
      })
      .subscribe({
        next: (usuarios) => {
          const usuarioAutenticado = usuarios[0];

          if (usuarioAutenticado) {
            localStorage.setItem('token', usuarioAutenticado.token);
            this.establecerUsuarioAutenticado(usuarioAutenticado);
            this.router.navigate(['dashboard']);
          } else {
            alert('User and password incorrect!');
          }
        },
      });
  }

  logout(): void {
    localStorage.removeItem('token');
    // this.authUser$.next(null);
    this.store.dispatch(QuitarUsuarioAutenticado());
    this.router.navigate(['auth']);
  }

  public verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return this.httpClient
      .get<Usuario[]>(`http://localhost:3000/users?token=${token}`, 
      {
        headers: new HttpHeaders({
          'Authorization': token || '',
        }),
      })
      .pipe(
        map((usuarios) => {
          const usuarioAutenticado = usuarios[0];
          if (usuarioAutenticado) {
            localStorage.setItem('token', usuarioAutenticado.token);
            this.establecerUsuarioAutenticado(usuarioAutenticado);
          }
          return !!usuarioAutenticado;
        }),
        catchError((err) => {
          // alert('Error verifying token');
          return of (false);
        })
      );
  }
}
