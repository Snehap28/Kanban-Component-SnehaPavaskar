import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
 return (
  <button
    type="button"
    className={`px-4 py-2 rounded-lg font-semibold 
                ${primary ? 'bg-yellow-500 text-black' : 'bg-violet-200 text-black'} 
                ${size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'}
                hover:opacity-80 transition`}
    style={{ backgroundColor }}
    {...props}
  >
    {label}
  </button>
);
};
