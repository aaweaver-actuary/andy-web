const LoginFormTextbox = ({
  htmlFor,
  labelText,
  htmlID,
  name,
  type,
  autoComplete,
  // isRequired,
  placeholderText,
}) => {
  const classes =
    'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm';
  return (
    <div>
      <label htmlFor={htmlFor} className="sr-only">
        {labelText}
      </label>
      <input
        id={htmlID}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className={classes}
        placeholder={placeholderText}
      />
    </div>
  );
};

export default LoginFormTextbox;
