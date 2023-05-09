import { Usuario } from "src/app/core/models";
import { LoginFormValue } from "../services/auth.service";

export class AuthServiceMock {
    login(formValue: LoginFormValue): void {
    }
}

export const USUARIO_ADMIN_MOCK: Usuario = {
    id: 1,
    lastName: 'testapellido',
    email: 'test@mail.com',
    name: 'testluz',
    password: '123456',
    role: 'admin',
    token: 'hyetyh56367367365hgtr'
}