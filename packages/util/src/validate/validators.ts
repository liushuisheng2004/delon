import { AbstractControl, ValidationErrors } from '@angular/forms';
import { isNum, isInt, isDecimal, isIdCard, isMobile } from './validate';

/** 一套日常验证器 */
// tslint:disable-next-line:class-name
export class _Validators {
  /** 是否为数字 */
  static num(control: AbstractControl): ValidationErrors | null {
    return isNum(control.value) ? null : { num: true };
  }

  /** 是否为整数 */
  static int(control: AbstractControl): ValidationErrors | null {
    return isInt(control.value) ? null : { int: true };
  }

  /** 是否为小数 */
  static decimal(control: AbstractControl): ValidationErrors | null {
    return isDecimal(control.value) ? null : { decimal: true };
  }

  /** 是否为身份证 */
  static idCard(control: AbstractControl): ValidationErrors | null {
    return isIdCard(control.value) ? null : { idCard: true };
  }

  /** 是否为手机号 */
  static mobile(control: AbstractControl): ValidationErrors | null {
    return isMobile(control.value) ? null : { mobile: true };
  }
}
