import React from 'react';

function ManCivilian(props: React.SVGProps<SVGElement> & { title?: string }) {
  const title = props.title || 'user s frame 2';

  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g>
        <path
          d="M43,47H5c-2.2091391,0-4-1.7908592-4-4V5c0-2.2091391,1.7908609-4,4-4h38c2.2091408,0,4,1.7908609,4,4v38 C47,45.2091408,45.2091408,47,43,47z"
          fill="#B4B4B4"
        />
        <path
          d="M24,29c-4.4182796,0-8-3.5817204-8-8v-3 c0-4.4182816,3.5817204-8,8-8s8,3.5817184,8,8v3C32,25.4182796,28.4182796,29,24,29z"
          fill="#F1D9C5"
          fillRule="evenodd"
        />
        <path
          d="M38.2770386,35.2519531L29,31c0,0-2,2-5,2s-5-2-5-2 l-9.2769775,4.2519531C8.2166748,35.9423218,7,37.8392944,7,39.4914551v7.5081177L7.000061,47H40.999939L41,46.9995728v-7.5081177 C41,37.8416748,39.7808838,35.9412231,38.2770386,35.2519531z"
          fill="#42A6DD"
          fillRule="evenodd"
        />
        <path
          d="M28,14c2.2091408,0,4,1.7908592,4,4v-5.000061 C32,10.7996483,30.2085896,9,27.9987698,9H27.5l-1.0499496-2.0998993c-0.2539501-0.5079002-0.8632202-0.7348289-1.3729-0.5309601 l-6.2915897,2.5166397C17.2462902,9.5014801,16,11.3438911,16,13.0016708V18c0-2.2091408,1.7908592-4,4-4H28z"
          fill="#444444"
          fillRule="evenodd"
        />
        <rect
          height="11.4130402"
          width="10"
          fill="#DAC2A7"
          fillRule="evenodd"
          x="19"
          y="23.73913"
        />
      </g>
    </svg>
  );
}

function WomanCivilian(props: React.SVGProps<SVGElement> & { title?: string }) {
  const title = props.title || 'user s frame';

  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g>
        <path
          d="M43,47H5c-2.2091391,0-4-1.7908592-4-4V5c0-2.2091391,1.7908609-4,4-4h38c2.2091408,0,4,1.7908609,4,4v38 C47,45.2091408,45.2091408,47,43,47z"
          fill="#B4B4B4"
        />
        <path
          d="M14,18c0-5.52285,4.47715-10,10-10s10,4.47715,10,10v7.9934998 C34,28.2062302,32.2075272,30,30.0007706,30H17.9992294C15.7905197,30,14,28.2060509,14,25.9934998V18z"
          fill="#444444"
          fillRule="evenodd"
        />
        <path
          d="M37.3091431,35.154541L29,31c0,0-2,2-5,2s-5-2-5-2 l-8.309082,4.154541C9.1981201,35.9009399,8,37.8392944,8,39.4914551v7.5081177L8.000061,47H39.999939L40,46.9995728v-7.5081177 C40,37.8416748,38.7952271,35.897583,37.3091431,35.154541z"
          fill="#ED69AB"
          fillRule="evenodd"
        />
        <path
          d="M16,19.5454483V21c0,4.4109097,3.5890903,8,8,8s8-3.5890903,8-8 v-1.4545517c0-1.2049789-0.9768295-2.1818199-2.1818199-2.1818199c-2.533041,0-4.730011-1.4388599-5.8181801-3.5438499 c-1.0881691,2.10499-3.2851391,3.5438499-5.8181801,3.5438499C16.9768295,17.3636284,16,18.3404694,16,19.5454483z"
          fill="#EAD8C5"
          fillRule="evenodd"
        />
        <path
          d="M32.9998398,17.9450893C32.6715622,17.9813709,32.3379517,18,32,18 c-3.4829292,0-6.5037708-1.9784393-8-4.8727989C22.5037708,16.0215607,19.4829292,18,16,18 c-0.3379498,0-0.6715603-0.0186291-0.9998398-0.0549107C15.0297098,12.9998016,19.0477505,9,24,9 S32.9702911,12.9998016,32.9998398,17.9450893z"
          fill="#444444"
          fillRule="evenodd"
        />
        <rect
          height="11.4130402"
          width="10"
          fill="#DAC2A7"
          fillRule="evenodd"
          x="19"
          y="24"
        />
      </g>
    </svg>
  );
}

export { ManCivilian, WomanCivilian };
