import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function navbar() {
  return (
    <div>
      <Head>
        <title>Dans</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" />
      </Head>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="logoHeader">
          <Link href="/">
            <svg width="120" style={{ marginTop: '-30px' }} viewBox="0 0 698 698" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="undraw_profile_pic_ic5t (1) 1">
                <g id="Group" opacity="0.5">
                  <path id="Vector" opacity="0.5" d="M349 698C541.747 698 698 541.747 698 349C698 156.253 541.747 0 349 0C156.253 0 0 156.253 0 349C0 541.747 156.253 698 349 698Z" fill="url(#paint0_linear)" />
                </g>
                <path id="profileBackground" d="M349.68 688.41C538.363 688.41 691.32 535.453 691.32 346.77C691.32 158.087 538.363 5.13 349.68 5.13C160.997 5.13 8.04001 158.087 8.04001 346.77C8.04001 535.453 160.997 688.41 349.68 688.41Z" fill="#e6e6e6" />
                <path id="Vector_2" d="M350 689.76C416.757 689.869 482.068 670.323 537.79 633.56C525.2 564.76 477.29 560.84 477.29 560.84H213.09C213.09 560.84 167.88 564.55 153.76 627.84C211.209 668.251 279.762 689.881 350 689.76Z" fill="#43436B" />
                <path id="Vector_3" d="M346.37 504.47C437.442 504.47 511.27 430.642 511.27 339.57C511.27 248.498 437.442 174.67 346.37 174.67C255.298 174.67 181.47 248.498 181.47 339.57C181.47 430.642 255.298 504.47 346.37 504.47Z" fill="#333333" />
                <path id="Vector_4" opacity="0.1" d="M293.15 476.92H398.81V561.45C398.81 575.458 393.247 588.892 383.344 598.799C373.44 608.706 360.008 614.275 346 614.28C331.989 614.28 318.551 608.714 308.644 598.806C298.736 588.899 293.17 575.461 293.17 561.45V476.92H293.15Z" fill="black" />
                <path id="Vector_5" d="M296.5 473H395.5C396.388 473 397.241 473.353 397.869 473.981C398.497 474.609 398.85 475.462 398.85 476.35V557.53C398.851 564.47 397.485 571.343 394.83 577.755C392.174 584.167 388.281 589.993 383.373 594.9C378.465 599.807 372.638 603.699 366.226 606.353C359.813 609.008 352.94 610.373 346 610.37C331.989 610.37 318.551 604.804 308.644 594.896C298.736 584.989 293.17 571.551 293.17 557.54V476.35C293.17 475.465 293.52 474.616 294.144 473.988C294.768 473.361 295.615 473.005 296.5 473Z" fill="#FDB797" />
                <path id="Vector_6" opacity="0.1" d="M293.34 516.82C327.393 529.543 364.877 529.645 399 517.11V504.11H293.34V516.82Z" fill="black" />
                <path id="Vector_7" d="M346.37 523.89C430.014 523.89 497.82 456.084 497.82 372.44C497.82 288.796 430.014 220.99 346.37 220.99C262.726 220.99 194.92 288.796 194.92 372.44C194.92 456.084 262.726 523.89 346.37 523.89Z" fill="#FDB797" />
                <path id="Vector_8" opacity="0.1" d="M238.49 234.68C238.49 234.68 302.32 364.24 482.37 289L440.45 223.27L366.14 196.6L238.49 234.68Z" fill="black" />
                <path id="Vector_9" d="M238.49 232.78C238.49 232.78 302.32 362.34 482.37 287.08L440.45 221.35L366.14 194.68L238.49 232.78Z" fill="#333333" />
                <path id="Vector_10" d="M237.93 224C242.234 210.677 249.672 198.582 259.62 188.73C289.41 159.28 338.25 153.07 363.3 119.49C369.3 128.81 364.66 143.14 354.3 147.14C378.3 146.98 406.11 144.88 419.68 125.14C423.034 132.947 424.103 141.546 422.763 149.937C421.423 158.328 417.729 166.166 412.11 172.54C433.38 173.54 456.11 187.94 457.45 209.19C458.37 223.35 449.45 236.75 437.86 244.87C426.27 252.99 412.15 256.72 398.3 259.77C357.86 268.7 211.54 306.07 237.93 224Z" fill="#333333" />
                <path id="Vector_11" d="M194.86 398.72C202.642 398.72 208.95 386.891 208.95 372.3C208.95 357.709 202.642 345.88 194.86 345.88C187.078 345.88 180.77 357.709 180.77 372.3C180.77 386.891 187.078 398.72 194.86 398.72Z" fill="#FDB797" />
                <path id="Vector_12" d="M497.8 398.72C505.582 398.72 511.89 386.891 511.89 372.3C511.89 357.709 505.582 345.88 497.8 345.88C490.018 345.88 483.71 357.709 483.71 372.3C483.71 386.891 490.018 398.72 497.8 398.72Z" fill="#FDB797" />
              </g>
              <defs>
                <linearGradient id="paint0_linear" x1="349" y1="698" x2="349" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#808080" stopOpacity="0.25" />
                  <stop offset="0.54" stopColor="#808080" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#808080" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/">
            <a>'main'</a>
          </Link>
          <Link href="/aboutme">
            <a>a 'bit' about me</a>
          </Link>
          <Link href="/project">
            <a>my 'builds'</a>
          </Link>
          <Link href="/photography">
            <a>photography</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`

          .nav > .nav-btn {
              display: none;
          }

          .nav{
            display:flex;
            justify-content:center;
            margin-top: 40px;
            font-family: 'roboto'
          }
          
          .nav > .nav-links {
              font-size: 25px;
              margin: 20px 0 0px 30%;
          }
          
          .nav > .nav-links > a {
              padding: 13px 35px 13px 35px;
              text-decoration: none;
              color: #282828;
          }
          
          .nav > .nav-links > a:hover {
              color:goldenrod;    
          }
          
          .nav > #nav-check {
              display: none;
          }

          .logoHeader {
              display: inline;
          }

          .logoHeader img {
              height:80px;
          }
        
       `}
      </style>
    </div>
  )
}

export default navbar

