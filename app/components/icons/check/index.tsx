import React from 'react';

function Check(props: React.SVGProps<SVGElement> & { title?: string }) {
  const title = props.title || 'check';

  return (
    <svg
      height="48"
      width="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g>
        <path
          d="M42.164 4.01399L24.164 1.01399C24.055 0.995988 23.945 0.995988 23.836 1.01399L5.836 4.01399C5.354 4.09399 5 4.51099 5 4.99999V26C5 32.059 8.256 37.612 14.414 42.061C17.264 44.109 20.384 45.753 23.684 46.948C23.889 47.017 24.111 47.017 24.316 46.948C27.616 45.753 30.736 44.109 33.586 42.061C39.744 37.612 43 32.059 43 26V4.99999C43 4.51099 42.646 4.09399 42.164 4.01399Z"
          fill="url(#nc-ui-1-0_linear_43_137)"
        />
        <path
          d="M42.164 4.01401L24.164 1.01401C24.11 1.00501 24.055 1.01401 24 1.01401V47C24.107 47 24.214 46.983 24.316 46.948C27.616 45.753 30.736 44.109 33.586 42.061C39.744 37.612 43 32.059 43 26V5.00001C43 4.51101 42.646 4.09401 42.164 4.01401Z"
          fill="#3CB34B"
        />
        <path
          d="M21.349 32.177L13.879 24.707C13.488 24.316 13.488 23.683 13.879 23.293L15.293 21.879C15.684 21.488 16.317 21.488 16.707 21.879L21.887 27.059L33.137 13.939C33.496 13.52 34.127 13.471 34.546 13.83L36.064 15.129C36.484 15.488 36.532 16.12 36.173 16.539L22.816 32.12C22.437 32.562 21.762 32.588 21.35 32.176L21.349 32.177Z"
          fill="url(#nc-ui-1-1_linear_43_137)"
        />
        <defs>
          <linearGradient
            id="nc-ui-1-0_linear_43_137"
            gradientUnits="userSpaceOnUse"
            x1="24"
            x2="24"
            y1="1.00049"
            y2="46.9997"
          >
            <stop stopColor="#6AD084" />
            <stop offset="1" stopColor="#3CB34B" />
          </linearGradient>
          <linearGradient
            id="nc-ui-1-1_linear_43_137"
            gradientUnits="userSpaceOnUse"
            x1="24.9997"
            x2="24.9997"
            y1="13.5898"
            y2="32.469"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D8F3E0" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export default Check;
