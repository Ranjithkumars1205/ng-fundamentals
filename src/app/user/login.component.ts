import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { IUser } from "./user.model";
import { Router } from "@angular/router";


@Component({
  templateUrl: './login.component.html',
  styles: [`
   em {
    float: right;
    color: #E05C65;
    padding-left: 10px;
   }
  `]
})
export class LoginComponent {
  userName!: string;
  password!: string;
  mouseoverlogin!: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  login(formValues: any) {
    // console.log(formValues, this.userName, this.password);
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
