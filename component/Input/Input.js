const Input = ({
  className = '',
  ...props
}) => {
  const baseClassName = 'rounded-lg border-2 border-black dark:border-gray-200 shadow-sm dark:shadow-cool-gray-sm text-dark-500 dark:text-gray-300  bg-transparent py-3 px-4'
  const finalClassName = `${baseClassName} ${className}`
  return (
    <input
      {...props}
      className={finalClassName}
    />
  )
}

export default Input