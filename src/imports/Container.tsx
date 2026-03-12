import imgCanvas from "figma:asset/9473d06ae1e81caa6fe4f0177d2f14b560174feb.png";

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[16.531px] items-start left-0 top-0 w-[1209.796px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[16.531px] min-h-px min-w-px not-italic relative text-[#ff4800] text-[11.02px] tracking-[3.3061px]">{`> LOADING_PROFILE_DATA... SYSTEM_READY`}</p>
    </div>
  );
}

function Canvas() {
  return (
    <div className="absolute h-[244.898px] left-0 top-[26.33px] w-[979.592px]" data-name="Canvas">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCanvas} />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[70.035px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[70.041px] left-0 not-italic text-[#6b6555] text-[63.673px] top-0 tracking-[-1.2735px] whitespace-nowrap">Designing Solutions</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[70.035px] left-0 top-[6.12px] w-[113.093px]" data-name="Text">
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[70.041px] left-0 not-italic text-[#6b6555] text-[63.673px] top-0 tracking-[-1.2735px] whitespace-nowrap">for Real USers</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[82.28px] relative shrink-0 w-full" data-name="Container">
      <Text />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.898px] h-[157.213px] items-start left-0 pl-[31.837px] top-[320.2px] w-[1209.796px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff4800] border-l-[2.449px] border-solid inset-0 pointer-events-none" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute font-['Space_Mono:Regular','Noto_Sans_KR:Regular',sans-serif] h-[63.673px] left-0 text-[#6b6555] text-[15.918px] top-[516.6px] tracking-[0.7959px] w-[832.653px] whitespace-nowrap" data-name="Container">
      <p className="absolute leading-[0] left-0 top-[-0.61px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <span className="leading-[31.837px]">{`타겟 사용자를 겨냥해 `}</span>
        <span className="leading-[31.837px] text-[#ede8df]">문제를 해결하는</span>
        <span className="leading-[31.837px]">{` `}</span>
        <span className="leading-[31.837px] text-[#ede8df]">디자이너</span>
        <span className="leading-[31.837px]">입니다.</span>
      </p>
      <p className="absolute leading-[31.837px] left-0 top-[31.22px]" style={{ fontVariationSettings: "'wght' 400" }}>
        명확한 문제 정의와 그에 맞는 디자인을 통해 사용자 경험을 만들어갑니다.
      </p>
    </div>
  );
}

function Container6() {
  return <div className="absolute border-[#1e1c18] border-solid border-t-[1.224px] h-[76.894px] left-0 top-[604.76px] w-[832.653px]" data-name="Container" />;
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
      <Canvas />
      <Container2 />
      <Container5 />
      <Container6 />
    </div>
  );
}