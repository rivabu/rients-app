import {AbstractControl} from '@angular/forms';
import {UserInfoService} from "./userInfo.service";
import {map} from 'rxjs/operators';

export class CustomValidators {

  // deze validator geeft een error terug!, hoe moet dat?
  static checkDuplicateEmail(serverService: UserInfoService) {
    console.log('checking duplicates');
    return (control: AbstractControl) => {
      return serverService.checkUsers(control.value).pipe(map(res => {
        console.log(res); return res === 0 ? null : {duplicateEmail: true};
      }));
    };
  }
}
