import React from 'react'
import './Button.css'

const STYLES = ['btn--primary','btn--outline'];

const SIZE=['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR =['primary','blue','red','green'];

const Button =({children,type,onClick,buttonStyle,buttonsize,buttonColor})=>{
    const checkButtonStyle=STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
    const checkButtonSize=SIZE.includes(buttonsize)?buttonsize:buttonsize;
    const checkButtonColor=COLOR.includes(buttonColor)?buttonColor:null;

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
}
export default Button