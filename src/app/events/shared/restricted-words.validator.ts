import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function restrictedWords(words: string[]): ValidatorFn   {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!words) return null;

    let invalidWords = words
    .map(w => control.value.includes(w) ? w : null)
    .filter(w => w != null);
    // if it is valid return null, otherwise return object.
    return !!invalidWords?.length ? { 'restrictedWords' : invalidWords.join(', ')} : null;
  }
}
