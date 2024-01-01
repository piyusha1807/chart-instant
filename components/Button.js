import React from "react";

const Button = ({ type, size, children, ...rest }) => {
  return (
    <button
      type="button"
      className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
      {...rest}
    >
      {children}
    </button>
  );
};

const TextButton = ({ type, size, children, ...rest }) => {
  return (
    <button
      type="button"
      className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button, TextButton };
