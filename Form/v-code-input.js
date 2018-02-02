/**
 * @file 注册验证码输入框
 */

'use strict';

import React from 'react';
import classNames from 'classnames';
import $ from 'jquery';

//验证码输入框
class VCodeInput extends React.Component {
	/**
	 * @desc 构造函数
	 * @param props
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * @desc 当验证码修改的时候 调用父容器传过来的方法
	 * @param e
	 */
	handleValue(e) {
		let oInputClose = $(e.target).parent().find('.input-close')
		this.props.onChange({
			vCode: e.target.value
		});
		if(e.target.value!=""){
			oInputClose.css('display','block')
		}else {
			oInputClose.css('display','none')
		}
	}

	/**
	 * 清楚输入的内容
	 * @param e
   */
	clearInput(e){
    this.props.onChange({
			vCode: ''
		});
		$(e.target).parent().find("input")[0].value="";
		$(e.target).css("display","none")
	}

	/**
	 * @desc 返回模版
	 * @returns {XML}
	 */
	render() {
		let inputClose = this.props.hasClose ? (
			<i className="iconfont icon-close input-close" onClick={ this.clearInput.bind(this) } style={{display:'none'}}/>
		):("");
		let classnames = {
			'number-input': true
		}
		if(this.props.className){
			classnames[this.props.className] = true;
		}
		classnames = classNames(classnames);
		return (
			<li>
				<div className={ classnames }>
					<span className="input-wrap">
						<span className="input-title">验证码</span>
					  <input onChange={ function(e) { this.handleValue(e) }.bind(this) } type="tel" className="input-v-code input" placeholder="请输入验证码" />
						{ inputClose }
					</span>
					<a className="input-v-code-sendCode" onClick={ this.props.getVCode }>获取验证码</a>
				</div>
			</li>
		)
	}
}

VCodeInput.defaultProps = {
	getVCode: () => {},
	onChange: () => {},
	hasClose: true
};

export default VCodeInput;