import React from "react";

export default function AzarashiSvg(props: {
  bodyColor: string;
  mouseColor: string;
  cheekColor: string;
  eyeColor: string;
  beardNumber: 2 | 3;
  hatType: "none" | "normal" | "santa" | "witch";
}): JSX.Element {
  return (
    <>
      <svg
        width="100%"
        style={{ maxWidth: "600px" }}
        viewBox="0 0 732 541"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="main">
          <path
            id="body_fill"
            d="M306.001 47.0001C495 64 560 169 588 322C641 273 708 302 730 339C718 354 698 359 668 359C692 366.5 717 387 717 407C692 428 611 422 579.5 366.5C513 435 419 475 287 475C223.541 475 154.11 461.634 101 431.415C21.3562 484.771 -19.3147 470.741 45.0347 385C28.5203 364.344 17.4453 339.791 14.0002 311C-3.46988 165 158 33.6879 306.001 47.0001Z"
            fill={props.bodyColor}
          />
          <path
            id="body_stroke"
            d="M45.0347 385C28.5203 364.344 17.4453 339.791 14.0002 311C-3.46988 165 158 33.6879 306.001 47.0001C495 64 560 169 588 322C641 273 708 302 730 339C718 354 698 359 668 359C692 366.5 717 387 717 407C692 428 611 422 579.5 366.5C513 435 419 475 287 475C223.541 475 154.11 461.634 101 431.415M45.0347 385C59.8428 403.522 79.0243 418.911 101 431.415M45.0347 385C-19.3147 470.741 21.3562 484.771 101 431.415"
            stroke="#1E1E1E"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            id="fin_left"
            d="M369.5 538.5C354.3 542.1 281.5 502.5 254 443.5L369.5 429.5C388 463 384.7 534.9 369.5 538.5Z"
            fill={props.bodyColor}
            stroke="#1E1E1E"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </g>
        <circle
          id="eye_right"
          cx="133.5"
          cy="269.5"
          r="17.5"
          fill={props.eyeColor}
        />
        <circle
          id="eye_left"
          cx="236.5"
          cy="272.5"
          r="17.5"
          fill={props.eyeColor}
        />
        <g id="cheek_right" filter="url(#filter0_f_0_1)">
          <circle cx="76" cy="303" r="25" fill={props.cheekColor} />
        </g>
        <g id="cheek_left" filter="url(#filter1_f_0_1)">
          <circle cx="288" cy="312" r="25" fill={props.cheekColor} />
        </g>
        <path
          id="mouse"
          d="M179.102 312.347C146.242 308.824 110.683 332.737 117.956 355.101C125.23 377.464 214.281 385.851 226.096 365.164C237.912 344.478 211.963 315.871 179.102 312.347Z"
          fill={props.mouseColor}
        />
        <g id="nose">
          <path
            id="nose_fill"
            d="M170.632 341.758C160.799 340.986 153.125 332.094 155.988 326.717C159.214 320.655 187.89 322.188 189.243 329.929C190.337 336.188 179.763 342.475 170.632 341.758Z"
            fill="#1E1E1E"
          />
          <path
            id="nose_stroke"
            d="M170.632 341.758C160.799 340.986 153.125 332.094 155.988 326.717C159.214 320.655 187.89 322.188 189.243 329.929C190.337 336.188 179.763 342.475 170.632 341.758ZM170.632 341.758C165.753 360.133 138.27 360.692 134.685 346.714M170.632 341.758C172.923 360.692 194.431 365.164 204.588 353.983"
            stroke="#1E1E1E"
            strokeWidth="4"
          />
        </g>
        {props.beardNumber === 2 ? (
          <g id="beard">
            <path
              id="beard_right1"
              d="M64.5 305C44.5 305 13.5 305 1.5 318.5"
              stroke="#1E1E1E"
              strokeWidth="4"
            />
            <path
              id="beard_right2"
              d="M63.5 315C43.5 315 16 322 3 337"
              stroke="#1E1E1E"
              strokeWidth="4"
            />
            <path
              id="beard_left1"
              d="M297 326C317 326 349 342.5 357 360"
              stroke="#1E1E1E"
              strokeWidth="4"
            />
            <path
              id="beard_left2"
              d="M295 315C315 315 349.5 321 360.5 337"
              stroke="#1E1E1E"
              strokeWidth="4"
            />
          </g>
        ) : (
          <g id="beard">
            <path
              id="beard_right1"
              d="M65 299C45 299 14 299 2 312.5"
              stroke="#1E1E1E"
              strokeWidth="4"
            />
            <path
              id="beard_right2"
              d="M63.5 309C43.5 309 16 316 3 331"
              stroke="#1E1E1E"
              strokeWidth="4"
            />
            <path
              id="beard_right3"
              d="M62 318C43.4876 318 18.0331 326.909 6 346"
              stroke="#1E1E1E"
              strokeWidth="4"
            />
            <path
              id="beard_left1"
              d="M294 310C314 310 348.5 316 359.5 332"
              stroke="#1E1E1E"
              strokeWidth="4"
            />
            <path
              id="beard_left2"
              d="M297 320C317 320 349 336.5 357 354"
              stroke="#1E1E1E"
              strokeWidth="4"
            />
            <path
              id="beard_left3"
              d="M298 328C316.667 328 346.533 348.382 354 370"
              stroke="#1E1E1E"
              strokeWidth="4"
            />
          </g>
        )}
        {props.hatType === "normal" && (
          <path
            id="hat_normal"
            d="M293.416 151.949C246.915 163.482 147.054 160.187 108.938 147.007C102.84 144.898 127.996 137.121 140.193 126.412C152.39 115.703 150.369 78.6178 158.488 68.7473C170.685 53.9193 231.875 54.9247 243.866 68.7473C255.301 81.9278 250.727 112.408 258.35 129.707C265.973 147.007 298.752 150.626 293.416 151.949Z"
            fill="#FFB800"
            stroke="black"
            strokeWidth="4"
          />
        )}
        {props.hatType === "santa" && (
          <g id="hat_santa">
            <path
              id="hat_santa_main"
              d="M326.5 56.6023C330 32.1023 184.837 -34.8977 123.998 145.602C122.57 149.84 277.236 150.546 276.998 145.602C272 41.6023 325.929 60.6023 326.5 56.6023Z"
              fill="#C00000"
              stroke="black"
              strokeWidth="4"
            />
            <circle
              id="hat_santa_tip"
              cx="331"
              cy="53.1024"
              r="13"
              fill="white"
              stroke="black"
              strokeWidth="4"
            />
            <rect
              id="hat_santa_brim"
              x="118"
              y="140.102"
              width="164"
              height="17"
              rx="8.5"
              fill="white"
              stroke="black"
              strokeWidth="4"
            />
          </g>
        )}
        {props.hatType === "witch" && (
          <path
            id="hat_witch"
            d="M112.295 131.207C75.1257 81.8949 139.961 144.903 159.289 118.423C169.286 104.726 183.688 56.7872 190.744 41.2642C197.801 25.7411 225.232 2 253.277 2C271.468 2 352.949 59.5266 349.918 70.0275C348.673 74.3397 274.962 44.9595 262.372 51.3085C249.782 57.6576 242.665 102.955 257.067 118.423C285.111 148.545 353.707 84.4678 308.987 139.881C290.565 162.709 142.235 170.927 112.295 131.207Z"
            fill="#5B0FA7"
            stroke="black"
            strokeWidth="4"
          />
        )}
        <defs>
          <filter
            id="filter0_f_0_1"
            x="41"
            y="268"
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
            y="277"
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
