import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[max-word-count]',
  inputs: ['rawCount: max-word-count'],
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaxWordCountValidator,
    multi: true
  }]
})
export class MaxWordCountValidator implements Validator {
  rawCount: string;

  get maxCount(): number {
    return parseInt(this.rawCount);
  }

  validate(c: FormControl): { [key: string]: any } {
    console.log('validating..');
    let wordCt: number = ((c.value || '').match(/\S+/g) || []).length;
    return wordCt <= this.maxCount ? null : {maxwords: {limit: this.maxCount, actual: wordCt}};
  }

}
