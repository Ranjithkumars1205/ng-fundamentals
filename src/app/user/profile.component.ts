import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { TOASTR_TOKEN, Toastr } from "../common/toastr.service";

/**
 * @Inject is a decorator just like @Component that allows us to use a separate token besides the type of the
 * constructor parameter
 * In the constructor, authService, the tooken is right here (AuthService, and that's also the typescript type.
 * In our case, the Typescript type is just Toastr, which is our interface,but that is not our injection token.
 * Instead, i'm going to add the decorator @Inject, and it's parameter, as you can see, is a token (TOASTR_TOKEN).
 * that tells angular for this toastr variable that we are creating that is going to be a private member of this class.
 * you're going to get your value by using the TOASTR_TOKEN to look up the service in the dependency injection registry.
 */

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {}

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
    // this.router.navigate(['/events']);
    this.toastr.success("Profile Saved");
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
