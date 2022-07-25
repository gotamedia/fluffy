import * as React from "react";

function SvgSwish(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={"1em"}
            height={"1em"}
            viewBox={"0 0 40 16"}
            xmlns={"http://www.w3.org/2000/svg"}
            {...props}
        >
            <g clipPath="url(#clip0_943_31899)">
                <path d="M37.303 5.32648C37.303 5.1884 37.3284 5.05902 37.3791 4.93822C37.4298 4.81741 37.4987 4.71205 37.5857 4.62213C37.6728 4.53209 37.7767 4.45991 37.8914 4.40963C38.0083 4.3578 38.1337 4.33195 38.2678 4.33195C38.4037 4.33195 38.531 4.3578 38.6496 4.40963C38.7657 4.45962 38.8709 4.5318 38.9594 4.62213C39.0473 4.71205 39.1166 4.81741 39.1674 4.93822C39.2181 5.05902 39.2435 5.18846 39.2435 5.32648C39.2435 5.46456 39.2181 5.594 39.1674 5.7148C39.1166 5.83561 39.0473 5.94097 38.9595 6.03083C38.871 6.12118 38.7658 6.19338 38.6497 6.24339C38.531 6.29515 38.4037 6.32107 38.2679 6.32107C38.1337 6.32107 38.0083 6.29522 37.8914 6.24339C37.7767 6.19309 37.6728 6.12089 37.5857 6.03083C37.4987 5.94097 37.4298 5.83561 37.3791 5.7148C37.3284 5.594 37.303 5.46456 37.303 5.32648ZM37.5014 5.32648C37.5014 5.44096 37.5208 5.5472 37.5598 5.64529C37.5968 5.74027 37.6517 5.82723 37.7215 5.90145C37.7905 5.97417 37.8732 6.0325 37.9648 6.07307C38.0581 6.1149 38.1591 6.13578 38.2678 6.13578C38.3783 6.13578 38.4807 6.1149 38.5749 6.07307C38.6673 6.03255 38.7509 5.97424 38.8208 5.90145C38.8915 5.82738 38.9473 5.74042 38.9853 5.64529C39.0252 5.5472 39.0451 5.44096 39.0451 5.32648C39.0451 5.21207 39.0252 5.10582 38.9853 5.00767C38.9473 4.91256 38.8915 4.82563 38.8209 4.75157C38.7509 4.67876 38.6674 4.62043 38.5749 4.57989C38.4807 4.53812 38.3783 4.51724 38.2679 4.51724C38.1591 4.51724 38.0581 4.53812 37.9648 4.57989C37.8732 4.62046 37.7905 4.67882 37.7215 4.75157C37.6517 4.82575 37.5968 4.9127 37.5598 5.00767C37.5208 5.10582 37.5014 5.21207 37.5014 5.32648ZM37.9362 4.8987C37.9362 4.83877 37.9661 4.80877 38.0259 4.80877H38.333C38.4308 4.80877 38.5088 4.83694 38.5667 4.89326C38.6247 4.94958 38.6537 5.0259 38.6537 5.12214C38.6537 5.16207 38.6478 5.19751 38.636 5.22839C38.6253 5.25736 38.6102 5.28448 38.5912 5.30879C38.5731 5.33151 38.5531 5.35008 38.5314 5.36464C38.5096 5.37919 38.4879 5.38912 38.4662 5.39457V5.40001C38.468 5.40191 38.4707 5.40552 38.4743 5.41096C38.4789 5.41617 38.4826 5.42216 38.4852 5.42864C38.4889 5.43681 38.4943 5.44633 38.5015 5.45728L38.6428 5.73249C38.6591 5.76337 38.6628 5.78833 38.6537 5.80745C38.6446 5.82649 38.6247 5.83602 38.5939 5.83602H38.5613C38.5106 5.83602 38.4753 5.81425 38.4553 5.77065L38.2977 5.43823H38.1292V5.74881C38.1292 5.80697 38.1011 5.83602 38.0449 5.83602H38.0205C37.9643 5.83602 37.9362 5.80697 37.9362 5.74881V4.8987ZM38.2922 5.29655C38.3448 5.29655 38.3856 5.28111 38.4145 5.25023C38.4435 5.21935 38.458 5.17663 38.458 5.12214C38.458 5.06943 38.4435 5.02862 38.4145 4.9995C38.3856 4.97046 38.3457 4.95597 38.295 4.95597H38.1292V5.29655H38.2922ZM30.3702 5.94798C30.6775 5.94798 30.938 5.98723 31.1519 6.06572C31.3658 6.14428 31.5329 6.21673 31.6534 6.28318C31.7558 6.3376 31.8161 6.41004 31.8341 6.50064C31.8522 6.59125 31.8371 6.68783 31.789 6.79055L31.6986 6.95359C31.6444 7.06235 31.5751 7.12575 31.4907 7.14384C31.4065 7.162 31.307 7.1469 31.1925 7.09854C31.0901 7.05025 30.9666 7.00046 30.822 6.9491C30.6775 6.89775 30.5088 6.8721 30.316 6.8721C30.1172 6.8721 29.9635 6.91135 29.8551 6.98984C29.7467 7.06841 29.6925 7.1801 29.6925 7.32505C29.6925 7.45191 29.7482 7.55462 29.8596 7.63311C29.9711 7.71161 30.1127 7.78112 30.2844 7.84153C30.456 7.90186 30.6398 7.96682 30.8356 8.03627C31.0288 8.10446 31.2137 8.19413 31.3868 8.30359C31.5566 8.41041 31.7014 8.55251 31.8115 8.72028C31.9229 8.88945 31.9787 9.10385 31.9787 9.36355C31.9787 9.56897 31.9381 9.75766 31.8567 9.92982C31.7754 10.1019 31.6579 10.2514 31.5043 10.3783C31.3507 10.5051 31.1654 10.6048 30.9485 10.6773C30.7317 10.7497 30.4907 10.786 30.2257 10.786C29.8521 10.786 29.5374 10.7316 29.2813 10.6229C29.0253 10.5142 28.828 10.4115 28.6894 10.3149C28.587 10.2545 28.5297 10.179 28.5177 10.0884C28.5057 9.99777 28.5328 9.90111 28.599 9.79847L28.7075 9.63536C28.7738 9.53877 28.8476 9.48435 28.9289 9.47231C29.0102 9.4602 29.1081 9.48435 29.2226 9.54475C29.331 9.60516 29.4711 9.67311 29.6428 9.74861C29.8145 9.82411 30.0178 9.86186 30.2528 9.86186C30.4516 9.86186 30.6082 9.81956 30.7226 9.73501C30.8371 9.65046 30.8943 9.53571 30.8943 9.39076C30.8943 9.2639 30.8386 9.16275 30.7272 9.08725C30.6157 9.01175 30.4741 8.9423 30.3024 8.87884C30.1187 8.81097 29.9349 8.74302 29.7512 8.67498C29.5585 8.60402 29.3737 8.51293 29.2 8.40324C29.0302 8.2964 28.8854 8.15427 28.7753 7.98648C28.6639 7.81731 28.6081 7.59992 28.6081 7.33416C28.6081 7.11065 28.6548 6.91135 28.7481 6.7362C28.8392 6.56367 28.9691 6.41476 29.1277 6.30128C29.2873 6.18653 29.4741 6.09898 29.688 6.03858C29.9018 5.97818 30.1293 5.94798 30.3702 5.94798ZM16.9379 5.94798C17.2452 5.94798 17.5057 5.98723 17.7196 6.06572C17.9334 6.14428 18.1006 6.21673 18.2211 6.28318C18.3235 6.3376 18.3838 6.41004 18.4019 6.50064C18.4199 6.59125 18.4049 6.68783 18.3567 6.79055L18.2663 6.95359C18.2121 7.06235 18.1428 7.12575 18.0584 7.14384C17.9741 7.162 17.8747 7.1469 17.7602 7.09854C17.6579 7.05025 17.5343 7.00046 17.3898 6.9491C17.2452 6.89775 17.0765 6.8721 16.8837 6.8721C16.6849 6.8721 16.5313 6.91135 16.4228 6.98984C16.3144 7.06841 16.2602 7.1801 16.2602 7.32505C16.2602 7.45191 16.3159 7.55462 16.4273 7.63311C16.5388 7.71161 16.6804 7.78112 16.8521 7.84153C17.0238 7.90186 17.2075 7.96682 17.4033 8.03627C17.5964 8.10446 17.7814 8.19412 17.9545 8.30359C18.1243 8.41041 18.2691 8.55251 18.3792 8.72028C18.4907 8.88945 18.5464 9.10385 18.5464 9.36355C18.5464 9.56897 18.5057 9.75766 18.4244 9.92982C18.3431 10.1019 18.2256 10.2514 18.072 10.3783C17.9184 10.5051 17.7331 10.6048 17.5163 10.6773C17.2994 10.7497 17.0584 10.786 16.7934 10.786C16.4199 10.786 16.1051 10.7316 15.849 10.6229C15.593 10.5142 15.3957 10.4115 15.2571 10.3149C15.1547 10.2545 15.0975 10.179 15.0854 10.0884C15.0734 9.99777 15.1005 9.90111 15.1668 9.79847L15.2752 9.63536C15.3414 9.53877 15.4153 9.48435 15.4966 9.47231C15.5779 9.4602 15.6758 9.48435 15.7903 9.54475C15.8988 9.60516 16.0388 9.67311 16.2105 9.74861C16.3822 9.82411 16.5855 9.86186 16.8204 9.86186C17.0193 9.86186 17.1759 9.81956 17.2904 9.73501C17.4048 9.65046 17.4621 9.53571 17.4621 9.39076C17.4621 9.2639 17.4063 9.16275 17.2949 9.08725C17.1834 9.01175 17.0418 8.9423 16.8702 8.87884C16.6985 8.81544 16.5147 8.74749 16.3189 8.67498C16.1261 8.60401 15.9414 8.51293 15.7677 8.40324C15.5979 8.2964 15.4531 8.15427 15.343 7.98648C15.2316 7.81731 15.1758 7.59992 15.1758 7.33416C15.1758 7.11065 15.2225 6.91135 15.3159 6.7362C15.4069 6.56368 15.5369 6.41477 15.6954 6.30128C15.8551 6.18653 16.0418 6.09898 16.2556 6.03858C16.4695 5.97818 16.697 5.94798 16.9379 5.94798ZM33.415 4.24475C33.668 4.24475 33.7946 4.37161 33.7946 4.62526V6.4916C33.7946 6.552 33.7931 6.60485 33.7901 6.65015C33.7871 6.69545 33.7826 6.73627 33.7765 6.77245C33.771 6.80846 33.768 6.8448 33.7675 6.88122H33.7856C33.8398 6.77245 33.9166 6.66219 34.016 6.5505C34.1154 6.43874 34.2328 6.3376 34.3684 6.247C34.504 6.15639 34.6576 6.08395 34.8293 6.02953C35.001 5.97519 35.1862 5.94805 35.385 5.94805C35.8971 5.94805 36.2932 6.08694 36.5733 6.36481C36.8535 6.6426 36.9935 7.08956 36.9935 7.70569V10.2968C36.9935 10.5505 36.867 10.6774 36.614 10.6774H36.2254C35.9724 10.6774 35.8459 10.5505 35.8459 10.2968V7.94124C35.8459 7.65733 35.7976 7.42932 35.7013 7.25716C35.6049 7.08507 35.4121 6.99896 35.123 6.99896C34.9241 6.99896 34.7419 7.03828 34.5763 7.11677C34.4106 7.19527 34.2705 7.30247 34.1561 7.43837C34.0416 7.57427 33.9527 7.73589 33.8895 7.92308C33.8263 8.11034 33.7946 8.3127 33.7946 8.5301V10.2968C33.7946 10.5505 33.668 10.6774 33.415 10.6774H33.0264C32.7735 10.6774 32.647 10.5505 32.647 10.2968V4.62526C32.647 4.37154 32.7735 4.24475 33.0265 4.24475H33.415ZM27.411 6.05674C27.6581 6.05674 27.7816 6.1836 27.7816 6.43725V10.2968C27.7816 10.5505 27.6581 10.6774 27.411 10.6774H27.0135C26.7664 10.6774 26.643 10.5505 26.643 10.2968V6.43732C26.643 6.1836 26.7664 6.05674 27.0135 6.05674H27.411ZM19.7437 6.05674C19.9726 6.05674 20.1081 6.1685 20.1503 6.39195L20.8913 9.09181C20.9033 9.15826 20.9139 9.21866 20.9229 9.27301C20.932 9.32743 20.9425 9.37872 20.9546 9.42708C20.9666 9.48143 20.9756 9.53278 20.9817 9.58108H20.9998C21.0058 9.53278 21.0148 9.48143 21.0269 9.42708C21.0389 9.37878 21.0494 9.32743 21.0585 9.27301C21.0675 9.21866 21.0811 9.15826 21.0991 9.09181L21.8763 6.39195C21.9184 6.17455 22.057 6.06579 22.292 6.06579H22.6353C22.8583 6.06579 22.9968 6.17455 23.0511 6.39195L23.8191 9.09181C23.8372 9.15826 23.8508 9.21866 23.8598 9.27301C23.8689 9.32743 23.8794 9.37872 23.8914 9.42708C23.9035 9.48143 23.9125 9.53278 23.9186 9.58108H23.9366C23.9432 9.52935 23.9523 9.47796 23.9638 9.42708C23.9758 9.37878 23.9863 9.32743 23.9954 9.27301C24.0044 9.21866 24.0179 9.15826 24.036 9.09181L24.768 6.39195C24.8222 6.1685 24.9607 6.05674 25.1836 6.05674H25.5994C25.738 6.05674 25.8343 6.09599 25.8885 6.17455C25.9427 6.25305 25.9518 6.35569 25.9156 6.48255L24.7318 10.3602C24.6716 10.5717 24.53 10.6774 24.3071 10.6774H23.7017C23.4727 10.6774 23.3312 10.5686 23.277 10.3512L22.5811 8.04089C22.5632 7.98123 22.5482 7.92076 22.5359 7.85969C22.5252 7.80504 22.5131 7.75065 22.4998 7.69658C22.4884 7.64569 22.4793 7.5943 22.4727 7.54258H22.4546C22.4419 7.59375 22.4299 7.64509 22.4185 7.69658C22.4065 7.74487 22.3944 7.79929 22.3823 7.85969C22.3701 7.92076 22.355 7.98123 22.3372 8.04089L21.6413 10.3512C21.5871 10.5686 21.4486 10.6774 21.2257 10.6774H20.6022C20.3852 10.6774 20.2467 10.5717 20.1864 10.3602L18.9936 6.48255C18.9575 6.35569 18.968 6.25305 19.0253 6.17455C19.0825 6.09599 19.1774 6.05674 19.31 6.05674H19.7437Z" fill="#4A4A49"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.39717 13.3772C5.79681 14.5263 8.75845 13.9576 10.5476 11.8233C12.6683 9.29347 12.3389 5.52209 9.81193 3.39966L8.13204 5.40367C10.1062 7.0618 10.3635 10.0082 8.70682 11.9846C7.38566 13.5604 5.21056 14.0866 3.39717 13.3771" fill="url(#paint0_linear_943_31899)"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.39717 13.3779C5.79681 14.527 8.75846 13.9583 10.5476 11.824C10.7631 11.567 10.9569 11.2925 11.1267 11.0032C11.4093 9.24535 10.7879 7.38732 9.3263 6.15969C8.96421 5.85513 8.56253 5.60114 8.13225 5.40466C10.1063 7.06279 10.3634 10.009 8.70675 11.9853C7.38573 13.5612 5.2107 14.0874 3.39717 13.3779Z" fill="url(#paint1_linear_943_31899)"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.54828 2.58222C6.14864 1.43329 3.18707 2.00194 1.39787 4.13628C-0.722808 6.66609 -0.393435 10.4375 2.13352 12.5599L3.81348 10.5559C1.83928 8.89777 1.58192 5.95133 3.2387 3.97494C4.55973 2.39898 6.73476 1.87284 8.54821 2.58229" fill="url(#paint2_linear_943_31899)"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.54834 2.58222C6.1487 1.43329 3.18713 2.00194 1.39793 4.13628C1.18237 4.39324 0.98866 4.6678 0.818809 4.95708C0.536247 6.71493 1.15763 8.5729 2.61922 9.8006C2.98131 10.1052 3.38299 10.3591 3.81326 10.5556C1.83933 8.8975 1.58211 5.95127 3.23876 3.97494C4.55979 2.39898 6.73482 1.87284 8.54827 2.58229" fill="url(#paint3_linear_943_31899)"/>
            </g>
            <defs>
                <linearGradient id="paint0_linear_943_31899" x1="10.3055" y1="9.69724" x2="7.76289" y2="4.63818" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF2131"/>
                    <stop offset="1" stopColor="#FECF2C"/>
                </linearGradient>
                <linearGradient id="paint1_linear_943_31899" x1="7.98265" y1="5.40459" x2="3.52599" y2="13.1107" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FBC52C"/>
                    <stop offset="0.264" stopColor="#F87130"/>
                    <stop offset="0.561" stopColor="#EF52E2"/>
                    <stop offset="1" stopColor="#661EEC"/>
                </linearGradient>
                <linearGradient id="paint2_linear_943_31899" x1="1.75834" y1="6.33142" x2="4.19527" y2="11.2818" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#78F6D8"/>
                    <stop offset="0.266" stopColor="#77D1F6"/>
                    <stop offset="0.554" stopColor="#70A4F3"/>
                    <stop offset="1" stopColor="#661EEC"/>
                </linearGradient>
                <linearGradient id="paint3_linear_943_31899" x1="4.06102" y1="10.5556" x2="8.48298" y2="2.87587" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#536EED"/>
                    <stop offset="0.247" stopColor="#54C3EC"/>
                    <stop offset="0.564" stopColor="#64D769"/>
                    <stop offset="1" stopColor="#FECF2C"/>
                </linearGradient>
                <clipPath id="clip0_943_31899">
                    <rect width="39.2435" height="15.9602" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
}

export default SvgSwish;