import React from "react";

export default function AzarashiSvg(props: {
  bodyColor: string;
  mouseColor: string;
  cheekColor: string;
  eyeColor: string;
}): JSX.Element {
  return (
    <>
      <svg
        width="400"
        viewBox="0 0 732 497"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="main">
          <path
            id="body_fill"
            d="M306.001 3.00009C495 20 560 125 588 278C641 229 708 258 730 295C718 310 698 315 668 315C692 322.5 717 343 717 363C692 384 611 378 579.5 322.5C513 391 419 431 287 431C223.541 431 154.11 417.634 101 387.415C21.3562 440.771 -19.3147 426.741 45.0347 341C28.5203 320.344 17.4453 295.791 14.0002 267C-3.46988 121 158 -10.3121 306.001 3.00009Z"
            fill={props.bodyColor}
          />
          <path
            id="body_stroke"
            d="M45.0347 341C28.5203 320.344 17.4453 295.791 14.0002 267C-3.46988 121 158 -10.3121 306.001 3.00009C495 20 560 125 588 278C641 229 708 258 730 295C718 310 698 315 668 315C692 322.5 717 343 717 363C692 384 611 378 579.5 322.5C513 391 419 431 287 431C223.541 431 154.11 417.634 101 387.415M45.0347 341C59.8428 359.522 79.0243 374.911 101 387.415M45.0347 341C-19.3147 426.741 21.3562 440.771 101 387.415"
            stroke="#1E1E1E"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            id="fin_left"
            d="M369.5 494.5C354.3 498.1 281.5 458.5 254 399.5L369.5 385.5C388 419 384.7 490.9 369.5 494.5Z"
            fill={props.bodyColor}
            stroke="#1E1E1E"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </g>
        <circle
          id="eye_right"
          cx="133.5"
          cy="225.5"
          r="17.5"
          fill={props.eyeColor}
        />
        <circle
          id="eye_left"
          cx="236.5"
          cy="228.5"
          r="17.5"
          fill={props.eyeColor}
        />
        <g id="cheek_right" filter="url(#filter0_f_0_1)">
          <circle cx="76" cy="259" r="25" fill={props.cheekColor} />
        </g>
        <g id="cheek_left" filter="url(#filter1_f_0_1)">
          <circle cx="288" cy="268" r="25" fill={props.cheekColor} />
        </g>
        <path
          id="mouse"
          d="M179.102 268.347C146.242 264.824 110.683 288.737 117.956 311.101C125.23 333.464 214.281 341.851 226.096 321.164C237.912 300.478 211.963 271.871 179.102 268.347Z"
          fill={props.mouseColor}
        />
        <g id="nose">
          <path
            id="nose_fill"
            d="M170.632 297.758C160.799 296.986 153.125 288.094 155.988 282.717C159.214 276.655 187.89 278.188 189.243 285.929C190.337 292.188 179.763 298.475 170.632 297.758Z"
            fill="#1E1E1E"
          />
          <path
            id="nose_stroke"
            d="M170.632 297.758C160.799 296.986 153.125 288.094 155.988 282.717C159.214 276.655 187.89 278.188 189.243 285.929C190.337 292.188 179.763 298.475 170.632 297.758ZM170.632 297.758C165.753 316.133 138.27 316.692 134.685 302.714M170.632 297.758C172.923 316.692 194.431 321.164 204.588 309.983"
            stroke="#1E1E1E"
            strokeWidth="4"
          />
        </g>
        <g id="beard">
          <path
            id="beard_right1"
            d="M64.5 261C44.5 261 13.5 261 1.5 274.5"
            stroke="#1E1E1E"
            strokeWidth="4"
          />
          <path
            id="beard_right2"
            d="M63.5 271C43.5 271 16 278 3 293"
            stroke="#1E1E1E"
            strokeWidth="4"
          />
          <path
            id="beard_left1"
            d="M297 282C317 282 349 298.5 357 316"
            stroke="#1E1E1E"
            strokeWidth="4"
          />
          <path
            id="beard_left2"
            d="M295 271C315 271 349.5 277 360.5 293"
            stroke="#1E1E1E"
            strokeWidth="4"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="41"
            y="224"
            width="70"
            height="70"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="5"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <filter
            id="filter1_f_0_1"
            x="253"
            y="233"
            width="70"
            height="70"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="5"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
