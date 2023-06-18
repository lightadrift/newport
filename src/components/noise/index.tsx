export function Noise() {
  return (
    <div className="pointer-events-none absolute w-full h-full left-0 top-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 700 700"
        width="700"
        height="700"
      >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.2"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="15"
              specularConstant="0.75"
              specularExponent="20"
              lighting-color="#cccccc"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="100"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
        <rect width="700" height="700" fill="transparent"></rect>
        <rect
          width="700"
          height="700"
          fill="#f4edfe"
          filter="url(#nnnoise-filter)"
        ></rect>
      </svg>
    </div>
  );
}
