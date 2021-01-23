import React, { useState, useEffect } from 'react';
import { Reveal } from "react-text-reveal";
import VisibilitySensor from "react-visibility-sensor";
export default function quote() {
    const [fire, setFire] = useState(false);

    function onChange(isVisible) {
        if (isVisible) {
            !fire && setFire(true);
        }
    }
    return (
        <div>
            <div className="quoteContainer">
                <div className="textContainer">
                    <Reveal
                        canPlay={fire}
                        ease={"cubic-bezier(0,0.4,0.4,1)"}
                        duration={5000}
                    >
                        <h1 className="quote">
                            Everyday life is like <span style={{ color: '#DFB54B' }}> programming</span>, I guess. If you  <span style={{ color: '#DFB54B' }}>love</span> something you can put beauty into it.
                            <br />
                            <span className="subHeader"> - Donald Knuth (Computer Scientist) </span>
                        </h1>
                    </Reveal>
                </div>
                <div className="svgContainer">
                    <VisibilitySensor onChange={onChange}>
                        <svg className="loveSvg" viewBox="0 0 975 732" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="undraw_inspiration_lecl (1) 1" clipPath="url(#clip0)">
                                <path id="Vector" d="M450.434 689.714C476.918 686.259 502.382 683.323 526.825 680.904L517.422 665.14C520.69 664.23 534.841 673.355 534.841 673.355L522.89 627.765C539.224 629.599 546.818 676.097 546.818 676.097L565.341 660.61L556.217 678.152C631.014 671.618 695.555 669.604 749.808 670.108L741.76 656.615C745.028 655.705 759.179 664.83 759.179 664.83L747.228 619.241C763.561 621.074 771.156 667.573 771.156 667.573L789.678 652.086L780.015 670.665C825.483 671.931 862.532 674.942 891.112 678.222C883.087 657.253 855.027 637.083 855.027 637.083C876.608 642.718 887.832 651.883 893.639 660.376C894.794 616.962 886.857 573.785 870.336 533.621C870.336 533.621 913.846 615.695 907.279 670.39L906.444 680.106C944.337 685.078 963.35 690.024 963.35 690.024L450.434 689.714Z" fill="#3F3D56" />
                                <path id="Vector_2" d="M487.457 732C756.672 732 974.915 715.026 974.915 694.087C974.915 673.148 756.672 656.173 487.457 656.173C218.242 656.173 0 673.148 0 694.087C0 715.026 218.242 732 487.457 732Z" fill="#3F3D56" />
                                <path id="Vector_3" d="M499.644 87.4732C499.644 87.4732 510.476 113.2 486.103 125.387C461.73 137.573 551.097 160.592 560.576 130.803C560.576 130.803 536.203 121.324 547.035 92.8894L499.644 87.4732Z" fill="#FFB9B9" />
                                <path id="Vector_4" d="M528.756 618.937L527.402 647.372L550.42 651.434V622.999L528.756 618.937Z" fill="#FFB9B9" />
                                <path id="Vector_5" d="M442.097 618.937L443.451 647.372L420.432 651.434V622.999L442.097 618.937Z" fill="#FFB9B9" />
                                <path id="Vector_6" d="M526.048 103.045C546.987 103.045 563.961 86.0703 563.961 65.1314C563.961 44.1924 546.987 27.218 526.048 27.218C505.109 27.218 488.134 44.1924 488.134 65.1314C488.134 86.0703 505.109 103.045 526.048 103.045Z" fill="#FFB9B9" />
                                <path id="Vector_7" d="M578.856 340.003L577.501 350.835L584.272 376.562L593.75 353.544L578.856 340.003Z" fill="#FFB9B9" />
                                <path id="Vector_8" d="M428.556 344.065L420.432 440.203C420.432 440.203 410.954 457.805 416.37 472.7C416.37 472.7 408.245 493.011 410.954 499.781C413.662 506.551 415.016 513.321 412.308 516.029C409.599 518.738 408.245 594.564 412.308 601.334C416.37 608.105 419.078 624.353 419.078 624.353C419.078 624.353 442.097 629.769 447.513 614.875C452.929 599.98 450.221 598.626 455.637 594.564C461.053 590.502 461.053 533.632 461.053 533.632C461.053 533.632 454.283 526.862 458.345 524.154C462.407 521.446 465.115 524.154 461.053 517.383C456.991 510.613 450.221 510.613 456.991 507.905C460.764 506.443 464.39 504.63 467.823 502.489L507.091 399.581C507.091 399.581 521.985 514.675 524.694 520.091C527.402 525.508 531.464 518.737 527.402 525.508C523.339 532.278 521.985 528.216 523.339 532.278C524.694 536.34 515.215 594.564 520.631 606.751C523.793 613.794 526.506 621.03 528.756 628.415C528.756 628.415 550.42 637.894 553.129 631.123C555.837 624.353 554.483 612.167 558.545 610.813C562.607 609.459 566.669 606.751 566.669 595.918C566.669 585.086 574.793 532.278 574.793 532.278C574.793 532.278 565.315 528.216 568.023 521.446C570.731 514.675 570.731 516.029 569.377 510.613C568.023 505.197 565.315 503.843 568.023 499.781C570.731 495.719 570.731 483.532 570.731 483.532L586.98 376.562L574.432 340.003L428.556 344.065Z" fill="#2F2E41" />
                                <path id="Vector_9" d="M530.11 640.602C530.11 640.602 526.048 636.54 524.694 640.602C523.34 644.664 523.34 682.577 523.34 682.577C523.34 682.577 534.172 690.702 534.172 694.764C534.172 698.826 542.296 712.366 561.253 709.658C561.443 709.631 561.63 709.603 561.816 709.573C564.56 709.128 567.163 708.051 569.42 706.427C571.676 704.802 573.524 702.676 574.817 700.214C576.11 697.753 576.812 695.024 576.869 692.245C576.926 689.465 576.336 686.71 575.145 684.198L555.837 643.31C555.837 643.31 542.296 629.769 530.11 640.602Z" fill="#2F2E41" />
                                <path id="Vector_10" d="M440.743 640.602C440.743 640.602 444.805 636.54 446.159 640.602C447.513 644.664 447.513 682.577 447.513 682.577C447.513 682.577 436.68 690.702 436.68 694.764C436.68 698.826 428.556 712.366 409.599 709.658C409.41 709.631 409.222 709.603 409.037 709.573C406.292 709.128 403.689 708.051 401.433 706.427C399.176 704.802 397.329 702.676 396.036 700.214C394.743 697.753 394.04 695.024 393.983 692.245C393.926 689.465 394.516 686.71 395.707 684.198L415.016 643.31C415.016 643.31 428.556 629.769 440.743 640.602Z" fill="#2F2E41" />
                                <path id="Vector_11" d="M497.152 24.0651L490.378 21.3532C490.378 21.3532 504.541 5.75999 524.247 7.11599L518.705 1.01421C518.705 1.01421 532.252 -4.40947 544.569 9.82777C551.043 17.312 558.534 26.1093 563.204 36.0194H570.458L567.43 42.686L578.027 49.3526L567.151 48.1551C568.181 53.9106 567.828 59.8286 566.122 65.4211L566.413 70.6904C566.413 70.6904 553.806 51.1837 553.806 48.4718V55.2515C553.806 55.2515 547.032 49.1498 547.032 45.082L543.337 49.8278L541.49 42.3701L518.705 49.8278L522.4 43.7261L508.236 45.76L513.778 38.3023C513.778 38.3023 497.767 47.1159 497.152 54.5736C496.536 62.0311 488.53 71.5227 488.53 71.5227L484.836 64.743C484.836 64.743 479.293 34.2346 497.152 24.0651Z" fill="#2F2E41" />
                                <path id="Vector_12" d="M584.272 149.082H599.358C600.466 149.082 601.542 149.459 602.408 150.151C603.274 150.843 603.878 151.809 604.122 152.89C606.45 163.199 612.448 192.419 611.353 215.431C609.999 243.866 612.707 264.176 611.353 268.239C609.999 272.301 611.353 273.655 611.353 277.717C611.353 281.779 615.415 279.071 611.353 284.487C607.291 289.903 607.291 288.549 607.291 292.611C607.291 296.674 593.75 358.96 593.75 358.96C593.75 358.96 584.441 343.66 574.201 346.571L576.147 291.257L578.856 268.239L574.793 227.617L584.272 149.082Z" fill="#3F3D56" />
                                <path id="Vector_13" d="M518.6 134.865C518.6 134.865 495.582 134.028 488.134 124.291C488.134 124.291 440.066 140.281 434.649 153.822C429.233 167.362 453.606 228.294 453.606 228.294C453.606 228.294 411.631 352.867 431.941 352.867C452.252 352.867 498.29 369.115 525.371 359.637C542.151 353.817 559.353 349.29 576.824 346.096C576.824 346.096 579.532 309.537 576.824 302.767C574.116 295.997 567.346 300.059 571.408 290.58C575.47 281.102 574.116 279.748 572.762 275.686C571.408 271.624 575.47 266.208 575.47 260.791C575.47 255.375 574.116 243.189 574.116 243.189C574.116 243.189 610.676 157.884 602.551 149.759C594.427 141.635 553.072 125.981 553.072 125.981C553.072 125.981 541.619 140.281 518.6 134.865Z" fill="#3F3D56" />
                                <path id="Vector_14" d="M412.308 353.544C412.308 353.544 400.121 417.184 420.432 411.768C440.743 406.351 431.264 353.544 431.264 353.544H412.308Z" fill="#FFB9B9" />
                                <path id="Vector_15" d="M443.451 149.082L438.642 151.487C436.77 152.423 435.14 153.779 433.88 155.45C432.619 157.121 431.763 159.061 431.377 161.118L412.308 262.822C412.308 262.822 406.891 275.009 406.891 276.363C406.891 277.717 409.6 277.717 406.891 281.779C404.183 285.841 400.121 284.487 402.829 287.195C404.375 288.6 405.341 290.532 405.537 292.611L408.245 358.96C408.245 358.96 431.264 352.19 438.035 358.96C438.035 358.96 431.264 338.649 435.326 331.879C439.389 325.109 439.389 315.63 439.389 315.63C439.389 315.63 436.681 315.63 443.451 308.86C450.221 302.09 451.575 299.382 450.221 298.028C448.867 296.674 447.513 284.487 447.513 283.133C447.513 281.779 461.053 191.058 461.053 191.058L443.451 149.082Z" fill="#3F3D56" />
                                <g id="Group 1">
                                    <path id="love12" d="M847.485 609.258C844.85 607.011 841.798 605.304 838.504 604.236C835.21 603.168 831.737 602.76 828.285 603.034C824.833 603.308 821.468 604.259 818.383 605.833C815.299 607.407 812.554 609.574 810.307 612.209C808.06 614.844 806.353 617.895 805.285 621.19C804.217 624.484 803.809 627.956 804.083 631.409C804.357 634.861 805.308 638.226 806.882 641.31C808.457 644.395 810.623 647.139 813.258 649.387L853.387 683.614L887.614 643.485C892.152 638.164 894.391 631.257 893.838 624.285C893.285 617.313 889.984 610.846 884.663 606.307C879.341 601.768 872.435 599.529 865.463 600.083C858.491 600.636 852.024 603.937 847.485 609.258Z" fill="#DFB54B" />
                                    <path id="love11" d="M760.762 307.983C759.443 306.773 757.916 305.855 756.267 305.28C754.619 304.705 752.881 304.485 751.153 304.633C749.425 304.78 747.742 305.292 746.198 306.139C744.654 306.987 743.281 308.153 742.156 309.571C741.032 310.989 740.178 312.631 739.643 314.404C739.109 316.177 738.904 318.046 739.041 319.904C739.178 321.762 739.655 323.573 740.442 325.233C741.23 326.893 742.314 328.37 743.633 329.579L763.715 348L780.844 326.403C783.115 323.539 784.236 319.822 783.959 316.07C783.682 312.318 782.03 308.837 779.367 306.394C776.704 303.952 773.248 302.747 769.758 303.045C766.269 303.342 763.033 305.119 760.762 307.983Z" fill="#DFB54B" />
                                    <path id="love10" d="M905.762 367.983C904.443 366.773 902.916 365.855 901.267 365.28C899.619 364.705 897.881 364.485 896.153 364.633C894.425 364.78 892.742 365.292 891.198 366.139C889.654 366.987 888.281 368.153 887.156 369.571C886.032 370.989 885.178 372.631 884.643 374.404C884.109 376.177 883.904 378.046 884.041 379.904C884.178 381.762 884.655 383.573 885.442 385.233C886.23 386.893 887.314 388.37 888.633 389.579L908.715 408L925.844 386.403C928.115 383.539 929.236 379.822 928.959 376.07C928.682 372.318 927.03 368.837 924.367 366.394C921.704 363.952 918.248 362.747 914.758 363.045C911.269 363.342 908.033 365.119 905.762 367.983Z" fill="#DFB54B" />
                                    <path id="love9" d="M634.762 558.983C633.443 557.773 631.916 556.855 630.267 556.28C628.619 555.705 626.881 555.485 625.153 555.633C623.425 555.78 621.742 556.292 620.198 557.139C618.654 557.987 617.281 559.153 616.156 560.571C615.032 561.989 614.178 563.631 613.643 565.404C613.109 567.177 612.904 569.046 613.041 570.904C613.178 572.762 613.655 574.573 614.442 576.233C615.23 577.893 616.314 579.37 617.633 580.579L637.715 599L654.844 577.403C657.115 574.539 658.236 570.822 657.959 567.07C657.682 563.318 656.03 559.837 653.367 557.394C650.704 554.952 647.248 553.747 643.758 554.045C640.269 554.342 637.033 556.119 634.762 558.983Z" fill="#DFB54B" />
                                    <path id="love8" d="M757.485 431.258C754.85 429.011 751.798 427.304 748.504 426.236C745.21 425.168 741.737 424.76 738.285 425.034C734.833 425.308 731.468 426.259 728.383 427.833C725.299 429.407 722.554 431.574 720.307 434.209C718.06 436.844 716.353 439.895 715.285 443.19C714.217 446.484 713.809 449.956 714.083 453.409C714.357 456.861 715.308 460.226 716.882 463.31C718.457 466.395 720.623 469.139 723.258 471.387L763.387 505.614L797.614 465.485C802.152 460.164 804.391 453.257 803.838 446.285C803.285 439.313 799.984 432.846 794.663 428.307C789.341 423.768 782.435 421.529 775.463 422.083C768.491 422.636 762.024 425.937 757.485 431.258Z" fill="#161748" />
                                    <path id="love7" d="M827.485 154.258C824.85 152.011 821.798 150.304 818.504 149.236C815.21 148.168 811.737 147.76 808.285 148.034C804.833 148.308 801.468 149.259 798.383 150.833C795.299 152.407 792.554 154.574 790.307 157.209C788.06 159.844 786.353 162.895 785.285 166.19C784.217 169.484 783.809 172.956 784.083 176.409C784.357 179.861 785.308 183.226 786.882 186.31C788.457 189.395 790.623 192.139 793.258 194.387L833.387 228.614L867.614 188.485C872.152 183.164 874.391 176.257 873.838 169.285C873.285 162.313 869.984 155.846 864.663 151.307C859.341 146.768 852.435 144.529 845.463 145.083C838.491 145.636 832.024 148.937 827.485 154.258Z" fill="#161748" />
                                    <path id="love6" d="M263.485 605.258C260.85 603.011 257.798 601.304 254.504 600.236C251.21 599.168 247.737 598.76 244.285 599.034C240.833 599.308 237.468 600.259 234.383 601.833C231.299 603.407 228.554 605.574 226.307 608.209C224.06 610.844 222.353 613.895 221.285 617.19C220.217 620.484 219.809 623.956 220.083 627.409C220.357 630.861 221.308 634.226 222.882 637.31C224.457 640.395 226.623 643.139 229.258 645.387L269.387 679.614L303.614 639.485C308.152 634.164 310.391 627.257 309.838 620.285C309.285 613.313 305.984 606.846 300.663 602.307C295.341 597.768 288.435 595.529 281.463 596.083C274.491 596.636 268.024 599.937 263.485 605.258Z" fill="#DFB54B" />
                                    <path id="love5" d="M176.762 303.983C175.443 302.773 173.916 301.855 172.267 301.28C170.619 300.705 168.881 300.485 167.153 300.633C165.425 300.78 163.742 301.292 162.198 302.139C160.654 302.987 159.281 304.153 158.156 305.571C157.032 306.989 156.178 308.631 155.643 310.404C155.109 312.177 154.904 314.046 155.041 315.904C155.178 317.762 155.655 319.573 156.442 321.233C157.23 322.893 158.314 324.37 159.633 325.579L179.715 344L196.844 322.403C199.115 319.539 200.236 315.822 199.959 312.07C199.682 308.318 198.03 304.837 195.367 302.394C192.704 299.952 189.248 298.747 185.758 299.045C182.269 299.342 179.033 301.119 176.762 303.983Z" fill="#DFB54B" />
                                    <path id="love4" d="M321.762 363.983C320.443 362.773 318.916 361.855 317.267 361.28C315.619 360.705 313.881 360.485 312.153 360.633C310.425 360.78 308.742 361.292 307.198 362.139C305.654 362.987 304.281 364.153 303.156 365.571C302.032 366.989 301.178 368.631 300.643 370.404C300.109 372.177 299.904 374.046 300.041 375.904C300.178 377.762 300.655 379.573 301.442 381.233C302.23 382.893 303.314 384.37 304.633 385.579L324.715 404L341.844 382.403C344.115 379.539 345.236 375.822 344.959 372.07C344.682 368.318 343.03 364.837 340.367 362.394C337.704 359.952 334.248 358.747 330.758 359.045C327.269 359.342 324.033 361.119 321.762 363.983Z" fill="#DFB54B" />
                                    <path id="love3" d="M50.7616 554.983C49.443 553.773 47.9158 552.855 46.2672 552.28C44.6186 551.705 42.8808 551.485 41.1531 551.633C39.4255 551.78 37.7417 552.292 36.1981 553.139C34.6544 553.987 33.281 555.153 32.1563 556.571C31.0316 557.989 30.1777 559.631 29.6432 561.404C29.1088 563.177 28.9042 565.046 29.0414 566.904C29.1785 568.762 29.6546 570.573 30.4424 572.233C31.2302 573.893 32.3144 575.37 33.633 576.579L53.715 595L70.8437 573.403C73.1151 570.539 74.2355 566.822 73.9586 563.07C73.6817 559.318 72.03 555.837 69.367 553.394C66.7039 550.952 63.2476 549.747 59.7585 550.045C56.2693 550.342 53.033 552.119 50.7616 554.983Z" fill="#DFB54B" />
                                    <path id="love2" d="M173.485 427.258C170.85 425.011 167.798 423.304 164.504 422.236C161.21 421.168 157.737 420.76 154.285 421.034C150.833 421.308 147.468 422.259 144.383 423.833C141.299 425.407 138.554 427.574 136.307 430.209C134.06 432.844 132.353 435.895 131.285 439.19C130.217 442.484 129.809 445.956 130.083 449.409C130.357 452.861 131.308 456.226 132.882 459.31C134.457 462.395 136.623 465.139 139.258 467.387L179.387 501.614L213.614 461.485C218.152 456.164 220.391 449.257 219.838 442.285C219.285 435.313 215.984 428.846 210.663 424.307C205.341 419.768 198.435 417.529 191.463 418.083C184.491 418.636 178.024 421.937 173.485 427.258Z" fill="#161748" />
                                    <path id="love1" d="M243.485 150.258C240.85 148.011 237.798 146.304 234.504 145.236C231.21 144.168 227.737 143.76 224.285 144.034C220.833 144.308 217.468 145.259 214.383 146.833C211.299 148.407 208.554 150.574 206.307 153.209C204.06 155.844 202.353 158.895 201.285 162.19C200.217 165.484 199.809 168.956 200.083 172.409C200.357 175.861 201.308 179.226 202.882 182.31C204.457 185.395 206.623 188.139 209.258 190.387L249.387 224.614L283.614 184.485C288.152 179.164 290.391 172.257 289.838 165.285C289.285 158.313 285.984 151.846 280.663 147.307C275.341 142.768 268.435 140.529 261.463 141.083C254.491 141.636 248.024 144.937 243.485 150.258Z" fill="#161748" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="974.915" height="732" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </VisibilitySensor>
                </div>
            </div>
            <style jsx>{`
                .quoteContainer{
                   display: flex;
                   width:80%;
                   margin:auto;
                   height:950px;
                }
                .textContainer{
                    margin:auto;
                    width: 60%;
                }
                .svgContainer{
                    margin:auto;
                }
                .loveSvg{
                    width:800px; 
                }
                .quote{
                    font-size:45px;
                    font-weight: bold;
                    color:#161748;
                    line-height:1.3;
                }
                .subHeader{
                    font-size:25px;
                    color: #a5a4a4;
                    font-weight:400;
                }
            `}</style>
        </div >
    )
}
