import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private mensaje$ = new Subject()
  private mensaje2$ = new Subject()

  constructor() { 
    this.mensaje$.subscribe((msg) => 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    );

    this.mensaje2$.subscribe((msg_delete) => 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Course correctly deleted',
      showConfirmButton: false,
      timer: 1500
    })
    );

  }

  mostrarMensaje(msg: string,){
    this.mensaje$.next(msg);
  }
  mostrarMensaje2(msg_delete: string,){
    this.mensaje2$.next(msg_delete);
  }
  

}
