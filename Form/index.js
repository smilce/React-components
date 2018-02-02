/**
 * @file form表单
 */

'use strict';

//引入form的样式
require('./form.less');

//电话输入框
import NumberInput from './number-input';
//密码输入框
import PasswordInput from './password-input';
//验证码输入框
import VCodeInput from './v-code-input';
//根据图片填写的验证码输入框
import VCodeImgInput from './v-code-img-input';
// 密码强度
import PasswordLevel from './password-level';
//按钮
import Button from './button';
//按钮
import Btn from './btn';


export { NumberInput }
export { PasswordInput }
export { VCodeInput }
export { VCodeImgInput }
export { PasswordLevel }
export { Button }
export { Btn }

export default {
	NumberInput,
	PasswordInput,
	VCodeInput,
	VCodeImgInput,
	PasswordLevel,
	Button,
	Btn
}