import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "src/app/shared/pipes/pipes.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthService } from "../../services/auth.service";
import { AuthServiceMock } from "../../mocks/auth-service.mock";

describe('Pruebas del LoginComponent', () => {
    let component: LoginComponent;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                LoginComponent
            ],
            imports: [
                HttpClientModule,
                RouterTestingModule, 
                MatFormFieldModule,
                MatInputModule,
                ReactiveFormsModule,
                PipesModule,
                BrowserAnimationsModule
            ],
            providers: [
                {
                    provide: AuthService,
                    useClass: AuthServiceMock,
                }
            ]
        }).compileComponents();

        const fixture = TestBed.createComponent(LoginComponent);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('If the email field its empty, the FormControl of the email should be invalid', () => {
        component.loginForm.setValue({ email: null, password: null})

        expect(component.emailControl.invalid).toBeTrue();
    });
    it('If the password field its empty, the FormControl of the password should be invalid', () => {
        component.loginForm.setValue({ email: null, password: null})

        expect(component.passwordControl.invalid).toBeTrue();
    });
    it('If the loginform its invalid, should be mark all the controls as touched', () => {
        component.loginForm.setValue({ email: null, password: null})
        const spyOnMarkAllAsTouched = spyOn(component.loginForm, 'markAllAsTouched');


        component.onSubmit();

        expect(spyOnMarkAllAsTouched).toHaveBeenCalled();
    });

    it('if the loginform is valid, it should be call the login method of AuthService', () => {
        component.loginForm.setValue({ email: 'luztest@mail.com', password: '123456'});

        const spyOnAuthServiceLogin = spyOn(TestBed.inject(AuthService), 'login');

        component.onSubmit();

        expect(component.loginForm.valid).toBeTrue();

        expect(spyOnAuthServiceLogin).toHaveBeenCalled();
    });
});