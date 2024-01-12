// icon:207-eye | Icomoon https://icomoon.io/ | Keyamoon
import * as React from "react";

function Eye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5zm3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.594 7.594 0 01-2.335 2.348 7.326 7.326 0 01-7.889 0A7.615 7.615 0 011.721 8a7.594 7.594 0 012.52-2.462 4 4 0 107.518 0c.062.037.124.075.185.114zM8 6.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 018 6.5z"
      />
    </svg>
  );
}

export default Eye;