import imgRisoTexture from "figma:asset/535520f8f89510a79d271aacc57bbe13d3a57498.png";
import imgNoise from "figma:asset/bcfa0f2ecf6c15828a024b5c1166de4e07f82d98.png";
import imgRectangle21 from "figma:asset/bc042af91aad7d70dca49f0e41893c364785a12f.png";

function GradientHalo() {
  return (
    <div className="absolute h-[3413.333px] left-0 top-0 w-[1920px]" data-name="Gradient-halo-4">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 3413.33">
        <g clipPath="url(#clip0_3_1356)" id="Gradient-halo-4">
          <rect fill="#858585" height="3413.33" width="1920" />
          <g filter="url(#filter0_f_3_1356)" id="Rectangle 1">
            <rect fill="url(#paint0_linear_3_1356)" fillOpacity="0.8" height="4320" width="2928" x="-152.889" y="-161.778" />
          </g>
          <g id="Group 3">
            <mask height="4109" id="mask0_3_1356" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="4107" x="354" y="-1819">
              <ellipse cx="2407.32" cy="235.949" fill="url(#paint1_linear_3_1356)" id="Ellipse 2" rx="2053.64" ry="2052.02" transform="rotate(106.892 2407.32 235.949)" />
            </mask>
            <g mask="url(#mask0_3_1356)">
              <g filter="url(#filter1_f_3_1356)" id="Ellipse 1">
                <ellipse cx="2048.84" cy="761.821" fill="url(#paint2_radial_3_1356)" rx="1677.12" ry="1675.8" transform="rotate(145.135 2048.84 761.821)" />
              </g>
            </g>
          </g>
          <mask height="2421" id="mask1_3_1356" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="2420" x="-250" y="1568">
            <ellipse cx="960.167" cy="2778.8" fill="url(#paint3_linear_3_1356)" id="Ellipse 2_2" rx="1209.76" ry="1208.81" transform="rotate(106.892 960.167 2778.8)" />
          </mask>
          <g mask="url(#mask1_3_1356)" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4579.56" id="filter0_f_3_1356" width="3187.56" x="-282.667" y="-291.556">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_3_1356" stdDeviation="64.8889" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3779.43" id="filter1_f_3_1356" width="3780.35" x="158.67" y="-1127.89">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_3_1356" stdDeviation="106.667" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1356" x1="2551.02" x2="-103.763" y1="-291.232" y2="4187.34">
            <stop />
            <stop offset="0.464577" stopColor="#292929" />
            <stop offset="0.703772" stopColor="#FF0000" stopOpacity="0.92" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3_1356" x1="2521.86" x2="2316.98" y1="-1298.23" y2="2379.93">
            <stop stopColor="#F585FF" />
            <stop offset="0.40625" stopColor="#EF88CC" stopOpacity="0.59375" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(2058.72 1010.82) rotate(93.1882) scale(1504.23 1505.41)" gradientUnits="userSpaceOnUse" id="paint2_radial_3_1356" r="1">
            <stop />
            <stop offset="1" stopColor="#010101" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3_1356" x1="1027.64" x2="906.949" y1="1875.05" y2="4041.78">
            <stop stopColor="#E23914" />
            <stop offset="0.40625" stopColor="#EF88CC" stopOpacity="0.59375" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_3_1356">
            <rect fill="white" height="3413.33" width="1920" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[397.333px] ml-0 mt-0 relative rounded-[18px] row-1 w-[298px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" src={imgRectangle21} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start not-italic relative shrink-0 text-white w-[299px]">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[0] min-w-full relative shrink-0 text-[0px] tracking-[0.24px] w-[min-content]">
        <span className="leading-[normal] text-[24px]">{`Name. 박이은 / `}</span>
        <span className="leading-[normal] text-[22px]">Park Lee Eun</span>
      </p>
      <a className="block font-['Pretendard:Regular',sans-serif] leading-[0] min-w-full relative shrink-0 text-[24px] w-[min-content]" href="mailto:peu11118@naver.com">
        <p className="cursor-pointer">
          <span className="leading-[normal]">{`Email. `}</span>
          <span className="decoration-solid leading-[normal] underline">peu11118@naver.com</span>
        </p>
      </a>
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] relative shrink-0 text-[24px] tracking-[0.24px] w-[270px]">Phone. 010-4533-1620</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-[100px] top-[calc(50%+50.67px)]">
      <Group />
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[15px] items-start not-italic relative shrink-0 text-[#d2d2d2] text-[24px] tracking-[0.24px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-none">2025 / 서울여자대학교 산업디자인학과 학사 졸업</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-none">2025 / 주)구름 프로덕트 디자이너 4회차 부트캠프 수료</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-none">{`2021 / 조선대학교 디자인공학과 수료 `}</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[548px]">
      <div className="flex flex-col font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic justify-center relative shrink-0 text-[40px] text-white tracking-[0.4px] w-full">
        <p className="leading-none">Education.</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[568px]">
      <div className="flex flex-col font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic justify-center min-w-full relative shrink-0 text-[40px] text-white tracking-[0.4px] w-[min-content]">
        <p className="leading-none">Award Details.</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#d2d2d2] text-[24px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-none">2025 / kakao goorm DEEPDIVE 4회차 팀 최우수상</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[188px] items-start leading-[0] relative shrink-0 w-full">
      <Frame11 />
      <Frame10 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[27.13px] py-[13.565px] relative rounded-[38.586px] shrink-0 w-[280px]">
      <div aria-hidden="true" className="absolute border-[1.017px] border-solid border-white inset-0 pointer-events-none rounded-[38.586px]" />
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[30px] text-center text-white tracking-[0.9px] whitespace-nowrap">Service Project</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[358px]">
      <Frame2 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d2d2d2] text-[0px] tracking-[0.24px] w-[346px]">
        <p className="mb-[17.77777862548828px]">
          <span className="font-['Pretendard:SemiBold',sans-serif] leading-[0.8] not-italic text-[24px]">STOOV</span>
          <span className="font-['Pretendard:Medium',sans-serif] leading-[0.8] not-italic text-[24px]">{` `}</span>
          <span className="leading-[0.8] text-[18px]">(2025.10 ~ 2026.01)</span>
        </p>
        <p className="leading-[0.8] mb-[17.77777862548828px] text-[20px]">버스킹 공연 장소를 탐색하고, 예약 사이트로</p>
        <p className="leading-[0.8] text-[20px]">바로 이동이 가능한 지도형 플랫폼</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center px-[27.13px] py-[13.565px] relative rounded-[38.586px] shrink-0 w-[280px]">
      <div aria-hidden="true" className="absolute border-[1.017px] border-solid border-white inset-0 pointer-events-none rounded-[38.586px]" />
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[30px] text-center text-white tracking-[0.9px] whitespace-nowrap">UX/UI Project</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]">
      <Frame />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d2d2d2] text-[0px] tracking-[0.24px] w-full">
        <p className="mb-[17.77777862548828px]">
          <span className="font-['Pretendard:SemiBold',sans-serif] leading-[0.8] not-italic text-[24px]">LocalLink</span>
          <span className="leading-[0.8] text-[24px]">{` `}</span>
          <span className="leading-[0.8] text-[18px]">(2025.03 ~ 11)</span>
        </p>
        <p className="leading-[0.8] mb-[17.77777862548828px] text-[20px]">소외 지역 활성화를 위한 현지인의 여행 코스</p>
        <p className="leading-[0.8] text-[20px]">제공과 게스트의 코스 소비 서비스</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[351px]">
      <Frame6 />
      <Frame21 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[27.13px] py-[13.565px] relative rounded-[38.586px] shrink-0 w-[280px]">
      <div aria-hidden="true" className="absolute border-[1.017px] border-solid border-white inset-0 pointer-events-none rounded-[38.586px]" />
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[30px] text-center text-white tracking-[0.9px] whitespace-nowrap">Product Design</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]">
      <Frame1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[292px]">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d2d2d2] text-[0px] tracking-[0.24px] w-full">
        <p className="mb-[17.77777862548828px]">
          <span className="font-['Pretendard:SemiBold',sans-serif] leading-[0.8] not-italic text-[24px]">Budget Buddy</span>
          <span className="leading-[0.8] text-[24px]">{` `}</span>
          <span className="leading-[0.8] text-[18px]">(2024.05 ~ 06)</span>
        </p>
        <p className="leading-[0.8] mb-[17.77777862548828px] text-[20px]">새로운 가치를 제공하는 e-wallet</p>
        <p className="leading-[0.8] text-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[351px]">
      <Frame7 />
      <Frame25 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-start left-0 top-[75px] w-[1243px]">
      <Frame5 />
      <div className="flex h-[219px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[219px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 219 1">
                <line id="Line 249" stroke="var(--stroke-0, #858585)" x2="219" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame24 />
      <div className="flex h-[219px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[219px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 219 1">
                <line id="Line 249" stroke="var(--stroke-0, #858585)" x2="219" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame22 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[294px] relative shrink-0 w-[1243px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic justify-center leading-[0] left-0 text-[40px] text-white top-[20px] tracking-[0.4px] w-[1242.522px]">
        <p className="leading-none">Project.</p>
      </div>
      <Frame23 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[234px]">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d2d2d2] text-[24px] tracking-[0.24px] w-full">
        <p className="leading-[0.8]">Photoshop, illustrator</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d2d2d2] text-[24px] tracking-[0.24px] w-full">
        <p className="leading-[0.8]">Maze</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d2d2d2] text-[24px] tracking-[0.24px] w-full">
        <p className="leading-[0.8]">Keshot, Fusion</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[96px]">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d2d2d2] text-[24px] tracking-[0.24px] w-full">
        <p className="leading-[0.8]">VS Code</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[78px]">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d2d2d2] text-[24px] tracking-[0.24px] w-full">
        <p className="leading-[0.8]">GitHub</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[35px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d2d2d2] text-[24px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[0.8]">Figma, Make, Slides</p>
      </div>
      <Frame12 />
      <Frame16 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[1020px]">
      <div className="flex flex-col font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic justify-center leading-[0] relative shrink-0 text-[40px] text-white tracking-[0.4px] w-full">
        <p className="leading-none">Tool.</p>
      </div>
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-start left-[516px] top-[236px] w-[1304px]">
      <Frame17 />
      <Frame9 />
      <Frame19 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="포폴표지">
      <GradientHalo />
      <p className="absolute font-['EB_Garamond:SemiBold',sans-serif] font-semibold leading-none left-[calc(50%-860px)] text-[100px] text-white top-[100px] whitespace-nowrap">Profile</p>
      <div className="absolute flex inset-0 items-center justify-center mix-blend-multiply">
        <div className="flex-none h-[1920px] rotate-90 w-[1081px]">
          <div className="opacity-80 relative size-full" data-name="riso_texture">
            <div aria-hidden="true" className="absolute bg-size-[598.925384759903px_798.5671796798706px] bg-top-left inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: `url('${imgRisoTexture}')` }} />
          </div>
        </div>
      </div>
      <div className="absolute bg-size-[238.22222232818604px_238.22222232818604px] bg-top-left inset-0 mix-blend-overlay opacity-50" data-name="Noise" style={{ backgroundImage: `url('${imgNoise}')` }} />
      <Frame4 />
      <Frame20 />
    </div>
  );
}