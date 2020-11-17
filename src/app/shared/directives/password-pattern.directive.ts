import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';
import { CustomValidators } from '../classes/custom-validators';

@Directive({
  selector: '[appPasswordPattern]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordPatternDirective, multi:true}]
})
export class PasswordPatternDirective implements Validator {
  @Input('appPasswordPattern') passwordPattern: string;

  validate(control: AbstractControl): {[key: string]: any} | null {

    return this.passwordPattern? CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }):null;
  }
}
