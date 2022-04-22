import React, {useState}  from 'react'; //optional

function LightSwitchButton(props){
  
  let {light, switchLight} = props

  let handleClick = () => switchLight()

  return (
    <button
      className="LightSwitchButton"
      onClick={handleClick}
    >
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;