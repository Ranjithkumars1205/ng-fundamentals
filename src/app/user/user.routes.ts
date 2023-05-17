import { Route } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";


export const userRoutes: Route[] = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent }
]
