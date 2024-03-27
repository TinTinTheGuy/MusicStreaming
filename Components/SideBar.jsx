import React from 'react'
const SideBar = () => {
  return (
        <aside id="sidebar-logo" class="z-50 fixed w-60 h-screen  pt-16 pb-12 bg-bgDarkBg	" aria-label="Sidebar">
        <div id="sidebar-wrapper"class="h-full flex flex-col ">
            <nav id="sidebar-navbar" class="w-full">
            <div id="sidebar-brand" class="fixed top-0 flex items-center w-60 h-16 pr-6 pl-7">
                <div id="sidebar-items">
                    <button id="Home-Button" class="">
                        <div class="w-28 h-10 inline-block text-bgWhite">
                            {/* Need Logo Image on div*/}
                            <img src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.10.11/static/media/icon_zing_mp3_60.f6b51045.svg"/>
                        </div>

                    </button>
                

                </div>

                </div>
               

            </nav>
            <nav id="sidebar-navbar-2" class="relative mb-4 ">
                <ul>
                    <li class="font-bold text-textDarkText border-l-2 border-solid border-transparent">
                        <a class="flex items-center text-sm font-medium py-3 px-5">
                            {/* SVG or ICONS with margin right 12px */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2 fill-white	" viewBox="0 0 24 24"><path fill='white' d="M 6.5 2.75 C 6.08579 2.75 5.75 3.08579 5.75 3.5 C 5.75 3.91421 6.08579 4.25 6.5 4.25 H 17.5 C 17.9142 4.25 18.25 3.91421 18.25 3.5 C 18.25 3.08579 17.9142 2.75 17.5 2.75 H 6.5 Z M 3 9.5 C 3 7.42893 4.67893 5.75 6.75 5.75 H 17.25 C 19.3211 5.75 21 7.42893 21 9.5 V 17.5 C 21 19.5711 19.3211 21.25 17.25 21.25 H 6.75 C 4.67893 21.25 3 19.5711 3 17.5 V 9.5 Z M 6.75 7.25 C 5.50736 7.25 4.5 8.25736 4.5 9.5 V 17.5 C 4.5 18.7426 5.50736 19.75 6.75 19.75 H 17.25 C 18.4926 19.75 19.5 18.7426 19.5 17.5 V 9.5 C 19.5 8.25736 18.4926 7.25 17.25 7.25 H 6.75 Z M 13.666 8.87596 C 13.4359 8.72253 13.14 8.70823 12.8961 8.83874 C 12.6522 8.96926 12.5 9.2234 12.5 9.5 V 13.0499 C 12.125 12.8581 11.7001 12.75 11.25 12.75 C 9.73122 12.75 8.5 13.9812 8.5 15.5 C 8.5 17.0188 9.73122 18.25 11.25 18.25 C 12.6911 18.25 13.8733 17.1415 13.9905 15.7307 C 13.9967 15.6916 14 15.6515 14 15.6107 V 15.5 V 10.9014 L 15.084 11.624 C 15.4286 11.8538 15.8943 11.7607 16.124 11.416 C 16.3538 11.0714 16.2607 10.6057 15.916 10.376 L 13.666 8.87596 Z M 12.5 15.5 C 12.5 14.8096 11.9404 14.25 11.25 14.25 C 10.5596 14.25 10 14.8096 10 15.5 C 10 16.1904 10.5596 16.75 11.25 16.75 C 11.9404 16.75 12.5 16.1904 12.5 15.5 Z"/></svg>
                            Library
                        </a>
                    </li>
                    <li class="font-bold text-textDarkText border-l-2 border-solid border-transparent">
                        <a class="flex items-center text-sm font-medium py-3 px-5">
                            {/* SVG or ICONS with margin right 12px */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2 fill-white	" viewBox="0 0 24 24"><path fill='white' d="M 3.25 12 C 3.25 7.16751 7.16751 3.25 12 3.25 C 16.8325 3.25 20.75 7.16751 20.75 12 C 20.75 16.8325 16.8325 20.75 12 20.75 C 7.16751 20.75 3.25 16.8325 3.25 12 Z M 12 1.75 C 6.33908 1.75 1.75 6.33908 1.75 12 C 1.75 17.6609 6.33908 22.25 12 22.25 C 17.6609 22.25 22.25 17.6609 22.25 12 C 22.25 6.33908 17.6609 1.75 12 1.75 Z M 9.25 12 C 9.25 10.4812 10.4812 9.25 12 9.25 C 13.5188 9.25 14.75 10.4812 14.75 12 C 14.75 13.5188 13.5188 14.75 12 14.75 C 10.4812 14.75 9.25 13.5188 9.25 12 Z M 12 7.75 C 9.65279 7.75 7.75 9.65279 7.75 12 C 7.75 14.3472 9.65279 16.25 12 16.25 C 14.3472 16.25 16.25 14.3472 16.25 12 C 16.25 9.65279 14.3472 7.75 12 7.75 Z"/></svg>

                            Explore
                        </a>    
                    </li>
                    <li class="font-bold text-textDarkText border-l-2 border-solid border-transparent">
                        <a class="flex items-center text-sm font-medium py-3 px-5">
                            {/* SVG or ICONS with margin right 12px */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2 fill-white	" viewBox="0 0 24 24"><path fill='white' d="M 1.76078 11.5281 C 2.0086 6.08576 6.49865 1.75 12.0018 1.75 C 14.0559 1.75 15.971 2.35489 17.5759 3.39648 C 17.9234 3.62198 18.0222 4.08645 17.7967 4.4339 C 17.5712 4.78136 17.1068 4.88023 16.7593 4.65473 C 15.3901 3.76614 13.7574 3.25 12.0018 3.25 C 7.30422 3.25 3.47074 6.95138 3.25923 11.5963 C 3.24039 12.0101 2.88968 12.3303 2.47589 12.3114 C 2.06211 12.2926 1.74194 11.9419 1.76078 11.5281 Z M 21.5275 11.6871 C 21.9413 11.7057 22.2617 12.0563 22.243 12.4701 C 21.998 17.9149 17.5067 22.2536 12.0018 22.2536 C 9.89696 22.2536 7.93821 21.6184 6.30952 20.5292 C 5.9652 20.299 5.87274 19.8332 6.103 19.4889 C 6.33327 19.1446 6.79905 19.0521 7.14337 19.2824 C 8.53298 20.2117 10.203 20.7536 12.0018 20.7536 C 16.7009 20.7536 20.5354 17.0497 20.7445 12.4026 C 20.7632 11.9888 21.1137 11.6685 21.5275 11.6871 Z M 20.7535 8.05986 C 20.7535 7.40256 20.2207 6.86972 19.5634 6.86972 C 18.9061 6.86972 18.3732 7.40256 18.3732 8.05986 C 18.3732 8.71715 18.9061 9.25 19.5634 9.25 C 20.2207 9.25 20.7535 8.71715 20.7535 8.05986 Z M 19.5634 5.36972 C 21.0491 5.36972 22.2535 6.57413 22.2535 8.05986 C 22.2535 9.54558 21.0491 10.75 19.5634 10.75 C 19.1208 10.75 18.7031 10.6431 18.3349 10.4537 L 15.5083 14.5112 C 15.3814 14.6933 15.1803 14.8099 14.9592 14.8295 C 14.738 14.8491 14.5196 14.7698 14.3626 14.6128 L 13.3637 13.6139 L 12.2257 15.3202 C 12.0906 15.5227 11.8658 15.6471 11.6225 15.6538 C 11.3793 15.6605 11.1478 15.5488 11.0018 15.3542 L 9.05228 12.7558 L 6.78385 15.0242 C 6.75187 15.0562 6.71772 15.0847 6.68188 15.1097 C 6.80299 15.4073 6.86972 15.7328 6.86972 16.074 C 6.86972 17.4877 5.72363 18.6338 4.30986 18.6338 C 2.89609 18.6338 1.75 17.4877 1.75 16.074 C 1.75 14.6602 2.89609 13.5141 4.30986 13.5141 C 4.83856 13.5141 5.32983 13.6744 5.73772 13.949 L 8.60299 11.0837 C 8.75671 10.93 8.96957 10.8506 9.18642 10.8659 C 9.40327 10.8813 9.60278 10.9901 9.73324 11.164 L 11.5657 13.6064 L 12.6234 12.0207 C 12.748 11.8338 12.9499 11.7126 13.1735 11.6905 C 13.3971 11.6684 13.6188 11.7477 13.7776 11.9065 L 14.7897 12.9186 L 17.2351 9.40829 C 17.005 9.01185 16.8732 8.55124 16.8732 8.05986 C 16.8732 6.57413 18.0777 5.36972 19.5634 5.36972 Z M 4.30986 15.0141 C 4.8952 15.0141 5.36972 15.4886 5.36972 16.074 C 5.36972 16.6593 4.8952 17.1338 4.30986 17.1338 C 3.72452 17.1338 3.25 16.6593 3.25 16.074 C 3.25 15.4886 3.72452 15.0141 4.30986 15.0141 Z"/></svg>

                            Top 100
                        </a>
                    </li>
                    <li class="font-bold text-textDarkText border-l-2 border-solid border-transparent">
                        <a class="flex items-center text-sm font-medium py-3 px-5">
                            {/* SVG or ICONS with margin right 12px */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2 fill-white	" viewBox="0 0 24 24"><path fill='white' d="M 11.8722 2.67978 C 11.911 3.09217 11.6082 3.45794 11.1958 3.49675 C 6.88011 3.90291 3.5 7.54519 3.5 11.98 C 3.5 16.6875 7.30771 20.501 12.0014 20.501 C 16.6952 20.501 20.5029 16.6875 20.5029 11.98 C 20.5029 10.3767 20.0618 8.87895 19.2951 7.59953 C 19.0822 7.24422 19.1976 6.78359 19.5529 6.57068 C 19.9082 6.35777 20.3688 6.4732 20.5818 6.82851 C 21.4842 8.33451 22.0029 10.0978 22.0029 11.98 C 22.0029 17.513 17.5266 22.001 12.0014 22.001 C 6.4763 22.001 2 17.513 2 11.98 C 2 6.76649 5.9737 2.48158 11.0553 2.00335 C 11.4676 1.96454 11.8334 2.26739 11.8722 2.67978 Z M 11.8656 6.19339 C 11.9286 6.60278 11.6479 6.98576 11.2385 7.0488 C 8.85318 7.4161 7.02419 9.48361 7.02419 11.9799 C 7.02419 13.3678 7.58856 14.622 8.50124 15.527 C 8.79536 15.8186 8.79736 16.2935 8.50571 16.5876 C 8.21405 16.8818 7.73918 16.8838 7.44506 16.5921 C 6.25964 15.4166 5.52419 13.7835 5.52419 11.9799 C 5.52419 8.73441 7.90208 6.04487 11.0102 5.56627 C 11.4196 5.50323 11.8026 5.784 11.8656 6.19339 Z M 16.7493 8.68305 C 17.1175 8.49328 17.5698 8.63791 17.7595 9.00609 C 18.2192 9.89782 18.4783 10.9096 18.4783 11.9799 C 18.4783 15.5622 15.58 18.469 12.0013 18.469 C 11.5871 18.469 11.2513 18.1333 11.2513 17.719 C 11.2513 17.3048 11.5871 16.969 12.0013 16.969 C 14.7485 16.969 16.9783 14.7368 16.9783 11.9799 C 16.9783 11.1542 16.7788 10.3774 16.4262 9.69332 C 16.2365 9.32514 16.3811 8.87282 16.7493 8.68305 Z M 14.3787 2.2439 C 13.9763 2.14558 13.5704 2.39207 13.4721 2.79444 C 13.4513 2.87927 13.4459 2.96425 13.4541 3.04647 V 9.4046 C 13.0253 9.16142 12.5297 9.02255 12.0013 9.02255 C 10.3691 9.02255 9.04861 10.3481 9.04861 11.9799 C 9.04861 13.6117 10.3691 14.9373 12.0013 14.9373 C 13.6336 14.9373 14.9541 13.6117 14.9541 11.9799 C 14.9541 11.9479 14.9535 11.916 14.9525 11.8842 C 14.9536 11.8681 14.9541 11.8519 14.9541 11.8355 V 3.98669 C 15.7486 4.28167 16.4875 4.69246 17.1504 5.19895 C 17.4795 5.45044 17.9502 5.3875 18.2017 5.05837 C 18.4532 4.72924 18.3902 4.25855 18.0611 4.00706 C 16.9849 3.18473 15.7363 2.57565 14.3787 2.2439 Z M 12.0013 10.5225 C 11.2005 10.5225 10.5486 11.1735 10.5486 11.9799 C 10.5486 12.7863 11.2005 13.4373 12.0013 13.4373 C 12.8022 13.4373 13.4541 12.7863 13.4541 11.9799 C 13.4541 11.1735 12.8022 10.5225 12.0013 10.5225 Z"/></svg>

                            Radio
                        </a>
                    </li>
                </ul>

            </nav>

            <div id="sidebar-divide" class="relative h-px border-solid border-t-2"> 
                {/* Seperate Bar Needed  */}
            </div>
            
            <div id="sidebar-navbar-3" class="relative w-full h-full">
                <div class="relative overflow-hidden -mr-1.5 mb-0  mt-4">
                    <nav class="w-full text-textDarkText">
                        <ul>
                            <li class="font-bold  border-l-2 border-solid border-transparent">
                                <a class="flex items-center text-sm font-medium py-3 px-5">
                            {/* SVG or ICONS with margin right 12px */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2 fill-white	" viewBox="0 0 24 24"><path fill='white' d="M 20.25 2 C 20.25 1.58579 19.9142 1.25 19.5 1.25 C 19.0858 1.25 18.75 1.58579 18.75 2 C 18.75 2.95195 18.4626 3.63685 18.0656 4.07478 C 17.6709 4.51015 17.1258 4.75 16.5 4.75 C 16.0858 4.75 15.75 5.08579 15.75 5.5 C 15.75 5.91421 16.0858 6.25 16.5 6.25 C 17.126 6.25 17.671 6.48996 18.0657 6.9254 C 18.4628 7.36341 18.75 8.04835 18.75 9 C 18.75 9.41421 19.0858 9.75 19.5 9.75 C 19.9142 9.75 20.25 9.41421 20.25 9 C 20.25 8.04805 20.5374 7.36315 20.9344 6.92522 C 21.3291 6.48985 21.8742 6.25 22.5 6.25 C 22.9142 6.25 23.25 5.91421 23.25 5.5 C 23.25 5.08579 22.9142 4.75 22.5 4.75 C 21.874 4.75 21.329 4.51004 20.9343 4.0746 C 20.5372 3.63659 20.25 2.95165 20.25 2 Z M 19.1769 5.08231 C 19.2934 4.95373 19.4013 4.81641 19.5 4.6709 C 19.5987 4.81629 19.7064 4.95351 19.8229 5.082 C 19.9625 5.23602 20.1129 5.37549 20.2725 5.49999 C 20.113 5.62441 19.9627 5.76378 19.8231 5.91769 C 19.7066 6.04627 19.5987 6.18359 19.5 6.3291 C 19.4013 6.18371 19.2936 6.04649 19.1771 5.918 C 19.0375 5.76398 18.8871 5.62451 18.7275 5.50001 C 18.887 5.37559 19.0373 5.23622 19.1769 5.08231 Z M 13.5095 5.31294 C 13.5652 5.72339 13.2776 6.10128 12.8672 6.15698 L 12.3492 6.22728 L 11.3238 6.36644 C 10.186 6.55633 9.25 7.65728 9.25 8.74999 V 18.5 C 9.25 20.5711 7.57107 22.25 5.5 22.25 C 3.42893 22.25 1.75 20.5711 1.75 18.5 C 1.75 16.4289 3.42893 14.75 5.5 14.75 C 6.3442 14.75 7.12325 15.0289 7.75 15.4997 V 8.74999 C 7.75 6.89294 9.25015 5.18376 11.0921 4.88439 L 11.1116 4.88149 L 12.1475 4.7409 L 12.6655 4.67061 C 13.0759 4.61491 13.4538 4.90249 13.5095 5.31294 Z M 5.5 16.25 C 6.74264 16.25 7.75 17.2573 7.75 18.5 C 7.75 19.7426 6.74264 20.75 5.5 20.75 C 4.25736 20.75 3.25 19.7426 3.25 18.5 C 3.25 17.2573 4.25736 16.25 5.5 16.25 Z M 19.5 11.75 C 19.9142 11.75 20.25 12.0858 20.25 12.5 V 17.5 C 20.25 19.5711 18.5711 21.25 16.5 21.25 C 14.4289 21.25 12.75 19.5711 12.75 17.5 C 12.75 15.4289 14.4289 13.75 16.5 13.75 C 17.3442 13.75 18.1233 14.0289 18.75 14.4997 V 12.5 C 18.75 12.0858 19.0858 11.75 19.5 11.75 Z M 16.5 15.25 C 17.7426 15.25 18.75 16.2573 18.75 17.5 C 18.75 18.7426 17.7426 19.75 16.5 19.75 C 15.2574 19.75 14.25 18.7426 14.25 17.5 C 14.25 16.2573 15.2574 15.25 16.5 15.25 Z"/></svg>
                            Popular
                        </a>
                            </li>
                                
                            <li class="font-bold border-l-2 border-solid border-transparent">
                                <a class="flex items-center text-sm font-medium py-3 px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2 fill-white	" viewBox="0 0 24 24"><path fill='white' d="M 1.76078 11.5281 C 2.0086 6.08576 6.49865 1.75 12.0018 1.75 C 14.0559 1.75 15.971 2.35489 17.5759 3.39648 C 17.9234 3.62198 18.0222 4.08645 17.7967 4.4339 C 17.5712 4.78136 17.1068 4.88023 16.7593 4.65473 C 15.3901 3.76614 13.7574 3.25 12.0018 3.25 C 7.30422 3.25 3.47074 6.95138 3.25923 11.5963 C 3.24039 12.0101 2.88968 12.3303 2.47589 12.3114 C 2.06211 12.2926 1.74194 11.9419 1.76078 11.5281 Z M 21.5275 11.6871 C 21.9413 11.7057 22.2617 12.0563 22.243 12.4701 C 21.998 17.9149 17.5067 22.2536 12.0018 22.2536 C 9.89696 22.2536 7.93821 21.6184 6.30952 20.5292 C 5.9652 20.299 5.87274 19.8332 6.103 19.4889 C 6.33327 19.1446 6.79905 19.0521 7.14337 19.2824 C 8.53298 20.2117 10.203 20.7536 12.0018 20.7536 C 16.7009 20.7536 20.5354 17.0497 20.7445 12.4026 C 20.7632 11.9888 21.1137 11.6685 21.5275 11.6871 Z M 20.7535 8.05986 C 20.7535 7.40256 20.2207 6.86972 19.5634 6.86972 C 18.9061 6.86972 18.3732 7.40256 18.3732 8.05986 C 18.3732 8.71715 18.9061 9.25 19.5634 9.25 C 20.2207 9.25 20.7535 8.71715 20.7535 8.05986 Z M 19.5634 5.36972 C 21.0491 5.36972 22.2535 6.57413 22.2535 8.05986 C 22.2535 9.54558 21.0491 10.75 19.5634 10.75 C 19.1208 10.75 18.7031 10.6431 18.3349 10.4537 L 15.5083 14.5112 C 15.3814 14.6933 15.1803 14.8099 14.9592 14.8295 C 14.738 14.8491 14.5196 14.7698 14.3626 14.6128 L 13.3637 13.6139 L 12.2257 15.3202 C 12.0906 15.5227 11.8658 15.6471 11.6225 15.6538 C 11.3793 15.6605 11.1478 15.5488 11.0018 15.3542 L 9.05228 12.7558 L 6.78385 15.0242 C 6.75187 15.0562 6.71772 15.0847 6.68188 15.1097 C 6.80299 15.4073 6.86972 15.7328 6.86972 16.074 C 6.86972 17.4877 5.72363 18.6338 4.30986 18.6338 C 2.89609 18.6338 1.75 17.4877 1.75 16.074 C 1.75 14.6602 2.89609 13.5141 4.30986 13.5141 C 4.83856 13.5141 5.32983 13.6744 5.73772 13.949 L 8.60299 11.0837 C 8.75671 10.93 8.96957 10.8506 9.18642 10.8659 C 9.40327 10.8813 9.60278 10.9901 9.73324 11.164 L 11.5657 13.6064 L 12.6234 12.0207 C 12.748 11.8338 12.9499 11.7126 13.1735 11.6905 C 13.3971 11.6684 13.6188 11.7477 13.7776 11.9065 L 14.7897 12.9186 L 17.2351 9.40829 C 17.005 9.01185 16.8732 8.55124 16.8732 8.05986 C 16.8732 6.57413 18.0777 5.36972 19.5634 5.36972 Z M 4.30986 15.0141 C 4.8952 15.0141 5.36972 15.4886 5.36972 16.074 C 5.36972 16.6593 4.8952 17.1338 4.30986 17.1338 C 3.72452 17.1338 3.25 16.6593 3.25 16.074 C 3.25 15.4886 3.72452 15.0141 4.30986 15.0141 Z"/></svg>
                            Library
                        </a>
                            </li>
                                
                            <li class="font-bold border-l-2 border-solid border-transparent">
                                <a class="flex items-center text-sm font-medium py-3 px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2 fill-white	" viewBox="0 0 24 24"><path fill='white' d="M 12 17 L 7.01888 19.6187 C 6.65207 19.8116 6.22335 19.5001 6.29341 19.0916 L 7.24472 13.5451 L 3.21491 9.61699 C 2.91815 9.32773 3.08191 8.82374 3.49202 8.76415 L 9.06107 7.95491 L 11.5516 2.90849 C 11.735 2.53687 12.265 2.53687 12.4484 2.90849 L 14.9389 7.95491 L 20.508 8.76415 C 20.9181 8.82374 21.0818 9.32773 20.7851 9.61699 L 16.7553 13.5451 L 17.7066 19.0916 C 17.7766 19.5001 17.3479 19.8116 16.9811 19.6187 L 12 17 Z"/></svg>
                            Treding
                        </a>
                            </li>

                            

                            
                                
                        </ul>

                    </nav>

                    <div id="login-noti" class="py-3.5 px-2 rounded-lg text-center my-2.5 mx-5 text-textDarkText bg-bgDarkSecondary">
                            <div class="mb-2.5 font-semibold">
                                Sign In to explore 
                            </div>

                            <button class="flex rounded-full border-white justify-center items-center bg-bgDarkInactive border-solid text-textDarkText py-1.5 px-9 m-auto">
                                <span> Sign In</span>

                            </button>

                        </div>             

                </div>
                
                

            </div>
            
            
            

            </div>

            <div id="sidebar-playlist" >
                <button class="relative w-60 l-0 h-14 bottom-0 border-solid border-t-2 text-textDarkText py-0 px-7 font-medium">
                {/* Icon Needed with margin right 12px */}
                <span>Add Playlist</span>

                </button>

            </div>
          
        </aside>  
  )
}

export default SideBar