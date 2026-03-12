import { useState, useEffect, useRef } from "react";
import stoovThumb from "figma:asset/84e5acbfb3082428b38af12df4acf81aa26edbd1.png";
import locallinkThumb from "figma:asset/dba47492126fc7857c7b715b1d045fb7f4ad5658.png";
import budgetBuddyThumb from "figma:asset/4df4910fe1cd07788d0fbd35024b6c718e762d7a.png";
import stoovImg1 from "figma:asset/5c48a9d8f5c80e9710e409f45be6f289d43acf6f.png";
import stoovImg2 from "figma:asset/e546eb0d45ff04cd2f5cd065355c361b8de1c337.png";
import stoovImg3 from "figma:asset/02ecfdac223d54beef5d06250dff52976b32fa22.png";
import stoovImg4 from "figma:asset/62b3f9938b0a6e400a37415e7352bbd4238e3679.png";
import stoovImg5 from "figma:asset/8919fe0cb2e6e60fc1f5f03576d49aaf63c038d1.png";
import stoovImg9 from "figma:asset/28de44ddf724a32358bb32fe476a342c9c7950e6.png";
import stoovImg10 from "figma:asset/fdd51e0f520e94bc10cf612bbdd1606041d2d67a.png";
import stoovImg11 from "figma:asset/bd99178950883037df678e218ec63f46248b63e0.png";
import stoovImg6 from "figma:asset/aa74f781576a43132dbd44a1534d8be9fe7b9f8f.png";
import stoovImg7 from "figma:asset/a384096afebc4de5914bace027705a3c7d7e98ad.png";
import stoovImg8 from "figma:asset/0a97abc8e27eb45d1568ac15d4687a3be803126b.png";

import localImg1 from "figma:asset/929f2c39dad999ac6eb543bdadc0da80e5bf22d7.png";
import localImg2 from "figma:asset/5448af3c59da9e88fe4616923006552f0dd97c3c.png";
import localImg3 from "figma:asset/8e84e7076fde639debfcc0ebccdcbadaa00777ff.png";
import localImg4 from "figma:asset/322db578135dc6c1875bf38895dbfd85abbe9ef7.png";
import localImg5 from "figma:asset/b4f9c54f6d4f04cfb89778288b9d4b3edf5bbcd7.png";
import localImg6 from "figma:asset/6eac95f0f22c6433689c15778a3fff8805df2524.png";
import localImg7 from "figma:asset/7e13efa4dc6a93882d2078c95dfeef15a395f71d.png";
import localImg8 from "figma:asset/76409a5ed0f99d57f63de90b33a242da5810b5cc.png";
import localImg9 from "figma:asset/4368cff16e71da7535dc6446f1d07f32eb6eaab1.png";
import localImg10 from "figma:asset/02acc89c4eccd3fe5dde61d71c36d34578df9ce1.png";
import localImg11 from "figma:asset/aee225e7f106a6194871ba819cde035c0233418e.png";
import localImg12 from "figma:asset/9a154692daa626b5d163171018639ee8a5eb7765.png";

import budgetImg1 from "figma:asset/e1396168e3ef6a0289e20c5cf0e1009f94a1cdfb.png";
import budgetImg2 from "figma:asset/83ac48ee654ed1489503d226adab2314e542bbd5.png";
import budgetImg3 from "figma:asset/e74b639a9fa5a3c0fc99a41c7da69e944368fc55.png";
import budgetImg4 from "figma:asset/ee80246d26ad7270bf9844ab2bf9e01d13fc2360.png";
import budgetImg5 from "figma:asset/ff106c82f6ea9e2861121d4bb2a1a4352f75b646.png";
import budgetImg6 from "figma:asset/f65ab2598506f113c299fe36bb29bd0e4aba9da4.png";
import budgetImg7 from "figma:asset/e6666ff93667901582a5275156c2104034d8eb00.png";
import budgetImg8 from "figma:asset/8fac7c0709f87c0a9c9bc4ebf1a9f4dcbfa63c3d.png";
import budgetImg9 from "figma:asset/2f51c1761d7c9cd0fc5b02f7a638242dc42c9aee.png";
import budgetImg10 from "figma:asset/6e8a15c6af1090b0316ed5a533e7416202c6ee39.png";

interface Project {
  id: string;
  code: string;
  title: string;
  year: string;
  period: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  tools: string[];
  role: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  imgUrl: string;
  accentColor: string;
  binary: string;
  status: string;
  dims: string;
  prototypeUrl?: string;
  designSystemUrl?: string;
  videoUrl?: string;
  gallery?: { src: string; label: string }[];
}

const PROJECTS: Project[] = [
  {
    id: "001",
    code: "MAP_STOOV",
    title: "STOOV",
    year: "2025",
    period: "2025.10 ~ 2026.01",
    category: "SERVICE — MAP_PLATFORM",
    categoryLabel: "Service Design",
    tags: ["SERVICE_DESIGN", "MAP_PLATFORM", "BUSKING", "MOBILE_WEB"],
    tools: ["Figma", "Ps", "Ai", "Notion", "Excel", "Perplexity", "ChatGPT", "Maze", "Krea.ai"],
    role: "70% / UX 리서치 및 구조 설계, IA·플로우 차트 작성, UI 디자인 및 컴포넌트 제작, 디자인 시스템 구축, 디자인 QA 관리, UT 기획",
    description: "버스킹 공연 장소를 탐색하고, 예약 사이트로 바로 이동이 가능한 지도형 플랫폼",
    overview:
      "STOOV는 지도 기반으로 버스킹 공연 장소를 탐색하고, 운영시간·위치·예약 조건 등 상세 정보를 한곳에서 확인하며, 예약 사이트로 바로 이동할 수 있는 통합 플랫폼입니다.",
    problem:
      "버스킹 아티스트들은 공연 장소 정보가 파편화되어 있어 운영 시간, 위치 조건, 예약 필요 여부를 각각 다른 곳에서 확인해야 했습니다. 장소 탐색부터 예약까지 비체계적이고 비효율적인 과정으로 인해 시간이 많이 소요되었습니다.",
    solution:
      "지도 중심의 직관적인 UI로 장소를 한눈에 파악하고, 마커 클릭 시 버텀시트 팝업으로 상세 정보를 제공합니다. 운영 시간부터 위치 조건, 예약 필요 정보를 한 흐름으로 빠르게 확인할 수 있도록 설계했으며, 연락처와 지도 위치를 통해 실제 예약까지 원활하게 진행할 수 있습니다.",
    result:
      "UT를 통해 장소 탐색부터 선택, 예약 과정의 가설을 검증했습니다. 100% \"기존 방식보다 탐색이 쉽다\" 응답, 75% \"꼭 사용해보고 싶다\" 응답, 83% \"비체계적 장소 탐색\" 경험을 확인했습니다. 사용자들은 공연 장소 정보의 통합 자체를 큰 가치로 인식하며 기존의 파편화된 탐색 경험을 대체할 수 있는 인식 개선을 확인했습니다.",
    imgUrl: stoovThumb,
    accentColor: "#FF4800",
    binary: "01010011 01010100 01001111",
    status: "COMPLETED",
    dims: "MOBILE_WEB",
    prototypeUrl:
      "https://www.figma.com/proto/HciHfbMaqayfYbIFdPJVOa/STOOV-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85?node-id=79-4327&t=ykIDW28rKHXH0Asq-1",
    designSystemUrl:
      "https://www.figma.com/design/LpVuBa7LizDnO3FiEraXcP/%F0%9F%8E%B8-STOOV-Design-System-Library?node-id=0-1&t=6J9JS1WHDbFsu5nL-1",
    gallery: [
      { src: stoovImg1, label: "배경 및 문제 인식" },
      { src: stoovImg2, label: "사용자 리서치 및 문제정의" },
      { src: stoovImg3, label: "가설 및 목표" },
      { src: stoovImg4, label: "핵심 솔루션" },
      { src: stoovImg5, label: "타겟 사용자 정의" },
      { src: stoovImg10, label: "브랜딩" },
      { src: stoovImg11, label: "디자인 시스템" },
      { src: stoovImg6, label: "장소 목록 조회" },
      { src: stoovImg7, label: "장소 검색" },
      { src: stoovImg8, label: "장소 상세 보기" },
      { src: stoovImg9, label: "Usability Test" },
    ],
  },
  {
    id: "002",
    code: "LOC_LINK",
    title: "LocalLink",
    year: "2024",
    period: "2024.03 ~ 11",
    category: "UXUI — COMMUNITY_PLATFORM",
    categoryLabel: "UX/UI Design",
    tags: ["TRAVEL", "LOCAL_TOURISM", "COMMUNITY", "MOBILE_APP"],
    tools: ["Figma", "Ps", "Ai", "Protopie", "ChatGPT", "Krea.ai"],
    role: "70% / UX 리서치 및 기획, 핵심 영역 설계, UI 디자인 전반, 프로토타입",
    description: "소외 지역 활성화를 위한 현지인의 여행 코스 제공과 게스트의 코스 소비 서비스",
    overview:
      "로컬링크는 현지인의 데이터와 시간을 바탕으로 한 소외 지역의 정보를 여행 코스로 제공하고, 스스로에게 알맞은 코스를 소비함으로써 소외된 지역의 활성화에 기여하는 서비스입니다.",
    problem:
      "극한의 효율주의와 생성형 AI를 통한 대량생산으로 검증되지 않은 양산형 콘텐츠가 증가했습니다. 과잉 콘텐츠로 인해 불편한 경험을 한 적이 있는 사람이 68%였고, 이를 피하기 위한 방법으로 차단 및 제한 응답이 85%에 달했습니다. 개인마다 생각하고 판단하는 경계가 다른데, 경계가 모호한 것에 불편함을 느끼는 점을 발견했습니다.",
    solution:
      "비슷한 경계의 같이를 가진 사람들과 어울리게 유도함으로써 사용자들에게 자신의 경계를 더욱 확장시킬 수 있는 기회를 제공합니다. 로컬 컨시어지(현지인)는 손님이 필요한 정보 및 모든 서비스를 총괄적으로 제공하는 관리인이며, 게스트는 현지인의 안내를 받아 소외 지역을 방문하는 손님입니다. 특정 지역의 현지인이 자체적 관련 정보와 서비스를 제공하기 때문에 Local이라는 단어를 추가했습니다.",
    result:
      "로컬링크는 서비스를 통해 사람과 사람간의 경계를 파악하고 이어줍니다. 현지인과 여행객의 니즈를 모두 충족시키고, 소외 지역을 배경으로 사람들이 연결되며 지역 활성화를 도모할 수 있는 Social Innovation 서비스를 완성했습니다.",
    imgUrl: locallinkThumb,
    accentColor: "#00DC6E",
    binary: "01001100 01001111 01000011",
    status: "COMPLETED",
    dims: "MOBILE_APP",
    prototypeUrl:
      "https://cloud.protopie.io/p/c167fabdc95f35146e96a8ad?ui=true&scaleToFit=true&enableHotspotHints=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&bgImage=undefined&playSpeed=1",
    videoUrl: "https://youtu.be/ZQV03sSPcF0?si=YyVDkvDiywQfQdjQ",
    gallery: [
      { src: localImg1, label: "Overview" },
      { src: localImg2, label: "Survey" },
      { src: localImg3, label: "User Voice" },
      { src: localImg4, label: "Service Goal" },
      { src: localImg5, label: "Persona" },
      { src: localImg6, label: "Guest Home" },
      { src: localImg7, label: "Local Course" },
      { src: localImg8, label: "Memory" },
      { src: localImg9, label: "Pin Map" },
      { src: localImg10, label: "Course Detail" },
      { src: localImg11, label: "Local Guide" },
      { src: localImg12, label: "User Feedback" },
    ],
  },
  {
    id: "003",
    code: "BUDG_BUDDY",
    title: "Budget Buddy",
    year: "2025",
    period: "2025.05 ~ 06",
    category: "PRODUCT — E_WALLET",
    categoryLabel: "Product Design",
    tags: ["PRODUCT_DESIGN", "E_WALLET", "SAMSUNG_PAY", "CONCEPT"],
    tools: ["Keyshot", "Autodesk Fusion", "Figma", "Photoshop"],
    role: "80% / 제품 기획 및 리서치, 모델링, 렌더링, 디자인 전반",
    description: "Samsung Pay 기반 e-Wallet 소비습관에 새로운 가치를 제공하는 제품",
    overview:
      "Budget Buddy는 Samsung Pay를 기반으로 한 e-Wallet 컨셉 디자인입니다. \"Spend less, Earn more\"라는 슬로건 아래, 충동구매 습관을 개선하고 더 나은 소비 패턴을 만들 수 있도록 돕는 제품 디자인 프로젝트입니다.",
    problem:
      "충동구매는 현대인의 만연한 소비 습관 문제입니다. 충동구매를 하고 후회하는 성인이 84.6%에 달합니다. 구매 충동을 느낄 때마다 그 즉시 소비하게 되면, 구매 이후 느끼는 순간적인 스트레스 해소감 때문에 충동구매 습관을 끊기가 매우 어렵습니다.",
    solution:
      "Budget Buddy는 충동구매를 하려는 순간, 경험을 바꾸어 새로운 방식으로 지출 습관을 관리하도록 제안합니다. e-Wallet을 사용하여 \"내가 소비하려는 대신 투자하면 어떨까?\"라는 질문을 던지며 지출을 재고할 수 있는 기회를 제공합니다. 또한 카드를 디지털화하여 사람들이 지갑 대신 카드 한 장과 휴대폰만 가지고 다닐 수 있도록 미래지향적인 사고에서 시작했습니다.",
    result:
      "Samsung Pay 기반의 e-Wallet 컨셉 디자인을 완성했습니다. 3D 모델링과 렌더링을 통해 실제 제품처럼 시각화했으며, 디자인 시스템을 구축하여 일관된 UI/UX를 제공할 수 있는 프로토타입을 개발했습니다. 사용자들이 충동구매 습관을 긍정적으로 전환할 수 있는 제품 경험을 설계했습니다.",
    imgUrl: budgetBuddyThumb,
    accentColor: "#00D4FF",
    binary: "01000010 01110101 01000100",
    status: "COMPLETED",
    dims: "CONCEPT_DESIGN",
    gallery: [
      { src: budgetImg1, label: "Intro" },
      { src: budgetImg2, label: "Background" },
      { src: budgetImg3, label: "Ideation" },
      { src: budgetImg4, label: "Design Concept" },
      { src: budgetImg5, label: "UI Flow" },
      { src: budgetImg6, label: "User Flow" },
      { src: budgetImg7, label: "3D Mockup" },
      { src: budgetImg8, label: "Scenario" },
      { src: budgetImg9, label: "Paying" },
      { src: budgetImg10, label: "Final Design" },
    ],
  },
];

function GlitchText({
  text,
  active,
  color,
}: {
  text: string;
  active: boolean;
  color: string;
}) {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*<>|[]{}~01";
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (active) {
      let count = 0;
      timerRef.current = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((c, i) =>
              count < 5 && i % 3 === 0
                ? chars[Math.floor(Math.random() * chars.length)]
                : c
            )
            .join("")
        );
        count++;
        if (count > 8) {
          clearInterval(timerRef.current!);
          setDisplay(text);
        }
      }, 50);
    } else {
      setDisplay(text);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active, text]);

  return <span style={{ color: active ? color : "#EDE8DF" }}>{display}</span>;
}

export function ProjectsPage() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const [visible, setVisible] = useState(false);
  const canvasRefs = useRef<Record<string, HTMLCanvasElement | null>>({});

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const render = () => {
      PROJECTS.forEach((proj) => {
        const canvas = canvasRefs.current[proj.id];
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 700;
        canvas.height = 120;
        ctx.clearRect(0, 0, 700, 120);
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 80px 'Space Mono', monospace";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(proj.code, 0, 60);

        const imgData = ctx.getImageData(0, 0, 700, 120);
        ctx.clearRect(0, 0, 700, 120);

        const spacing = 8;
        for (let x = 0; x < 700; x += spacing) {
          for (let y = 0; y < 120; y += spacing) {
            const idx = (y * 700 + x) * 4;
            const alpha = imgData.data[idx + 3];
            if (alpha > 20) {
              const r = (spacing / 2) * 0.7 * (alpha / 255);
              ctx.beginPath();
              ctx.arc(x, y, Math.max(0.5, r), 0, Math.PI * 2);
              ctx.fillStyle = proj.accentColor + "88";
              ctx.fill();
            }
          }
        }
      });
    };

    if (document.fonts) {
      document.fonts.ready.then(() => setTimeout(render, 80));
    } else {
      setTimeout(render, 300);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0906",
        fontFamily: "'Space Mono', monospace",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, #1E1C18 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{ position: "relative", zIndex: 1, maxWidth: "1960px", margin: "0 auto" }}
      >
        {/* Page header */}
        <div
          style={{
            padding: "16px 48px",
            borderBottom: "1px solid #1E1C18",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.3em" }}
          >
            [ 03_PROJECTS ]
          </span>
          <span
            style={{
              fontSize: "9px",
              color: "#4A4535",
              letterSpacing: "0.2em",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            SELECTED_WORKS / {PROJECTS.length} ITEMS
          </span>
          <span
            style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}
          >
            NODE: 036
          </span>
        </div>

        {/* Title */}
        <div style={{ padding: "40px 48px", borderBottom: "1px solid #1E1C18" }}>
          <div
            style={{
              fontSize: "9px",
              color: "#4A4535",
              letterSpacing: "0.3em",
              marginBottom: "12px",
            }}
          >
            &gt; RENDERING_PROJECT_INDEX...
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "clamp(48px, 5vw, 80px)",
                  color: "#EDE8DF",
                  margin: 0,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                SELECTED
                <br />
                <span
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #EDE8DF 45%, transparent 45%)",
                    backgroundSize: "8px 8px",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  WORKS.
                </span>
              </h1>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: "9px",
                  color: "#4A4535",
                  letterSpacing: "0.2em",
                  marginBottom: "8px",
                }}
              >
                SORT: RECENT_FIRST
              </div>
              <div
                style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}
              >
                FILTER: ALL_CATEGORIES
              </div>
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div
          style={{
            padding: "2px 48px 48px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {PROJECTS.map((proj, i) => (
            <ProjectRow
              key={proj.id}
              proj={proj}
              index={i}
              visible={visible}
              isHovered={hovered === proj.id}
              onHover={() => setHovered(proj.id)}
              onLeave={() => setHovered(null)}
              onSelect={() => setSelected(proj)}
              canvasRef={(el) => {
                canvasRefs.current[proj.id] = el;
              }}
            />
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #1E1C18",
            padding: "24px 48px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}
          >
            © 2026 PARK.LEEEUN / UX·UI DESIGNER
          </span>
          <span
            style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}
          >
            ALL_WORKS_RESERVED
          </span>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selected && (
        <ProjectModal proj={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

function ProjectRow({
  proj,
  index,
  visible,
  isHovered,
  onHover,
  onLeave,
  onSelect,
  canvasRef,
}: {
  proj: Project;
  index: number;
  visible: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
  canvasRef: (el: HTMLCanvasElement | null) => void;
}) {
  return (
    <div
      onClick={onSelect}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 320px 200px 140px",
        alignItems: "center",
        gap: "32px",
        padding: "0 0",
        borderBottom: "1px solid #1E1C18",
        cursor: "pointer",
        backgroundColor: isHovered ? "#0F0E0B" : "transparent",
        borderLeft: isHovered
          ? `3px solid ${proj.accentColor}`
          : "3px solid transparent",
        transition: "all 0.2s",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 100}ms`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Number */}
      <div style={{ padding: "32px 0 32px 20px" }}>
        <span
          style={{
            fontSize: "11px",
            color: isHovered ? proj.accentColor : "#4A4535",
            letterSpacing: "0.2em",
            transition: "color 0.2s",
          }}
        >
          {proj.id}
        </span>
      </div>

      {/* Main info */}
      <div style={{ padding: "32px 0" }}>
        <div
          style={{
            fontSize: "9px",
            color: "#4A4535",
            letterSpacing: "0.2em",
            marginBottom: "8px",
          }}
        >
          {proj.category}
        </div>
        <div style={{ fontSize: "clamp(18px, 2vw, 28px)", letterSpacing: "-0.02em" }}>
          <GlitchText text={proj.title} active={isHovered} color={proj.accentColor} />
        </div>
        <div style={{ marginTop: "6px", fontSize: "9px", color: "#3A3830", letterSpacing: "0.1em" }}>
          {proj.period}
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "12px",
            flexWrap: "wrap",
          }}
        >
          {proj.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "9px",
                color: isHovered ? proj.accentColor + "99" : "#4A4535",
                border: `1px solid ${isHovered ? proj.accentColor + "33" : "#1E1C18"}`,
                padding: "2px 8px",
                letterSpacing: "0.1em",
                transition: "all 0.2s",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Dot canvas */}
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          opacity: isHovered ? 1 : 0.3,
          transition: "opacity 0.3s",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: "100%", maxWidth: "300px", height: "80px" }}
        />
      </div>

      {/* Year + Binary */}
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "32px", color: "#1A1814", letterSpacing: "-0.04em" }}>
          {proj.year}
        </div>
        <div
          style={{
            fontSize: "8px",
            color: isHovered ? proj.accentColor : "#2A2820",
            letterSpacing: "0.1em",
            marginTop: "4px",
            transition: "color 0.2s",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {proj.binary}
        </div>
      </div>

      {/* Arrow */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "8px",
          paddingRight: "20px",
          fontSize: "11px",
          color: isHovered ? proj.accentColor : "#2A2820",
          transition: "all 0.2s",
          transform: isHovered ? "translateX(0)" : "translateX(-8px)",
        }}
      >
        <span style={{ letterSpacing: "0.15em" }}>VIEW</span>
        <span style={{ fontSize: "16px" }}>→</span>
      </div>

      {/* Image on hover (behind) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "200px",
          height: "100%",
          opacity: isHovered ? 0.15 : 0,
          transition: "opacity 0.4s",
          pointerEvents: "none",
        }}
      >
        <img
          src={proj.imgUrl}
          alt={proj.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(100%)",
          }}
        />
      </div>
    </div>
  );
}

function ProjectModal({
  proj,
  onClose,
}: {
  proj: Project;
  onClose: () => void;
}) {
  const [scanLine, setScanLine] = useState(0);
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<"overview" | "problem" | "solution" | "result">("overview");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine((s) => (s + 1.5) % 100);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const sectionContent = {
    overview: proj.overview,
    problem: proj.problem,
    solution: proj.solution,
    result: proj.result,
  };

  const sectionLabels = {
    overview: "OVERVIEW",
    problem: "PROBLEM",
    solution: "SOLUTION",
    result: "RESULT",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: `rgba(10, 9, 6, ${visible ? 0.97 : 0})`,
        zIndex: 100,
        overflowY: "auto",
        transition: "background-color 0.3s",
        fontFamily: "'Space Mono', monospace",
      }}
      onClick={handleClose}
    >
      {/* padding wrapper — must be INSIDE the scroll container so padding-top is reachable */}
      <div style={{ padding: "80px 24px 24px" }}>
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "min(1280px, 96vw)",
            margin: "0 auto",
            border: `1px solid ${proj.accentColor}33`,
            borderLeft: `3px solid ${proj.accentColor}`,
            backgroundColor: "#0C0B09",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.3s, transform 0.3s",
            position: "relative",
          }}
        >
          {/* Modal header */}
          <div
            style={{
              padding: "16px 32px",
              borderBottom: `1px solid ${proj.accentColor}22`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#0C0B09",
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "10px",
                  color: proj.accentColor,
                  letterSpacing: "0.2em",
                }}
              >
                PROJECT_{proj.id}
              </span>
              <span style={{ color: "#1E1C18" }}>|</span>
              <span
                style={{ fontSize: "10px", color: "#4A4535", letterSpacing: "0.15em" }}
              >
                {proj.categoryLabel.toUpperCase()}
              </span>
              <span style={{ color: "#1E1C18" }}>|</span>
              <span
                style={{ fontSize: "10px", color: "#4A4535", letterSpacing: "0.15em" }}
              >
                {proj.period}
              </span>
            </div>
            <button
              onClick={handleClose}
              style={{
                background: "none",
                border: "1px solid #2A2820",
                color: "#6B6555",
                fontSize: "10px",
                padding: "4px 12px",
                cursor: "pointer",
                letterSpacing: "0.2em",
                fontFamily: "'Space Mono', monospace",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#FF4800";
                (e.currentTarget as HTMLElement).style.color = "#FF4800";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2A2820";
                (e.currentTarget as HTMLElement).style.color = "#6B6555";
              }}
            >
              [CLOSE_X]
            </button>
          </div>

          {/* Modal body */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px" }}>
            {/* LEFT COLUMN */}
            <div style={{ borderRight: "1px solid #1E1C18" }}>
              {/* Title block */}
              <div style={{ padding: "40px 32px 32px", borderBottom: "1px solid #1E1C18" }}>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#4A4535",
                    letterSpacing: "0.3em",
                    marginBottom: "12px",
                  }}
                >
                  {proj.category}
                </div>
                <h2
                  style={{
                    fontSize: "clamp(36px, 4vw, 64px)",
                    color: "#EDE8DF",
                    margin: "0 0 8px",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {proj.title}
                </h2>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#6B6555",
                    margin: "12px 0 0",
                    lineHeight: "1.8",
                    letterSpacing: "0.05em",
                  }}
                >
                  {proj.description}
                </p>
              </div>

              {/* Image */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderBottom: "1px solid #1E1C18",
                  backgroundColor: "#070605",
                }}
              >
                <img
                  src={proj.imgUrl}
                  alt={proj.title}
                  style={{
                    width: "100%",
                    display: "block",
                    maxHeight: "520px",
                    objectFit: "contain",
                    filter: "grayscale(10%) brightness(0.85)",
                  }}
                />
                {/* Scan line */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: `${proj.accentColor}55`,
                    top: `${scanLine}%`,
                    pointerEvents: "none",
                    boxShadow: `0 0 10px ${proj.accentColor}`,
                    transition: "top 0.016s linear",
                  }}
                />
                {/* Halftone overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "6px 6px",
                    pointerEvents: "none",
                  }}
                />
                {/* Corner markers */}
                {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
                  <div
                    key={pos}
                    style={{
                      position: "absolute",
                      top: pos.includes("top") ? "12px" : "auto",
                      bottom: pos.includes("bottom") ? "12px" : "auto",
                      left: pos.includes("left") ? "12px" : "auto",
                      right: pos.includes("right") ? "12px" : "auto",
                      fontSize: "14px",
                      color: proj.accentColor,
                      lineHeight: 1,
                      opacity: 0.7,
                    }}
                  >
                    +
                  </div>
                ))}
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "9px",
                    color: proj.accentColor + "88",
                    letterSpacing: "0.15em",
                  }}
                >
                  {proj.dims}
                </div>
              </div>

              {/* Content tabs */}
              <div style={{ borderBottom: "1px solid #1E1C18" }}>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid #1E1C18",
                  }}
                >
                  {(["overview", "problem", "solution", "result"] as const).map(
                    (sec) => (
                      <button
                        key={sec}
                        onClick={() => setActiveSection(sec)}
                        style={{
                          flex: 1,
                          padding: "12px 0",
                          background: "none",
                          border: "none",
                          borderBottom:
                            activeSection === sec
                              ? `2px solid ${proj.accentColor}`
                              : "2px solid transparent",
                          cursor: "pointer",
                          fontSize: "9px",
                          color: activeSection === sec ? proj.accentColor : "#4A4535",
                          letterSpacing: "0.2em",
                          fontFamily: "'Space Mono', monospace",
                          transition: "all 0.2s",
                        }}
                      >
                        [{sectionLabels[sec]}]
                      </button>
                    )
                  )}
                </div>
                <div style={{ padding: "24px 32px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#8A8575",
                      lineHeight: "2",
                      letterSpacing: "0.05em",
                      margin: 0,
                    }}
                  >
                    {sectionContent[activeSection]}
                  </p>
                </div>
              </div>

              {/* Links row */}
              {(proj.prototypeUrl || proj.designSystemUrl || proj.videoUrl) && (
                <div
                  style={{
                    padding: "20px 32px",
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    borderBottom: "1px solid #1E1C18",
                  }}
                >
                  <span
                    style={{
                      fontSize: "9px",
                      color: "#4A4535",
                      letterSpacing: "0.2em",
                      alignSelf: "center",
                      marginRight: "4px",
                    }}
                  >
                    [LINKS]
                  </span>
                  {proj.prototypeUrl && (
                    <a
                      href={proj.prototypeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "9px",
                        color: proj.accentColor,
                        border: `1px solid ${proj.accentColor}44`,
                        padding: "6px 14px",
                        letterSpacing: "0.15em",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          proj.accentColor + "22";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "transparent";
                      }}
                    >
                      PROTOTYPE →
                    </a>
                  )}
                  {proj.designSystemUrl && (
                    <a
                      href={proj.designSystemUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "9px",
                        color: proj.accentColor,
                        border: `1px solid ${proj.accentColor}44`,
                        padding: "6px 14px",
                        letterSpacing: "0.15em",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          proj.accentColor + "22";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "transparent";
                      }}
                    >
                      DESIGN SYSTEM →
                    </a>
                  )}
                  {proj.videoUrl && (
                    <a
                      href={proj.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "9px",
                        color: proj.accentColor,
                        border: `1px solid ${proj.accentColor}44`,
                        padding: "6px 14px",
                        letterSpacing: "0.15em",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          proj.accentColor + "22";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "transparent";
                      }}
                    >
                      VIDEO →
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN */}
            <div style={{ padding: "32px" }}>
              {/* Meta info */}
              {[
                { label: "PROJECT_ID", value: proj.id },
                { label: "CODE_NAME", value: proj.code },
                { label: "PERIOD", value: proj.period },
                { label: "CATEGORY", value: proj.categoryLabel },
                { label: "STATUS", value: proj.status },
                { label: "PLATFORM", value: proj.dims },
                { label: "CONTRIBUTION", value: proj.role.split("/")[0].trim() },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "12px 0",
                    borderBottom: "1px solid #1A1814",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "9px",
                      color: "#4A4535",
                      letterSpacing: "0.2em",
                      flexShrink: 0,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      color:
                        item.label === "STATUS" ? proj.accentColor : "#EDE8DF",
                      letterSpacing: "0.05em",
                      textAlign: "right",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}

              {/* Role detail */}
              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#4A4535",
                    letterSpacing: "0.2em",
                    marginBottom: "10px",
                  }}
                >
                  [ROLE_DETAIL]
                </div>
                <p
                  style={{
                    fontSize: "10px",
                    color: "#6B6555",
                    lineHeight: "1.9",
                    letterSpacing: "0.03em",
                    margin: 0,
                  }}
                >
                  {proj.role.includes("/")
                    ? proj.role.split("/").slice(1).join("/").trim()
                    : proj.role}
                </p>
              </div>

              {/* Tools */}
              <div style={{ marginTop: "24px" }}>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#4A4535",
                    letterSpacing: "0.2em",
                    marginBottom: "12px",
                  }}
                >
                  [TOOLS_USED]
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {proj.tools.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        padding: "4px 10px",
                        border: `1px solid ${proj.accentColor}33`,
                        fontSize: "9px",
                        color: proj.accentColor + "cc",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div style={{ marginTop: "24px" }}>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#4A4535",
                    letterSpacing: "0.2em",
                    marginBottom: "12px",
                  }}
                >
                  [TAGS]
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 10px",
                        border: "1px solid #2A2820",
                        fontSize: "9px",
                        color: "#4A4535",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ASCII decoration */}
              <div style={{ marginTop: "32px" }}>
                <pre
                  style={{
                    fontSize: "8px",
                    color: "#2A2820",
                    lineHeight: "1.5",
                    fontFamily: "'Space Mono', monospace",
                    letterSpacing: "0.05em",
                    margin: 0,
                  }}
                >
                  {`┌──────────────────────────┐
│  ${proj.id}  ${proj.code.padEnd(20)}│
│                          │
│  ██████  ██  ██  ██  █   │
│  ██  ██  ██  ██  ██  █   │
│  ██████  ████    ████    │
│                          │
│  ${proj.binary.substring(0, 24)}  │
│  STATUS: ${proj.status.padEnd(15)} │
└──────────────────────────┘`}
                </pre>
              </div>
            </div>
          </div>  {/* end grid */}

          {/* ── Gallery Section ────────────────────────────── */}
          {proj.gallery && proj.gallery.length > 0 && (
            <div style={{ borderTop: "1px solid #1E1C18" }}>
              {/* Gallery header */}
              <div
                style={{
                  padding: "16px 32px",
                  borderBottom: "1px solid #1E1C18",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "9px", color: proj.accentColor, letterSpacing: "0.3em" }}>
                  [PROCESS_GALLERY]
                </span>
                <span style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}>
                  {String(galleryIndex + 1).padStart(2, "0")} / {String(proj.gallery.length).padStart(2, "0")}
                </span>
              </div>

              {/* Main viewer */}
              <div
                style={{
                  position: "relative",
                  backgroundColor: "#070605",
                  cursor: "zoom-in",
                }}
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={proj.gallery[galleryIndex].src}
                  alt={proj.gallery[galleryIndex].label}
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "fill",
                  }}
                />
                {/* label badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "32px",
                    backgroundColor: "rgba(10,9,6,0.88)",
                    border: `1px solid ${proj.accentColor}44`,
                    padding: "6px 16px",
                    fontSize: "10px",
                    color: proj.accentColor,
                    letterSpacing: "0.15em",
                  }}
                >
                  {proj.gallery[galleryIndex].label}
                </div>
                {/* Prev / Next arrows */}
                {galleryIndex > 0 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setGalleryIndex(i => i - 1); }}
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "rgba(10,9,6,0.7)",
                      border: `1px solid ${proj.accentColor}44`,
                      color: proj.accentColor,
                      fontSize: "16px",
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Space Mono', monospace",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = proj.accentColor + "22"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(10,9,6,0.7)"; }}
                  >
                    ←
                  </button>
                )}
                {galleryIndex < proj.gallery.length - 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setGalleryIndex(i => i + 1); }}
                    style={{
                      position: "absolute",
                      right: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "rgba(10,9,6,0.7)",
                      border: `1px solid ${proj.accentColor}44`,
                      color: proj.accentColor,
                      fontSize: "16px",
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Space Mono', monospace",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = proj.accentColor + "22"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(10,9,6,0.7)"; }}
                  >
                    →
                  </button>
                )}
              </div>

              {/* Thumbnail strip */}
              <div
                style={{
                  display: "flex",
                  overflowX: "auto",
                  gap: "2px",
                  padding: "2px",
                  backgroundColor: "#080706",
                  scrollbarWidth: "none",
                }}
              >
                {proj.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    style={{
                      flexShrink: 0,
                      width: "120px",
                      height: "72px",
                      cursor: "pointer",
                      position: "relative",
                      border: idx === galleryIndex
                        ? `2px solid ${proj.accentColor}`
                        : "2px solid transparent",
                      transition: "border-color 0.2s",
                      overflow: "hidden",
                      backgroundColor: "#070605",
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: idx === galleryIndex ? "brightness(1)" : "brightness(0.45) grayscale(30%)",
                        transition: "filter 0.2s",
                      }}
                    />
                    {idx === galleryIndex && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0, left: 0, right: 0,
                          height: "2px",
                          backgroundColor: proj.accentColor,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lightbox */}
          {lightboxOpen && proj.gallery && (
            <div
              onClick={() => setLightboxOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.95)",
                zIndex: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
                cursor: "zoom-out",
              }}
            >
              <img
                src={proj.gallery[galleryIndex].src}
                alt={proj.gallery[galleryIndex].label}
                style={{
                  maxWidth: "100%",
                  maxHeight: "90vh",
                  objectFit: "contain",
                  boxShadow: `0 0 60px ${proj.accentColor}22`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "32px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "10px",
                  color: proj.accentColor,
                  letterSpacing: "0.2em",
                }}
              >
                {proj.gallery[galleryIndex].label}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}