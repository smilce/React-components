/**
 * Created by dell on 2016-2-2.
 */
import React from 'react';

require('./confirm.less');

class Confirm extends React.Component {
  render(){
    let props=this.props;

    let confirmTitle=props.confirmContent;
    let confirmContent="";
    let btnCencle="取消";
    let btnConfirm="确定";

    let btnLength=props.children && props.children.length;
    switch (btnLength){
      case 1:
        btnCencle=props.children[0].props.children;
        btnConfirm="";
        break;
      case 2:
        btnCencle=props.children[0].props.children;
        btnConfirm=props.children[1].props.children;
        break;
      default :
        break;
    }

    let cancelAction= function (e) {
      e.preventDefault();
      props.cancel && props.cancel();
      props.callbackParent()
    };
    let submitAction= function () {
      props.submit();
    };

    return(
      <div>
        <div className="dialog-mask" onClick={ cancelAction }></div>
        <div className="dialog-confirm">
          <div className="confirm-title">
            <p>{ confirmTitle }</p>
          </div>
          <div className="confirm-content">
            <p>{ confirmContent }</p>
          </div>
          <div className="confirm-btn">
            <button className="confirm-item confirm-cancel" onClick={ cancelAction.bind(this) }>{ btnCencle }</button><button className="confirm-item" onClick={ submitAction }>{ btnConfirm }</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Confirm;