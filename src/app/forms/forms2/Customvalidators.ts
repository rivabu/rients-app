import {AbstractControl} from '@angular/forms';
import {UserInfoService} from "./userInfo.service";
import {map} from 'rxjs/operators';

export class Customvalidators {
  static checkDuplicateEmail(serverService: UserInfoService) {
    console.log('checking duplicates');
    return (control: AbstractControl) => {
      return serverService.checkUsers(control.value).pipe(map(res => {
        console.log(res); return res === 0 ? null : {duplicateEmail: true};
      }));
    };
  }
}
