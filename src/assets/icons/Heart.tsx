export default function Heart({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <g transform="translate(24 0) scale(-1 1)">
        <g>
          <path
            d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07Z"
            opacity="1"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657a5 5 0 0 1 7.07-7.071a5 5 0 0 1 7.072 7.071Z"
          />
        </g>
      </g>
    </svg>
  );
}
