import './Button.scss';

const Button = ({ text, modifiers, ...buttonAttributes }) => (
    <button className={`cta cta${modifiers}`} type="button" {...buttonAttributes}>
        {text}
    </button>
);

export default Button;