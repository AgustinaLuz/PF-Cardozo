import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Usuario } from '../../core/models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


export interface LoginFormValue {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser$ = new BehaviorSubject<Usuario | null>(null);
  authUserObs$: any;
  

  constructor(private router: Router, 
    private httpClient: HttpClient) { }

  obtenerUsuarioAutenticado(): Observable<Usuario | null>{
    return this.authUser$.asObservable();
  }
  
  login(formValue: LoginFormValue): void{
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

    this.httpClient.get<Usuario[]>(
      `http://localhost:3000/usuarios?`,
      {
        params: {
          ...formValue
        },
      }
    ).subscribe({
      next: (usuarios) => {
        const usuarioAutenticado = usuarios[0];

        if (usuarioAutenticado) {
          localStorage.setItem('token', usuarioAutenticado.token);
          this.authUser$.next(usuarioAutenticado);
          this.router.navigate(['dashboard']);
        } else {
          alert('User and password incorrect!')
        }
      }
    })

  }

  logout(): void {
    localStorage.removeItem('auth-user');
    this.authUser$.next(null);
    this.router.navigate(['auth']);
  }


  verificarStorage(): void {
    const storageValor = localStorage.getItem('token');
    if (storageValor) {
      const usuario = JSON.parse(storageValor);
      this.authUser$.next(usuario);
    }
  }

}
