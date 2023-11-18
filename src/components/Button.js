const Button = ({ children, ...props }) => {

    return (
        <button {...props} className="" >
            {children}
        </button>
    )
}

export default Button;