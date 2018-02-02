/**
 * @file 电话输入框
 */

'use strict';

import React from 'react';
import classNames from 'classnames';
import $ from 'jquery';

const NumberInput = ( props ) => {

	const handleValue = (e) => {
		let oInputClose = $(e.target).parent().find('.input-close')
		props.onChange({
			mobile: e.target.value
		});
		if(e.target.value!=""){
			oInputClose.css('display','block')
		}else {
			oInputClose.css('display','none')
		}
	};

	const clearInput = (e) => {
		props.onChange({
			mobile: ""
		});
		$(e.target).parent().find("input")[0].value="";
		$(e.target).css("display","none")
	}

	let classnames = classNames({
		'number-input': true
	});
	let inputTitle = props.title;
	let inputClose = props.hasClose ? (
		<i className="iconfont icon-close input-close" onClick={ clearInput } style={{display:'none'}}/>
	):("");

	return (
		<li>
			<label className={ classnames }>
				<span className="input-title">{ inputTitle }</span>
				<input onChange={ handleValue } type="tel" className="input" placeholder="请输入手机号" maxLength="11" name="userName" />
				{ inputClose }
				{ props.children }
			</label>
		</li>
	);
};

NumberInput.defaultProps = {
	onChange: () => {},
	hasClose: true,
	title: '输入框'
};

export default NumberInput;