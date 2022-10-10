const Button = ({
  className = '',
  children,
  ...props
}) => {
  const baseClassName = 'border-2 border-black dark:border-gray-400 rounded-lg shadow-sm dark:shadow-cool-gray-sm py-2 px-4'
  const finalClassName = `${baseClassName} ${className}`
  return (
    <button
      {...props}
      className={finalClassName}
    >
      {children}
    </button>
  )
}

export default Button