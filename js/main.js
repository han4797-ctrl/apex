const INQUIRY_MAIL = "nexcoapextelcom@gmail.com";
const LANG_KEY = "apex-lang";

const i18n = {
  ko: {
    skip: "본문으로 건너뛰기",
    "brand.tag": "VL M&amp;C · APEX HOLDINGS",
    "nav.about": "회사소개",
    "nav.products": "취급품목",
    "nav.briefing": "보고서",
    "nav.network": "해도",
    "prof.sec.eyebrow": "Reports",
    "prof.sec.title": "배포용 보고서",
    "prof.sec.lead": "바이어용 소개서·브리핑과, 제조사에 바로 보낼 1페이지 파트너 브리프를 따로 두었습니다. 제조사 브리프는 한 장 전체를 여기서 보고 PDF로 내려받을 수 있습니다.",
    "prof.tab.kind": "요약 · 6p PDF",
    "brief.tab.kind": "요약 · 4p PDF",
    "mfr.tab.kind": "전문 · 1p PDF",
    "prof.toc.kicker": "Contents",
    "prof.toc.t": "PDF 문서 구성 · 6페이지",
    "prof.toc.lead": "조직도·품목 상세·소싱 거점·거래 프로세스는 아래 페이지들에서 더 자세히 다룹니다. 인쇄해서 그대로 전달하셔도 됩니다.",
    "brief.toc.t": "PDF 문서 구성 · 4페이지",
    "brief.market.src": "위 수치는 공개 무역통계를 정리한 참고값이며 인용 시점에 따라 갱신됩니다.",
    "prof.toc.01.t": "회사 개요",
    "prof.toc.01.d": "PT. APEX TELCOM INKO · VL M&amp;C · APEX HOLDINGS",
    "prof.toc.02.t": "기업 정보",
    "prof.toc.02.d": "상호·대표·거점·사업 영역·연락처",
    "prof.toc.03.t": "조직과 거점",
    "prof.toc.03.d": "인도네시아 현지 / 한국 파트너",
    "prof.toc.04.t": "구간별 책임",
    "prof.toc.04.d": "소싱·검사·서류·통관·납품·클레임 담당 구분",
    "prof.toc.05.t": "운영 원칙",
    "prof.toc.05.d": "규격 확인 · 품질 검수 · 물류 연결",
    "prof.toc.06.t": "취급 품목",
    "prof.toc.06.d": "6품목 설명·대표 HS·공급 포인트",
    "prof.toc.07.t": "글로벌 소싱 네트워크",
    "prof.toc.07.d": "5개 거점의 역할",
    "prof.toc.08.t": "견적부터 인도까지",
    "prof.toc.08.d": "4단계 실행 프로세스",
    "prof.toc.09.t": "연락처",
    "prof.toc.09.d": "PT. APEX TELCOM INKO · VL M&amp;C · APEX HOLDINGS 연락처와 함께 보면 좋은 자료",
    "brief.toc.01.t": "요약",
    "brief.toc.01.d": "현지 주체·검수 전제·규격 우선·단계적 확대",
    "brief.toc.02.t": "시장 맥락",
    "brief.toc.02.d": "구리 스크랩·우드펠릿 수요 맥락",
    "brief.toc.03.t": "취급 품목과 계약 포인트",
    "brief.toc.03.d": "품목별로 계약에서 맞추는 것",
    "brief.toc.04.t": "소싱 네트워크",
    "brief.toc.04.d": "카자흐스탄·퍼스·칼리만탄·술라웨시·파푸아·탄게랑·서울",
    "brief.toc.05.t": "검수와 인도",
    "brief.toc.05.d": "수요 파악 → 소싱·검수 → 물류 → 사후",
    "brief.toc.06.t": "거래를 시작하는 방법",
    "brief.toc.06.d": "요구사항 정리 → 오퍼 → 시험 선적",
    "brief.toc.07.t": "문의",
    "brief.toc.07.d": "회신을 빠르게 받는 요청 양식",
    "nav.process": "항해",
    "nav.contact": "문의",
    "nav.inquiry": "견적 문의",
    "hero.eyebrow": "PT. APEX TELCOM INKO × VL M&amp;C · APEX HOLDINGS",
    "hero.title1": "신대륙을 찾듯",
    "hero.title2": "자원을 찾아 나섭니다",
    "hero.cta1": "취급 품목 보기",
    "hero.cta2": "견적 상담",
    "hero.s1": "소싱 거점",
    "hero.s2": "탄게랑 · 인도네시아",
    "hero.s3": "대한민국",
    "strip.1t": "출항 · 자원",
    "strip.1p": "비철금속 · 제련 슬래그 · 드로스 · 우드펠릿 · 카올린",
    "strip.2t": "기항 · 전자",
    "strip.2p": "전자칠판 · OPS · 노트북 · 태블릿PC · 드론",
    "strip.lug.t": "선적 · 캐리어",
    "strip.lug.p": "26·18인치 하드케이스 · 여권가방 · ARMUZNA 배낭",
    "strip.3t": "PT. APEX TELCOM INKO",
    "strip.3p": "현지 주체로 계약하고 진행한다",
    "strip.4t": "VL M&amp;C · APEX HOLDINGS",
    "strip.4p": "한국 파트너",
    "about.eyebrow": "The Company",
    "about.title": "미지의 산지를 찾아,\n현지에서 실행합니다",
    "about.p1": "PT. APEX TELCOM INKO는 인도네시아 현지 계약과 진행의 주체입니다. 대외 전면 브랜드이며, 현지에서는 이 상호가 우선입니다. 한국 파트너는 VL M&amp;C · APEX HOLDINGS입니다.",
    "about.p2": "해도에 없는 산지라도 찾아 갑니다. 단순 중개가 아닙니다. 규격·품질·물류를 함께 관리하고, 필요한 사양과 물량, 납기를 기준으로 소싱부터 인도·설치까지 한 번에 맞춰 드립니다.",
    "about.pr1t": "규격 확인",
    "about.pr1p": "등급·사양·성분 기준으로 조건을 맞춥니다.",
    "about.pr2t": "품질 검수",
    "about.pr2p": "공급 전 물량과 상태를 확인하고 인도합니다.",
    "about.pr3t": "이원 운영",
    "about.pr3p": "인도네시아는 PT. APEX TELCOM INKO, 한국은 VL M&amp;C · APEX HOLDINGS입니다.",
    "about.cap": "PT. APEX TELCOM INKO 탄게랑과 VL M&amp;C · APEX HOLDINGS 한국 거점을 함께 활용합니다.",
    "about.f1t": "전면",
    "about.f2t": "한국 파트너",
    "about.f3t": "인도네시아",
    "about.f3d": "탄게랑 현지",
    "about.f4t": "한국",
    "about.f4d": "VL M&amp;C · APEX HOLDINGS",
    "partner.apex.en": "Indonesia · Front",
    "partner.apex.p": "인도네시아 현지 계약과 진행의 주체입니다. 대외 전면 브랜드이며, 현지에서는 이 상호가 우선입니다.",
    "partner.apex.role": "현지 주체 · 계약 · 진행",
    "partner.vl.en": "Korea · Partner",
    "partner.vl.p": "한국 파트너입니다.",
    "partner.vl.role": "한국 파트너",
    "org.eyebrow": "Organization",
    "org.title": "회사 조직도",
    "org.lead": "현지 주체는 PT. APEX TELCOM INKO입니다. 한국 파트너는 VL M&amp;C · APEX HOLDINGS입니다.",
    "org.company.kicker": "Front",
    "org.company.base": "인도네시아 현지 주체",
    "org.equal": "한국",
    "org.vl.en": "Korea",
    "org.vl.role": "한국 파트너",
    "org.res.en": "Resources",
    "org.res.t": "자원파트",
    "org.res.1": "비철금속 소싱",
    "org.res.2": "슬래그 · 드로스 · 우드펠릿 · 카올린",
    "org.res.3": "카자흐스탄 · 퍼스 · 칼리만탄 · 술라웨시 · 파푸아",
    "org.ops.en": "Operations",
    "org.ops.t": "이원 운영",
    "org.ops.1": "PT. APEX TELCOM INKO 현지 주체",
    "org.ops.2": "VL M&amp;C · APEX HOLDINGS 한국 파트너",
    "org.ops.3": "소싱 · 검수 · 납품 연결",
    "org.ele.en": "Electronics",
    "org.ele.t": "전자파트",
    "org.ele.1": "전자칠판 · OPS",
    "org.ele.2": "노트북 · 태블릿PC · 드론",
    "org.ele.3": "선전 소싱 · 설치",
    "org.lug.en": "Luggage",
    "org.lug.t": "여행파트",
    "org.lug.1": "26·18인치 하드케이스",
    "org.lug.2": "여권가방 · ARMUZNA",
    "org.lug.3": "커버 · 세트 납품",
    "prof.tag": "Company Profile · Resources Division",
    "prof.cover.title": "시나리오를 실행합니다",
    "prof.lead": "PT. APEX TELCOM INKO가 인도네시아 현지 계약과 진행의 주체입니다. 한국 파트너는 VL M&amp;C · APEX HOLDINGS입니다. 비철금속 스크랩, 제련 슬래그, 알루미늄 드로스, 산업용 우드펠릿, 카올린을 규격·품질·물류와 함께 맞춥니다.",
    "prof.meta": "2026 · 바이어·파트너 배포용 · Tangerang · Seoul · Dar es Salaam · Jakarta",
    "prof.about.kicker": "About",
    "prof.about.t": "회사 소개",
    "prof.about.p": "PT. APEX TELCOM INKO는 인도네시아 현지 계약과 진행의 주체입니다. 한국 파트너는 VL M&amp;C · APEX HOLDINGS입니다. 이 소개서는 자원파트를 대상으로 합니다. 전자파트는 별도 카탈로그로 안내합니다.",
    "prof.about.box": "단순 중개가 아닙니다. 등급·성분·이물을 먼저 맞추고, 현지 주체는 PT. APEX TELCOM INKO, 한국 파트너는 VL M&amp;C · APEX HOLDINGS입니다.",
    "prof.th.field": "항목",
    "prof.th.value": "내용",
    "prof.field.name": "상호",
    "prof.field.frontnote": "(현지 주체)",
    "prof.field.partner": "한국 파트너",
    "prof.field.partnote": "(한국)",
    "prof.field.apexbase": "PT. APEX TELCOM INKO 거점",
    "prof.field.vlbase": "한국 거점",
    "prof.field.scope": "사업 영역",
    "prof.field.scopev": "Resources · Electronics / B2B 소싱 · 검수 · 수출입 · 납품",
    "prof.field.items": "자원 취급",
    "prof.disc": "본 소개서는 일반 안내입니다. 가격·재고·선적 일정은 문의 시점의 오퍼와 검사 결과에 따릅니다. 품목별 수출입 인허가는 계약 전 관세사 및 현지 규정으로 확인합니다.",
    "div.res.en": "Resources Division",
    "div.res.t": "자원파트",
    "div.res.d": "구리 스크랩 · 알루미늄 잉곳 · 알루미늄 드로스 · 주석/니켈 슬래그 · 우드펠릿 · 카올린",
    "div.res.a": "자원 품목 보기",
    "div.ele.en": "Electronics Division",
    "div.ele.t": "전자파트",
    "div.ele.d": "전자칠판 · OPS 모듈 · 노트북 · 태블릿PC · 농업용 드론",
    "div.ele.a": "전자 품목 보기",
    "div.lug.en": "Luggage Division",
    "div.lug.t": "여행파트",
    "div.lug.d": "26·18인치 하드케이스 · 여권 가방 · ARMUZNA 배낭",
    "div.lug.a": "캐리어 품목 보기",
    "products.eyebrow": "Cargo",
    "products.title": "취급 품목",
    "products.lead": "자원·전자·여행 캐리어, 세 항로입니다. 사진과 핵심 규격을 보고, 카탈로그는 문의 후 받습니다.",
    "network.eyebrow": "The Chart",
    "network.title": "신대륙을 여는 해도",
    "network.lead": "알루미늄은 카자흐스탄과 호주 퍼스, 석탄은 칼리만탄, 니켈은 술라웨시, 구리는 파푸아에서 소싱합니다. 항만 거점은 다르에스살람과 자카르타, 전자기기는 선전, 현지 주체는 PT. APEX TELCOM INKO 탄게랑, 한국 파트너는 VL M&amp;C · APEX HOLDINGS입니다.",
    "network.map.alt": "카자흐스탄·퍼스 알루미늄, 칼리만탄 석탄, 술라웨시 니켈, 파푸아 구리와 다르에스살람·자카르타·선전·탄게랑·서울 거점을 표시한 세계 지도",
    "network.legend.resource": "자원 공급 거점",
    "network.legend.electronics": "전자 공급 거점",
    "network.legend.hub": "PT. APEX TELCOM INKO",
    "network.tag.resourceHub": "자원 거점",
    "network.tag.electronicsHub": "전자 거점",
    "network.tag.apexHub": "PT. APEX TELCOM INKO",
    "network.tag.vlHub": "한국 거점",
    "network.tag.aluminum": "알루미늄",
    "network.tag.aluminumHub": "알루미늄 · 거점",
    "network.tag.coal": "석탄",
    "network.tag.copper": "구리",
    "network.tag.nickel": "니켈",
    "network.kazakhstan": "카자흐스탄",
    "network.kazakhstan.country": "카자흐스탄",
    "network.kazakhstan.desc": "중앙아시아 알루미늄 공급 거점",
    "network.perth": "퍼스",
    "network.perth.country": "호주",
    "network.perth.desc": "서호주 알루미늄 공급 거점",
    "network.kalimantan": "칼리만탄",
    "network.kalimantan.country": "인도네시아",
    "network.kalimantan.desc": "보르네오 석탄 공급 거점",
    "network.sulawesi": "술라웨시",
    "network.sulawesi.country": "인도네시아",
    "network.sulawesi.desc": "술라웨시 니켈 공급 거점",
    "network.papua": "파푸아",
    "network.papua.country": "인도네시아",
    "network.papua.desc": "파푸아 구리 공급 거점",
    "network.tanzania": "다르에스살람",
    "network.tanzania.country": "탄자니아",
    "network.tanzania.desc": "아프리카 동부 인도양 항만 자원 공급 거점",
    "network.indonesia": "자카르타",
    "network.indonesia.country": "인도네시아",
    "network.indonesia.desc": "자와섬 항만 자원 공급 거점",
    "network.shenzhen": "선전",
    "network.shenzhen.country": "중국 광둥성",
    "network.shenzhen.desc": "전자기기, IT 하드웨어, 농업용 드론 공급 거점",
    "network.tangerang": "탄게랑",
    "network.tangerang.country": "인도네시아",
    "network.tangerang.desc": "PT. APEX TELCOM INKO. 인도네시아 현지 주체",
    "network.korea": "인천 · 서울",
    "network.korea.country": "대한민국",
    "network.korea.desc": "VL M&amp;C · APEX HOLDINGS",
    "network.legend.korea": "VL M&amp;C · APEX HOLDINGS",
    "track.badge": "시연 · Demo",
    "track.title": "선적 추적",
    "track.lead": "샘플 B/L 번호를 넣으면 가상 항로가 지도에 표시됩니다. 실제 선사 추적과 연결되어 있지 않습니다.",
    "track.label": "B/L 번호",
    "track.ph": "APEX-DAR-2608-001",
    "track.go": "추적",
    "track.samples": "샘플 번호",
    "track.note": "본 기능은 홈페이지 시연용입니다. 실제 컨테이너 위치·ETA는 계약 후 선사·포워더 자료로 안내합니다.",
    "track.unknown": "이 번호는 데모 샘플이 아닙니다. 아래 샘플 B/L을 눌러 보세요.",
    "track.hud.bl": "B/L",
    "track.hud.vessel": "선박",
    "track.hud.cargo": "화물",
    "track.hud.route": "구간",
    "track.status.search": "조회 중",
    "track.status.depart": "출항",
    "track.status.transit": "해상 운송 중",
    "track.status.arrive": "입항",
    "track.status.done": "도착",
    "track.cargo.cu": "구리 스크랩",
    "track.cargo.wood": "우드펠릿",
    "track.cargo.ifp": "전자칠판",
    "track.vessel.dar": "MV APEX DARWIN",
    "track.vessel.jkt": "MV APEX JAVA",
    "track.vessel.szx": "MV APEX PEARL",
    "track.route.dar": "다르에스살람 → 자카르타 → 인천",
    "track.route.jkt": "자카르타 → 인천",
    "track.route.szx": "선전 → 인천",
    "tab.resource": "자원파트",
    "tab.resource.sub": "Resources",
    "tab.electronic": "전자파트",
    "tab.electronic.sub": "Electronics",
    "tab.luggage": "여행파트",
    "tab.luggage.sub": "Luggage",
    "panel.res.lead": "금속 원료부터 제련 부산물·드로스, 친환경 연료, 산업용 고령토까지. 사진과 핵심 규격을 보고 고르세요. 카탈로그는 문의 후 발송합니다.",
    "panel.ele.lead": "전자칠판과 OPS 모듈, 노트북, 태블릿PC, 농업용 드론을 교육기관·관공서·농장·기업에 공급합니다. 핵심 사양은 쇼룸에서 확인하고, 카탈로그는 문의 후 받으며 샘플을 요청할 수 있습니다.",
    "panel.lug.lead": "26·18인치 하드케이스, 여권 가방, ARMUZNA 배낭을 여행용 세트로 공급합니다. 커버와 신원 표기는 주문 사양에 맞춰 드립니다.",
    "hall.res.kicker": "Resources Digital Showroom",
    "hall.res.t": "자원 쇼룸",
    "hall.res.d": "사진과 핵심 규격을 보고 품목을 고르세요. 카탈로그와 명세서는 문의 후에 보내 드립니다.",
    "hall.ele.kicker": "Electronics Digital Showroom",
    "hall.ele.t": "전자 쇼룸",
    "hall.ele.d": "화면에서 핵심 사양을 확인하세요. 카탈로그와 기술 명세서는 문의 후에 보내 드립니다.",
    "hall.lug.kicker": "Luggage Digital Showroom",
    "hall.lug.t": "여행 캐리어 쇼룸",
    "hall.lug.d": "4종 세트 사양을 보고 고르세요. 카탈로그와 견적은 문의 후에 보내 드립니다.",
    "spec.form": "형태",
    "spec.grade": "등급",
    "spec.ctrl": "관리",
    "spec.use": "용도",
    "spec.match": "매칭",
    "spec.prio": "우선",
    "spec.type": "구분",
    "spec.basis": "기준",
    "spec.src": "발생",
    "spec.loop": "순환",
    "p.catalog": "카탈로그 요청",
    "p.copper.badge.metal": "비철 원료",
    "p.copper.badge.form": "전선 · 파이프",
    "p.copper.badge.grade": "국제 등급",
    "p.copper.badge.use": "전기 · 건설",
    "p.copper.spec.grade.v": "밀베리 · 버치 등",
    "p.copper.spec.use.v": "전기 · 건설 · 제조",
    "p.alu.badge.metal": "재생 잉곳",
    "p.alu.badge.grade": "주조 규격",
    "p.alu.badge.assay": "성분표 매칭",
    "p.alu.badge.flow": "연속 공급",
    "p.alu.spec.use.v": "다이캐스팅 · 주조",
    "p.alu.spec.prio.v": "성분 안정 · 연속 공급",
    "p.dross.badge.grade": "금속 함량",
    "p.dross.badge.type": "화이트 · 블랙",
    "p.dross.badge.metal": "회수 원료",
    "p.dross.badge.src": "용해 부산물",
    "p.dross.spec.src.v": "용해 · 제련 과정",
    "p.dross.spec.use.v": "금속 회수 원료",
    "p.tin.badge.metal": "주석 슬래그",
    "p.tin.badge.form": "제련 부산물",
    "p.tin.badge.assay": "함량 기준",
    "p.tin.badge.use": "유가금속 회수",
    "p.tin.spec.src.v": "주석 제련 과정",
    "p.tin.spec.form.v": "슬래그 · 회수 원료",
    "p.nick.badge.metal": "니켈 슬래그",
    "p.nick.badge.use": "스테인리스 원료",
    "p.nick.badge.alloy": "특수합금 회수",
    "p.nick.badge.loop": "자원 순환",
    "p.nick.spec.src.v": "니켈 제련 슬래그",
    "p.nick.spec.loop.v": "산업 부산물 자원 순환",
    "p.wood.badge.fuel": "바이오매스",
    "p.wood.badge.moi": "함수율 기준",
    "p.wood.badge.cal": "발열량 기준",
    "p.wood.badge.use": "보일러 · 발전",
    "p.wood.spec.ctrl.v": "함수율 · 발열량 · 규격",
    "p.wood.spec.form.v": "산업용 우드펠릿",
    "p.ops.badge.cpu": "i3 · i5 · i7",
    "p.ops.badge.mem": "RAM · SSD",
    "p.ops.badge.pin": "핀 표준 슬롯",
    "p.ops.badge.wifi": "무선랜 옵션",
    "p.ops.spec.cpu.l": "프로세서",
    "p.ops.spec.cpu.v": "i3 / i5 / i7",
    "p.ops.spec.mem.l": "구성",
    "p.ops.spec.mem.v": "RAM · SSD 사양별",
    "p.ops.spec.pin.l": "규격",
    "p.ops.spec.pin.v": "OPS 표준 80핀",
    "p.ops.spec.wifi.l": "옵션",
    "p.ops.spec.wifi.v": "무선랜",
    "p.laptop.badge.office": "사무용",
    "p.laptop.badge.edu": "교육용",
    "p.laptop.badge.pro": "고사양 작업용",
    "p.laptop.badge.b2b": "대량 · 렌탈",
    "p.laptop.spec.use.l": "용도",
    "p.laptop.spec.use.v": "사무 · 교육 · 고사양",
    "p.laptop.spec.qty.l": "공급",
    "p.laptop.spec.qty.v": "대량 견적",
    "p.laptop.spec.opt.l": "옵션",
    "p.laptop.spec.opt.v": "렌탈 · 리스",
    "p.laptop.spec.match.l": "맞춤",
    "p.laptop.spec.match.v": "사양 · 납기 조율",
    "p.tablet.badge.aos": "안드로이드",
    "p.tablet.badge.win": "윈도우",
    "p.tablet.badge.lte": "셀룰러 옵션",
    "p.tablet.badge.kit": "부속 구성",
    "p.tablet.spec.os.l": "운영체제",
    "p.tablet.spec.os.v": "안드로이드 · 윈도우",
    "p.tablet.spec.net.l": "연결",
    "p.tablet.spec.net.v": "셀룰러 옵션",
    "p.tablet.spec.kit.l": "부속",
    "p.tablet.spec.kit.v": "케이스 · 거치대 · 충전함",
    "p.tablet.spec.use.l": "현장",
    "p.tablet.spec.use.v": "교육 · 업무",
    "p.copper.t": "구리 스크랩",
    "p.copper.d": "전선·밀베리·버치 등 국제 통용 등급의 구리 스크랩을 취급합니다. 전기·건설·제조 현장의 핵심 비철 원료입니다.",
    "p.copper.1": "전선 / 동파이프 / 부스바",
    "p.copper.2": "등급별 선별 · 수분·이물 관리",
    "p.alu.t": "알루미늄 잉곳",
    "p.alu.d": "다이캐스팅·주조에 쓰이는 재생 알루미늄 잉곳을 공급합니다. 성분 안정성과 연속 공급을 우선합니다.",
    "p.alu.1": "ADC12 등 주조용 잉곳",
    "p.alu.2": "성분표 기준 매칭",
    "p.dross.t": "알루미늄 드로스",
    "p.dross.d": "알루미늄 용해·제련 과정에서 발생하는 회수 원료입니다. 금속 함량(DR 등급)과 화이트·블랙 구분을 기준으로 맞춰 공급합니다.",
    "p.dross.1": "화이트 / 블랙 드로스 · DR 등급",
    "p.dross.2": "금속 Al 함량 기준 회수 원료",
    "p.tin.t": "주석 슬래그",
    "p.tin.d": "주석 제련 과정에서 발생하는 슬래그를 유통합니다. 주석 및 유가금속 회수 원료로 활용됩니다.",
    "p.tin.1": "Sn 함량 기준 소싱",
    "p.tin.2": "회수·제련 원료 공급",
    "p.nick.t": "니켈 슬래그",
    "p.nick.d": "니켈 제련 슬래그를 취급합니다. 스테인리스·특수합금 원료 회수와 산업 부산물 자원 순환에 쓰입니다.",
    "p.nick.1": "Ni 계열 제련 부산물",
    "p.nick.2": "합금 원료 회수 용도",
    "p.wood.t": "우드펠릿",
    "p.wood.d": "산업용 보일러와 발전에 쓰이는 바이오매스 연료입니다. 함수율·발열량·규격을 기준으로 안정 공급합니다.",
    "p.wood.1": "산업·발전용 고형 연료",
    "p.wood.2": "신재생 에너지 원료",
    "p.kaolin.t": "카올린",
    "p.kaolin.d": "인도네시아 벨리퉁에서 나오는 산업용 고령토입니다. 도자기·제지·페인트 원료로, 누들·괴상·분체를 백색도와 알루미나 함량 기준으로 맞춰 한국 수요처에 공급합니다.",
    "p.kaolin.showroom": "대표 규격",
    "p.kaolin.badge.al": "Al₂O₃",
    "p.kaolin.badge.bright": "백색도",
    "p.kaolin.badge.origin": "벨리퉁",
    "p.kaolin.badge.form": "공급 형태",
    "p.kaolin.spec.origin.l": "산지",
    "p.kaolin.spec.origin.v": "인도네시아 벨리퉁",
    "p.kaolin.spec.form.l": "형태",
    "p.kaolin.spec.form.v": "누들 · 괴상 · 분체",
    "p.kaolin.spec.al.l": "Al₂O₃",
    "p.kaolin.spec.si.l": "SiO₂",
    "p.kaolin.spec.fe.l": "Fe₂O₃",
    "p.kaolin.spec.bright.l": "백색도",
    "p.kaolin.spec.moi.l": "수분",
    "p.kaolin.spec.port.l": "선적항",
    "p.kaolin.spec.port.v": "탄중바투",
    "p.kaolin.note": "대표 시료 기준입니다. 계약 물량은 선적 전 검사 결과에 따릅니다.",
    "p.kaolin.1": "도자기 · 제지 · 페인트 원료",
    "p.kaolin.2": "누들 · 괴상 · 분체 공급",
    "p.kaolin.3": "벨리퉁 소싱 · 탄중바투 선적",
    "p.kaolin.gallery": "카올린 현장 사진",
    "p.kaolin.thumb.noodle": "누들 원료 보기",
    "p.kaolin.thumb.lump": "괴상 원광 보기",
    "p.kaolin.thumb.powder": "분체 보기",
    "p.kaolin.thumb.mine": "채굴 현장 보기",
    "p.kaolin.alt.noodle": "카올린 누들 원료",
    "p.kaolin.alt.lump": "카올린 괴상 원광",
    "p.kaolin.alt.powder": "카올린 분체",
    "p.kaolin.alt.mine": "카올린 노천 채굴 현장",
    "p.eboard.t": "전자칠판",
    "p.eboard.d": "강의실·회의실용 터치 디스플레이를 공급합니다. 86인치 4K UHD, 40포인트 멀티터치, EDLA 인증 환경을 기준으로 화면 크기와 설치 조건을 맞춰 제안합니다.",
    "p.eboard.showroom": "Digital Showroom",
    "p.eboard.badge.size": "대형 화면",
    "p.eboard.badge.res": "UHD 해상도",
    "p.eboard.badge.touch": "포인트 멀티터치",
    "p.eboard.badge.edla": "소프트웨어 인증",
    "p.eboard.spec.size.l": "화면 크기",
    "p.eboard.spec.size.v": "65 / 75 / 86인치",
    "p.eboard.spec.res.l": "해상도",
    "p.eboard.spec.res.v": "4K UHD · 3840×2160",
    "p.eboard.spec.touch.l": "터치",
    "p.eboard.spec.touch.v": "IR 40포인트 멀티터치",
    "p.eboard.spec.os.l": "운영체제",
    "p.eboard.spec.os.v": "Android 13 · EDLA",
    "p.eboard.spec.mem.l": "메모리",
    "p.eboard.spec.mem.v": "RAM 8GB · 저장 128GB",
    "p.eboard.spec.av.l": "카메라 · 마이크",
    "p.eboard.spec.av.v": "13MP · 8 Array",
    "p.eboard.spec.io.l": "입출력",
    "p.eboard.spec.io.v": "HDMI · USB · Type-C · NFC",
    "p.eboard.spec.ops.l": "OPS",
    "p.eboard.spec.ops.v": "표준 80핀 슬롯 탑재",
    "p.eboard.1": "65 / 75 / 86인치 · 4K UHD · 40포인트 멀티터치",
    "p.eboard.2": "스탠드·벽걸이 설치, OPS 슬롯 탑재 모델",
    "p.eboard.3": "교육기관·관공서 조달 납품 대응",
    "p.doc.profile": "자원파트 회사 소개서",
    "p.doc.brief": "자원무역 브리핑",
    "p.doc.mfr": "제조사 파트너 브리프",
    "p.sample": "샘플 요청",
    "p.ops.t": "OPS 모듈",
    "p.ops.d": "전자칠판 슬롯에 삽입하는 일체형 PC 모듈입니다. 별도 본체·배선 없이 디스플레이와 하나로 운용됩니다.",
    "p.ops.1": "i3 / i5 / i7 · RAM·SSD 사양별 구성",
    "p.ops.2": "OPS 표준 80핀 규격 · 무선랜 옵션",
    "p.laptop.t": "노트북",
    "p.laptop.d": "업무용·교육용 노트북을 대량 공급합니다. 용도와 예산에 맞춘 사양 구성과 납기 조율을 함께 진행합니다.",
    "p.laptop.1": "사무용 · 교육용 · 고사양 작업용",
    "p.laptop.2": "대량 견적 · 렌탈/리스 상담",
    "p.tablet.t": "태블릿PC",
    "p.tablet.d": "교육 현장과 업무 현장에서 쓰이는 태블릿을 공급합니다. 안드로이드·윈도우 계열 모두 취급하며 부속품까지 함께 구성합니다.",
    "p.tablet.1": "안드로이드 / 윈도우 · 셀룰러 옵션",
    "p.tablet.2": "케이스·거치대·충전 보관함 등 부속",
    "p.drone.t": "농업용 드론",
    "p.drone.d": "팜·논·대규모 농지용 방제 드론을 공급합니다. 30·40·50리터 탱크, 4축·6축 기체를 완전 세트로 구성하고 현지 납품·교육까지 맞춥니다.",
    "p.drone.showroom": "Digital Showroom",
    "p.drone.badge.tank": "약제 탱크",
    "p.drone.badge.axis": "축 구성",
    "p.drone.badge.ha": "ha/시간 살포",
    "p.drone.badge.set": "완전 세트",
    "p.drone.spec.tank.l": "탱크 용량",
    "p.drone.spec.tank.v": "30 / 40 / 50 L",
    "p.drone.spec.axis.l": "기체",
    "p.drone.spec.axis.v": "6축 헥사 · 4축",
    "p.drone.spec.spray.l": "살포",
    "p.drone.spec.spray.v": "압력·원심 노즐 · 폭 5–8 m",
    "p.drone.spec.eff.l": "효율",
    "p.drone.spec.eff.v": "최대 12 ha/시간",
    "p.drone.spec.fly.l": "비행",
    "p.drone.spec.fly.v": "만재 10분 · 공허 25분",
    "p.drone.spec.rc.l": "조종 거리",
    "p.drone.spec.rc.v": "1.0 – 1.5 km",
    "p.drone.spec.set.l": "구성",
    "p.drone.spec.set.v": "기체·탱크·FC·리모컨·배터리·충전기",
    "p.drone.spec.use.l": "용도",
    "p.drone.spec.use.v": "팜 · 벼 · 사탕수수 방제",
    "p.drone.1": "30 / 40 / 50 L · 4축·6축 · 완전 세트",
    "p.drone.2": "압력·원심 살포, 지형·장애물 레이더 옵션",
    "p.drone.3": "인도네시아 현지 납품 · 교육 · 사후 지원",
    "p.koper26.t": "26인치 하드케이스",
    "p.koper26.d": "깨지기 어려운 ABS 코팅 폴리카보네이트 대형 캐리어입니다. 위탁 수하물용이며, 폴리에스터 커버를 세트로 맞출 수 있습니다.",
    "p.koper26.alt": "26인치 하드케이스 캐리어",
    "p.koper26.badge.size": "대형 위탁",
    "p.koper26.badge.shell": "ABS 코팅 PC",
    "p.koper26.badge.wheel": "사일런트 휠 4개",
    "p.koper26.badge.load": "최대 하중",
    "p.koper26.spec.size.l": "본체 치수",
    "p.koper26.spec.size.v": "430 × 640 × 270 mm",
    "p.koper26.spec.mat.l": "소재",
    "p.koper26.spec.mat.v": "ABS Coated Polycarbonate",
    "p.koper26.spec.wheel.l": "바퀴",
    "p.koper26.spec.wheel.v": "더블 사일런트 360° · 나사 5개",
    "p.koper26.spec.zip.l": "지퍼",
    "p.koper26.spec.zip.v": "Zipper No. 8 · 양방향",
    "p.koper26.spec.trolley.l": "트롤리",
    "p.koper26.spec.trolley.v": "실버 · 최소 390 mm",
    "p.koper26.spec.handle.l": "손잡이",
    "p.koper26.spec.handle.v": "PU+PP 더블 · 210 × 23 mm",
    "p.koper26.spec.cover.l": "커버",
    "p.koper26.spec.cover.v": "폴리에스터 880 × 660 × 290 mm",
    "p.koper26.spec.load.l": "하중",
    "p.koper26.spec.load.v": "최대 32 kg",
    "p.koper26.1": "내부 메시 포켓 · 2.5 cm 탄성 고정끈 · 아세탈 버클",
    "p.koper26.2": "좌측 PP 받침발 4개 · 매립형 손잡이",
    "p.koper26.3": "커버와 세트로 납품 가능",
    "p.koper18.t": "18인치 기내용",
    "p.koper18.d": "기내 반입용 소형 하드케이스입니다. 대형과 같은 ABS 코팅 PC 셸과 사일런트 휠을 쓰며, 2단 실버 트롤리와 커버를 맞출 수 있습니다.",
    "p.koper18.alt": "18인치 기내용 캐리어",
    "p.koper18.badge.size": "기내용",
    "p.koper18.badge.shell": "ABS 코팅 PC",
    "p.koper18.badge.trolley": "텔레스코픽",
    "p.koper18.badge.len": "트롤리 mm",
    "p.koper18.spec.size.l": "본체 치수",
    "p.koper18.spec.size.v": "320 × 430 × 220 mm",
    "p.koper18.spec.mat.l": "소재",
    "p.koper18.spec.mat.v": "ABS Coated Polycarbonate",
    "p.koper18.spec.wheel.l": "바퀴",
    "p.koper18.spec.wheel.v": "매립형 더블 사일런트 360°",
    "p.koper18.spec.trolley.l": "트롤리",
    "p.koper18.spec.trolley.v": "2단 당김 · 최대 500 mm",
    "p.koper18.spec.handle.l": "손잡이",
    "p.koper18.spec.handle.v": "PU+PP 더블 · 210 × 23 mm",
    "p.koper18.spec.cover.l": "커버",
    "p.koper18.spec.cover.v": "폴리에스터 450 × 330 × 230 mm",
    "p.koper18.spec.zip.l": "지퍼",
    "p.koper18.spec.zip.v": "Zipper No. 8",
    "p.koper18.spec.set.l": "구성",
    "p.koper18.spec.set.v": "메시 · 폴리에스터 · 버클",
    "p.koper18.1": "대형과 같은 셸·휠 구성",
    "p.koper18.2": "매립형 손잡이 · 텔레스코픽 2단",
    "p.koper18.3": "26인치와 세트로 납품",
    "p.passport.t": "여권 가방",
    "p.passport.d": "여권·서류용 크로스백입니다. 발수 폴리에스터에 PU 백킹을 더해 방수에 가깝게 막고, 앞뒤 투명 포켓으로 신분증을 바로 꺼냅니다.",
    "p.passport.alt": "여권 가방",
    "p.passport.badge.w": "가로 cm",
    "p.passport.badge.wr": "발수 원단",
    "p.passport.badge.zip": "고급 지퍼",
    "p.passport.badge.strap": "어깨끈 cm",
    "p.passport.spec.size.l": "치수",
    "p.passport.spec.size.v": "23 × 17 × 7 cm",
    "p.passport.spec.mat.l": "소재",
    "p.passport.spec.mat.v": "Polyester 4545 WR · PU backing",
    "p.passport.spec.lin.l": "안감",
    "p.passport.spec.lin.v": "폴리에스터 토린 · 진회색",
    "p.passport.spec.zip.l": "지퍼",
    "p.passport.spec.zip.v": "No. 5 흑색",
    "p.passport.spec.strap.l": "어깨끈",
    "p.passport.spec.strap.v": "LT PP 3.8 × 120 cm",
    "p.passport.spec.color.l": "색상",
    "p.passport.spec.color.v": "연회색 본체 · 흑색 하드웨어",
    "p.passport.1": "앞·뒤 마이카 포켓 · 아세탈 버클",
    "p.passport.2": "어깨끈 길이 조절 슬라이드 링",
    "p.passport.3": "4종 세트의 휴대 서류 가방",
    "p.armuzna.t": "ARMUZNA 배낭",
    "p.armuzna.d": "현장 이동용 접이식 배낭입니다. 립스톱 원단에 방수·발수 코팅을 하고, 쓰지 않을 때는 앞 포켓에 접어 22.5 × 14 cm 파우치로 넣습니다.",
    "p.armuzna.alt": "ARMUZNA 접이식 배낭",
    "p.armuzna.badge.h": "펼친 높이 mm",
    "p.armuzna.badge.coat": "방수·발수",
    "p.armuzna.badge.fold": "접이식 파우치",
    "p.armuzna.badge.mesh": "측면 메시 cm",
    "p.armuzna.spec.open.l": "펼친 치수",
    "p.armuzna.spec.open.v": "320 × 450 × 160 mm",
    "p.armuzna.spec.fold.l": "접은 치수",
    "p.armuzna.spec.fold.v": "225 × 140 × 25 mm",
    "p.armuzna.spec.mat.l": "소재",
    "p.armuzna.spec.mat.v": "Ripstop 144T×92T · WRWP",
    "p.armuzna.spec.wt.l": "원단 중량",
    "p.armuzna.spec.wt.v": "약 177 g/y · 127 g/sm",
    "p.armuzna.spec.zip.l": "지퍼",
    "p.armuzna.spec.zip.v": "No. 5 흑색 · 가역 포켓",
    "p.armuzna.spec.side.l": "측면",
    "p.armuzna.spec.side.v": "메시 포켓 높이 16 cm",
    "p.armuzna.1": "뒤면 신원 마이카 포켓",
    "p.armuzna.2": "어깨끈 LT PP 3.8 × 120 cm",
    "p.armuzna.3": "4종 세트의 현장 이동 가방",
    "p.ask": "이 품목 문의",
    "brief.tag": "PT. APEX TELCOM INKO · Resources Division",
    "brief.cover.title": "자원과 현장을 연결하는 공급 브리핑",
    "brief.cover.meta": "APEX-RES-BRIEF · Rev. 2026.08 · 바이어·파트너 배포용",
    "brief.intro": "구리 스크랩, 알루미늄 잉곳, 알루미늄 드로스, 주석·니켈 슬래그, 우드펠릿, 카올린을 카자흐스탄·호주·탄자니아·인도네시아에서 소싱합니다. 현지 주체는 PT. APEX TELCOM INKO, 한국 파트너는 VL M&amp;C · APEX HOLDINGS입니다. 가격·재고는 문의 시점의 오퍼와 검사 결과에 따릅니다.",
    "brief.s1": "취급 품목",
    "brief.s2": "자원 소싱 거점",
    "brief.s3": "PT. APEX TELCOM INKO · VL M&amp;C · APEX HOLDINGS",
    "brief.s4": "시험 선적 후 확대",
    "brief.market.t": "시장 맥락",
    "brief.cu.t": "구리 스크랩",
    "brief.cu.p": "한국 HS 7404 수입은 2025년 약 32.3만 톤, 2026년 상반기 약 17.6만 톤입니다. 전선·밀베리 등 국제 등급과 수분·이물이 거래의 핵심입니다.",
    "brief.wood.t": "우드펠릿",
    "brief.wood.p": "2025년 한국 수입 약 392.9만 톤. 인도네시아산은 약 90만 톤(23%)으로 주요 원산지입니다. 함수율·발열량·회분을 계약 조건으로 맞춥니다.",
    "brief.disclaimer": "공개 브리핑이며 내부 거래 상대·계약 단가는 포함하지 않습니다. 회사 소개서와 함께 전달해도 됩니다.",
    "mfr.tag": "Manufacturer Partner Brief · Electronics &amp; Resources",
    "mfr.cover.title": "인도네시아와 한국의 현지 파트너",
    "mfr.cover.meta": "APEX-MFR-BRIEF · Rev. 2026.08 · 제조사 배포용 · 1페이지",
    "mfr.download": "영·중 PDF",
    "mfr.download.ko": "한글 PDF",
    "mfr.lead": "현지 주체는 PT. APEX TELCOM INKO입니다. 한국 파트너는 VL M&amp;C · APEX HOLDINGS입니다. 이 한 장은 전자 제조사와 자원 생산 파트너에게, 견적 전에 협업 구조를 전달하기 위한 자료입니다.",
    "mfr.s1": "자원 취급 품목",
    "mfr.s2": "전자 취급 품목",
    "mfr.s3": "인도네시아 · 한국",
    "mfr.s4": "선적 전 검사",
    "mfr.who.t": "거점",
    "mfr.apex.p": "탄게랑. 현지 계약과 진행의 주체이며 대외 전면 브랜드입니다.",
    "mfr.vl.p": "한국 파트너입니다.",
    "mfr.range.t": "취급 범위",
    "mfr.range.res.t": "자원파트",
    "mfr.range.res.p": "구리 스크랩 · 알루미늄 잉곳 · 알루미늄 드로스 · 주석/니켈 슬래그 · 우드펠릿 · 카올린",
    "mfr.range.ele.t": "전자파트",
    "mfr.range.ele.p": "전자칠판 65/75/86인치 · OPS 모듈 · 노트북 · 태블릿PC · 농업용 드론 30/40/50 L",
    "mfr.range.lug.t": "여행파트",
    "mfr.range.lug.p": "26·18인치 ABS 코팅 PC 하드케이스 · 여권 가방 · ARMUZNA 배낭",
    "mfr.how.t": "협업 순서",
    "mfr.how.1t": "사양 확정",
    "mfr.how.1p": "등급·성분 또는 BOM을 발주 전에 고정합니다.",
    "mfr.how.2t": "샘플 · 검수",
    "mfr.how.2p": "승인 샘플 또는 지정 검사기관으로 확인합니다.",
    "mfr.how.3t": "시험 선적",
    "mfr.how.3p": "첫 물량으로 품질을 확인한 뒤 확대합니다.",
    "mfr.how.4t": "반복 공급",
    "mfr.how.4p": "선적 일정·포장·사후를 계약에 남깁니다.",
    "mfr.ask.t": "제조사에 요청하는 것  /  우리가 맡는 것",
    "mfr.need.t": "제조사에 요청하는 것",
    "mfr.need.1": "승인 샘플·성적서와 동일한 확정 사양",
    "mfr.need.2": "월 생산능력과 납기",
    "mfr.need.3": "선적 전 검사(PSI) 또는 지정 검사 입회",
    "mfr.need.4": "수출 포장·서류, PI에 Incoterms 명시",
    "mfr.need.5": "전자는 보증·부품, 자원은 정산 기준",
    "mfr.give.t": "우리가 맡는 것",
    "mfr.give.1": "현지 주체 · 계약·진행 (PT. APEX TELCOM INKO 탄게랑)",
    "mfr.give.2": "한국 파트너 (VL M&amp;C · APEX HOLDINGS)",
    "mfr.give.3": "규격 확정 후에만 발주",
    "mfr.give.4": "시험 선적 후 반복 물량",
    "mfr.give.5": "대금은 법인 계좌로만 수수",
    "mfr.next.t": "다음 단계",
    "mfr.next.p": "품목·확정 사양·월 생산능력·초도 물량을 보내 주시면, 사양 확정 시트로 회신합니다.",
    "mfr.contact.t": "문의",
    "mfr.disc": "일반 안내입니다. 가격·재고·선적 일정은 문의 시점의 오퍼에 따릅니다. 내부 거래 상대와 계약 단가는 넣지 않았습니다. 바이어용 소개서·브리핑과 별도로 제조사에 보내 주세요.",
    "process.eyebrow": "The Voyage",
    "process.title": "출항부터 인도까지",
    "process.1t": "출항 · 수요",
    "process.1p": "품목과 등급·사양, 물량, 납기, 설치 환경을 기준으로 조건을 정리합니다.",
    "process.2t": "항해 · 검수",
    "process.2p": "국내외 공급망에서 규격에 맞는 물량을 확보하고 품질을 확인합니다.",
    "process.3t": "기항 · 인도",
    "process.3p": "현지 계약·진행은 PT. APEX TELCOM INKO가 주체입니다. 한국 파트너는 VL M&amp;C · APEX HOLDINGS입니다.",
    "process.4t": "정박 · 사후",
    "process.4p": "반복 공급은 재고·선적 일정을 함께 맞추고, 전자제품·캐리어는 A/S 창구를 안내합니다.",
    "contact.eyebrow": "Contact",
    "contact.title": "품목과 수량을\n알려 주세요",
    "contact.lead": "전면 문의는 PT. APEX TELCOM INKO로 보내 주세요. 한국 파트너는 VL M&amp;C · APEX HOLDINGS입니다. 자원이든 전자기기든, 취급 가능 여부와 대략적인 조건을 빠르게 회신드립니다.",
    "contact.docs": "규격서·카탈로그는 문의 후 보내 드립니다.",
    "contact.person": "담당",
    "contact.email": "이메일",
    "contact.addr": "주소",
    "contact.addrv": "The Prominence Office Tower, 10F Unit H, Jl. Jalur Sutera Barat, Pinang, Tangerang, Banten 15143",
    "contact.addr.kr": "서울특별시 강서구 양천로 532, 1301호",
    "contact.addr.vl": "인천광역시 서구 청라한내로72번길 7-15",
    "form.kicker": "Inquiry",
    "form.title": "견적 문의",
    "form.name": "성함 / 회사",
    "form.contact": "연락처",
    "form.contact.ph": "전화 또는 이메일",
    "form.item": "관심 품목",
    "form.optRes": "자원파트 / Resources",
    "form.optEle": "전자파트 / Electronics",
    "form.optLug": "여행파트 / Luggage",
    "form.optDocs": "문서 / Documents",
    "form.msg": "문의 내용",
    "form.msg.ph": "사양·등급, 예상 수량, 납기 등을 적어 주세요.",
    "form.submit": "메일로 문의 보내기",
    "form.note": "전송 시 PT. APEX TELCOM INKO 메일 앱이 열립니다. 한국 파트너 VL M&amp;C · APEX HOLDINGS 이메일로도 연락해 주세요.",
    "form.error": "성함/회사, 연락처, 문의 내용을 모두 입력해 주세요.",
    "form.mail.subject": "[PT. APEX TELCOM INKO] {item} 문의",
    "form.mail.body": "성함/회사: {name}\n연락처: {contact}\n관심 품목: {item}\n\n{message}",
    "form.sample.prefill": "{item} 샘플을 요청합니다. 수량, 납기, 설치 환경을 협의하고 싶습니다.",
    "form.catalog.prefill": "{item} 카탈로그·명세서를 요청합니다. 필요 규격과 용도를 알려 주시면 메일로 보내 드리겠습니다.",
    "menu.open": "메뉴 열기",
    "menu.close": "메뉴 닫기",
    "brand.home": "PT. APEX TELCOM INKO 홈",
    "nav.main": "주 메뉴",
    "materials.label": "취급 품목 미리보기",
    "tablist.products": "취급 품목 분류",
    "tablist.docs": "배포용 문서",
    "lang.group": "언어",
    "lang.ko": "한국어",
    "lang.id": "Bahasa Indonesia",
    "lang.en": "English",
    "form.item.copper": "구리 스크랩",
    "form.item.alu": "알루미늄 잉곳",
    "form.item.dross": "알루미늄 드로스",
    "form.item.tin": "주석 슬래그",
    "form.item.nick": "니켈 슬래그",
    "form.item.wood": "우드펠릿",
    "form.item.kaolin": "카올린",
    "form.item.eboard": "전자칠판",
    "form.item.ops": "OPS 모듈",
    "form.item.laptop": "노트북",
    "form.item.tablet": "태블릿PC",
    "form.item.drone": "농업용 드론",
    "form.item.koper26": "26인치 하드케이스",
    "form.item.koper18": "18인치 기내용 캐리어",
    "form.item.passport": "여권 가방",
    "form.item.armuzna": "ARMUZNA 배낭",
    "form.item.lugset": "여행 캐리어 세트",
    "form.item.profile": "자원파트 회사 소개서",
    "form.item.brief": "자원무역 브리핑",
    "form.item.mfr": "제조사 파트너 브리프",
    "form.item.resdocs": "자원파트 문서",
    "form.item.other": "기타",
    "footer.blurb": "신대륙을 찾듯 산지를 찾아 나섭니다. 현지 주체는 PT. APEX TELCOM INKO, 한국 파트너는 VL M&amp;C · APEX HOLDINGS입니다.",
    "footer.explore": "바로가기",
    "footer.contact": "연락처",
    "footer.top": "맨 위로",
    "bgm.play": "배경음악 재생",
    "bgm.pause": "배경음악 끄기",
    "bgm.title": "배경음악",
    "bgm.credit": "배경 테마"
  },
  en: {
    skip: "Skip to content",
    "brand.tag": "VL M&amp;C · APEX HOLDINGS",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.briefing": "Reports",
    "nav.network": "The Chart",
    "prof.sec.eyebrow": "Reports",
    "prof.sec.title": "Documents to share",
    "prof.sec.lead": "A company profile and trade briefing for buyers, plus a separate one-page partner brief for manufacturers. The manufacturer brief is shown in full here and downloads as a PDF.",
    "prof.tab.kind": "Summary · 6p PDF",
    "brief.tab.kind": "Summary · 4p PDF",
    "mfr.tab.kind": "Full · 1p PDF",
    "prof.toc.kicker": "Contents",
    "prof.toc.t": "Inside the PDF · 6 pages",
    "prof.toc.lead": "The organisation chart, item details, sourcing bases and trade process are covered in more depth across these pages. Print it and hand it over as is.",
    "brief.toc.t": "Inside the PDF · 4 pages",
    "brief.market.src": "Figures above summarise public trade statistics and are updated over time.",
    "prof.toc.01.t": "Company overview",
    "prof.toc.01.d": "PT. APEX TELCOM INKO · VL M&amp;C · APEX HOLDINGS",
    "prof.toc.02.t": "Corporate data",
    "prof.toc.02.d": "Entity, principals, bases, business scope and contacts",
    "prof.toc.03.t": "Organization and locations",
    "prof.toc.03.d": "Indonesia local / Korea partner",
    "prof.toc.04.t": "Responsibility split",
    "prof.toc.04.d": "Who owns sourcing, inspection, documents, customs, delivery and claims",
    "prof.toc.05.t": "Operating principles",
    "prof.toc.05.d": "Specification, inspection and logistics",
    "prof.toc.06.t": "Product range",
    "prof.toc.06.d": "Six items with descriptions, HS codes and supply points",
    "prof.toc.07.t": "Global sourcing network",
    "prof.toc.07.d": "The role of each of the five bases",
    "prof.toc.08.t": "How we work",
    "prof.toc.08.d": "The four-step execution process",
    "prof.toc.09.t": "Contact",
    "prof.toc.09.d": "PT. APEX TELCOM INKO and VL M&amp;C · APEX HOLDINGS channels, plus related documents",
    "brief.toc.01.t": "Executive summary",
    "brief.toc.01.d": "Local party first, inspection-first, specification-led, staged scale-up",
    "brief.toc.02.t": "Market context",
    "brief.toc.02.d": "Demand context for copper scrap and wood pellets",
    "brief.toc.03.t": "Items & contract points",
    "brief.toc.03.d": "What each item pins down in the contract",
    "brief.toc.04.t": "Sourcing network",
    "brief.toc.04.d": "Kazakhstan, Perth, Kalimantan, Sulawesi, Papua, Tangerang, Seoul",
    "brief.toc.05.t": "Inspection & delivery",
    "brief.toc.05.d": "Requirements → sourcing and inspection → logistics → aftercare",
    "brief.toc.06.t": "Getting started",
    "brief.toc.06.d": "Define requirements → offer → trial shipment",
    "brief.toc.07.t": "Contact",
    "brief.toc.07.d": "The enquiry format that gets the fastest reply",
    "nav.process": "Voyage",
    "nav.contact": "Contact",
    "nav.inquiry": "Request a quote",
    "hero.eyebrow": "PT. APEX TELCOM INKO × VL M&amp;C · APEX HOLDINGS",
    "hero.title1": "Like seeking a new world",
    "hero.title2": "we sail for resources",
    "hero.cta1": "View products",
    "hero.cta2": "Talk to us",
    "hero.s1": "Sourcing posts",
    "hero.s2": "Tangerang · Indonesia",
    "hero.s3": "Korea",
    "strip.1t": "Sail · Resources",
    "strip.1p": "Non-ferrous · Slag · Dross · Wood pellets · Kaolin",
    "strip.2t": "Port · Electronics",
    "strip.2p": "Displays · OPS · Laptops · Tablets · Drones",
    "strip.lug.t": "Ship · Luggage",
    "strip.lug.p": "26″ and 18″ hardcases · passport bag · ARMUZNA pack",
    "strip.3t": "PT. APEX TELCOM INKO",
    "strip.3p": "The local party that signs and proceeds",
    "strip.4t": "VL M&amp;C · APEX HOLDINGS",
    "strip.4p": "Korea partner",
    "about.eyebrow": "The Company",
    "about.title": "We hunt unknown origins\nand execute on the ground",
    "about.p1": "PT. APEX TELCOM INKO is the party that signs and carries out work in Indonesia. It is the public-facing brand, and locally this name comes first. The Korea partner is VL M&amp;C · APEX HOLDINGS.",
    "about.p2": "Neither side is plain brokerage. We go after origins that are not yet on the chart, then manage specification, quality, and logistics together.",
    "about.pr1t": "Specification",
    "about.pr1p": "We match grade, spec, and composition first.",
    "about.pr2t": "Inspection",
    "about.pr2p": "Volume and condition are checked before delivery.",
    "about.pr3t": "Two bases",
    "about.pr3p": "Indonesia is PT. APEX TELCOM INKO. Korea is VL M&amp;C · APEX HOLDINGS.",
    "about.cap": "PT. APEX TELCOM INKO Tangerang and VL M&amp;C · APEX HOLDINGS in Korea work together.",
    "about.f1t": "Front",
    "about.f2t": "Korea partner",
    "about.f3t": "Indonesia",
    "about.f3d": "Tangerang",
    "about.f4t": "Korea",
    "about.f4d": "VL M&amp;C · APEX HOLDINGS",
    "partner.apex.en": "Indonesia · Front",
    "partner.apex.p": "The party that signs and carries out work in Indonesia. Public-facing brand; this name comes first on the ground.",
    "partner.apex.role": "Local party · contract · progress",
    "partner.vl.en": "Korea · Partner",
    "partner.vl.p": "Korea partner.",
    "partner.vl.role": "Korea partner",
    "org.eyebrow": "Organization",
    "org.title": "Organization chart",
    "org.lead": "PT. APEX TELCOM INKO is the local party. The Korea partner is VL M&amp;C · APEX HOLDINGS.",
    "org.company.kicker": "Front",
    "org.company.base": "Local party in Indonesia",
    "org.equal": "Korea",
    "org.vl.en": "Korea",
    "org.vl.role": "Korea partner",
    "org.res.en": "Resources",
    "org.res.t": "Resources Division",
    "org.res.1": "Non-ferrous sourcing",
    "org.res.2": "Slag · dross · wood pellets · kaolin",
    "org.res.3": "Kazakhstan · Perth · Kalimantan · Sulawesi · Papua",
    "org.ops.en": "Operations",
    "org.ops.t": "Two bases",
    "org.ops.1": "PT. APEX TELCOM INKO is the local party",
    "org.ops.2": "VL M&amp;C · APEX HOLDINGS Korea partner",
    "org.ops.3": "Source · inspect · deliver",
    "org.ele.en": "Electronics",
    "org.ele.t": "Electronics Division",
    "org.ele.1": "Interactive displays · OPS",
    "org.ele.2": "Laptops · tablets · drones",
    "org.ele.3": "Shenzhen sourcing · install",
    "org.lug.en": "Luggage",
    "org.lug.t": "Luggage",
    "org.lug.1": "26″ and 18″ hardcases",
    "org.lug.2": "Passport bag · ARMUZNA",
    "org.lug.3": "Covers · set delivery",
    "prof.tag": "Company Profile · Resources Division",
    "prof.cover.title": "Intelligent scenarios, made real",
    "prof.lead": "PT. APEX TELCOM INKO is the party that signs and carries out work in Indonesia. The Korea partner is VL M&amp;C · APEX HOLDINGS. We match grade, quality, and logistics for non-ferrous scrap, smelting slag, aluminum dross, industrial wood pellets, and kaolin.",
    "prof.meta": "2026 · For buyers and partners · Tangerang · Seoul · Dar es Salaam · Jakarta",
    "prof.about.kicker": "About",
    "prof.about.t": "The company",
    "prof.about.p": "PT. APEX TELCOM INKO is the local contracting party. The Korea partner is VL M&amp;C · APEX HOLDINGS. This profile covers Resources. Electronics are in a separate catalog.",
    "prof.about.box": "This is not plain brokerage. We match grade first. PT. APEX TELCOM INKO is the local party. The Korea partner is VL M&amp;C · APEX HOLDINGS.",
    "prof.th.field": "Item",
    "prof.th.value": "Detail",
    "prof.field.name": "Name",
    "prof.field.frontnote": "(local party)",
    "prof.field.partner": "Korea partner",
    "prof.field.partnote": "(Korea)",
    "prof.field.apexbase": "PT. APEX TELCOM INKO base",
    "prof.field.vlbase": "Korea base",
    "prof.field.scope": "Scope",
    "prof.field.scopev": "Resources · Electronics / B2B sourcing, inspection, import/export, delivery",
    "prof.field.items": "Resources we handle",
    "prof.disc": "This profile is general guidance. Price, stock, and shipment timing follow the offer and inspection at inquiry. Import/export permits are confirmed with a customs broker and local rules before contract.",
    "div.res.en": "Metals · Slag · Biomass · Kaolin",
    "div.res.t": "Resources Division",
    "div.res.d": "Copper scrap · Aluminum ingot · Aluminum dross · Tin/Nickel slag · Wood pellets · Kaolin",
    "div.res.a": "View resource items",
    "div.ele.en": "Displays · PCs · Drones",
    "div.ele.t": "Electronics Division",
    "div.ele.d": "Interactive displays · OPS modules · Laptops · Tablets · Agricultural drones",
    "div.ele.a": "View electronic items",
    "div.lug.en": "Luggage Division",
    "div.lug.t": "Luggage Division",
    "div.lug.d": "26″ and 18″ hardcases · passport bag · ARMUZNA pack",
    "div.lug.a": "View luggage items",
    "products.eyebrow": "Cargo",
    "products.title": "What we supply",
    "products.lead": "Three routes — resources, electronics, and travel luggage. Review photos and key specs here; catalogs are sent after inquiry.",
    "network.eyebrow": "The Chart",
    "network.title": "A chart for new origins",
    "network.lead": "Aluminum from Kazakhstan and Perth, coal from Kalimantan, nickel from Sulawesi, and copper from Papua. Port hubs are Dar es Salaam and Jakarta; electronics from Shenzhen. PT. APEX TELCOM INKO Tangerang is the local party. The Korea partner is VL M&amp;C · APEX HOLDINGS.",
    "network.map.alt": "World map showing aluminum in Kazakhstan and Perth, coal in Kalimantan, nickel in Sulawesi, copper in Papua, plus hubs in Dar es Salaam, Jakarta, Shenzhen, Tangerang, and Seoul",
    "network.legend.resource": "Resource sourcing",
    "network.legend.electronics": "Electronics sourcing",
    "network.legend.hub": "PT. APEX TELCOM INKO",
    "network.tag.resourceHub": "Resource hub",
    "network.tag.electronicsHub": "Electronics hub",
    "network.tag.apexHub": "PT. APEX TELCOM INKO",
    "network.tag.vlHub": "Korea hub",
    "network.tag.aluminum": "Aluminum",
    "network.tag.aluminumHub": "Aluminum · hub",
    "network.tag.coal": "Coal",
    "network.tag.copper": "Copper",
    "network.tag.nickel": "Nickel",
    "network.kazakhstan": "Kazakhstan",
    "network.kazakhstan.country": "Kazakhstan",
    "network.kazakhstan.desc": "Central Asian aluminum supply hub",
    "network.perth": "Perth",
    "network.perth.country": "Australia",
    "network.perth.desc": "Western Australia aluminum supply hub",
    "network.kalimantan": "Kalimantan",
    "network.kalimantan.country": "Indonesia",
    "network.kalimantan.desc": "Borneo coal supply hub",
    "network.sulawesi": "Sulawesi",
    "network.sulawesi.country": "Indonesia",
    "network.sulawesi.desc": "Sulawesi nickel supply hub",
    "network.papua": "Papua",
    "network.papua.country": "Indonesia",
    "network.papua.desc": "Papua copper supply hub",
    "network.tanzania": "Dar es Salaam",
    "network.tanzania.country": "Tanzania",
    "network.tanzania.desc": "Indian Ocean port hub for African resource supply",
    "network.indonesia": "Jakarta",
    "network.indonesia.country": "Indonesia",
    "network.indonesia.desc": "Java port hub for Southeast Asian resource supply",
    "network.shenzhen": "Shenzhen",
    "network.shenzhen.country": "Guangdong, China",
    "network.shenzhen.desc": "Electronics, IT hardware, and agricultural drone supply hub",
    "network.tangerang": "Tangerang",
    "network.tangerang.country": "Indonesia",
    "network.tangerang.desc": "PT. APEX TELCOM INKO. Local party in Indonesia",
    "network.korea": "Incheon · Seoul",
    "network.korea.country": "Korea",
    "network.korea.desc": "VL M&amp;C · APEX HOLDINGS",
    "network.legend.korea": "VL M&amp;C · APEX HOLDINGS",
    "track.badge": "Demo",
    "track.title": "Shipment tracking",
    "track.lead": "Enter a sample B/L number to see a simulated route on the map. This is not connected to a live carrier feed.",
    "track.label": "B/L number",
    "track.ph": "APEX-DAR-2608-001",
    "track.go": "Track",
    "track.samples": "Sample numbers",
    "track.note": "This is a website demo. Live container position and ETA are shared after contract, from the carrier or forwarder.",
    "track.unknown": "That number is not a demo sample. Tap one of the sample B/Ls below.",
    "track.hud.bl": "B/L",
    "track.hud.vessel": "Vessel",
    "track.hud.cargo": "Cargo",
    "track.hud.route": "Lane",
    "track.status.search": "Looking up",
    "track.status.depart": "Departed",
    "track.status.transit": "At sea",
    "track.status.arrive": "Arriving",
    "track.status.done": "Arrived",
    "track.cargo.cu": "Copper scrap",
    "track.cargo.wood": "Wood pellets",
    "track.cargo.ifp": "Interactive panel",
    "track.vessel.dar": "MV APEX DARWIN",
    "track.vessel.jkt": "MV APEX JAVA",
    "track.vessel.szx": "MV APEX PEARL",
    "track.route.dar": "Dar es Salaam → Jakarta → Incheon",
    "track.route.jkt": "Jakarta → Incheon",
    "track.route.szx": "Shenzhen → Incheon",
    "tab.resource": "Resources",
    "tab.resource.sub": "Metals · Slag · Dross · Biomass · Kaolin",
    "tab.electronic": "Electronics",
    "tab.electronic.sub": "Displays · PCs · Drones",
    "tab.luggage": "Luggage",
    "tab.luggage.sub": "Hardcase · Bags",
    "panel.res.lead": "From metal feedstock and smelting by-products — including aluminum dross — to cleaner fuel and industrial kaolin. Review photos and key specs; catalogs are sent after inquiry.",
    "panel.ele.lead": "Interactive flat panels, OPS modules, laptops, tablets, and agricultural drones for schools, public offices, farms, and companies. Review key specs in the showroom, request the catalog by inquiry, then ask for a sample.",
    "panel.lug.lead": "We supply 26″ and 18″ hardcases, a passport bag, and the ARMUZNA pack as a travel set. Covers and ID marking follow the order spec.",
    "hall.res.kicker": "Resources Digital Showroom",
    "hall.res.t": "Resources showroom",
    "hall.res.d": "Choose items from photos and key specs. Catalogs and spec sheets are sent after you inquire.",
    "hall.ele.kicker": "Electronics Digital Showroom",
    "hall.ele.t": "Electronics showroom",
    "hall.ele.d": "Review key specs on screen. Catalogs and technical sheets are sent after you inquire.",
    "hall.lug.kicker": "Luggage Digital Showroom",
    "hall.lug.t": "Luggage showroom",
    "hall.lug.d": "Review the four-item set specs here. Catalogs and quotes are sent after you inquire.",
    "spec.form": "Form",
    "spec.grade": "Grade",
    "spec.ctrl": "Control",
    "spec.use": "Use",
    "spec.match": "Match",
    "spec.prio": "Priority",
    "spec.type": "Type",
    "spec.basis": "Basis",
    "spec.src": "Source",
    "spec.loop": "Loop",
    "p.catalog": "Request catalog",
    "p.copper.badge.metal": "Non-ferrous",
    "p.copper.badge.form": "Wire · pipe",
    "p.copper.badge.grade": "Int'l grades",
    "p.copper.badge.use": "Power · build",
    "p.copper.spec.grade.v": "Millberry · birch and others",
    "p.copper.spec.use.v": "Electrical · construction · manufacturing",
    "p.alu.badge.metal": "Recycled ingot",
    "p.alu.badge.grade": "Casting grade",
    "p.alu.badge.assay": "Assay match",
    "p.alu.badge.flow": "Steady supply",
    "p.alu.spec.use.v": "Die-casting · foundry",
    "p.alu.spec.prio.v": "Stable assay · continuous supply",
    "p.dross.badge.grade": "Metal content",
    "p.dross.badge.type": "White · black",
    "p.dross.badge.metal": "Recovery feed",
    "p.dross.badge.src": "Melt by-product",
    "p.dross.spec.src.v": "Melting · smelting",
    "p.dross.spec.use.v": "Metal recovery feed",
    "p.tin.badge.metal": "Tin slag",
    "p.tin.badge.form": "Smelt by-product",
    "p.tin.badge.assay": "Assay basis",
    "p.tin.badge.use": "Metal recovery",
    "p.tin.spec.src.v": "Tin smelting",
    "p.tin.spec.form.v": "Slag · recovery feed",
    "p.nick.badge.metal": "Nickel slag",
    "p.nick.badge.use": "Stainless feed",
    "p.nick.badge.alloy": "Special alloys",
    "p.nick.badge.loop": "Resource loop",
    "p.nick.spec.src.v": "Nickel smelting slag",
    "p.nick.spec.loop.v": "Industrial by-product loop",
    "p.wood.badge.fuel": "Biomass",
    "p.wood.badge.moi": "Moisture spec",
    "p.wood.badge.cal": "Calorific spec",
    "p.wood.badge.use": "Boiler · power",
    "p.wood.spec.ctrl.v": "Moisture · calorific value · size",
    "p.wood.spec.form.v": "Industrial wood pellets",
    "p.ops.badge.cpu": "i3 · i5 · i7",
    "p.ops.badge.mem": "RAM · SSD",
    "p.ops.badge.pin": "Standard pin slot",
    "p.ops.badge.wifi": "Wi-Fi option",
    "p.ops.spec.cpu.l": "Processor",
    "p.ops.spec.cpu.v": "i3 / i5 / i7",
    "p.ops.spec.mem.l": "Build",
    "p.ops.spec.mem.v": "RAM · SSD by spec",
    "p.ops.spec.pin.l": "Interface",
    "p.ops.spec.pin.v": "Standard 80-pin OPS",
    "p.ops.spec.wifi.l": "Option",
    "p.ops.spec.wifi.v": "Wi-Fi",
    "p.laptop.badge.office": "Office",
    "p.laptop.badge.edu": "Education",
    "p.laptop.badge.pro": "High-performance",
    "p.laptop.badge.b2b": "Volume · rental",
    "p.laptop.spec.use.l": "Use",
    "p.laptop.spec.use.v": "Office · education · high-spec",
    "p.laptop.spec.qty.l": "Supply",
    "p.laptop.spec.qty.v": "Volume quotes",
    "p.laptop.spec.opt.l": "Option",
    "p.laptop.spec.opt.v": "Rental · lease",
    "p.laptop.spec.match.l": "Fit",
    "p.laptop.spec.match.v": "Spec · lead-time match",
    "p.tablet.badge.aos": "Android",
    "p.tablet.badge.win": "Windows",
    "p.tablet.badge.lte": "Cellular option",
    "p.tablet.badge.kit": "Accessories",
    "p.tablet.spec.os.l": "OS",
    "p.tablet.spec.os.v": "Android · Windows",
    "p.tablet.spec.net.l": "Connect",
    "p.tablet.spec.net.v": "Cellular option",
    "p.tablet.spec.kit.l": "Kit",
    "p.tablet.spec.kit.v": "Case · stand · charging cabinet",
    "p.tablet.spec.use.l": "Field",
    "p.tablet.spec.use.v": "Education · work",
    "p.copper.t": "Copper scrap",
    "p.copper.d": "We handle internationally graded copper scrap such as wire, millberry, and birch—core feedstock for electrical, construction, and manufacturing.",
    "p.copper.1": "Wire / copper pipe / busbar",
    "p.copper.2": "Grade sorting and impurity control",
    "p.alu.t": "Aluminum ingot",
    "p.alu.d": "Recycled aluminum ingots for die-casting and foundry use, with composition stability and continuous supply as the priority.",
    "p.alu.1": "ADC12 and foundry ingots",
    "p.alu.2": "Matched to spec sheets",
    "p.dross.t": "Aluminum dross",
    "p.dross.d": "Recovery feedstock from aluminum melting and smelting. We match metallic aluminum content (DR grade) and white versus black dross.",
    "p.dross.1": "White / black dross · DR grade",
    "p.dross.2": "Feedstock graded by metallic Al",
    "p.tin.t": "Tin slag",
    "p.tin.d": "We trade slag from tin smelting, used as feedstock for recovering tin and other valuable metals.",
    "p.tin.1": "Sourced by Sn content",
    "p.tin.2": "Recovery and refining feedstock",
    "p.nick.t": "Nickel slag",
    "p.nick.d": "Nickel smelting slag for recovering stainless and specialty-alloy feedstock, turning industrial by-products back into resources.",
    "p.nick.1": "Ni-bearing smelting by-product",
    "p.nick.2": "Alloy recovery applications",
    "p.wood.t": "Wood pellets",
    "p.wood.d": "Biomass fuel for industrial boilers and power generation, supplied against moisture, calorific value, and size specs.",
    "p.wood.1": "Industrial and power fuel",
    "p.wood.2": "Renewable energy feedstock",
    "p.kaolin.t": "Kaolin",
    "p.kaolin.d": "Industrial kaolin from Belitung, Indonesia. We match noodle, lump, and powder grades to brightness and alumina for ceramic, paper, and paint buyers in Korea and the region.",
    "p.kaolin.showroom": "Typical spec",
    "p.kaolin.badge.al": "Al₂O₃",
    "p.kaolin.badge.bright": "Brightness",
    "p.kaolin.badge.origin": "Belitung",
    "p.kaolin.badge.form": "Supply form",
    "p.kaolin.spec.origin.l": "Origin",
    "p.kaolin.spec.origin.v": "Belitung, Indonesia",
    "p.kaolin.spec.form.l": "Form",
    "p.kaolin.spec.form.v": "Noodle · lump · powder",
    "p.kaolin.spec.al.l": "Al₂O₃",
    "p.kaolin.spec.si.l": "SiO₂",
    "p.kaolin.spec.fe.l": "Fe₂O₃",
    "p.kaolin.spec.bright.l": "Brightness",
    "p.kaolin.spec.moi.l": "Moisture",
    "p.kaolin.spec.port.l": "Loading port",
    "p.kaolin.spec.port.v": "Tanjung Batu",
    "p.kaolin.note": "Figures are from a typical sample. Contract tonnage follows pre-shipment inspection.",
    "p.kaolin.1": "Ceramic · paper · paint feedstock",
    "p.kaolin.2": "Noodle · lump · powder supply",
    "p.kaolin.3": "Belitung sourcing · Tanjung Batu loading",
    "p.kaolin.gallery": "Kaolin field photos",
    "p.kaolin.thumb.noodle": "View noodle grade",
    "p.kaolin.thumb.lump": "View lump ore",
    "p.kaolin.thumb.powder": "View powder",
    "p.kaolin.thumb.mine": "View open-pit mine",
    "p.kaolin.alt.noodle": "Kaolin noodle feedstock",
    "p.kaolin.alt.lump": "Kaolin lump ore",
    "p.kaolin.alt.powder": "Kaolin powder",
    "p.kaolin.alt.mine": "Kaolin open-pit mine",
    "p.eboard.t": "Interactive flat panel",
    "p.eboard.d": "Touch displays for classrooms and meeting rooms. We propose around an 86-inch 4K UHD, 40-point multi-touch, EDLA-certified platform, matching screen size and install conditions.",
    "p.eboard.showroom": "Digital Showroom",
    "p.eboard.badge.size": "Large display",
    "p.eboard.badge.res": "UHD resolution",
    "p.eboard.badge.touch": "Point multi-touch",
    "p.eboard.badge.edla": "Software certified",
    "p.eboard.spec.size.l": "Screen size",
    "p.eboard.spec.size.v": "65 / 75 / 86 inch",
    "p.eboard.spec.res.l": "Resolution",
    "p.eboard.spec.res.v": "4K UHD · 3840×2160",
    "p.eboard.spec.touch.l": "Touch",
    "p.eboard.spec.touch.v": "IR 40-point multi-touch",
    "p.eboard.spec.os.l": "Operating system",
    "p.eboard.spec.os.v": "Android 13 · EDLA",
    "p.eboard.spec.mem.l": "Memory",
    "p.eboard.spec.mem.v": "8GB RAM · 128GB storage",
    "p.eboard.spec.av.l": "Camera · mic",
    "p.eboard.spec.av.v": "13MP · 8-array",
    "p.eboard.spec.io.l": "I/O",
    "p.eboard.spec.io.v": "HDMI · USB · Type-C · NFC",
    "p.eboard.spec.ops.l": "OPS",
    "p.eboard.spec.ops.v": "Standard 80-pin slot",
    "p.eboard.1": "65 / 75 / 86 inch · 4K UHD · 40-point multi-touch",
    "p.eboard.2": "Stand or wall mount, OPS-slot models",
    "p.eboard.3": "Public tender delivery for schools and offices",
    "p.doc.profile": "Resources company profile",
    "p.doc.brief": "Resources briefing",
    "p.doc.mfr": "Manufacturer partner brief",
    "p.sample": "Request sample",
    "p.ops.t": "OPS module",
    "p.ops.d": "A slot-in PC module for interactive displays. It runs as one unit with the panel—no separate tower, no extra cabling.",
    "p.ops.1": "i3 / i5 / i7 · configurable RAM and SSD",
    "p.ops.2": "Standard 80-pin OPS interface · Wi-Fi option",
    "p.laptop.t": "Laptops",
    "p.laptop.d": "Volume supply of business and education laptops, with spec configuration and delivery scheduling matched to use case and budget.",
    "p.laptop.1": "Office · education · high-performance",
    "p.laptop.2": "Volume quotes · rental and lease options",
    "p.tablet.t": "Tablet PCs",
    "p.tablet.d": "Tablets for classrooms and field work. We handle both Android and Windows models and can bundle the accessories.",
    "p.tablet.1": "Android / Windows · cellular option",
    "p.tablet.2": "Cases, stands, charging cabinets",
    "p.drone.t": "Agricultural drones",
    "p.drone.d": "Spray drones for palm, paddy, and large farms. 30, 40, and 50 L tanks on 4-axis or 6-axis airframes, delivered as a complete set with local training.",
    "p.drone.showroom": "Digital Showroom",
    "p.drone.badge.tank": "Spray tank",
    "p.drone.badge.axis": "Axis layout",
    "p.drone.badge.ha": "ha/hour coverage",
    "p.drone.badge.set": "Complete set",
    "p.drone.spec.tank.l": "Tank capacity",
    "p.drone.spec.tank.v": "30 / 40 / 50 L",
    "p.drone.spec.axis.l": "Airframe",
    "p.drone.spec.axis.v": "6-axis hexa · 4-axis",
    "p.drone.spec.spray.l": "Spray",
    "p.drone.spec.spray.v": "Pressure or centrifugal · 5–8 m swath",
    "p.drone.spec.eff.l": "Output",
    "p.drone.spec.eff.v": "Up to 12 ha/hour",
    "p.drone.spec.fly.l": "Flight",
    "p.drone.spec.fly.v": "10 min full · 25 min empty",
    "p.drone.spec.rc.l": "RC range",
    "p.drone.spec.rc.v": "1.0 – 1.5 km",
    "p.drone.spec.set.l": "Package",
    "p.drone.spec.set.v": "Airframe · tank · FC · RC · battery · charger",
    "p.drone.spec.use.l": "Use",
    "p.drone.spec.use.v": "Palm · rice · sugarcane spray",
    "p.drone.1": "30 / 40 / 50 L · 4-axis or 6-axis · complete set",
    "p.drone.2": "Pressure or centrifugal spray, terrain and obstacle radar options",
    "p.drone.3": "Indonesia delivery · training · after-sales support",
    "p.koper26.t": "26″ hardcase",
    "p.koper26.d": "A tough ABS-coated polycarbonate checked suitcase. Polyester covers can be matched as a set.",
    "p.koper26.alt": "26-inch hardcase spinner suitcase",
    "p.koper26.badge.size": "Checked size",
    "p.koper26.badge.shell": "ABS-coated PC",
    "p.koper26.badge.wheel": "4 silent wheels",
    "p.koper26.badge.load": "Max load",
    "p.koper26.spec.size.l": "Body size",
    "p.koper26.spec.size.v": "430 × 640 × 270 mm",
    "p.koper26.spec.mat.l": "Shell",
    "p.koper26.spec.mat.v": "ABS Coated Polycarbonate",
    "p.koper26.spec.wheel.l": "Wheels",
    "p.koper26.spec.wheel.v": "Double silent 360° · 5 screws",
    "p.koper26.spec.zip.l": "Zipper",
    "p.koper26.spec.zip.v": "Zipper No. 8 · two-way",
    "p.koper26.spec.trolley.l": "Trolley",
    "p.koper26.spec.trolley.v": "Silver · min. 390 mm",
    "p.koper26.spec.handle.l": "Handle",
    "p.koper26.spec.handle.v": "PU+PP double · 210 × 23 mm",
    "p.koper26.spec.cover.l": "Cover",
    "p.koper26.spec.cover.v": "Polyester 880 × 660 × 290 mm",
    "p.koper26.spec.load.l": "Load",
    "p.koper26.spec.load.v": "Max 32 kg",
    "p.koper26.1": "Mesh pocket · 2.5 cm elastic strap · acetal buckle",
    "p.koper26.2": "Four PP feet on the left side · recessed handle",
    "p.koper26.3": "Cover and set delivery available",
    "p.koper18.t": "18″ cabin trolley",
    "p.koper18.d": "A cabin-size hardcase with the same ABS-coated PC shell and silent wheels as the 26″ unit. Two-stage silver trolley and cover can be matched.",
    "p.koper18.alt": "18-inch cabin spinner suitcase",
    "p.koper18.badge.size": "Cabin size",
    "p.koper18.badge.shell": "ABS-coated PC",
    "p.koper18.badge.trolley": "Telescopic",
    "p.koper18.badge.len": "Trolley mm",
    "p.koper18.spec.size.l": "Body size",
    "p.koper18.spec.size.v": "320 × 430 × 220 mm",
    "p.koper18.spec.mat.l": "Shell",
    "p.koper18.spec.mat.v": "ABS Coated Polycarbonate",
    "p.koper18.spec.wheel.l": "Wheels",
    "p.koper18.spec.wheel.v": "Recessed double silent 360°",
    "p.koper18.spec.trolley.l": "Trolley",
    "p.koper18.spec.trolley.v": "2-stage pull · max 500 mm",
    "p.koper18.spec.handle.l": "Handle",
    "p.koper18.spec.handle.v": "PU+PP double · 210 × 23 mm",
    "p.koper18.spec.cover.l": "Cover",
    "p.koper18.spec.cover.v": "Polyester 450 × 330 × 230 mm",
    "p.koper18.spec.zip.l": "Zipper",
    "p.koper18.spec.zip.v": "Zipper No. 8",
    "p.koper18.spec.set.l": "Build",
    "p.koper18.spec.set.v": "Mesh · polyester · buckle",
    "p.koper18.1": "Same shell and wheel build as the 26″ case",
    "p.koper18.2": "Recessed handle · two-stage telescopic trolley",
    "p.koper18.3": "Delivered as a set with the 26″ case",
    "p.passport.t": "Passport bag",
    "p.passport.d": "A cross-body bag for passports and papers. Water-repellent polyester with PU backing, plus front and back clear pockets for ID.",
    "p.passport.alt": "Passport shoulder bag",
    "p.passport.badge.w": "Width cm",
    "p.passport.badge.wr": "Water-repellent",
    "p.passport.badge.zip": "Quality zipper",
    "p.passport.badge.strap": "Strap cm",
    "p.passport.spec.size.l": "Size",
    "p.passport.spec.size.v": "23 × 17 × 7 cm",
    "p.passport.spec.mat.l": "Fabric",
    "p.passport.spec.mat.v": "Polyester 4545 WR · PU backing",
    "p.passport.spec.lin.l": "Lining",
    "p.passport.spec.lin.v": "Polyester torin · dark grey",
    "p.passport.spec.zip.l": "Zipper",
    "p.passport.spec.zip.v": "No. 5 black",
    "p.passport.spec.strap.l": "Strap",
    "p.passport.spec.strap.v": "LT PP 3.8 × 120 cm",
    "p.passport.spec.color.l": "Color",
    "p.passport.spec.color.v": "Light grey body · black hardware",
    "p.passport.1": "Front and back mica pockets · acetal buckle",
    "p.passport.2": "Adjustable strap with slide ring",
    "p.passport.3": "Document bag in the four-item set",
    "p.armuzna.t": "ARMUZNA pack",
    "p.armuzna.d": "A foldable pack for field travel. Ripstop fabric with waterproof and water-repellent coating; unused, it packs into a 22.5 × 14 cm pouch.",
    "p.armuzna.alt": "ARMUZNA foldable backpack",
    "p.armuzna.badge.h": "Open height mm",
    "p.armuzna.badge.coat": "Waterproof",
    "p.armuzna.badge.fold": "Packs into pouch",
    "p.armuzna.badge.mesh": "Side mesh cm",
    "p.armuzna.spec.open.l": "Open size",
    "p.armuzna.spec.open.v": "320 × 450 × 160 mm",
    "p.armuzna.spec.fold.l": "Folded size",
    "p.armuzna.spec.fold.v": "225 × 140 × 25 mm",
    "p.armuzna.spec.mat.l": "Fabric",
    "p.armuzna.spec.mat.v": "Ripstop 144T×92T · WRWP",
    "p.armuzna.spec.wt.l": "Fabric weight",
    "p.armuzna.spec.wt.v": "About 177 g/y · 127 g/sm",
    "p.armuzna.spec.zip.l": "Zipper",
    "p.armuzna.spec.zip.v": "No. 5 black · reversible pocket",
    "p.armuzna.spec.side.l": "Sides",
    "p.armuzna.spec.side.v": "Mesh pockets 16 cm high",
    "p.armuzna.1": "Rear mica ID pocket",
    "p.armuzna.2": "Shoulder strap LT PP 3.8 × 120 cm",
    "p.armuzna.3": "Field pack in the four-item set",
    "p.ask": "Inquire about this item",
    "brief.tag": "PT. APEX TELCOM INKO · Resources Division",
    "brief.cover.title": "A supply brief that connects resources to the field",
    "brief.cover.meta": "APEX-RES-BRIEF · Rev. 2026.08 · For buyers and partners",
    "brief.intro": "We source copper scrap, aluminum ingot, aluminum dross, tin and nickel slag, wood pellets, and kaolin from Kazakhstan, Australia, Tanzania, and Indonesia. PT. APEX TELCOM INKO is the local party. The Korea partner is VL M&amp;C · APEX HOLDINGS. Price and stock follow the offer and inspection at inquiry.",
    "brief.s1": "Items we handle",
    "brief.s2": "Resource sourcing hubs",
    "brief.s3": "PT. APEX TELCOM INKO · VL M&amp;C · APEX HOLDINGS",
    "brief.s4": "Trial lot, then scale",
    "brief.market.t": "Market context",
    "brief.cu.t": "Copper scrap",
    "brief.cu.p": "Korea imported about 323,000 MT of HS 7404 in 2025 and about 176,000 MT in H1 2026. International grades such as wire and millberry, plus moisture and impurity control, sit at the center of the trade.",
    "brief.wood.t": "Wood pellets",
    "brief.wood.p": "Korea imported about 3.93 million MT in 2025. Indonesia supplied about 900,000 MT (23%) and is a core origin. Moisture, calorific value, and ash become contract terms.",
    "brief.disclaimer": "This is a public brief and does not include counterparties or contract prices. It can be forwarded with the company profile.",
    "mfr.tag": "Manufacturer Partner Brief · Electronics &amp; Resources",
    "mfr.cover.title": "Local partner in Indonesia and Korea",
    "mfr.cover.meta": "APEX-MFR-BRIEF · Rev. 2026.08 · For manufacturers · 1 page",
    "mfr.download": "EN · 中文 PDF",
    "mfr.download.ko": "Korean PDF",
    "mfr.lead": "PT. APEX TELCOM INKO is the local party. The Korea partner is VL M&amp;C · APEX HOLDINGS. This page is for manufacturers — electronics factories and resource producers — before a quotation.",
    "mfr.s1": "Resource items",
    "mfr.s2": "Electronics lines",
    "mfr.s3": "Indonesia · Korea",
    "mfr.s4": "Inspect before ship",
    "mfr.who.t": "Locations",
    "mfr.apex.p": "Tangerang. The local party that signs and proceeds. Public-facing brand.",
    "mfr.vl.p": "Korea partner.",
    "mfr.range.t": "What we source",
    "mfr.range.res.t": "Resources",
    "mfr.range.res.p": "Copper scrap · Aluminium ingot · Aluminium dross · Tin / nickel slag · Wood pellets · Kaolin",
    "mfr.range.ele.t": "Electronics",
    "mfr.range.ele.p": "Interactive flat panel 65 / 75 / 86\" · OPS module · Laptop · Tablet PC · Agricultural drone 30 / 40 / 50 L",
    "mfr.range.lug.t": "Luggage",
    "mfr.range.lug.p": "26″ and 18″ ABS-coated PC hardcases · passport bag · ARMUZNA pack",
    "mfr.how.t": "How we work together",
    "mfr.how.1t": "Lock spec",
    "mfr.how.1p": "Grade, assay or BOM before any order.",
    "mfr.how.2t": "Sample · inspect",
    "mfr.how.2p": "Approved sample or a nominated inspector.",
    "mfr.how.3t": "Trial shipment",
    "mfr.how.3p": "First lot proves quality, then we scale.",
    "mfr.how.4t": "Repeat supply",
    "mfr.how.4p": "Calendar, packing and aftercare in the contract.",
    "mfr.ask.t": "What we need  /  What we provide",
    "mfr.need.t": "From the manufacturer",
    "mfr.need.1": "Locked spec matching the approved sample or assay",
    "mfr.need.2": "Stated monthly capacity and lead time",
    "mfr.need.3": "Access for PSI or a nominated inspector",
    "mfr.need.4": "Export packing, documents, Incoterms on the PI",
    "mfr.need.5": "Warranty / spares (electronics) or settlement rules (resources)",
    "mfr.give.t": "From PT. APEX TELCOM INKO · VL M&amp;C · APEX HOLDINGS",
    "mfr.give.1": "Local party — contract and progress (PT. APEX TELCOM INKO, Tangerang)",
    "mfr.give.2": "Korea partner (VL M&amp;C · APEX HOLDINGS)",
    "mfr.give.3": "Orders only after specification is locked",
    "mfr.give.4": "Trial shipment, then repeat volume",
    "mfr.give.5": "Payment to company accounts only",
    "mfr.next.t": "Next step",
    "mfr.next.p": "Send item, locked spec, monthly capacity and first-lot quantity. We reply with a specification lock sheet.",
    "mfr.contact.t": "Contact",
    "mfr.disc": "General introduction only. Price, stock and schedule follow the offer at inquiry. This brief excludes internal counterparties and contract unit prices. Send it separately from the buyer profile and trade briefing.",
    "process.eyebrow": "The Voyage",
    "process.title": "From sail to delivery",
    "process.1t": "Sail · Demand",
    "process.1p": "We lock item, grade or spec, volume, lead time, and install conditions first.",
    "process.2t": "Voyage · Inspect",
    "process.2p": "We secure matching lots from domestic and overseas suppliers and check quality.",
    "process.3t": "Port · Deliver",
    "process.3p": "PT. APEX TELCOM INKO is the party that signs and proceeds locally. The Korea partner is VL M&amp;C · APEX HOLDINGS.",
    "process.4t": "Berth · Aftercare",
    "process.4p": "For repeat orders we align inventory and shipment timing; for electronics and luggage we route after-sales support.",
    "contact.eyebrow": "Contact",
    "contact.title": "Tell us the item\nand quantity",
    "contact.lead": "Send front-facing inquiries to PT. APEX TELCOM INKO. The Korea partner is VL M&amp;C · APEX HOLDINGS. Resources or electronics—we reply quickly on availability and outline terms.",
    "contact.docs": "Spec sheets and catalogs are sent after you inquire.",
    "contact.person": "Contact",
    "contact.email": "Email",
    "contact.addr": "Address",
    "contact.addrv": "The Prominence Office Tower, 10F Unit H, Jl. Jalur Sutera Barat, Pinang, Tangerang, Banten 15143",
    "contact.addr.kr": "Room 1301, 532 Yangcheon-ro, Gangseo-gu, Seoul, Republic of Korea",
    "contact.addr.vl": "7-15, Cheongna Hannae-ro 72beon-gil, Seo-gu, Incheon, Republic of Korea",
    "form.kicker": "Inquiry",
    "form.title": "Request a quote",
    "form.name": "Name / company",
    "form.contact": "Phone or email",
    "form.contact.ph": "Phone or email",
    "form.item": "Item of interest",
    "form.optRes": "Resources",
    "form.optEle": "Electronics",
    "form.optLug": "Luggage",
    "form.optDocs": "Documents",
    "form.msg": "Message",
    "form.msg.ph": "Spec or grade, expected quantity, lead time, etc.",
    "form.submit": "Open email inquiry",
    "form.note": "This opens a PT. APEX TELCOM INKO mail draft. You can also email the Korea partner VL M&amp;C · APEX HOLDINGS.",
    "form.error": "Please fill in name/company, contact, and message.",
    "form.mail.subject": "[PT. APEX TELCOM INKO] Inquiry — {item}",
    "form.mail.body": "Name / company: {name}\nContact: {contact}\nItem: {item}\n\n{message}",
    "form.sample.prefill": "We would like to request a sample of {item}. Please advise on quantity, lead time, and installation conditions.",
    "form.catalog.prefill": "Please send the catalog and spec sheet for {item}. We will share the required specs and intended use.",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "brand.home": "PT. APEX TELCOM INKO home",
    "nav.main": "Main menu",
    "materials.label": "Product preview",
    "tablist.products": "Product categories",
    "tablist.docs": "Shareable documents",
    "lang.group": "Language",
    "lang.ko": "Korean",
    "lang.id": "Bahasa Indonesia",
    "lang.en": "English",
    "form.item.copper": "Copper scrap",
    "form.item.alu": "Aluminum ingot",
    "form.item.dross": "Aluminum dross",
    "form.item.tin": "Tin slag",
    "form.item.nick": "Nickel slag",
    "form.item.wood": "Wood pellets",
    "form.item.kaolin": "Kaolin",
    "form.item.eboard": "Interactive flat panel",
    "form.item.ops": "OPS module",
    "form.item.laptop": "Laptop",
    "form.item.tablet": "Tablet PC",
    "form.item.drone": "Agricultural drone",
    "form.item.koper26": "26″ hardcase",
    "form.item.koper18": "18″ cabin trolley",
    "form.item.passport": "Passport bag",
    "form.item.armuzna": "ARMUZNA pack",
    "form.item.lugset": "Travel luggage set",
    "form.item.profile": "Resources company profile",
    "form.item.brief": "Resources trade briefing",
    "form.item.mfr": "Manufacturer partner brief",
    "form.item.resdocs": "Resources documents",
    "form.item.other": "Other",
    "footer.blurb": "We look for origins the way explorers looked for a new world. PT. APEX TELCOM INKO is the local party. The Korea partner is VL M&amp;C · APEX HOLDINGS.",
    "footer.explore": "Explore",
    "footer.contact": "Contact",
    "footer.top": "Back to top",
    "bgm.play": "Play background music",
    "bgm.pause": "Stop background music",
    "bgm.title": "Background music",
    "bgm.credit": "Homepage theme"
  },
  id: {
    skip: "Lewati ke isi",
    "brand.tag": "VL M&amp;C · APEX HOLDINGS",
    "brand.home": "Beranda PT. APEX TELCOM INKO",
    "nav.about": "Tentang kami",
    "nav.products": "Produk",
    "nav.briefing": "Laporan",
    "nav.network": "Peta",
    "nav.main": "Menu utama",
    "nav.process": "Pelayaran",
    "nav.contact": "Kontak",
    "nav.inquiry": "Minta penawaran",
    "materials.label": "Pratinjau produk",
    "tablist.products": "Kategori produk",
    "tablist.docs": "Dokumen untuk dibagikan",
    "lang.group": "Bahasa",
    "lang.ko": "Korea",
    "lang.id": "Bahasa Indonesia",
    "lang.en": "Inggris",
    "prof.sec.eyebrow": "Laporan",
    "prof.sec.title": "Dokumen untuk dibagikan",
    "prof.sec.lead": "Profil dan briefing untuk pembeli, plus brief mitra satu halaman terpisah untuk pabrik. Brief pabrik ditampilkan utuh di sini dan bisa diunduh sebagai PDF.",
    "prof.tab.kind": "Ringkasan · PDF 6 hlm",
    "brief.tab.kind": "Ringkasan · PDF 4 hlm",
    "mfr.tab.kind": "Lengkap · PDF 1 hlm",
    "prof.toc.kicker": "Isi",
    "prof.toc.t": "Isi PDF · 6 halaman",
    "prof.toc.lead": "Bagan organisasi, rincian produk, basis pengadaan, dan proses perdagangan diuraikan lebih dalam di halaman-halaman ini. Bisa dicetak dan diserahkan apa adanya.",
    "brief.toc.t": "Isi PDF · 4 halaman",
    "brief.market.src": "Angka di atas merangkum statistik perdagangan publik dan diperbarui dari waktu ke waktu.",
    "prof.toc.01.t": "Ikhtisar perusahaan",
    "prof.toc.01.d": "PT. APEX TELCOM INKO · VL M&amp;C · APEX HOLDINGS",
    "prof.toc.02.t": "Data perusahaan",
    "prof.toc.02.d": "Badan hukum, pimpinan, basis, lingkup usaha, dan kontak",
    "prof.toc.03.t": "Organisasi dan lokasi",
    "prof.toc.03.d": "Lokal Indonesia / mitra Korea",
    "prof.toc.04.t": "Pembagian tanggung jawab",
    "prof.toc.04.d": "Siapa yang menangani pengadaan, inspeksi, dokumen, bea cukai, pengiriman, dan klaim",
    "prof.toc.05.t": "Prinsip operasi",
    "prof.toc.05.d": "Spesifikasi, inspeksi, dan logistik",
    "prof.toc.06.t": "Rangkaian produk",
    "prof.toc.06.d": "Tujuh produk beserta uraian, kode HS, dan poin pasokan",
    "prof.toc.07.t": "Jaringan pengadaan global",
    "prof.toc.07.d": "Peran masing-masing dari lima basis",
    "prof.toc.08.t": "Cara kami bekerja",
    "prof.toc.08.d": "Proses eksekusi empat tahap",
    "prof.toc.09.t": "Kontak",
    "prof.toc.09.d": "Kanal PT. APEX TELCOM INKO dan VL M&amp;C · APEX HOLDINGS, plus dokumen terkait",
    "brief.toc.01.t": "Ringkasan eksekutif",
    "brief.toc.01.d": "Pihak lokal dulu, inspeksi dulu, spesifikasi sebagai acuan, peningkatan bertahap",
    "brief.toc.02.t": "Konteks pasar",
    "brief.toc.02.d": "Konteks permintaan skrap tembaga dan pelet kayu",
    "brief.toc.03.t": "Produk &amp; poin kontrak",
    "brief.toc.03.d": "Apa yang dikunci kontrak untuk tiap produk",
    "brief.toc.04.t": "Jaringan pengadaan",
    "brief.toc.04.d": "Kazakhstan, Perth, Kalimantan, Sulawesi, Papua, Tangerang, Seoul",
    "brief.toc.05.t": "Inspeksi &amp; pengiriman",
    "brief.toc.05.d": "Kebutuhan → pengadaan dan inspeksi → logistik → purna jual",
    "brief.toc.06.t": "Memulai transaksi",
    "brief.toc.06.d": "Tentukan kebutuhan → penawaran → pengiriman uji",
    "brief.toc.07.t": "Kontak",
    "brief.toc.07.d": "Format pertanyaan yang paling cepat dijawab",
    "hero.eyebrow": "PT. APEX TELCOM INKO × VL M&amp;C · APEX HOLDINGS",
    "hero.title1": "Seperti mencari benua baru",
    "hero.title2": "kami berangkat mencari sumber daya",
    "hero.cta1": "Lihat produk",
    "hero.cta2": "Hubungi kami",
    "hero.s1": "Pos pengadaan",
    "hero.s2": "Tangerang · Indonesia",
    "hero.s3": "Korea",
    "strip.1t": "Berlayar · Sumber daya",
    "strip.1p": "Non-ferrous · Terak · Dross · Pelet kayu · Kaolin",
    "strip.2t": "Sandar · Elektronik",
    "strip.2p": "Papan · OPS · Laptop · Tablet · Drone",
    "strip.lug.t": "Muat · Koper",
    "strip.lug.p": "Hardcase 26 dan 18 inci · tas paspor · tas ARMUZNA",
    "strip.3t": "PT. APEX TELCOM INKO",
    "strip.3p": "Pihak lokal yang menandatangani dan menjalankan",
    "strip.4t": "VL M&amp;C · APEX HOLDINGS",
    "strip.4p": "Mitra Korea",
    "about.eyebrow": "The Company",
    "about.title": "Kami mencari asal yang belum dipetakan\ndan mengeksekusi di lapangan",
    "about.p1": "PT. APEX TELCOM INKO adalah pihak yang menandatangani dan menjalankan pekerjaan di Indonesia. Ini merek depan, dan di lapangan nama ini yang diutamakan. Mitra Korea adalah VL M&amp;C · APEX HOLDINGS.",
    "about.p2": "Bukan sekadar perantara. Kami mencari asal yang belum ada di peta, lalu mengelola spesifikasi, mutu, dan logistik bersama.",
    "about.pr1t": "Spesifikasi",
    "about.pr1p": "Mutu, spek, dan komposisi diselaraskan lebih dulu.",
    "about.pr2t": "Inspeksi",
    "about.pr2p": "Volume dan kondisi diperiksa sebelum pengiriman.",
    "about.pr3t": "Dua basis",
    "about.pr3p": "Indonesia adalah PT. APEX TELCOM INKO. Korea adalah VL M&amp;C · APEX HOLDINGS.",
    "about.cap": "PT. APEX TELCOM INKO Tangerang dan VL M&amp;C · APEX HOLDINGS di Korea bekerja bersama.",
    "about.f1t": "Depan",
    "about.f2t": "Mitra Korea",
    "about.f3t": "Indonesia",
    "about.f3d": "Tangerang",
    "about.f4t": "Korea",
    "about.f4d": "VL M&amp;C · APEX HOLDINGS",
    "partner.apex.en": "Indonesia · Depan",
    "partner.apex.p": "Pihak yang menandatangani dan menjalankan pekerjaan di Indonesia. Merek depan; di lapangan nama ini yang diutamakan.",
    "partner.apex.role": "Pihak lokal · kontrak · progres",
    "partner.vl.en": "Korea · Mitra",
    "partner.vl.p": "Mitra Korea.",
    "partner.vl.role": "Mitra Korea",
    "org.eyebrow": "Organisasi",
    "org.title": "Bagan organisasi",
    "org.lead": "Pihak lokal adalah PT. APEX TELCOM INKO. Mitra Korea adalah VL M&amp;C · APEX HOLDINGS.",
    "org.company.kicker": "Depan",
    "org.company.base": "Pihak lokal di Indonesia",
    "org.equal": "Korea",
    "org.vl.en": "Korea",
    "org.vl.role": "Mitra Korea",
    "org.res.en": "Sumber daya",
    "org.res.t": "Divisi Sumber Daya",
    "org.res.1": "Pengadaan non-ferrous",
    "org.res.2": "Terak · dross · pelet kayu · kaolin",
    "org.res.3": "Kazakhstan · Perth · Kalimantan · Sulawesi · Papua",
    "org.ops.en": "Operasi",
    "org.ops.t": "Dua basis",
    "org.ops.1": "PT. APEX TELCOM INKO pihak lokal",
    "org.ops.2": "VL M&amp;C · APEX HOLDINGS mitra Korea",
    "org.ops.3": "Pengadaan · inspeksi · pengiriman",
    "org.ele.en": "Elektronik",
    "org.ele.t": "Divisi Elektronik",
    "org.ele.1": "Papan interaktif · OPS",
    "org.ele.2": "Laptop · tablet · drone",
    "org.ele.3": "Pengadaan Shenzhen · instalasi",
    "org.lug.en": "Koper",
    "org.lug.t": "Koper",
    "org.lug.1": "Hardcase 26 dan 18 inci",
    "org.lug.2": "Tas paspor · ARMUZNA",
    "org.lug.3": "Sarung · pengiriman set",
    "prof.tag": "Profil Perusahaan · Divisi Sumber Daya",
    "prof.cover.title": "Skenario cerdas, diwujudkan",
    "prof.lead": "PT. APEX TELCOM INKO adalah pihak yang menandatangani dan menjalankan pekerjaan di Indonesia. Mitra Korea adalah VL M&amp;C · APEX HOLDINGS. Kami menyesuaikan mutu, kualitas, dan logistik untuk skrap non-ferrous, terak peleburan, dross aluminium, pelet kayu industri, dan kaolin.",
    "prof.meta": "2026 · Untuk pembeli dan mitra · Tangerang · Seoul · Dar es Salaam · Jakarta",
    "prof.about.kicker": "Tentang",
    "prof.about.t": "Perusahaan",
    "prof.about.p": "PT. APEX TELCOM INKO adalah pihak kontrak lokal. Mitra Korea adalah VL M&amp;C · APEX HOLDINGS. Profil ini mencakup Sumber Daya. Elektronik ada di katalog terpisah.",
    "prof.about.box": "Bukan sekadar perantara. Mutu diselaraskan lebih dulu. Pihak lokal adalah PT. APEX TELCOM INKO. Mitra Korea adalah VL M&amp;C · APEX HOLDINGS.",
    "prof.th.field": "Butir",
    "prof.th.value": "Keterangan",
    "prof.field.name": "Nama",
    "prof.field.frontnote": "(pihak lokal)",
    "prof.field.partner": "Mitra Korea",
    "prof.field.partnote": "(Korea)",
    "prof.field.apexbase": "Basis PT. APEX TELCOM INKO",
    "prof.field.vlbase": "Basis Korea",
    "prof.field.scope": "Lingkup",
    "prof.field.scopev": "Sumber daya · Elektronik / pengadaan B2B, inspeksi, ekspor-impor, pengiriman",
    "prof.field.items": "Sumber daya yang kami tangani",
    "prof.disc": "Profil ini bersifat acuan umum. Harga, stok, dan jadwal pengapalan mengikuti penawaran serta inspeksi pada saat pertanyaan. Izin ekspor-impor dikonfirmasi dengan PPJK dan aturan setempat sebelum kontrak.",
    "div.res.en": "Logam · Terak · Biomassa · Kaolin",
    "div.res.t": "Divisi Sumber Daya",
    "div.res.d": "Skrap tembaga · Ingot aluminium · Dross aluminium · Terak timah/nikel · Pelet kayu · Kaolin",
    "div.res.a": "Lihat produk sumber daya",
    "div.ele.en": "Papan · PC · Drone",
    "div.ele.t": "Divisi Elektronik",
    "div.ele.d": "Papan interaktif · Modul OPS · Laptop · Tablet · Drone pertanian",
    "div.ele.a": "Lihat produk elektronik",
    "div.lug.en": "Divisi Koper",
    "div.lug.t": "Divisi Koper",
    "div.lug.d": "Hardcase 26 dan 18 inci · tas paspor · tas ARMUZNA",
    "div.lug.a": "Lihat produk koper",
    "products.eyebrow": "Kargo",
    "products.title": "Yang kami pasok",
    "products.lead": "Tiga rute — sumber daya, elektronik, dan koper perjalanan. Lihat foto dan spek utama di sini; katalog dikirim setelah pertanyaan.",
    "network.eyebrow": "The Chart",
    "network.title": "Peta untuk asal baru",
    "network.lead": "Aluminium dari Kazakhstan dan Perth, batubara dari Kalimantan, nikel dari Sulawesi, dan tembaga dari Papua. Hub pelabuhan di Dar es Salaam dan Jakarta; elektronik dari Shenzhen. PT. APEX TELCOM INKO Tangerang adalah pihak lokal. Mitra Korea adalah VL M&amp;C · APEX HOLDINGS.",
    "network.map.alt": "Peta dunia yang menampilkan aluminium di Kazakhstan dan Perth, batubara di Kalimantan, nikel di Sulawesi, tembaga di Papua, serta hub di Dar es Salaam, Jakarta, Shenzhen, Tangerang, dan Seoul",
    "network.legend.resource": "Pengadaan sumber daya",
    "network.legend.electronics": "Pengadaan elektronik",
    "network.legend.hub": "PT. APEX TELCOM INKO",
    "network.tag.resourceHub": "Hub sumber daya",
    "network.tag.electronicsHub": "Hub elektronik",
    "network.tag.apexHub": "PT. APEX TELCOM INKO",
    "network.tag.vlHub": "Hub Korea",
    "network.tag.aluminum": "Aluminium",
    "network.tag.aluminumHub": "Aluminium · hub",
    "network.tag.coal": "Batubara",
    "network.tag.copper": "Tembaga",
    "network.tag.nickel": "Nikel",
    "network.kazakhstan": "Kazakhstan",
    "network.kazakhstan.country": "Kazakhstan",
    "network.kazakhstan.desc": "Hub pasokan aluminium Asia Tengah",
    "network.perth": "Perth",
    "network.perth.country": "Australia",
    "network.perth.desc": "Hub pasokan aluminium Australia Barat",
    "network.kalimantan": "Kalimantan",
    "network.kalimantan.country": "Indonesia",
    "network.kalimantan.desc": "Hub pasokan batubara Kalimantan",
    "network.sulawesi": "Sulawesi",
    "network.sulawesi.country": "Indonesia",
    "network.sulawesi.desc": "Hub pasokan nikel Sulawesi",
    "network.papua": "Papua",
    "network.papua.country": "Indonesia",
    "network.papua.desc": "Hub pasokan tembaga Papua",
    "network.tanzania": "Dar es Salaam",
    "network.tanzania.country": "Tanzania",
    "network.tanzania.desc": "Hub pelabuhan Samudra Hindia untuk pasokan sumber daya Afrika",
    "network.indonesia": "Jakarta",
    "network.indonesia.country": "Indonesia",
    "network.indonesia.desc": "Hub pelabuhan Jawa untuk pasokan sumber daya Asia Tenggara",
    "network.shenzhen": "Shenzhen",
    "network.shenzhen.country": "Guangdong, Tiongkok",
    "network.shenzhen.desc": "Hub pasokan elektronik, perangkat IT, dan drone pertanian",
    "network.tangerang": "Tangerang",
    "network.tangerang.country": "Indonesia",
    "network.tangerang.desc": "PT. APEX TELCOM INKO. Pihak lokal di Indonesia",
    "network.korea": "Incheon · Seoul",
    "network.korea.country": "Korea",
    "network.korea.desc": "VL M&amp;C · APEX HOLDINGS",
    "network.legend.korea": "VL M&amp;C · APEX HOLDINGS",
    "track.badge": "Demo",
    "track.title": "Pelacakan pengapalan",
    "track.lead": "Masukkan nomor B/L sampel untuk melihat rute simulasi di peta. Ini tidak terhubung ke umpan operator langsung.",
    "track.label": "Nomor B/L",
    "track.ph": "APEX-DAR-2608-001",
    "track.go": "Lacak",
    "track.samples": "Nomor sampel",
    "track.note": "Ini demo situs. Posisi kontainer dan ETA yang sebenarnya dibagikan setelah kontrak, dari operator atau forwarder.",
    "track.unknown": "Nomor itu bukan sampel demo. Ketuk salah satu B/L sampel di bawah.",
    "track.hud.bl": "B/L",
    "track.hud.vessel": "Kapal",
    "track.hud.cargo": "Muatan",
    "track.hud.route": "Jalur",
    "track.status.search": "Mencari",
    "track.status.depart": "Berangkat",
    "track.status.transit": "Di laut",
    "track.status.arrive": "Tiba",
    "track.status.done": "Sampai",
    "track.cargo.cu": "Skrap tembaga",
    "track.cargo.wood": "Pelet kayu",
    "track.cargo.ifp": "Papan interaktif",
    "track.vessel.dar": "MV APEX DARWIN",
    "track.vessel.jkt": "MV APEX JAVA",
    "track.vessel.szx": "MV APEX PEARL",
    "track.route.dar": "Dar es Salaam → Jakarta → Incheon",
    "track.route.jkt": "Jakarta → Incheon",
    "track.route.szx": "Shenzhen → Incheon",
    "tab.resource": "Sumber Daya",
    "tab.resource.sub": "Logam · Terak · Dross · Biomassa · Kaolin",
    "tab.electronic": "Elektronik",
    "tab.electronic.sub": "Papan · PC · Drone",
    "tab.luggage": "Koper",
    "tab.luggage.sub": "Hardcase · Tas",
    "panel.res.lead": "Dari bahan baku logam dan produk samping peleburan — termasuk dross aluminium — hingga bahan bakar yang lebih bersih dan kaolin industri. Lihat foto dan spek utama; katalog dikirim setelah pertanyaan.",
    "panel.ele.lead": "Papan interaktif, modul OPS, laptop, tablet, dan drone pertanian untuk sekolah, instansi, kebun, dan perusahaan. Tinjau spek utama di ruang pamer, minta katalog lewat pertanyaan, lalu minta sampel.",
    "panel.lug.lead": "Kami memasok hardcase 26 dan 18 inci, tas paspor, dan tas ARMUZNA sebagai set perjalanan. Sarung dan penandaan identitas mengikuti spek pesanan.",
    "hall.res.kicker": "Resources Digital Showroom",
    "hall.res.t": "Ruang pamer sumber daya",
    "hall.res.d": "Pilih produk dari foto dan spek utama. Katalog dan lembar spek dikirim setelah Anda bertanya.",
    "hall.ele.kicker": "Electronics Digital Showroom",
    "hall.ele.t": "Ruang pamer elektronik",
    "hall.ele.d": "Tinjau spek utama di layar. Katalog dan lembar teknis dikirim setelah Anda bertanya.",
    "hall.lug.kicker": "Luggage Digital Showroom",
    "hall.lug.t": "Ruang pamer koper",
    "hall.lug.d": "Tinjau spek set 4 item di sini. Katalog dan penawaran dikirim setelah Anda bertanya.",
    "spec.form": "Bentuk",
    "spec.grade": "Mutu",
    "spec.ctrl": "Kendali",
    "spec.use": "Guna",
    "spec.match": "Cocokkan",
    "spec.prio": "Prioritas",
    "spec.type": "Jenis",
    "spec.basis": "Dasar",
    "spec.src": "Asal",
    "spec.loop": "Siklus",
    "p.catalog": "Minta katalog",
    "p.copper.badge.metal": "Non-besi",
    "p.copper.badge.form": "Kawat · pipa",
    "p.copper.badge.grade": "Mutu internasional",
    "p.copper.badge.use": "Listrik · konstruksi",
    "p.copper.spec.grade.v": "Millberry · birch, dan lainnya",
    "p.copper.spec.use.v": "Listrik · konstruksi · manufaktur",
    "p.alu.badge.metal": "Ingot daur ulang",
    "p.alu.badge.grade": "Mutu cor",
    "p.alu.badge.assay": "Cocok uji kadar",
    "p.alu.badge.flow": "Pasokan terus",
    "p.alu.spec.use.v": "Die-casting · pengecoran",
    "p.alu.spec.prio.v": "Kadar stabil · pasokan terus",
    "p.dross.badge.grade": "Kadar logam",
    "p.dross.badge.type": "Putih · hitam",
    "p.dross.badge.metal": "Bahan recovery",
    "p.dross.badge.src": "Samping lebur",
    "p.dross.spec.src.v": "Peleburan · smelting",
    "p.dross.spec.use.v": "Bahan recovery logam",
    "p.tin.badge.metal": "Terak timah",
    "p.tin.badge.form": "Samping peleburan",
    "p.tin.badge.assay": "Dasar kadar",
    "p.tin.badge.use": "Recovery logam",
    "p.tin.spec.src.v": "Peleburan timah",
    "p.tin.spec.form.v": "Terak · bahan recovery",
    "p.nick.badge.metal": "Terak nikel",
    "p.nick.badge.use": "Bahan stainless",
    "p.nick.badge.alloy": "Paduan khusus",
    "p.nick.badge.loop": "Siklus sumber daya",
    "p.nick.spec.src.v": "Terak peleburan nikel",
    "p.nick.spec.loop.v": "Siklus produk samping industri",
    "p.wood.badge.fuel": "Biomassa",
    "p.wood.badge.moi": "Kadar air",
    "p.wood.badge.cal": "Nilai kalor",
    "p.wood.badge.use": "Boiler · listrik",
    "p.wood.spec.ctrl.v": "Kadar air · nilai kalor · ukuran",
    "p.wood.spec.form.v": "Pelet kayu industri",
    "p.ops.badge.cpu": "i3 · i5 · i7",
    "p.ops.badge.mem": "RAM · SSD",
    "p.ops.badge.pin": "Slot pin standar",
    "p.ops.badge.wifi": "Opsi Wi-Fi",
    "p.ops.spec.cpu.l": "Prosesor",
    "p.ops.spec.cpu.v": "i3 / i5 / i7",
    "p.ops.spec.mem.l": "Konfigurasi",
    "p.ops.spec.mem.v": "RAM · SSD sesuai spek",
    "p.ops.spec.pin.l": "Antarmuka",
    "p.ops.spec.pin.v": "OPS 80-pin standar",
    "p.ops.spec.wifi.l": "Opsi",
    "p.ops.spec.wifi.v": "Wi-Fi",
    "p.laptop.badge.office": "Kantor",
    "p.laptop.badge.edu": "Pendidikan",
    "p.laptop.badge.pro": "Kinerja tinggi",
    "p.laptop.badge.b2b": "Volume · sewa",
    "p.laptop.spec.use.l": "Guna",
    "p.laptop.spec.use.v": "Kantor · pendidikan · spek tinggi",
    "p.laptop.spec.qty.l": "Pasokan",
    "p.laptop.spec.qty.v": "Penawaran volume",
    "p.laptop.spec.opt.l": "Opsi",
    "p.laptop.spec.opt.v": "Sewa · leasing",
    "p.laptop.spec.match.l": "Sesuai",
    "p.laptop.spec.match.v": "Spek · lead time",
    "p.tablet.badge.aos": "Android",
    "p.tablet.badge.win": "Windows",
    "p.tablet.badge.lte": "Opsi seluler",
    "p.tablet.badge.kit": "Aksesori",
    "p.tablet.spec.os.l": "OS",
    "p.tablet.spec.os.v": "Android · Windows",
    "p.tablet.spec.net.l": "Koneksi",
    "p.tablet.spec.net.v": "Opsi seluler",
    "p.tablet.spec.kit.l": "Kit",
    "p.tablet.spec.kit.v": "Casing · stand · kabinet cas",
    "p.tablet.spec.use.l": "Lapangan",
    "p.tablet.spec.use.v": "Pendidikan · kerja",
    "p.copper.t": "Skrap tembaga",
    "p.copper.d": "Kami menangani skrap tembaga bermutu internasional seperti kawat, millberry, dan birch — bahan baku inti untuk kelistrikan, konstruksi, dan manufaktur.",
    "p.copper.1": "Kawat / pipa tembaga / busbar",
    "p.copper.2": "Sortir mutu dan pengendalian pengotor",
    "p.alu.t": "Ingot aluminium",
    "p.alu.d": "Ingot aluminium daur ulang untuk die-casting dan pengecoran, dengan kestabilan komposisi dan pasokan berkesinambungan sebagai prioritas.",
    "p.alu.1": "ADC12 dan ingot pengecoran",
    "p.alu.2": "Diselaraskan dengan lembar spek",
    "p.dross.t": "Dross aluminium",
    "p.dross.d": "Bahan baku pemulihan dari peleburan aluminium. Kami menyesuaikan kandungan aluminium logam (grade DR) serta dross putih dan hitam.",
    "p.dross.1": "Dross putih / hitam · grade DR",
    "p.dross.2": "Bahan baku menurut kadar Al logam",
    "p.tin.t": "Terak timah",
    "p.tin.d": "Kami memperdagangkan terak peleburan timah, dipakai sebagai bahan baku pemulihan timah dan logam berharga lain.",
    "p.tin.1": "Diadakan menurut kadar Sn",
    "p.tin.2": "Bahan baku pemulihan dan pemurnian",
    "p.nick.t": "Terak nikel",
    "p.nick.d": "Terak peleburan nikel untuk memulihkan bahan baku stainless dan paduan khusus, mengembalikan produk samping industri menjadi sumber daya.",
    "p.nick.1": "Produk samping peleburan berkadar Ni",
    "p.nick.2": "Aplikasi pemulihan paduan",
    "p.wood.t": "Pelet kayu",
    "p.wood.d": "Bahan bakar biomassa untuk boiler industri dan pembangkit, dipasok sesuai spek kadar air, nilai kalor, dan ukuran.",
    "p.wood.1": "Bahan bakar industri dan pembangkit",
    "p.wood.2": "Bahan baku energi terbarukan",
    "p.kaolin.t": "Kaolin",
    "p.kaolin.d": "Kaolin industri dari Belitung, Indonesia. Kami menyesuaikan mutu noodle, bongkah, dan serbuk dengan kecerahan dan alumina untuk pembeli keramik, kertas, dan cat di Korea dan kawasan ini.",
    "p.kaolin.showroom": "Spek khas",
    "p.kaolin.badge.al": "Al₂O₃",
    "p.kaolin.badge.bright": "Kecerahan",
    "p.kaolin.badge.origin": "Belitung",
    "p.kaolin.badge.form": "Bentuk pasokan",
    "p.kaolin.spec.origin.l": "Asal",
    "p.kaolin.spec.origin.v": "Belitung, Indonesia",
    "p.kaolin.spec.form.l": "Bentuk",
    "p.kaolin.spec.form.v": "Noodle · bongkah · serbuk",
    "p.kaolin.spec.al.l": "Al₂O₃",
    "p.kaolin.spec.si.l": "SiO₂",
    "p.kaolin.spec.fe.l": "Fe₂O₃",
    "p.kaolin.spec.bright.l": "Kecerahan",
    "p.kaolin.spec.moi.l": "Kadar air",
    "p.kaolin.spec.port.l": "Pelabuhan muat",
    "p.kaolin.spec.port.v": "Tanjung Batu",
    "p.kaolin.note": "Angka berasal dari sampel khas. Tonase kontrak mengikuti inspeksi pra-pengapalan.",
    "p.kaolin.1": "Bahan baku keramik · kertas · cat",
    "p.kaolin.2": "Pasokan noodle · bongkah · serbuk",
    "p.kaolin.3": "Pengadaan Belitung · muat Tanjung Batu",
    "p.kaolin.gallery": "Foto lapangan kaolin",
    "p.kaolin.thumb.noodle": "Lihat mutu noodle",
    "p.kaolin.thumb.lump": "Lihat bijih bongkah",
    "p.kaolin.thumb.powder": "Lihat serbuk",
    "p.kaolin.thumb.mine": "Lihat tambang terbuka",
    "p.kaolin.alt.noodle": "Bahan baku kaolin noodle",
    "p.kaolin.alt.lump": "Bijih kaolin bongkah",
    "p.kaolin.alt.powder": "Serbuk kaolin",
    "p.kaolin.alt.mine": "Tambang terbuka kaolin",
    "p.eboard.t": "Papan tulis interaktif",
    "p.eboard.d": "Layar sentuh untuk ruang kelas dan rapat. Kami mengusulkan platform acuan 86 inci 4K UHD, sentuh 40 titik, bersertifikat EDLA, disesuaikan dengan ukuran layar dan kondisi instalasi.",
    "p.eboard.showroom": "Ruang pamer digital",
    "p.eboard.badge.size": "Layar besar",
    "p.eboard.badge.res": "Resolusi UHD",
    "p.eboard.badge.touch": "Titik multi-sentuh",
    "p.eboard.badge.edla": "Sertifikasi perangkat lunak",
    "p.eboard.spec.size.l": "Ukuran layar",
    "p.eboard.spec.size.v": "65 / 75 / 86 inci",
    "p.eboard.spec.res.l": "Resolusi",
    "p.eboard.spec.res.v": "4K UHD · 3840×2160",
    "p.eboard.spec.touch.l": "Sentuh",
    "p.eboard.spec.touch.v": "IR multi-sentuh 40 titik",
    "p.eboard.spec.os.l": "Sistem operasi",
    "p.eboard.spec.os.v": "Android 13 · EDLA",
    "p.eboard.spec.mem.l": "Memori",
    "p.eboard.spec.mem.v": "RAM 8GB · penyimpanan 128GB",
    "p.eboard.spec.av.l": "Kamera · mikrofon",
    "p.eboard.spec.av.v": "13MP · 8 array",
    "p.eboard.spec.io.l": "I/O",
    "p.eboard.spec.io.v": "HDMI · USB · Type-C · NFC",
    "p.eboard.spec.ops.l": "OPS",
    "p.eboard.spec.ops.v": "Slot 80 pin standar",
    "p.eboard.1": "65 / 75 / 86 inci · 4K UHD · sentuh 40 titik",
    "p.eboard.2": "Stand atau gantung dinding, model berslot OPS",
    "p.eboard.3": "Pengiriman tender untuk sekolah dan instansi",
    "p.doc.profile": "Profil perusahaan sumber daya",
    "p.doc.brief": "Briefing sumber daya",
    "p.doc.mfr": "Brief mitra untuk pabrik",
    "p.sample": "Minta sampel",
    "p.ops.t": "Modul OPS",
    "p.ops.d": "Modul PC yang dimasukkan ke slot papan interaktif. Berjalan sebagai satu unit dengan layar — tanpa menara terpisah, tanpa kabel tambahan.",
    "p.ops.1": "i3 / i5 / i7 · RAM dan SSD dapat dikonfigurasi",
    "p.ops.2": "Antarmuka OPS 80 pin standar · opsi Wi-Fi",
    "p.laptop.t": "Laptop",
    "p.laptop.d": "Pasokan volume laptop bisnis dan pendidikan, dengan konfigurasi spek dan jadwal pengiriman yang disesuaikan penggunaan dan anggaran.",
    "p.laptop.1": "Kantor · pendidikan · kinerja tinggi",
    "p.laptop.2": "Penawaran volume · opsi sewa",
    "p.tablet.t": "Tablet PC",
    "p.tablet.d": "Tablet untuk ruang kelas dan kerja lapangan. Kami menangani model Android dan Windows, dan dapat menyertakan aksesori.",
    "p.tablet.1": "Android / Windows · opsi seluler",
    "p.tablet.2": "Casing, stand, kabinet pengisian daya",
    "p.drone.t": "Drone pertanian",
    "p.drone.d": "Drone semprot untuk kelapa sawit, padi, dan lahan luas. Tangki 30, 40, dan 50 L pada rangka 4-sumbu atau 6-sumbu, dikirim sebagai set lengkap beserta pelatihan lokal.",
    "p.drone.showroom": "Ruang pamer digital",
    "p.drone.badge.tank": "Tangki semprot",
    "p.drone.badge.axis": "Susunan sumbu",
    "p.drone.badge.ha": "Cakupan ha/jam",
    "p.drone.badge.set": "Set lengkap",
    "p.drone.spec.tank.l": "Kapasitas tangki",
    "p.drone.spec.tank.v": "30 / 40 / 50 L",
    "p.drone.spec.axis.l": "Rangka",
    "p.drone.spec.axis.v": "Heksa 6-sumbu · 4-sumbu",
    "p.drone.spec.spray.l": "Semprot",
    "p.drone.spec.spray.v": "Tekanan atau sentrifugal · lebar 5–8 m",
    "p.drone.spec.eff.l": "Output",
    "p.drone.spec.eff.v": "Hingga 12 ha/jam",
    "p.drone.spec.fly.l": "Terbang",
    "p.drone.spec.fly.v": "10 menit penuh · 25 menit kosong",
    "p.drone.spec.rc.l": "Jangkauan RC",
    "p.drone.spec.rc.v": "1,0 – 1,5 km",
    "p.drone.spec.set.l": "Paket",
    "p.drone.spec.set.v": "Rangka · tangki · FC · RC · baterai · charger",
    "p.drone.spec.use.l": "Penggunaan",
    "p.drone.spec.use.v": "Semprot sawit · padi · tebu",
    "p.drone.1": "30 / 40 / 50 L · 4-sumbu atau 6-sumbu · set lengkap",
    "p.drone.2": "Semprot tekanan atau sentrifugal, opsi radar medan dan rintangan",
    "p.drone.3": "Pengiriman Indonesia · pelatihan · dukungan purna jual",
    "p.koper26.t": "Hardcase 26 inci",
    "p.koper26.d": "Koper besar polikarbonat berlapis ABS yang tidak mudah pecah. Untuk bagasi tercatat, dan sarung poliester dapat diselaraskan sebagai set.",
    "p.koper26.alt": "Koper hardcase 26 inci",
    "p.koper26.badge.size": "Bagasi tercatat",
    "p.koper26.badge.shell": "PC berlapis ABS",
    "p.koper26.badge.wheel": "4 roda senyap",
    "p.koper26.badge.load": "Beban maks.",
    "p.koper26.spec.size.l": "Ukuran bodi",
    "p.koper26.spec.size.v": "430 × 640 × 270 mm",
    "p.koper26.spec.mat.l": "Bahan",
    "p.koper26.spec.mat.v": "ABS Coated Polycarbonate",
    "p.koper26.spec.wheel.l": "Roda",
    "p.koper26.spec.wheel.v": "Silent ganda 360° · 5 sekrup",
    "p.koper26.spec.zip.l": "Resleting",
    "p.koper26.spec.zip.v": "Zipper No. 8 · dua arah",
    "p.koper26.spec.trolley.l": "Trolley",
    "p.koper26.spec.trolley.v": "Perak · min. 390 mm",
    "p.koper26.spec.handle.l": "Handle",
    "p.koper26.spec.handle.v": "PU+PP ganda · 210 × 23 mm",
    "p.koper26.spec.cover.l": "Sarung",
    "p.koper26.spec.cover.v": "Poliester 880 × 660 × 290 mm",
    "p.koper26.spec.load.l": "Beban",
    "p.koper26.spec.load.v": "Maks. 32 kg",
    "p.koper26.1": "Saku jaring · tali elastis 2,5 cm · gesper asetal",
    "p.koper26.2": "Empat kaki PP di sisi kiri · handle tanam",
    "p.koper26.3": "Sarung dan pengiriman set tersedia",
    "p.koper18.t": "Kabin 18 inci",
    "p.koper18.d": "Hardcase kabin dengan cangkang PC berlapis ABS dan roda senyap yang sama. Trolley perak 2 tingkat dan sarung dapat diselaraskan.",
    "p.koper18.alt": "Koper kabin 18 inci",
    "p.koper18.badge.size": "Ukuran kabin",
    "p.koper18.badge.shell": "PC berlapis ABS",
    "p.koper18.badge.trolley": "Teleskopik",
    "p.koper18.badge.len": "Trolley mm",
    "p.koper18.spec.size.l": "Ukuran bodi",
    "p.koper18.spec.size.v": "320 × 430 × 220 mm",
    "p.koper18.spec.mat.l": "Bahan",
    "p.koper18.spec.mat.v": "ABS Coated Polycarbonate",
    "p.koper18.spec.wheel.l": "Roda",
    "p.koper18.spec.wheel.v": "Silent ganda 360° tertanam",
    "p.koper18.spec.trolley.l": "Trolley",
    "p.koper18.spec.trolley.v": "Tarik 2 tingkat · maks. 500 mm",
    "p.koper18.spec.handle.l": "Handle",
    "p.koper18.spec.handle.v": "PU+PP ganda · 210 × 23 mm",
    "p.koper18.spec.cover.l": "Sarung",
    "p.koper18.spec.cover.v": "Poliester 450 × 330 × 230 mm",
    "p.koper18.spec.zip.l": "Resleting",
    "p.koper18.spec.zip.v": "Zipper No. 8",
    "p.koper18.spec.set.l": "Susunan",
    "p.koper18.spec.set.v": "Jaring · poliester · gesper",
    "p.koper18.1": "Cangkang dan roda sama dengan 26 inci",
    "p.koper18.2": "Handle tanam · trolley teleskopik 2 tingkat",
    "p.koper18.3": "Dikirim sebagai set bersama 26 inci",
    "p.passport.t": "Tas paspor",
    "p.passport.d": "Tas selempang untuk paspor dan dokumen. Poliester anti air dengan backing PU, plus saku mika depan-belakang untuk identitas.",
    "p.passport.alt": "Tas paspor",
    "p.passport.badge.w": "Lebar cm",
    "p.passport.badge.wr": "Anti air",
    "p.passport.badge.zip": "Resleting berkualitas",
    "p.passport.badge.strap": "Tali cm",
    "p.passport.spec.size.l": "Ukuran",
    "p.passport.spec.size.v": "23 × 17 × 7 cm",
    "p.passport.spec.mat.l": "Bahan",
    "p.passport.spec.mat.v": "Polyester 4545 WR · PU backing",
    "p.passport.spec.lin.l": "Lapisan",
    "p.passport.spec.lin.v": "Poliester torin · abu tua",
    "p.passport.spec.zip.l": "Resleting",
    "p.passport.spec.zip.v": "No. 5 hitam",
    "p.passport.spec.strap.l": "Tali",
    "p.passport.spec.strap.v": "LT PP 3,8 × 120 cm",
    "p.passport.spec.color.l": "Warna",
    "p.passport.spec.color.v": "Bodi abu muda · perangkat hitam",
    "p.passport.1": "Saku mika depan-belakang · gesper asetal",
    "p.passport.2": "Tali bahu dengan cincin geser",
    "p.passport.3": "Tas dokumen dalam set 4 item",
    "p.armuzna.t": "Tas ARMUZNA",
    "p.armuzna.d": "Tas ransel lipat untuk perjalanan lapangan. Kain ripstop dengan lapisan tahan air dan anti air; saat tidak dipakai dilipat ke pouches 22,5 × 14 cm.",
    "p.armuzna.alt": "Tas ransel lipat ARMUZNA",
    "p.armuzna.badge.h": "Tinggi buka mm",
    "p.armuzna.badge.coat": "Tahan air",
    "p.armuzna.badge.fold": "Mode pouch",
    "p.armuzna.badge.mesh": "Jaring sisi cm",
    "p.armuzna.spec.open.l": "Ukuran buka",
    "p.armuzna.spec.open.v": "320 × 450 × 160 mm",
    "p.armuzna.spec.fold.l": "Ukuran lipat",
    "p.armuzna.spec.fold.v": "225 × 140 × 25 mm",
    "p.armuzna.spec.mat.l": "Bahan",
    "p.armuzna.spec.mat.v": "Ripstop 144T×92T · WRWP",
    "p.armuzna.spec.wt.l": "Berat kain",
    "p.armuzna.spec.wt.v": "Sekitar 177 g/y · 127 g/sm",
    "p.armuzna.spec.zip.l": "Resleting",
    "p.armuzna.spec.zip.v": "No. 5 hitam · saku reversibel",
    "p.armuzna.spec.side.l": "Sisi",
    "p.armuzna.spec.side.v": "Saku jaring tinggi 16 cm",
    "p.armuzna.1": "Saku mika identitas di belakang",
    "p.armuzna.2": "Tali bahu LT PP 3,8 × 120 cm",
    "p.armuzna.3": "Tas lapangan dalam set 4 item",
    "p.ask": "Tanyakan produk ini",
    "brief.tag": "PT. APEX TELCOM INKO · Divisi Sumber Daya",
    "brief.cover.title": "Brief pasokan yang menghubungkan sumber daya ke lapangan",
    "brief.cover.meta": "APEX-RES-BRIEF · Rev. 2026.08 · Untuk pembeli dan mitra",
    "brief.intro": "Kami mengadakan skrap tembaga, ingot aluminium, dross aluminium, terak timah dan nikel, pelet kayu, dan kaolin dari Kazakhstan, Australia, Tanzania, dan Indonesia. Pihak lokal adalah PT. APEX TELCOM INKO. Mitra Korea adalah VL M&amp;C · APEX HOLDINGS. Harga dan stok mengikuti penawaran serta inspeksi pada saat pertanyaan.",
    "brief.s1": "Produk yang kami tangani",
    "brief.s2": "Hub pengadaan sumber daya",
    "brief.s3": "PT. APEX TELCOM INKO · VL M&amp;C · APEX HOLDINGS",
    "brief.s4": "Lot uji, lalu ditingkatkan",
    "brief.market.t": "Konteks pasar",
    "brief.cu.t": "Skrap tembaga",
    "brief.cu.p": "Korea mengimpor sekitar 323.000 MT HS 7404 pada 2025 dan sekitar 176.000 MT di semester I 2026. Mutu internasional seperti kawat dan millberry, plus pengendalian kadar air dan pengotor, menjadi inti perdagangan.",
    "brief.wood.t": "Pelet kayu",
    "brief.wood.p": "Korea mengimpor sekitar 3,93 juta MT pada 2025. Indonesia memasok sekitar 900.000 MT (23%) dan merupakan asal inti. Kadar air, nilai kalor, dan abu menjadi syarat kontrak.",
    "brief.disclaimer": "Ini briefing publik dan tidak memuat mitra dagang atau harga kontrak. Bisa diteruskan bersama profil perusahaan.",
    "mfr.tag": "Manufacturer Partner Brief · Electronics &amp; Resources",
    "mfr.cover.title": "Mitra lokal di Indonesia dan Korea",
    "mfr.cover.meta": "APEX-MFR-BRIEF · Rev. 2026.08 · Untuk pabrik · 1 halaman",
    "mfr.download": "PDF EN · 中文",
    "mfr.download.ko": "PDF Korea",
    "mfr.lead": "Pihak lokal adalah PT. APEX TELCOM INKO. Mitra Korea adalah VL M&amp;C · APEX HOLDINGS. Halaman ini untuk pabrik — pabrik elektronik dan produsen sumber daya — sebelum penawaran.",
    "mfr.s1": "Produk sumber daya",
    "mfr.s2": "Lini elektronik",
    "mfr.s3": "Indonesia · Korea",
    "mfr.s4": "Inspeksi sebelum kapal",
    "mfr.who.t": "Lokasi",
    "mfr.apex.p": "Tangerang. Pihak lokal yang menandatangani dan menjalankan. Merek depan.",
    "mfr.vl.p": "Mitra Korea.",
    "mfr.range.t": "Apa yang kami adakan",
    "mfr.range.res.t": "Sumber daya",
    "mfr.range.res.p": "Skrap tembaga · ingot aluminium · dross aluminium · terak timah/nikel · pelet kayu · kaolin",
    "mfr.range.ele.t": "Elektronik",
    "mfr.range.ele.p": "Papan interaktif 65 / 75 / 86 inci · modul OPS · laptop · tablet PC · drone pertanian 30 / 40 / 50 L",
    "mfr.range.lug.t": "Koper",
    "mfr.range.lug.p": "Hardcase ABS coated PC 26 dan 18 inci · tas paspor · tas ARMUZNA",
    "mfr.how.t": "Cara kami bekerja sama",
    "mfr.how.1t": "Kunci spek",
    "mfr.how.1p": "Mutu, uji lab, atau BOM sebelum pesanan.",
    "mfr.how.2t": "Sampel · inspeksi",
    "mfr.how.2p": "Sampel disetujui atau inspektur yang ditunjuk.",
    "mfr.how.3t": "Pengiriman uji",
    "mfr.how.3p": "Lot pertama membuktikan mutu, lalu ditingkatkan.",
    "mfr.how.4t": "Pasokan berulang",
    "mfr.how.4p": "Kalender, kemasan, dan purna jual di kontrak.",
    "mfr.ask.t": "Yang kami minta  /  Yang kami tanggung",
    "mfr.need.t": "Dari pabrik",
    "mfr.need.1": "Spek terkunci sama dengan sampel atau uji lab yang disetujui",
    "mfr.need.2": "Kapasitas bulanan dan lead time yang dinyatakan",
    "mfr.need.3": "Akses PSI atau inspektur yang ditunjuk",
    "mfr.need.4": "Kemasan ekspor, dokumen, Incoterms di PI",
    "mfr.need.5": "Garansi/suku cadang (elektronik) atau aturan settlement (sumber daya)",
    "mfr.give.t": "Dari PT. APEX TELCOM INKO · VL M&amp;C · APEX HOLDINGS",
    "mfr.give.1": "Pihak lokal — kontrak dan progres (PT. APEX TELCOM INKO, Tangerang)",
    "mfr.give.2": "Mitra Korea (VL M&amp;C · APEX HOLDINGS)",
    "mfr.give.3": "Pesanan hanya setelah spek terkunci",
    "mfr.give.4": "Pengiriman uji, lalu volume berulang",
    "mfr.give.5": "Pembayaran hanya ke rekening perusahaan",
    "mfr.next.t": "Langkah berikutnya",
    "mfr.next.p": "Kirim produk, spek terkunci, kapasitas bulanan, dan kuantitas lot pertama. Kami membalas dengan lembar kunci spek.",
    "mfr.contact.t": "Kontak",
    "mfr.disc": "Hanya pengantar umum. Harga, stok, dan jadwal mengikuti penawaran saat pertanyaan. Brief ini tidak memuat mitra internal atau harga satuan kontrak. Kirim terpisah dari profil pembeli dan briefing perdagangan.",
    "process.eyebrow": "The Voyage",
    "process.title": "Dari berlayar hingga serah terima",
    "process.1t": "Berlayar · Permintaan",
    "process.1p": "Produk, mutu atau spek, volume, lead time, dan kondisi instalasi dikunci lebih dulu.",
    "process.2t": "Pelayaran · Inspeksi",
    "process.2p": "Kami mengamankan lot yang sesuai dari pemasok dalam dan luar negeri, lalu memeriksa mutu.",
    "process.3t": "Sandar · Kirim",
    "process.3p": "PT. APEX TELCOM INKO adalah pihak yang menandatangani dan menjalankan secara lokal. Mitra Korea adalah VL M&amp;C · APEX HOLDINGS.",
    "process.4t": "Bongkar · Purna",
    "process.4p": "Untuk pesanan berulang kami menyelaraskan stok dan jadwal pengapalan; untuk elektronik dan koper kami menyalurkan dukungan purna jual.",
    "contact.eyebrow": "Kontak",
    "contact.title": "Sebutkan produk\ndan kuantitas",
    "contact.lead": "Kirim pertanyaan depan ke PT. APEX TELCOM INKO. Mitra Korea adalah VL M&amp;C · APEX HOLDINGS. Sumber daya atau elektronik — kami membalas cepat soal ketersediaan dan kerangka syarat.",
    "contact.docs": "Lembar spek dan katalog dikirim setelah Anda bertanya.",
    "contact.person": "Kontak",
    "contact.email": "Email",
    "contact.addr": "Alamat",
    "contact.addrv": "The Prominence Office Tower, 10F Unit H, Jl. Jalur Sutera Barat, Pinang, Tangerang, Banten 15143",
    "contact.addr.kr": "Room 1301, 532 Yangcheon-ro, Gangseo-gu, Seoul, Republic of Korea",
    "contact.addr.vl": "7-15, Cheongna Hannae-ro 72beon-gil, Seo-gu, Incheon, Republic of Korea",
    "form.kicker": "Pertanyaan",
    "form.title": "Minta penawaran",
    "form.name": "Nama / perusahaan",
    "form.contact": "Telepon atau email",
    "form.contact.ph": "Telepon atau email",
    "form.item": "Produk yang diminati",
    "form.optRes": "Sumber daya",
    "form.optEle": "Elektronik",
    "form.optLug": "Koper",
    "form.optDocs": "Dokumen",
    "form.item.copper": "Skrap tembaga",
    "form.item.alu": "Ingot aluminium",
    "form.item.dross": "Dross aluminium",
    "form.item.tin": "Terak timah",
    "form.item.nick": "Terak nikel",
    "form.item.wood": "Pelet kayu",
    "form.item.kaolin": "Kaolin",
    "form.item.eboard": "Papan tulis interaktif",
    "form.item.ops": "Modul OPS",
    "form.item.laptop": "Laptop",
    "form.item.tablet": "Tablet PC",
    "form.item.drone": "Drone pertanian",
    "form.item.koper26": "Hardcase 26 inci",
    "form.item.koper18": "Koper kabin 18 inci",
    "form.item.passport": "Tas paspor",
    "form.item.armuzna": "Tas ARMUZNA",
    "form.item.lugset": "Set koper perjalanan",
    "form.item.profile": "Profil perusahaan sumber daya",
    "form.item.brief": "Briefing perdagangan sumber daya",
    "form.item.mfr": "Brief mitra untuk pabrik",
    "form.item.resdocs": "Dokumen sumber daya",
    "form.item.other": "Lainnya",
    "form.msg": "Pesan",
    "form.msg.ph": "Spek atau mutu, kuantitas perkiraan, lead time, dan lain-lain.",
    "form.submit": "Buka email pertanyaan",
    "form.note": "Ini membuka draf email PT. APEX TELCOM INKO. Anda juga dapat mengirim ke mitra Korea VL M&amp;C · APEX HOLDINGS.",
    "form.error": "Harap isi nama/perusahaan, kontak, dan pesan.",
    "form.mail.subject": "[PT. APEX TELCOM INKO] Pertanyaan — {item}",
    "form.mail.body": "Nama / perusahaan: {name}\nKontak: {contact}\nProduk: {item}\n\n{message}",
    "form.sample.prefill": "Kami ingin meminta sampel {item}. Mohon arahan soal kuantitas, lead time, dan kondisi instalasi.",
    "form.catalog.prefill": "Kami ingin meminta katalog dan lembar spek {item}. Kami akan menyampaikan spek dan tujuan penggunaan.",
    "menu.open": "Buka menu",
    "menu.close": "Tutup menu",
    "footer.blurb": "Kami mencari asal seperti mencari benua baru. Pihak lokal adalah PT. APEX TELCOM INKO. Mitra Korea adalah VL M&amp;C · APEX HOLDINGS.",
    "footer.explore": "Jelajahi",
    "footer.contact": "Kontak",
    "footer.top": "Kembali ke atas",
    "bgm.play": "Putar musik latar",
    "bgm.pause": "Hentikan musik latar",
    "bgm.title": "Musik latar",
    "bgm.credit": "Tema situs"
  }
};

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const overlay = document.getElementById("navOverlay");
const menuBtn = document.getElementById("menuBtn");
const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
const year = document.getElementById("year");
const form = document.getElementById("inquiryForm");
const formNote = document.getElementById("formNote");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = {
  resource: document.getElementById("panel-resource"),
  electronic: document.getElementById("panel-electronic"),
  luggage: document.getElementById("panel-luggage")
};
const itemPart = {
  copper: "resource",
  aluminum: "resource",
  dross: "resource",
  tin: "resource",
  nickel: "resource",
  wood: "resource",
  kaolin: "resource",
  eboard: "electronic",
  ops: "electronic",
  laptop: "electronic",
  tablet: "electronic",
  drone: "electronic",
  koper26: "luggage",
  koper18: "luggage",
  passportbag: "luggage",
  armuzna: "luggage"
};

const LANGS = ["ko", "id", "en"];
const HTML_LANG = { ko: "ko", id: "id", en: "en" };

function detectLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (LANGS.includes(saved)) return saved;
  const navLang = String(navigator.language || "").toLowerCase();
  if (navLang.startsWith("id")) return "id";
  if (navLang.startsWith("en")) return "en";
  if (navLang.startsWith("ko")) return "ko";
  return "ko";
}

let lang = detectLang();
let menuOpen = false;

if (year) year.textContent = String(new Date().getFullYear());

/* ---------- Sticky header ---------- */
function syncHeader() {
  const y = window.scrollY;
  header.classList.toggle("is-scrolled", y > 12);
  header.classList.toggle("is-compact", y > 80);
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

/* ---------- Reveal (Intersection Observer) ---------- */
function revealNow(root) {
  const scope = root || document;
  if (scope.classList && scope.classList.contains("reveal")) {
    scope.classList.add("is-visible");
  }
  scope.querySelectorAll(".reveal").forEach((el) => {
    el.classList.add("is-visible");
  });
}

function initReveal() {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealNow(document);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px -24px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.closest(".tab-panel[hidden], .profile-sheet[hidden]")) return;
    io.observe(el);
  });
}

initReveal();

/* ---------- Mobile menu ---------- */
function setMenu(open) {
  menuOpen = open;
  nav.classList.toggle("is-open", open);
  menuBtn.classList.toggle("is-open", open);
  header.classList.toggle("is-open", open);
  document.body.classList.toggle("is-menu-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", dict()[open ? "menu.close" : "menu.open"]);
  if (overlay) {
    if (open) overlay.hidden = false;
    overlay.classList.toggle("is-open", open);
    if (!open) {
      overlay.addEventListener("transitionend", () => {
        if (!menuOpen) overlay.hidden = true;
      }, { once: true });
    }
  }
}

menuBtn.addEventListener("click", () => setMenu(!menuOpen));
if (overlay) overlay.addEventListener("click", () => setMenu(false));

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuOpen) setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024 && menuOpen) setMenu(false);
});

/* ---------- Smooth in-page scroll ---------- */
function scrollToHash(hash) {
  const id = String(hash || "").replace("#", "");
  if (!id) return;
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

document.querySelectorAll('a[href^="#"]:not([data-goto])').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    setMenu(false);
    history.replaceState(null, "", href);
    goToItem(href);
  });
});

/* ---------- Active nav ---------- */
const sectionIds = ["about", "profile", "products", "network", "process", "contact"];

function syncActiveNav() {
  const marker = window.scrollY + header.offsetHeight + 48;
  let current = "";
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= marker) current = id;
  });
  nav.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    link.classList.toggle("is-current", href === `#${current}`);
  });
}

window.addEventListener("scroll", syncActiveNav, { passive: true });

/* ---------- Product tabs ---------- */
function activateTab(name, { focusTab = false } = {}) {
  if (!panels[name]) return;

  tabs.forEach((tab) => {
    const on = tab.dataset.tab === name;
    tab.classList.toggle("is-active", on);
    tab.setAttribute("aria-selected", String(on));
    tab.tabIndex = on ? 0 : -1;
    if (on && focusTab) tab.focus();
  });

  Object.keys(panels).forEach((key) => {
    const panel = panels[key];
    if (!panel) return;
    panel.hidden = key !== name;
  });

  revealNow(panels[name]);
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(index + step + tabs.length) % tabs.length];
    activateTab(next.dataset.tab, { focusTab: true });
  });
});

/* ---------- Company profile / briefing sheets ---------- */
const sheetTabs = Array.from(document.querySelectorAll(".sheet-tab"));
const sheets = {
  profile: document.getElementById("sheet-profile"),
  briefing: document.getElementById("sheet-briefing"),
  mfr: document.getElementById("sheet-mfr")
};

function activateSheet(name, { focusTab = false } = {}) {
  if (!sheets[name]) return;

  sheetTabs.forEach((tab) => {
    const on = tab.dataset.sheet === name;
    tab.classList.toggle("is-active", on);
    tab.setAttribute("aria-selected", String(on));
    tab.tabIndex = on ? 0 : -1;
    if (on && focusTab) tab.focus();
  });

  Object.keys(sheets).forEach((key) => {
    const sheet = sheets[key];
    if (!sheet) return;
    sheet.hidden = key !== name;
  });

  revealNow(sheets[name]);
}

sheetTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateSheet(tab.dataset.sheet));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = sheetTabs[(index + step + sheetTabs.length) % sheetTabs.length];
    activateSheet(next.dataset.sheet, { focusTab: true });
  });
});

function goToItem(hash) {
  const id = String(hash || "").replace("#", "");
  if (!id) return;
  if (id === "library") {
    history.replaceState(null, "", "#products");
    requestAnimationFrame(() => scrollToHash("products"));
    return;
  }
  if (id === "briefing") {
    activateSheet("briefing");
    requestAnimationFrame(() => scrollToHash("profile"));
    return;
  }
  if (id === "mfr" || id === "manufacturer") {
    activateSheet("mfr");
    requestAnimationFrame(() => scrollToHash("profile"));
    return;
  }
  if (id === "profile") activateSheet("profile");
  if (itemPart[id]) activateTab(itemPart[id]);
  requestAnimationFrame(() => scrollToHash(id === "briefing" ? "profile" : id));
}

document.querySelectorAll("[data-goto]").forEach((el) => {
  el.addEventListener("click", (event) => {
    activateTab(el.dataset.goto);
    const href = el.getAttribute("href") || "";
    if (!href.startsWith("#")) return;
    event.preventDefault();
    setMenu(false);
    history.replaceState(null, "", href);
    requestAnimationFrame(() => goToItem(href));
  });
});

window.addEventListener("hashchange", () => goToItem(location.hash));

if (location.hash === "#briefing") {
  activateSheet("briefing");
  requestAnimationFrame(() => scrollToHash("profile"));
} else if (location.hash === "#mfr" || location.hash === "#manufacturer") {
  activateSheet("mfr");
  requestAnimationFrame(() => scrollToHash("profile"));
} else if (location.hash === "#library") {
  history.replaceState(null, "", "#products");
  requestAnimationFrame(() => scrollToHash("products"));
} else if (location.hash && itemPart[location.hash.replace("#", "")]) {
  activateTab(itemPart[location.hash.replace("#", "")]);
  requestAnimationFrame(() => goToItem(location.hash));
}

/* ---------- i18n ---------- */
function dict() {
  return i18n[lang] || i18n.ko;
}

function applyLang(next) {
  lang = LANGS.includes(next) ? next : "ko";
  const copy = dict();
  document.documentElement.lang = HTML_LANG[lang] || "ko";
  langButtons.forEach((btn) => {
    const on = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", String(on));
  });
  menuBtn.setAttribute("aria-label", copy[menuOpen ? "menu.close" : "menu.open"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = copy[el.getAttribute("data-i18n")];
    if (!value) return;
    if (el.tagName === "OPTION") {
      el.textContent = value;
      return;
    }
    el.innerHTML = value.replace(/\n/g, "<br>");
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const value = copy[el.getAttribute("data-i18n-ph")];
    if (value) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = copy[el.getAttribute("data-i18n-alt")];
    if (value) el.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value = copy[el.getAttribute("data-i18n-aria")];
    if (value) el.setAttribute("aria-label", value);
  });
  refreshBgmLabel(copy);

  document.querySelectorAll("[data-gallery]").forEach((gallery) => {
    const active = gallery.querySelector("[data-gallery-src].is-active");
    const main = gallery.querySelector("[data-gallery-main]");
    const key = active?.getAttribute("data-i18n-gallery-alt");
    if (main && key && copy[key]) main.setAttribute("alt", copy[key]);
  });

  const optRes = document.getElementById("optgResource");
  const optEle = document.getElementById("optgElectronic");
  const optLug = document.getElementById("optgLuggage");
  const optDocs = document.getElementById("optgDocs");
  if (optRes && copy["form.optRes"]) optRes.label = copy["form.optRes"];
  if (optEle && copy["form.optEle"]) optEle.label = copy["form.optEle"];
  if (optLug && copy["form.optLug"]) optLug.label = copy["form.optLug"];
  if (optDocs && copy["form.optDocs"]) optDocs.label = copy["form.optDocs"];
  refreshTrackCopy();
}

/* ---------- Shipment tracking demo (mock) ---------- */
const TRACK_MAP = { w: 2000, h: 980 };
const trackSamplesEl = document.getElementById("trackSamples");

function pctToVb(x, y) {
  return [x / 100 * TRACK_MAP.w, y / 100 * TRACK_MAP.h];
}

function curvePath(pts) {
  const vb = (pts || []).map(([x, y]) => pctToVb(x, y));
  if (vb.length < 2) return "";
  const fmt = (p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`;
  if (vb.length === 2) return `M ${fmt(vb[0])} L ${fmt(vb[1])}`;
  let d = `M ${fmt(vb[0])}`;
  for (let i = 0; i < vb.length - 1; i += 1) {
    const p0 = vb[Math.max(0, i - 1)];
    const p1 = vb[i];
    const p2 = vb[i + 1];
    const p3 = vb[Math.min(vb.length - 1, i + 2)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${fmt(c1)} ${fmt(c2)} ${fmt(p2)}`;
  }
  return d;
}

const TRACK_SAMPLES = {
  "APEX-DAR-2608-001": {
    vessel: "track.vessel.dar",
    cargo: "track.cargo.cu",
    route: "track.route.dar",
    pins: ["dar", "jkt", "tng", "icn"],
    duration: 9000,
    points: [
      [60.91, 64.86],
      [66.4, 72.2],
      [72.8, 69.4],
      [77.6, 65.6],
      [79.68, 64.43],
      [81.5, 57.2],
      [83.1, 49.4],
      [84.4, 41.2],
      [85.2, 33.25]
    ]
  },
  "APEX-JKT-2608-014": {
    vessel: "track.vessel.jkt",
    cargo: "track.cargo.wood",
    route: "track.route.jkt",
    pins: ["jkt", "tng", "icn"],
    duration: 6500,
    points: [
      [79.68, 64.43],
      [81.6, 57.0],
      [83.2, 48.8],
      [84.5, 40.4],
      [85.2, 33.25]
    ]
  },
  "APEX-SZX-2608-075": {
    vessel: "track.vessel.szx",
    cargo: "track.cargo.ifp",
    route: "track.route.szx",
    pins: ["szx", "icn"],
    duration: 5200,
    points: [
      [81.68, 43.9],
      [83.3, 40.6],
      [84.5, 36.8],
      [85.2, 33.25]
    ]
  }
};

const trackForm = document.getElementById("trackForm");
const blInput = document.getElementById("blInput");
const trackMsg = document.getElementById("trackMsg");
const trackHud = document.getElementById("trackHud");
const trackMap = document.querySelector(".network-map");
const trackRoute = document.getElementById("trackRoute");
const trackRouteBg = document.getElementById("trackRouteBg");
const trackShip = document.getElementById("trackShip");
const trackBar = document.getElementById("trackBar");
const trackStatus = document.getElementById("trackStatus");
let trackRaf = 0;
let trackActive = null;
let trackProgress = 0;

function statusKeyForProgress(p) {
  if (p < 0.08) return "track.status.search";
  if (p < 0.18) return "track.status.depart";
  if (p < 0.86) return "track.status.transit";
  if (p < 1) return "track.status.arrive";
  return "track.status.done";
}

function refreshTrackCopy() {
  if (!trackActive || !trackHud || trackHud.hidden) return;
  const copy = dict();
  const sample = TRACK_SAMPLES[trackActive];
  if (!sample) return;
  const bl = document.getElementById("trackBlVal");
  const vessel = document.getElementById("trackVesselVal");
  const cargo = document.getElementById("trackCargoVal");
  const route = document.getElementById("trackRouteVal");
  if (bl) bl.textContent = trackActive;
  if (vessel) vessel.textContent = copy[sample.vessel] || sample.vessel;
  if (cargo) cargo.textContent = copy[sample.cargo] || sample.cargo;
  if (route) route.textContent = copy[sample.route] || sample.route;
  if (trackStatus) trackStatus.textContent = copy[statusKeyForProgress(trackProgress)] || "";
}

function setTrackPins(names) {
  document.querySelectorAll(".map-pin").forEach((pin) => pin.classList.remove("is-on-route"));
  (names || []).forEach((key) => {
    document.querySelector(`.map-pin[data-pin="${key}"]`)?.classList.add("is-on-route");
  });
}

function placeShip(path, len, t) {
  if (!trackShip || !path || len <= 0) return;
  const d = Math.min(len, Math.max(0, len * t));
  const p = path.getPointAtLength(d);
  const p2 = path.getPointAtLength(Math.min(len, d + 12));
  const ang = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI + 90;
  trackShip.removeAttribute("hidden");
  trackShip.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${ang})`);
}

function stopTrackAnim() {
  if (trackRaf) cancelAnimationFrame(trackRaf);
  trackRaf = 0;
}

function runTrack(bl) {
  const sample = TRACK_SAMPLES[bl];
  if (!sample || !trackRoute || !trackRouteBg) return;

  stopTrackAnim();
  trackActive = bl;
  trackProgress = 0;
  trackMap?.classList.add("is-tracking");
  trackSamplesEl?.classList.remove("is-hint");
  if (trackHud) trackHud.hidden = false;
  if (trackMsg) {
    trackMsg.hidden = true;
    trackMsg.textContent = "";
  }
  blInput?.classList.remove("is-invalid");
  document.querySelectorAll(".track-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.bl === bl);
  });
  setTrackPins(sample.pins);

  const d = curvePath(sample.points);
  trackRouteBg.setAttribute("d", d);
  trackRoute.setAttribute("d", d);
  const len = trackRoute.getTotalLength();
  trackRoute.style.strokeDasharray = String(len);
  trackRoute.style.strokeDashoffset = String(len);
  refreshTrackCopy();

  const duration = reduceMotion ? 1 : sample.duration;
  const start = performance.now();

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const ease = 1 - (1 - t) ** 3;
    trackProgress = ease;
    trackRoute.style.strokeDashoffset = String(len * (1 - ease));
    if (trackBar) trackBar.style.width = `${Math.round(ease * 100)}%`;
    placeShip(trackRoute, len, ease);
    if (trackStatus) trackStatus.textContent = dict()[statusKeyForProgress(ease)] || "";
    if (t < 1) {
      trackRaf = requestAnimationFrame(frame);
    } else {
      trackRaf = 0;
      trackProgress = 1;
      refreshTrackCopy();
    }
  }

  if (reduceMotion) {
    trackProgress = 1;
    trackRoute.style.strokeDashoffset = "0";
    if (trackBar) trackBar.style.width = "100%";
    placeShip(trackRoute, len, 1);
    refreshTrackCopy();
    return;
  }

  trackRaf = requestAnimationFrame(frame);
}

function normalizeBl(value) {
  return String(value || "").trim().toUpperCase().replace(/\s+/g, "");
}

if (trackForm && blInput) {
  trackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const bl = normalizeBl(blInput.value);
    blInput.value = bl;
    if (TRACK_SAMPLES[bl]) {
      runTrack(bl);
      return;
    }
    stopTrackAnim();
    trackActive = null;
    trackProgress = 0;
    trackMap?.classList.remove("is-tracking");
    setTrackPins([]);
    if (trackHud) trackHud.hidden = true;
    if (trackShip) trackShip.setAttribute("hidden", "");
    if (trackRoute) trackRoute.setAttribute("d", "");
    if (trackRouteBg) trackRouteBg.setAttribute("d", "");
    blInput.classList.add("is-invalid");
    trackSamplesEl?.classList.add("is-hint");
    if (trackMsg) {
      trackMsg.hidden = false;
      trackMsg.textContent = dict()["track.unknown"] || "";
    }
    document.querySelectorAll(".track-chip").forEach((chip) => chip.classList.remove("is-active"));
  });

  document.querySelectorAll(".track-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      blInput.value = chip.dataset.bl || "";
      trackForm.requestSubmit();
    });
  });
}

applyLang(lang);

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const next = btn.getAttribute("data-lang");
    if (!LANGS.includes(next) || next === lang) return;
    localStorage.setItem(LANG_KEY, next);
    applyLang(next);
  });
});

/* ---------- Inquiry form (mailto) ---------- */
function fillTemplate(template, data) {
  return template.replace(/\{(\w+)\}/g, (_, key) => data[key] ?? "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const contact = String(data.get("contact") || "").trim();
  const item = String(data.get("item") || "").trim();
  const message = String(data.get("message") || "").trim();
  const copy = dict();

  const nameInput = form.elements.namedItem("name");
  const contactInput = form.elements.namedItem("contact");
  const messageInput = form.elements.namedItem("message");

  [nameInput, contactInput, messageInput].forEach((field) => {
    if (field && field.classList) field.classList.remove("is-invalid");
  });

  const missing = [];
  if (!name) missing.push(nameInput);
  if (!contact) missing.push(contactInput);
  if (!message) missing.push(messageInput);

  if (missing.length) {
    missing.forEach((field) => field && field.classList.add("is-invalid"));
    if (formNote) {
      formNote.textContent = copy["form.error"];
      formNote.classList.add("is-error");
    }
    missing[0]?.focus();
    return;
  }

  if (formNote) {
    formNote.textContent = copy["form.note"];
    formNote.classList.remove("is-error");
  }

  const subject = encodeURIComponent(fillTemplate(copy["form.mail.subject"], { item }));
  const body = encodeURIComponent(fillTemplate(copy["form.mail.body"], { name, contact, item, message }));
  window.location.href = `mailto:${INQUIRY_MAIL}?subject=${subject}&body=${body}`;
});

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const main = gallery.querySelector("[data-gallery-main]");
  gallery.querySelectorAll("[data-gallery-src]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!main) return;
      main.src = btn.getAttribute("data-gallery-src");
      const picture = main.parentElement;
      if (picture && picture.tagName === "PICTURE") {
        const source = picture.querySelector("source");
        const set = btn.getAttribute("data-gallery-srcset");
        if (source && set) source.srcset = set;
      }
      const key = btn.getAttribute("data-i18n-gallery-alt");
      const alt = key ? dict()[key] : "";
      if (alt) main.setAttribute("alt", alt);
      gallery.querySelectorAll("[data-gallery-src]").forEach((other) => {
        other.classList.toggle("is-active", other === btn);
      });
    });
  });
});

document.querySelectorAll("[data-item]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const select = document.getElementById("itemSelect");
    if (select) select.value = btn.dataset.item;
    const message = form?.elements.namedItem("message");
    if (message && !String(message.value || "").trim()) {
      if (btn.dataset.intent === "sample") {
        message.value = fillTemplate(dict()["form.sample.prefill"] || "", {
          item: btn.dataset.item
        });
      } else if (btn.dataset.intent === "catalog") {
        message.value = fillTemplate(dict()["form.catalog.prefill"] || "", {
          item: btn.dataset.item
        });
      }
    }
    document.getElementById("contact")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth"
    });
    form.elements.namedItem("name")?.focus();
  });
});

/* ---------- Background music ---------- */
const BGM_KEY = "apex-bgm";

function bgmEls() {
  return {
    audio: document.getElementById("bgmAudio"),
    toggle: document.getElementById("bgmToggle"),
    root: document.getElementById("bgm")
  };
}

function bgmIsPlaying() {
  const { audio } = bgmEls();
  return Boolean(audio && !audio.paused);
}

function refreshBgmLabel(copy) {
  const { audio, toggle, root } = bgmEls();
  if (!toggle) return;
  const dictCopy = copy || dict();
  const playing = Boolean(audio && !audio.paused);
  toggle.setAttribute("aria-pressed", String(playing));
  toggle.setAttribute("aria-label", dictCopy[playing ? "bgm.pause" : "bgm.play"] || "");
  root?.classList.toggle("is-playing", playing);
}

async function startBgm() {
  const { audio } = bgmEls();
  if (!audio) return false;
  audio.volume = 0.32;
  try {
    await audio.play();
    localStorage.setItem(BGM_KEY, "on");
    refreshBgmLabel();
    return true;
  } catch {
    refreshBgmLabel();
    return false;
  }
}

function stopBgm() {
  bgmEls().audio?.pause();
  localStorage.setItem(BGM_KEY, "off");
  refreshBgmLabel();
}

(function initBgm() {
  const { audio, toggle } = bgmEls();
  toggle?.addEventListener("click", () => {
    if (bgmIsPlaying()) stopBgm();
    else startBgm();
  });
  audio?.addEventListener("pause", () => refreshBgmLabel());
  audio?.addEventListener("play", () => refreshBgmLabel());
  if (localStorage.getItem(BGM_KEY) === "on" && !reduceMotion) {
    startBgm();
  } else {
    refreshBgmLabel();
  }
})();
