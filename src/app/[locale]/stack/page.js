"use client";

import Link from "next/link";

const Stack = () => {
  return (
    <div className="w-1/2 max-sm:w-2/3">
      <h1 className="underline underline-offset-2 mb-5">Stack</h1>
      <div className="mt-4 flex flex-col items-center">
        <h2>Backend</h2>
        <div className="flex space-x-4 mb-5">
          <div>
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stack-svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z"
                fill="url(#paint0_linear_87_8204)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z"
                fill="url(#paint1_linear_87_8204)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_87_8204"
                  x1="12.4809"
                  y1="2"
                  x2="12.4809"
                  y2="22.7407"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#327EBD" />
                  <stop offset="1" stop-color="#1565A7" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_87_8204"
                  x1="19.519"
                  y1="9.25928"
                  x2="19.519"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFDA4B" />
                  <stop offset="1" stop-color="#F9C600" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-center">Python</p>
          </div>
          <div>
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="stack-svg"
            >
              <path
                d="M14.135,4H18.1V22.169a26.218,26.218,0,0,1-5.143.535c-4.842-.005-7.362-2.168-7.362-6.322,0-4,2.673-6.6,6.816-6.6a6.448,6.448,0,0,1,1.724.2V4Zm0,9.142a3.992,3.992,0,0,0-1.337-.2c-2,0-3.163,1.223-3.163,3.366,0,2.087,1.107,3.239,3.138,3.239a9.355,9.355,0,0,0,1.362-.1v-6.3Z"
                fill="#44b78b"
              />
              <path
                d="M24.4,10.059v9.1c0,3.133-.235,4.639-.923,5.938A6.316,6.316,0,0,1,20.237,28l-3.678-1.733A5.708,5.708,0,0,0,19.7,23.638c.566-1.121.745-2.42.745-5.837V10.059Z"
                fill="#44b78b"
              />
              <rect
                x="20.441"
                y="4.02"
                width="3.964"
                height="4.028"
                fill="#44b78b"
              />
            </svg>
            <p className="text-center">Django</p>
          </div>
          <div>
            {/* Docker */}
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="stack-svg"
            >
              <path
                d="M16.54,12.663H19.4v2.924h1.446a6.272,6.272,0,0,0,1.988-.333,5.091,5.091,0,0,0,.966-.436,3.584,3.584,0,0,1-.67-1.849,3.907,3.907,0,0,1,.7-2.753l.3-.348.358.288a4.558,4.558,0,0,1,1.795,2.892,4.375,4.375,0,0,1,3.319.309l.393.226-.207.4a4.141,4.141,0,0,1-4.157,1.983c-2.48,6.168-7.871,9.088-14.409,9.088-3.378,0-6.476-1.263-8.241-4.259l-.029-.049L2.7,20.227a8.316,8.316,0,0,1-.659-4.208l.04-.433H4.526V12.663H7.387V9.8h5.721V6.942H16.54v5.721Z"
                fill="#0096e6"
              />
              <path
                d="M12.006,24.567a6.022,6.022,0,0,1-3.14-3.089,10.329,10.329,0,0,1-2.264.343q-.5.028-1.045.028-.632,0-1.331-.037a9.051,9.051,0,0,0,7,2.769Q11.618,24.581,12.006,24.567Z"
                fill="#fff"
              />
              <path
                d="M7.08,13.346h.2v2.067h-.2Zm-.376,0h.2v2.067H6.7V13.346Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.368,0h.2v2.067h-.2V13.346ZM5,13.14H7.482v2.479H5Zm2.859-2.861h2.48v2.479H7.863Zm2.077.207h.2v2.066h-.2Zm-.376,0h.2v2.066h-.2Zm-.376,0h.2v2.066h-.2V10.486Zm-.376,0h.2v2.066h-.2Zm-.376,0h.2v2.066h-.2Zm-.368,0h.2v2.066h-.2Zm-.207,2.653h2.48v2.48H7.863V13.14Zm2.077.207h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2V13.346Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.368,0h.2v2.067h-.2Zm2.654-.207H13.2v2.48h-2.48V13.14Zm2.076.207H13v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.368,0h.2v2.067h-.2Zm-.206-3.067H13.2v2.479h-2.48V10.279Zm2.076.207H13v2.066h-.2Zm-.376,0h.2v2.066h-.2Zm-.376,0h.2v2.066h-.2Zm-.376,0h.2v2.066h-.2Zm-.376,0h.2v2.066h-.2Zm-.368,0h.2v2.066h-.2Zm2.654,2.653h2.479v2.48h-2.48V13.14Zm2.076.207h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.368,0h.192v2.067h-.2V13.346Zm-.206-3.067h2.479v2.479h-2.48V10.279Zm2.076.207h.2v2.066h-.2Zm-.376,0h.2v2.066h-.2Zm-.376,0h.2v2.066h-.2Zm-.376,0h.2v2.066h-.2Zm-.376,0h.2v2.066h-.2Zm-.368,0h.192v2.066h-.2V10.486Zm-.206-3.067h2.479V9.9h-2.48V7.419Zm2.076.206h.2V9.691h-.2Zm-.376,0h.2V9.691h-.2Zm-.376,0h.2V9.691h-.2Zm-.376,0h.2V9.691h-.2Zm-.376,0h.2V9.691h-.2Zm-.368,0h.192V9.691h-.2V7.625Zm2.654,5.514h2.479v2.48h-2.48V13.14Zm2.076.207h.195v2.067h-.2V13.346Zm-.376,0h.206v2.067h-.206Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.2Zm-.376,0h.2v2.067h-.205V13.346Zm-.368,0h.2v2.067h-.194V13.346Z"
                fill="#fff"
              />
              <path
                d="M10.188,19.638a.684.684,0,1,1-.684.684A.684.684,0,0,1,10.188,19.638Zm0,.194a.489.489,0,0,1,.177.033.2.2,0,1,0,.275.269.49.49,0,1,1-.453-.3Z"
                fill="#fff"
              />
            </svg>
            <p className="text-center">Docker</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center mb-5">
        <h2>Frontend</h2>
        <div className="flex space-x-4 mb-5">
          <div>
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="stack-svg"
            >
              <g>
                <path
                  d="M0,0 L256,0 L256,256 L0,256 L0,0 Z"
                  fill="#F7DF1E"
                ></path>
                <path
                  d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
                  fill="#000000"
                ></path>
                <path
                  d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
                  fill="#000000"
                ></path>
              </g>
            </svg>
            <p className="text-center">Javascript</p>
          </div>
          <div>
            <svg
              viewBox="-25.6 -25.6 307.20 307.20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="100px"
              height="100px"
              transform="matrix(1, 0, 0, 1, 0, 0)"
              className="stack-svg"
            >
              <g
                id="SVGRepo_bgCarrier"
                stroke-width="0"
                transform="translate(21.760000000000005,21.760000000000005), scale(0.83)"
              >
                <rect
                  x="-25.6"
                  y="-25.6"
                  width="307.20"
                  height="307.20"
                  rx="153.6"
                  fill="#ffffff"
                  strokewidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path
                    d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                    fill="#000000"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
            <p className="text-center">Next.js</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center mb-5">
        <h2>Database</h2>
        {/* PostgreSQL */}
        <div className="flex items-center mb-5">
          <svg
            width="100px"
            height="100px"
            viewBox="-4 0 264 264"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="stack-svg"
          >
            <g>
              <path
                d="M255.007926,158.085617 C253.473109,153.437413 249.452194,150.199279 244.251788,149.42182 C241.799982,149.055852 238.991667,149.211935 235.668988,149.897164 C229.877358,151.092028 225.580342,151.546679 222.44449,151.635363 C234.280794,131.650217 243.905921,108.859714 249.446873,87.4065589 C258.406282,52.7182633 253.61855,36.9154365 248.023797,29.7669469 C233.217182,10.8477783 211.614448,0.683454965 185.55152,0.371879908 C171.649478,0.202198614 159.443658,2.94725173 153.077358,4.92075751 C147.149155,3.87547344 140.774577,3.29134411 134.08606,3.18315012 C121.550337,2.9833164 110.473164,5.71595381 101.008259,11.332582 C95.7670577,9.56127483 87.3580785,7.06335335 77.6460416,5.46882217 C54.8035104,1.71868822 36.3939769,4.64110855 22.9282587,14.153903 C6.62230023,25.6721293 -0.937090069,45.6838799 0.461154734,73.6339954 C0.904572748,82.5082679 5.86908083,109.507695 13.6850624,135.114199 C18.1771824,149.831538 22.9672794,162.053912 27.9223279,171.443732 C34.9490254,184.758688 42.4676212,192.600092 50.9085266,195.415501 C55.6400924,196.992296 64.2358984,198.09552 73.2774873,190.566873 C74.4232794,191.953885 75.9515935,193.33321 77.9812656,194.613801 C80.5578199,196.239076 83.7090439,197.566965 86.8555381,198.353885 C98.1969885,201.189395 108.820102,200.479926 117.882975,196.506309 C117.93855,198.117986 117.981709,199.658125 118.018365,200.987788 C118.07867,203.145164 118.137792,205.259972 118.217016,207.237617 C118.753848,220.612286 119.663741,231.011326 122.359723,238.286928 C122.507529,238.687778 122.706771,239.29733 122.917247,239.943538 C124.261691,244.062005 126.511298,250.955677 132.232573,256.355326 C138.158411,261.947714 145.325229,263.663446 151.888998,263.662855 C155.180933,263.662855 158.322106,263.231261 161.076619,262.640628 C170.897441,260.536462 182.050291,257.329663 190.118134,245.84218 C197.745515,234.981986 201.453672,218.625182 202.124711,192.851363 C202.211621,192.122975 202.292028,191.427104 202.369478,190.763751 C202.421506,190.316194 202.474716,189.858587 202.528517,189.402162 L204.325838,189.560018 L204.788767,189.591353 C214.791095,190.047187 227.021155,187.925875 234.532065,184.437062 C240.467363,181.68255 259.485857,171.642383 255.007926,158.085617"
                fill="#000000"
              ></path>
              <path
                d="M237.905589,160.722476 C208.165838,166.857016 206.121386,156.78788 206.121386,156.78788 C237.521885,110.194697 250.64824,51.0516028 239.320388,36.5766651 C208.417109,-2.90823095 154.921977,15.7655797 154.029229,16.2503834 L153.741894,16.3018199 C147.866309,15.0821247 141.290716,14.3555104 133.900416,14.2349007 C120.443566,14.0143741 110.236083,17.7627344 102.490457,23.636545 C102.490457,23.636545 7.06039723,-15.6768961 11.4987159,73.0806097 C12.4429007,91.9631224 38.5625866,215.954032 69.7171363,178.502947 C81.1041109,164.808425 92.1061986,153.229303 92.1061986,153.229303 C97.5708822,156.859418 104.112776,158.711132 110.970975,158.046005 L111.503667,157.593718 C111.338125,159.294079 111.413801,160.957192 111.717099,162.925968 C103.691233,171.893062 106.049626,173.467492 90.0055797,176.770069 C73.7711594,180.115806 83.308194,186.072388 89.5349654,187.629081 C97.0837136,189.516859 114.54788,192.190965 126.34812,175.672166 L125.877506,177.556988 C129.022226,180.075603 131.230448,193.940397 130.860342,206.508637 C130.490236,219.077469 130.243104,227.706383 132.720924,234.446337 C135.198744,241.186291 137.668286,256.351187 158.759612,251.831871 C176.383409,248.055132 185.516046,238.268009 186.786587,221.94254 C187.688203,210.336222 189.728517,212.051954 189.857404,201.675381 L191.493912,196.762901 C193.381099,181.029838 191.793663,175.95418 202.651492,178.314938 L205.290125,178.546697 C213.2817,178.9103 223.741044,177.261376 229.879723,174.408129 C243.098309,168.273589 250.93794,158.031224 237.904406,160.722476 L237.905589,160.722476"
                fill="#336791"
              ></path>
              <path
                d="M108.076342,81.5250624 C105.396915,81.152 102.969349,81.4972748 101.741376,82.426679 C101.050236,82.9499122 100.836804,83.5559169 100.779455,83.973321 C100.625145,85.0783187 101.399649,86.2997875 101.874993,86.9300323 C103.220619,88.7137552 105.18703,89.9399538 107.133339,90.2101432 C107.415353,90.249164 107.695594,90.2680831 107.974651,90.2680831 C111.220471,90.2680831 114.170679,87.7411917 114.430818,85.8758799 C114.755991,83.5399538 111.36473,81.9826697 108.076342,81.5250624"
                fill="#FFFFFF"
              ></path>
              <path
                d="M196.860453,81.5989654 L196.859861,81.5989654 C196.604453,79.7679446 193.345626,79.2458938 190.253524,79.6757136 C187.166152,80.1061247 184.171603,81.4996397 184.421691,83.3347991 C184.622707,84.7620139 187.19867,87.198448 190.249386,87.1978568 C190.506568,87.1978568 190.766707,87.1807113 191.028619,87.1440554 C193.064794,86.8620416 194.558818,85.5690346 195.268286,84.8235012 C196.349635,83.688351 196.974559,82.4219492 196.860453,81.5989654"
                fill="#FFFFFF"
              ></path>
              <path
                d="M247.802088,160.025423 C246.66812,156.596323 243.018494,155.492508 236.954309,156.745312 C218.949173,160.461155 212.501284,157.886965 210.38352,156.327908 C224.378975,135.007187 235.89188,109.236323 242.102688,85.1906513 C245.04521,73.8007206 246.670485,63.2231316 246.802919,54.601903 C246.949543,45.1375889 245.338457,38.1842032 242.014005,33.9362587 C228.611547,16.8108637 208.942115,7.62501617 185.131751,7.37256351 C168.763122,7.18869284 154.93321,11.3781062 152.252009,12.5558245 C146.60582,11.1516674 140.450587,10.2896628 133.750245,10.1796952 C121.461654,9.98104388 110.840314,12.9229746 102.045857,18.9191686 C98.2259584,17.4978661 88.3536998,14.10897 76.2814965,12.1644342 C55.4089238,8.80332564 38.8233164,11.3497275 26.9870115,19.7350577 C12.8638522,29.740933 6.34383372,47.626642 7.60727945,72.8943741 C8.03236952,81.3961755 12.8756767,107.547788 20.5202032,132.593219 C30.5822448,165.556915 41.5192979,184.218309 53.0280647,188.056536 C54.374873,188.505866 55.9286097,188.820397 57.6407945,188.820397 C61.8390762,188.820397 66.9856813,186.927889 72.3409885,180.490051 C81.2359538,169.788896 89.5408776,160.821801 92.6022356,157.563566 C97.1262818,159.992314 102.09552,161.347991 107.179455,161.483972 C107.188323,161.616998 107.201921,161.750023 107.213746,161.882457 C106.193885,163.092102 105.357303,164.152166 104.644286,165.05733 C101.122365,169.528166 100.389247,170.458753 89.0519353,172.793497 C85.8273995,173.458624 77.2611547,175.224018 77.1364065,181.227898 C76.9998337,187.787529 87.2605266,190.542633 88.4299677,190.834697 C92.5040924,191.854559 96.4286374,192.357691 100.171677,192.357691 C109.275344,192.357099 117.285838,189.365506 123.688203,183.576831 C123.490734,206.962697 124.466254,230.006836 127.273977,237.028212 C129.573247,242.775501 135.191649,256.822984 152.93842,256.821801 C155.54158,256.821801 158.408425,256.519095 161.561423,255.843326 C180.082106,251.872074 188.124527,243.686577 191.236139,225.640055 C192.901025,215.995418 195.758411,192.963695 197.101672,180.610069 C199.937774,181.49454 203.589173,181.899529 207.536185,181.898938 C215.768388,181.898938 225.266993,180.150097 231.224166,177.384942 C237.91564,174.277469 249.991982,166.650679 247.802088,160.025423 L247.802088,160.025423 Z M203.696185,76.5445912 C203.634697,80.1918522 203.132748,83.5027067 202.600647,86.9590023 C202.028342,90.6760277 201.435935,94.5189838 201.286947,99.1843326 C201.139732,103.724342 201.706716,108.444674 202.255372,113.008924 C203.363326,122.228471 204.500249,131.720573 200.098587,141.086744 C199.41454,139.871778 198.754143,138.546254 198.14873,137.078245 C197.601848,135.752129 196.414079,133.621949 194.769885,130.673515 C188.370476,119.197857 173.385312,92.3243603 181.056443,81.3583372 C183.340933,78.0935982 189.139658,74.7384018 203.696185,76.5445912 L203.696185,76.5445912 Z M186.052286,14.7581339 C207.386014,15.2293395 224.261321,23.2102725 236.209958,38.4780416 C245.373931,50.1890069 235.282919,103.476028 206.069949,149.446651 C205.781432,149.080092 205.487594,148.709986 205.183704,148.33042 C205.062503,148.178476 204.938938,148.024166 204.814189,147.868083 C212.362938,135.400942 210.886651,123.066236 209.572952,112.129774 C209.033164,107.641792 208.523529,103.402716 208.653007,99.4214134 C208.787215,95.2000739 209.34533,91.5811917 209.884527,88.0811455 C210.548471,83.7675751 211.223058,79.3050162 211.036822,74.0437136 C211.17576,73.4921016 211.231926,72.8399815 211.159206,72.0660693 C210.683861,67.0205635 204.924157,51.9224758 193.18363,38.2551501 C186.762346,30.7808961 177.396767,22.4156674 164.609774,16.7736166 C170.109931,15.6337367 177.631483,14.5707159 186.052286,14.7581339 L186.052286,14.7581339 Z M66.6741062,175.777995 C60.7742818,182.871501 56.6995658,181.512277 55.3598522,181.065903 C46.6292471,178.153533 36.499806,159.702023 27.568776,130.441755 C19.8408868,105.123769 15.3245266,79.6650716 14.9674273,72.5260416 C13.8387806,49.9483788 19.3117413,34.2129515 31.2349561,25.7572656 C50.6389284,11.9965266 82.5413764,20.2328684 95.3602956,24.4104573 C95.1758337,24.591963 94.9842771,24.7622356 94.8015889,24.9466975 C73.7664296,46.1911501 74.2654226,82.4875751 74.3168591,84.7058476 C74.3150855,85.56194 74.3866236,86.7739492 74.485358,88.4412009 C74.8471871,94.5455889 75.5205912,105.907732 73.7214965,118.775132 C72.0489238,130.732046 75.7346143,142.435326 83.8320185,150.883917 C84.6703741,151.758337 85.5453857,152.579547 86.4493672,153.352277 C82.8446744,157.212379 75.0115473,165.74788 66.6741062,175.777995 L66.6741062,175.777995 Z M89.1530346,145.78461 C82.6265127,138.975483 79.6627067,129.503483 81.020157,119.795584 C82.920351,106.202753 82.2185681,94.3646744 81.8419584,88.0048776 C81.7893395,87.1150855 81.7426328,86.335261 81.7148453,85.7197968 C84.7880277,82.9954365 99.0288406,75.3645081 109.184296,77.6915658 C113.819492,78.7534042 116.642587,81.9087667 117.816758,87.3373857 C123.893358,115.440037 118.621413,127.153367 114.385293,136.565654 C113.512055,138.504868 112.687298,140.337663 111.982559,142.234309 L111.436859,143.699954 C110.054577,147.406337 108.768665,150.851991 107.971695,154.124416 C101.034273,154.103132 94.2848591,151.139917 89.1530346,145.78461 L89.1530346,145.78461 Z M90.2178291,183.685025 C88.1922956,183.178938 86.3701432,182.299788 85.3012102,181.570808 C86.1939584,181.150448 87.7831686,180.579326 90.5388637,180.011751 C103.876286,177.265515 105.93552,175.328074 110.433552,169.61685 C111.465238,168.30788 112.634088,166.823316 114.252859,165.015353 C114.25345,165.014171 114.254042,165.01358 114.254633,165.012988 C116.666236,162.31346 117.768868,162.771067 119.768979,163.600554 C121.390115,164.271594 122.968684,166.303039 123.608979,168.539048 C123.911686,169.594975 124.252231,171.599815 123.138956,173.158873 C113.742633,186.31479 100.051067,186.1457 90.2178291,183.685025 L90.2178291,183.685025 Z M160.016554,248.637487 C143.700545,252.133395 137.923695,243.80837 134.116804,234.291436 C131.659677,228.146845 130.452397,200.440314 131.309081,169.84388 C131.320314,169.436527 131.262374,169.043363 131.150042,168.673848 C131.05249,167.96024 130.902319,167.238356 130.694208,166.511741 C129.419529,162.059824 126.315012,158.335704 122.5903,156.792018 C121.110467,156.178919 118.393792,155.05382 115.129644,155.888628 C115.826106,153.0206 117.033386,149.782467 118.341764,146.275326 L118.891012,144.79963 C119.509432,143.136517 120.284527,141.413691 121.105145,139.590356 C125.538143,129.741746 131.609423,116.25297 125.020231,85.7795104 C122.551871,74.3659307 114.310208,68.7924619 101.815871,70.0866513 C94.3250624,70.861746 87.472776,73.8840831 84.0549099,75.6169607 C83.3200185,75.9894319 82.6477968,76.3488961 82.0199169,76.6994919 C82.9735612,65.1990023 86.578254,43.707418 100.060527,30.1098568 C108.54873,21.548933 119.854115,17.3210901 133.628453,17.5487113 C160.768591,17.9933118 178.172453,31.9213672 187.994457,43.5276859 C196.457829,53.5294226 201.040998,63.6038799 202.870245,69.0372286 C189.115418,67.6389838 179.76048,70.3544758 175.017681,77.1340416 C164.700822,91.8815335 180.662097,120.506236 188.333229,134.262836 C189.739751,136.784406 190.954125,138.963067 191.336055,139.888924 C193.833977,145.943058 197.067972,149.984665 199.429321,152.935464 C200.152979,153.839446 200.855353,154.716231 201.389229,155.481866 C197.223464,156.683233 189.740342,159.457848 190.422023,173.328554 C189.872185,180.289035 185.960647,212.874938 183.974134,224.387843 C181.351464,239.597672 175.754346,245.263372 160.016554,248.637487 L160.016554,248.637487 Z M228.120831,170.700564 C223.861062,172.678208 216.732083,174.161589 209.959612,174.479667 C202.479446,174.830263 198.671963,173.641903 197.776259,172.91115 C197.355307,164.267455 200.573339,163.364065 203.978199,162.408055 C204.513256,162.257293 205.035307,162.111261 205.53903,161.935076 C205.852379,162.189894 206.195289,162.442938 206.570716,162.690661 C212.582873,166.658956 223.306494,167.087002 238.444785,163.962383 C238.50036,163.950559 238.555935,163.939917 238.610919,163.928684 C236.569423,165.837746 233.075289,168.400111 228.120831,170.700564 L228.120831,170.700564 Z"
                fill="#FFFFFF"
              ></path>
            </g>
          </svg>
        </div>
        <p className="text-center">PostgreSQL</p>
      </div>

      <div className="mt-4 text-right">
        <Link href="/" className="cursor-pointer relative group">
          <span className="absolute h-0 -left-6 transform -translate-y-1/2 z-10 transition-transform ease-in group-hover:-translate-x-1/2">
            {"<"}--
          </span>
          <span>Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default Stack;
