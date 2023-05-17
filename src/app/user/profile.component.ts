import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  profileForm!: FormGroup;
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.authService.currentUser.firstName,
        [Validators.required, Validators.pattern('[a-zA-Z].*')]),
      lastName: new FormControl(this.authService.currentUser.lastName, Validators.required)
    })
  }

  saveProfile(formValues: any) {
    console.log(formValues);
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['/events']);
  }

  public get myForm() {
    return this.profileForm.controls;
  }

  validateFirstName() {
    return this.myForm['firstName'].valid || this.myForm['firstName'].untouched;
  }

  validateLastName() {
    return this.myForm['lastName'].valid || this.myForm['lastName'].untouched;
  }

  cancel() {
    console.log(this.myForm);
    // this.router.navigate(['/events']);
  }

}
