import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { AuthService, LoginFormValue } from "./auth.service";
import { Usuario } from "src/app/core/models";
import { Router } from "@angular/router";
import { skip } from "rxjs";

describe('pruebas sobre auth service', () => {

    let service: AuthService;
    let httpcontroller: HttpTestingController

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        }).compileComponents();

        service = TestBed.inject(AuthService);
        httpcontroller = TestBed.inject(HttpTestingController);
    })

    it('El login debe funcionar', (done) => {
        const loginFake: LoginFormValue = {
            email: 'luztest@mail.com',
            password: '123456'
        }
        const MOCK_REQUEST_RESULT: Usuario[] = [
            {
                id:1,
                lastName: 'testapellido',
                email: loginFake.email,
                name: 'testluz',
                password: loginFake.password,
                role: 'admin',
                token: 'dfvnsdfkjnvs545454'
            }

        ]
        service.login(loginFake);

        service.obtenerUsuarioAutenticado()
            .pipe(
                skip(1),
            )
        .subscribe((usuario) => {
            console.log(usuario);
            expect(usuario).toBeTruthy();
            done();
        });
        

        spyOn(TestBed.inject(Router), 'navigate')

        

        httpcontroller.expectOne({
            url: `http://localhost:3000/usuarios?email=${loginFake.email}&password=${loginFake.password}`,
            method: 'GET'
        }).flush(MOCK_REQUEST_RESULT)
    })

    it('Logout should emmit null in authUser, remove token from LocalStorage and redirec user to login', () => {
        service.establecerUsuarioAutenticado({
                id:1,
                lastName: 'testapellido',
                email: 'email@test.com',
                name: 'testluz',
                password: '123456',
                role: 'admin',
                token: 'dfvnsdfkjnvs545454'
        });

        const spyOnNavigate = spyOn(TestBed.inject(Router), 'navigate')
        service.logout();

        const tokenLs = localStorage.getItem('token');
        expect(tokenLs).toBeNull();
        expect(spyOnNavigate).toHaveBeenCalled();

    });
});