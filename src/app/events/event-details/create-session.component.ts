import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";
import { FormControl, FormGroup } from "@angular/forms";
import { ISession, restrictedWords } from "../shared/index";


@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [`
   em {float:right; color:#E05C65; padding-left:10px;}
  .error input, .error select, .error textarea {background-color:#E3C3C5;}
  .error ::-webkit-input-placeholder { color: #999; }
  .error :-moz-placeholder { color: #999; }
  .error ::-moz-placeholder {color: #999; }
  .error :ms-input-placeholder { color: #999; }
`]
})

export class CreateSessionComponent implements OnInit {
  newSessionForm!: FormGroup;
  name!: FormControl
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter()
  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    // https://stackoverflow.com/questions/75954846/error-ts2769-no-overload-matches-this-call-overload-1-of-5-value-string-f - as ValidatorFn, we should add below for this error.
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar']) as ValidatorFn ]);
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }



  saveSession(formValues: any) {
    let session: ISession = {
      id: 0,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      abstract: formValues.abstract,
      level: formValues.level,
      voters: []
    }
    console.log(session);
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}


