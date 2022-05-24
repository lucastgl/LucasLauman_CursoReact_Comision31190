import './Button.css'

const Button = (props) => {
    return <button className='botonIncDec' onClick={props.handleClick}>{props.children}</button>
}

export default Button;