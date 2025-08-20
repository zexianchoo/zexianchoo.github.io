const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {
    return (
      <button
        className={`flex justify-center items-center px-3 py-2 border font-montserrat text-sm leading-none 
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white font-semibold font-palanquin border-coral-red drop-shadow-md"
        } rounded-full ${fullWidth && "w-full"} sm:px-7 sm:py-4 sm:text-lg`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        )}
      </button>
    );
  };
  
  export default Button;