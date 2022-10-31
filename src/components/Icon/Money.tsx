import { SVGAttributes } from 'react';

interface IMoney {
  size: number;
}

interface MoneyProps extends SVGAttributes<HTMLOrSVGElement> {}

export const Money = ({ size }: IMoney, props: MoneyProps) => {
  return (
    <svg
      width={size}
      height="auto"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.833 1a1 1 0 011-1h13a1 1 0 011 1v7a1 1 0 01-1 1h-13a1 1 0 01-1-1V1zm14 0h-13v7h13V1z"
        fill="#8047F8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.333 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-2.5 1.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM10.957.17a.5.5 0 01.706-.046l4 3.5a.5.5 0 11-.659.752l-4-3.5a.5.5 0 01-.047-.705z"
        fill="#8047F8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.71 4.67a.5.5 0 01-.047.706l-4 3.5a.5.5 0 11-.659-.752l4-3.5a.5.5 0 01.706.047zM5.71.17a.5.5 0 01-.047.706l-4 3.5a.5.5 0 11-.659-.752l4-3.5A.5.5 0 015.71.17z"
        fill="#8047F8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.957 4.67a.5.5 0 01.706-.046l4 3.5a.5.5 0 11-.659.752l-4-3.5a.5.5 0 01-.047-.705z"
        fill="#574F4D"
      />
    </svg>
  );
};
