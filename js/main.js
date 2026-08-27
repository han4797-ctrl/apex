const INQUIRY_MAIL = "nexcoapextelcom@gmail.com";
const LANG_KEY = "apex-lang";

const i18n = {
  ko: {
    skip: "본문으로 건너뛰기",
    "brand.tag": "Intelligent Scenario Solutions",
    "nav.about": "회사소개",
    "nav.products": "취급품목",
    "nav.briefing": "보고서",
    "nav.network": "글로벌 네트워크",
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
    "prof.toc.01.d": "APEX·VL 이원 실행 구조와 거래 원칙",
    "prof.toc.02.t": "기업 정보",
    "prof.toc.02.d": "상호·대표·거점·사업 영역·연락처",
    "prof.toc.03.t": "조직과 역할 분담",
    "prof.toc.03.d": "전면 / 인도네시아 현지 / 한국 총괄",
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
    "prof.toc.09.d": "APEX·VL 창구와 함께 보면 좋은 자료",
    "brief.toc.01.t": "요약",
    "brief.toc.01.d": "이원 실행·검수 전제·규격 우선·단계적 확대",
    "brief.toc.02.t": "시장 맥락",
    "brief.toc.02.d": "구리 스크랩·우드펠릿 수요 맥락",
    "brief.toc.03.t": "취급 품목과 계약 포인트",
    "brief.toc.03.d": "품목별로 계약에서 맞추는 것",
    "brief.toc.04.t": "소싱 네트워크",
    "brief.toc.04.d": "카자흐스탄·퍼스·칼리만탄·술라웨시·파푸아·탄게랑·인천",
    "brief.toc.05.t": "검수와 인도",
    "brief.toc.05.d": "수요 파악 → 소싱·검수 → 물류 → 사후",
    "brief.toc.06.t": "거래를 시작하는 방법",
    "brief.toc.06.d": "요구사항 정리 → 오퍼 → 시험 선적",
    "brief.toc.07.t": "문의",
    "brief.toc.07.d": "회신을 빠르게 받는 요청 양식",
    "nav.library": "자료실",
    "p.doc.speccat": "자원 품목 규격 카탈로그",
    "p.doc.more": "자료실에서 전체 문서 보기",
    "lib.eyebrow": "Document Library",
    "lib.title": "자료실",
    "lib.lead": "회사 소개서부터 품목별 규격서, 검수·거래 조건, 견적 요청 서식까지 한곳에 모았습니다. 모두 PDF로 바로 내려받을 수 있습니다.",
    "lib.new": "신규",
    "lib.get": "PDF 내려받기",
    "lib.g1": "자원파트",
    "lib.g1.d": "규격·검수·거래 조건을 계약 전에 확인할 수 있도록 정리한 자원파트 문서입니다.",
    "lib.p1.t": "자원파트 회사 소개서",
    "lib.p1.d": "회사 개요와 조직·역할 분담, 운영 원칙, 취급 품목, 글로벌 네트워크, 거래 프로세스를 담은 배포용 소개서입니다.",
    "lib.p2.t": "자원 품목 규격 카탈로그",
    "lib.p2.d": "6개 품목의 기준 사양과 등급 체계, 검사 항목, 포장·선적 단위, 선적 전 체크리스트를 품목별로 정리했습니다.",
    "lib.p3.t": "자원무역 브리핑",
    "lib.p3.d": "시장 맥락과 품목별 계약 포인트, 소싱 네트워크, 검수·인도 절차를 요약한 바이어·파트너 배포용 브리핑입니다.",
    "lib.g2": "전자파트",
    "lib.g2.d": "제품 카탈로그와 품목별 기술 명세서, 팩토리 브로슈어를 함께 제공합니다.",
    "lib.e1.t": "전자파트 제품 카탈로그",
    "lib.e1.d": "전자칠판·OPS·노트북·태블릿PC·농업용 드론의 표준 구성과 공급 범위, 조달·대량 공급·수출입 대응 방식을 정리했습니다.",
    "lib.e2.t": "전자칠판 기술 명세서",
    "lib.e2.d": "86인치 4K UHD, 40포인트 터치, EDLA 환경 기준 사양과 구성 옵션, 상업 조건, 발주 전 확인 사항을 담았습니다.",
    "lib.e3.t": "전자칠판 75인치 브로슈어",
    "lib.e3.d": "75인치 모델 팩토리 브로슈어입니다.",
    "lib.e4.t": "전자칠판 86인치 브로슈어",
    "lib.e4.d": "86인치 모델 팩토리 브로슈어입니다.",
    "lib.e5.t": "OPS 모듈 기술 명세서",
    "lib.e5.d": "표준 80핀 규격과 CPU·메모리·저장 구성, 무선랜 옵션, 라이선스 협의 사항을 정리했습니다.",
    "lib.e6.t": "노트북 기술 명세서",
    "lib.e6.d": "사무용·교육용·고사양 작업용 등급 구분과 대량 견적, 렌탈·리스, 배포 준비 옵션을 안내합니다.",
    "lib.e7.t": "태블릿PC 기술 명세서",
    "lib.e7.d": "안드로이드·윈도우 계열 구성과 셀룰러 옵션, 케이스·거치대·충전 보관함 등 부속 구성을 정리했습니다.",
    "lib.e8.t": "농업용 드론 기술 명세서",
    "lib.e8.d": "30·40·50리터 탱크와 4축·6축 기체의 살포 성능, 구성품, 옵션, 현지 운용 시 확인 사항을 담았습니다.",
    "lib.e9.t": "농업용 드론 30L 6축 브로슈어",
    "lib.e9.d": "30리터 6축 기체 팩토리 브로슈어입니다.",
    "lib.e10.t": "농업용 드론 50L 4축 브로슈어",
    "lib.e10.d": "50리터 4축 기체 팩토리 브로슈어입니다.",
    "lib.g3": "공통 · 실무",
    "lib.g3.d": "자원파트와 전자파트 모두에 적용되는 검수·거래 조건 문서와 견적 요청 서식입니다.",
    "lib.c1.t": "품질·검수 가이드",
    "lib.c1.d": "선적 전 검사와 시료 채취, 품목군별 검사 항목, 서류 체크리스트, 클레임 처리 절차를 실무 기준으로 정리했습니다.",
    "lib.c2.t": "거래 조건 안내",
    "lib.c2.d": "Incoterms 2020 기준 인도 조건과 결제·검량·정산, 납기, 인허가, 클레임 기준을 표준 조건으로 안내합니다.",
    "lib.c3.t": "견적 요청서 (RFQ) 양식",
    "lib.c3.d": "품목·등급, 수량·납기, 인도 조건, 검사·서류 요구 사항을 채워 회신하면 바로 오퍼 검토가 가능한 서식입니다.",
    "lib.note": "모든 문서는 일반 안내 자료입니다. 가격·재고·선적 일정은 문의 시점의 오퍼와 검사 결과에 따르며, 확정 사양과 인증 정보는 확정 견적 시 첨부합니다. 필요한 자료가 없으면 <a href=\"#contact\">문의</a>로 알려 주세요.",
    "nav.process": "사업방식",
    "nav.contact": "문의",
    "nav.inquiry": "견적 문의",
    "hero.eyebrow": "APEX Indonesia · with VL Korea",
    "hero.title1": "자원과 전자기기를",
    "hero.title2": "현지에서 실행합니다",
    "hero.cta1": "취급 품목 보기",
    "hero.cta2": "견적 상담",
    "hero.s1": "자원파트 · 전자파트",
    "hero.s2": "APEX 탄게랑",
    "hero.s3": "VL 한국 총괄",
    "strip.1t": "자원파트",
    "strip.1p": "비철금속 · 제련 슬래그 · 드로스 · 우드펠릿 · 카올린",
    "strip.2t": "전자파트",
    "strip.2p": "전자칠판 · OPS · 노트북 · 태블릿PC · 드론",
    "strip.3t": "APEX 인도네시아",
    "strip.3p": "탄게랑 현지 실행",
    "strip.4t": "VL 한국",
    "strip.4p": "한국 업무 총괄",
    "about.eyebrow": "About APEX",
    "about.title": "자원을 순환시키고,\n현장에 기술을 놓습니다",
    "about.p1": "APEX(PT. APEX TELCOM INKO)는 인도네시아 탄게랑에서 현지 업무를 실행하는 전면 브랜드입니다. 한국 파트너 VL M&C는 APEX와 동등한 관계로, 한국에서 진행하는 모든 업무를 총괄합니다. 두 회사가 자원파트와 전자파트를 함께 운영합니다.",
    "about.p2": "어느 쪽이든 단순 중개가 아닙니다. 규격·품질·물류를 함께 관리하고, 필요한 사양과 물량, 납기를 기준으로 소싱부터 인도·설치까지 한 번에 맞춰 드립니다.",
    "about.pr1t": "규격 확인",
    "about.pr1p": "등급·사양·성분 기준으로 조건을 맞춥니다.",
    "about.pr2t": "품질 검수",
    "about.pr2p": "공급 전 물량과 상태를 확인하고 인도합니다.",
    "about.pr3t": "이원 실행",
    "about.pr3p": "인도네시아는 APEX, 한국은 VL이 총괄합니다.",
    "about.cap": "APEX 탄게랑 현지와 VL 인천 거점을 함께 활용합니다.",
    "about.f1t": "전면",
    "about.f2t": "한국 파트너",
    "about.f3t": "인도네시아",
    "about.f3d": "탄게랑 현지 실행",
    "about.f4t": "한국",
    "about.f4d": "VL이 업무 총괄",
    "partner.apex.en": "Indonesia · Front",
    "partner.apex.p": "PT. APEX TELCOM INKO. 인도네시아 현지에서 소싱·검수·납품을 실행합니다. 대외 전면 브랜드입니다.",
    "partner.apex.role": "PT. APEX TELCOM INKO · 현지 실행",
    "partner.vl.en": "Korea · Equal partner",
    "partner.vl.p": "한국에서 진행하는 모든 업무를 총괄하는 동등 파트너입니다. 한국 창구·통관·납품을 맡습니다.",
    "partner.vl.role": "한국에서 진행하는 모든 업무 총괄",
    "org.eyebrow": "Organization",
    "org.title": "회사 조직도",
    "org.lead": "APEX를 전면에 두고, VL M&C와 동등 파트너로 인도네시아 현지와 한국 업무를 나눕니다.",
    "org.company.kicker": "Front",
    "org.company.base": "인도네시아 전면 브랜드",
    "org.equal": "동등 파트너십",
    "org.apex.en": "Indonesia",
    "org.apex.role": "현지 업무 실행",
    "org.vl.en": "Korea partner",
    "org.vl.role": "한국 업무 총괄",
    "org.res.en": "Resources",
    "org.res.t": "자원파트",
    "org.res.1": "비철금속 소싱",
    "org.res.2": "슬래그 · 드로스 · 우드펠릿 · 카올린",
    "org.res.3": "카자흐스탄 · 퍼스 · 칼리만탄 · 술라웨시 · 파푸아",
    "org.ops.en": "Operations",
    "org.ops.t": "이원 운영",
    "org.ops.1": "APEX 인도네시아 현지",
    "org.ops.2": "VL 한국 총괄",
    "org.ops.3": "소싱 · 검수 · 납품 연결",
    "org.ele.en": "Electronics",
    "org.ele.t": "전자파트",
    "org.ele.1": "전자칠판 · OPS",
    "org.ele.2": "노트북 · 태블릿PC · 드론",
    "org.ele.3": "선전 소싱 · 설치",
    "prof.tag": "Company Profile · Resources Division",
    "prof.cover.title": "시나리오를 실행합니다",
    "prof.lead": "전면 브랜드 APEX가 인도네시아 탄게랑에서 현지 실행하고, 한국 업무는 동등 파트너 VL M&C가 총괄합니다. 비철금속 스크랩, 제련 슬래그, 알루미늄 드로스, 산업용 우드펠릿, 카올린을 규격·품질·물류와 함께 맞춥니다.",
    "prof.meta": "2026 · 바이어·파트너 배포용 · Tangerang · Incheon · Dar es Salaam · Jakarta",
    "prof.download": "PDF로 저장",
    "prof.about.kicker": "About",
    "prof.about.t": "회사 소개",
    "prof.about.p": "APEX(PT. APEX TELCOM INKO)는 인도네시아 현지 실행을 맡는 전면 브랜드입니다. 한국 파트너 VL M&C는 동등한 관계로 한국에서 진행하는 모든 업무를 총괄합니다. 이 소개서는 자원파트를 대상으로 합니다. 전자파트는 별도 카탈로그로 안내합니다.",
    "prof.about.box": "단순 중개가 아닙니다. 등급·성분·이물을 먼저 맞추고, 인도네시아 현지는 APEX가, 한국 창구·통관·납품은 VL이 실행합니다.",
    "prof.th.field": "항목",
    "prof.th.value": "내용",
    "prof.field.name": "상호",
    "prof.field.frontnote": "(전면)",
    "prof.field.partner": "한국 파트너",
    "prof.field.partnote": "(한국 업무 총괄)",
    "prof.field.apexbase": "APEX 거점",
    "prof.field.vlbase": "VL 거점",
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
    "products.eyebrow": "Products",
    "products.title": "취급 품목",
    "products.lead": "자원과 전자, 두 개의 디지털 쇼룸입니다. 사진과 핵심 규격을 보고, 카탈로그는 문의 후 받습니다.",
    "network.eyebrow": "Global Network",
    "network.title": "글로벌 소싱 네트워크",
    "network.lead": "알루미늄은 카자흐스탄과 호주 퍼스, 석탄은 칼리만탄, 니켈은 술라웨시, 구리는 파푸아에서 소싱합니다. 항만 거점은 다르에스살람과 자카르타, 전자기기는 선전, 현지 실행은 APEX 탄게랑, 한국 업무는 VL 인천입니다.",
    "network.map.alt": "카자흐스탄·퍼스 알루미늄, 칼리만탄 석탄, 술라웨시 니켈, 파푸아 구리와 다르에스살람·자카르타·선전·탄게랑·인천 거점을 표시한 세계 지도",
    "network.legend.resource": "자원 공급 거점",
    "network.legend.electronics": "전자 공급 거점",
    "network.legend.hub": "APEX 탄게랑",
    "network.resource": "Resources",
    "network.electronics": "Electronics",
    "network.tag.resourceHub": "자원 거점",
    "network.tag.electronicsHub": "전자 거점",
    "network.tag.apexHub": "APEX 거점",
    "network.tag.vlHub": "VL 거점",
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
    "network.tangerang.desc": "APEX. 인도네시아 현지 실행 거점",
    "network.korea": "인천",
    "network.korea.country": "대한민국",
    "network.korea.desc": "VL M&C. 한국 업무 총괄 거점",
    "network.korea.tag": "VL M&C",
    "network.legend.korea": "VL 한국",
    "network.hub": "APEX",
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
    "tab.resource.sub": "Resources",
    "tab.electronic": "전자파트",
    "tab.electronic.sub": "Electronics",
    "panel.res.lead": "금속 원료부터 제련 부산물·드로스, 친환경 연료, 산업용 고령토까지. 사진과 핵심 규격을 보고 고르세요. 카탈로그는 문의 후 발송합니다.",
    "panel.ele.lead": "전자칠판과 OPS 모듈, 노트북, 태블릿PC, 농업용 드론을 교육기관·관공서·농장·기업에 공급합니다. 핵심 사양은 쇼룸에서 확인하고, 카탈로그는 문의 후 받으며 샘플을 요청할 수 있습니다.",
    "hall.res.kicker": "Resources Digital Showroom",
    "hall.res.t": "자원 쇼룸",
    "hall.res.d": "사진과 핵심 규격을 보고 품목을 고르세요. 카탈로그와 명세서는 문의 후에 보내 드립니다.",
    "hall.ele.kicker": "Electronics Digital Showroom",
    "hall.ele.t": "전자 쇼룸",
    "hall.ele.d": "화면에서 핵심 사양을 확인하세요. 카탈로그와 기술 명세서는 문의 후에 보내 드립니다.",
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
    "p.resource.kicker": "B2B 자료실",
    "p.doc.profile": "자원파트 회사 소개서",
    "p.doc.brief": "자원무역 브리핑",
    "p.doc.mfr": "제조사 파트너 브리프",
    "p.doc.catalog": "팩토리 제품 카탈로그",
    "p.doc.spec": "기술 명세서",
    "p.doc.brochure75": "75인치 브로슈어",
    "p.doc.brochure86": "86인치 브로슈어",
    "p.doc.drone30": "30L 6축 브로슈어",
    "p.doc.drone50": "50L 4축 브로슈어",
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
    "p.ask": "이 품목 문의",
    "brief.tag": "APEX · Resources Division",
    "brief.cover.title": "자원과 현장을 연결하는 공급 브리핑",
    "brief.cover.meta": "APEX-RES-BRIEF · Rev. 2026.08 · 바이어·파트너 배포용",
    "brief.download": "보고서 PDF",
    "brief.intro": "구리 스크랩, 알루미늄 잉곳, 알루미늄 드로스, 주석·니켈 슬래그, 우드펠릿, 카올린을 카자흐스탄·호주·탄자니아·인도네시아에서 소싱합니다. 인도네시아 현지는 APEX가, 한국 업무는 VL이 총괄합니다. 가격·재고는 문의 시점의 오퍼와 검사 결과에 따릅니다.",
    "brief.s1": "취급 품목",
    "brief.s2": "자원 소싱 거점",
    "brief.s3": "APEX · VL 이원 운영",
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
    "mfr.lead": "APEX는 인도네시아 현지 실행을 맡는 전면 브랜드입니다. 한국 업무는 동등 파트너 VL M&amp;C가 총괄합니다. 이 한 장은 전자 제조사와 자원 생산 파트너에게, 견적 전에 협업 구조를 전달하기 위한 자료입니다.",
    "mfr.s1": "자원 취급 품목",
    "mfr.s2": "전자 취급 품목",
    "mfr.s3": "인도네시아 · 한국",
    "mfr.s4": "선적 전 검사",
    "mfr.who.t": "이원 실행",
    "mfr.apex.p": "탄게랑. 현지 소싱·검수·납품을 실행하는 대외 전면 브랜드입니다.",
    "mfr.vl.p": "인천. 한국에서 진행하는 모든 업무 — 창구·통관·납품 — 을 총괄합니다.",
    "mfr.range.t": "취급 범위",
    "mfr.range.res.t": "자원파트",
    "mfr.range.res.p": "구리 스크랩 · 알루미늄 잉곳 · 알루미늄 드로스 · 주석/니켈 슬래그 · 우드펠릿 · 카올린",
    "mfr.range.ele.t": "전자파트",
    "mfr.range.ele.p": "전자칠판 65/75/86인치 · OPS 모듈 · 노트북 · 태블릿PC · 농업용 드론 30/40/50 L",
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
    "mfr.give.1": "인도네시아 현지 실행 (APEX 탄게랑)",
    "mfr.give.2": "한국 창구·통관·납품 (VL 인천)",
    "mfr.give.3": "규격 확정 후에만 발주",
    "mfr.give.4": "시험 선적 후 반복 물량",
    "mfr.give.5": "대금은 법인 계좌로만 수수",
    "mfr.next.t": "다음 단계",
    "mfr.next.p": "품목·확정 사양·월 생산능력·초도 물량을 보내 주시면, 사양 확정 시트로 회신합니다.",
    "mfr.contact.t": "문의",
    "mfr.disc": "일반 안내입니다. 가격·재고·선적 일정은 문의 시점의 오퍼에 따릅니다. 내부 거래 상대와 계약 단가는 넣지 않았습니다. 바이어용 소개서·브리핑과 별도로 제조사에 보내 주세요.",
    "process.eyebrow": "How We Work",
    "process.title": "견적부터 인도까지",
    "process.1t": "수요 파악",
    "process.1p": "품목과 등급·사양, 물량, 납기, 설치 환경을 기준으로 조건을 정리합니다.",
    "process.2t": "소싱 · 검수",
    "process.2p": "국내외 공급망에서 규격에 맞는 물량을 확보하고 품질을 확인합니다.",
    "process.3t": "물류 · 인도",
    "process.3p": "인도네시아 현지 일정은 APEX가, 한국 납품·통관·설치는 VL이 맞춥니다.",
    "process.4t": "사후 관리",
    "process.4p": "반복 공급은 재고·선적 일정을 함께 맞추고, 전자제품은 A/S 창구를 안내합니다.",
    "contact.eyebrow": "Contact",
    "contact.title": "품목과 수량을\n알려 주세요",
    "contact.lead": "전면 문의는 APEX로 보내 주세요. 한국에서 진행하는 업무는 동등 파트너 VL M&C가 총괄합니다. 자원이든 전자기기든, 취급 가능 여부와 대략적인 조건을 빠르게 회신드립니다.",
    "contact.docs": "규격서·카탈로그는 문의 후 보내 드립니다.",
    "contact.person": "담당",
    "contact.email": "이메일",
    "contact.addr": "주소",
    "contact.addrv": "The Prominence Office Tower, 10F Unit H, Jl. Jalur Sutera Barat, Pinang, Tangerang, Banten 15143",
    "contact.addr.kr": "인천광역시 서구 청라한내로72번길 7-15",
    "form.kicker": "Inquiry",
    "form.title": "견적 문의",
    "form.name": "성함 / 회사",
    "form.contact": "연락처",
    "form.contact.ph": "전화 또는 이메일",
    "form.item": "관심 품목",
    "form.optRes": "자원파트 / Resources",
    "form.optEle": "전자파트 / Electronics",
    "form.optDocs": "문서 / Documents",
    "form.msg": "문의 내용",
    "form.msg.ph": "사양·등급, 예상 수량, 납기 등을 적어 주세요.",
    "form.submit": "메일로 문의 보내기",
    "form.note": "전송 시 APEX 메일 앱이 열립니다. 전면 문의는 APEX, 한국 업무는 VL M&C 이메일로 연락해 주세요.",
    "form.error": "성함/회사, 연락처, 문의 내용을 모두 입력해 주세요.",
    "form.mail.subject": "[APEX] {item} 문의",
    "form.mail.body": "성함/회사: {name}\n연락처: {contact}\n관심 품목: {item}\n\n{message}",
    "form.sample.prefill": "{item} 샘플을 요청합니다. 수량, 납기, 설치 환경을 협의하고 싶습니다.",
    "form.catalog.prefill": "{item} 카탈로그·명세서를 요청합니다. 필요 규격과 용도를 알려 주시면 메일로 보내 드리겠습니다.",
    "menu.open": "메뉴 열기",
    "menu.close": "메뉴 닫기",
    "lang.label": "언어 선택",
    "brand.home": "APEX 홈",
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
    "form.item.profile": "자원파트 회사 소개서",
    "form.item.brief": "자원무역 브리핑",
    "form.item.mfr": "제조사 파트너 브리프",
    "form.item.resdocs": "자원파트 문서",
    "form.item.other": "기타",
    "footer.blurb": "전면은 APEX, 한국 업무는 동등 파트너 VL M&C가 총괄합니다. 자원 트레이딩과 전자기기 솔루션을 함께 운영합니다.",
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
    "brand.tag": "Intelligent Scenario Solutions",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.briefing": "Reports",
    "nav.network": "Global Network",
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
    "prof.toc.01.d": "The APEX·VL dual-execution structure and trading principles",
    "prof.toc.02.t": "Corporate data",
    "prof.toc.02.d": "Entity, principals, bases, business scope and contacts",
    "prof.toc.03.t": "Organisation",
    "prof.toc.03.d": "Front brand / Indonesia execution / Korea oversight",
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
    "prof.toc.09.d": "APEX and VL channels, plus related documents",
    "brief.toc.01.t": "Executive summary",
    "brief.toc.01.d": "Dual execution, inspection-first, specification-led, staged scale-up",
    "brief.toc.02.t": "Market context",
    "brief.toc.02.d": "Demand context for copper scrap and wood pellets",
    "brief.toc.03.t": "Items & contract points",
    "brief.toc.03.d": "What each item pins down in the contract",
    "brief.toc.04.t": "Sourcing network",
    "brief.toc.04.d": "Kazakhstan, Perth, Kalimantan, Sulawesi, Papua, Tangerang, Incheon",
    "brief.toc.05.t": "Inspection & delivery",
    "brief.toc.05.d": "Requirements → sourcing and inspection → logistics → aftercare",
    "brief.toc.06.t": "Getting started",
    "brief.toc.06.d": "Define requirements → offer → trial shipment",
    "brief.toc.07.t": "Contact",
    "brief.toc.07.d": "The enquiry format that gets the fastest reply",
    "nav.library": "Library",
    "p.doc.speccat": "Resources spec catalogue",
    "p.doc.more": "See every document in the library",
    "lib.eyebrow": "Document Library",
    "lib.title": "Document library",
    "lib.lead": "Company profile, item specifications, inspection and trade terms, and the RFQ form — collected in one place. Every document downloads as a PDF.",
    "lib.new": "New",
    "lib.get": "Download PDF",
    "lib.g1": "Resources Division",
    "lib.g1.d": "Documents for the resources division — grades, inspection items and contract points.",
    "lib.p1.t": "Resources company profile",
    "lib.p1.d": "Company overview, organisation and responsibility split, operating principles, product range, global network and the end-to-end trade process.",
    "lib.p2.t": "Resources specification catalogue",
    "lib.p2.d": "Reference specifications, grade structures, inspection items, packing units and a pre-shipment checklist for all six resource items.",
    "lib.p3.t": "Resources trade briefing",
    "lib.p3.d": "Market context, contract points by item, the sourcing network and the inspection and delivery process, summarised for buyers and partners.",
    "lib.g2": "Electronics Division",
    "lib.g2.d": "Product catalogue, technical spec sheets and factory brochures.",
    "lib.e1.t": "Electronics product catalogue",
    "lib.e1.d": "Standard configurations and supply scope for interactive panels, OPS, laptops, tablets and agricultural drones, with public-tender, bulk and export handling.",
    "lib.e2.t": "Interactive panel spec sheet",
    "lib.e2.d": "86-inch 4K UHD, 40-point touch and EDLA reference specification, configuration options, commercial notes and a pre-order checklist.",
    "lib.e3.t": "Interactive panel 75-inch brochure",
    "lib.e3.d": "Factory brochure for the 75-inch model.",
    "lib.e4.t": "Interactive panel 86-inch brochure",
    "lib.e4.d": "Factory brochure for the 86-inch model.",
    "lib.e5.t": "OPS module spec sheet",
    "lib.e5.d": "Standard 80-pin format, CPU, memory and storage configuration, Wi-Fi option and licensing notes.",
    "lib.e6.t": "Laptop spec sheet",
    "lib.e6.d": "Office, education and high-performance tiers with bulk quoting, rental or lease and deployment options.",
    "lib.e7.t": "Tablet PC spec sheet",
    "lib.e7.d": "Android and Windows configurations, cellular option and accessories including cases, stands and charging cabinets.",
    "lib.e8.t": "Agricultural drone spec sheet",
    "lib.e8.d": "Spraying performance for 30/40/50 L tanks and 4- or 6-rotor airframes, package contents, options and local operating requirements.",
    "lib.e9.t": "Drone 30L hexacopter brochure",
    "lib.e9.d": "Factory brochure for the 30 L hexacopter.",
    "lib.e10.t": "Drone 50L quadcopter brochure",
    "lib.e10.d": "Factory brochure for the 50 L quadcopter.",
    "lib.g3": "Common · Operations",
    "lib.g3.d": "Inspection, trade terms and the RFQ form — applicable to both divisions.",
    "lib.c1.t": "Quality &amp; inspection guide",
    "lib.c1.d": "Pre-shipment inspection and sampling, inspection items by category, a document checklist and the claims procedure.",
    "lib.c2.t": "Trade terms",
    "lib.c2.d": "Incoterms 2020 delivery terms, payment, weighing and settlement, lead time, permits and claims.",
    "lib.c3.t": "Request for quotation form",
    "lib.c3.d": "Fill in item and grade, volume and schedule, delivery terms and document requirements, and send it back to start the quotation.",
    "lib.note": "All documents are general reference material. Prices, stock and shipping dates follow the offer and inspection results at the time of enquiry, and confirmed specifications and certifications are attached with the final quotation. If something you need is missing, <a href=\"#contact\">get in touch</a>.",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.inquiry": "Request a quote",
    "hero.eyebrow": "APEX Indonesia · with VL Korea",
    "hero.title1": "Resources and electronics",
    "hero.title2": "from Indonesia and Korea",
    "hero.cta1": "View products",
    "hero.cta2": "Talk to us",
    "hero.s1": "Resources · Electronics",
    "hero.s2": "APEX Tangerang",
    "hero.s3": "VL Korea desk",
    "strip.1t": "Resources",
    "strip.1p": "Non-ferrous · Slag · Dross · Wood pellets · Kaolin",
    "strip.2t": "Electronics",
    "strip.2p": "Displays · OPS · Laptops · Tablets · Drones",
    "strip.3t": "APEX Indonesia",
    "strip.3p": "Local execution in Tangerang",
    "strip.4t": "VL Korea",
    "strip.4p": "Oversees all Korea work",
    "about.eyebrow": "About APEX",
    "about.title": "We circulate resources\nand equip the field",
    "about.p1": "APEX (PT. APEX TELCOM INKO) is the public-facing brand that executes locally in Tangerang, Indonesia. VL M&C is an equal partner and oversees every assignment run in Korea. Together they operate Resources and Electronics.",
    "about.p2": "Neither side is plain brokerage. We manage specification, quality, and logistics together, matching spec, volume, and lead time from sourcing through delivery and installation.",
    "about.pr1t": "Specification",
    "about.pr1p": "We match grade, spec, and composition first.",
    "about.pr2t": "Inspection",
    "about.pr2p": "Volume and condition are checked before delivery.",
    "about.pr3t": "Two desks",
    "about.pr3p": "APEX runs Indonesia; VL oversees Korea.",
    "about.cap": "APEX Tangerang and VL Incheon work as one line.",
    "about.f1t": "Front",
    "about.f2t": "Korea partner",
    "about.f3t": "Indonesia",
    "about.f3d": "Tangerang local execution",
    "about.f4t": "Korea",
    "about.f4d": "VL oversees Korea work",
    "partner.apex.en": "Indonesia · Front",
    "partner.apex.p": "PT. APEX TELCOM INKO. We execute sourcing, inspection, and delivery in Indonesia. APEX is the public-facing brand.",
    "partner.apex.role": "PT. APEX TELCOM INKO · local execution",
    "partner.vl.en": "Korea · Equal partner",
    "partner.vl.p": "An equal partner that oversees every Korea-side assignment: Korea desk, customs, and delivery.",
    "partner.vl.role": "Oversees all Korea-side work",
    "org.eyebrow": "Organization",
    "org.title": "Organization chart",
    "org.lead": "APEX stays in front. VL M&C is an equal partner: Indonesia locally, Korea through VL.",
    "org.company.kicker": "Front",
    "org.company.base": "Indonesia front brand",
    "org.equal": "Equal partnership",
    "org.apex.en": "Indonesia",
    "org.apex.role": "Local execution",
    "org.vl.en": "Korea partner",
    "org.vl.role": "Oversees Korea work",
    "org.res.en": "Resources",
    "org.res.t": "Resources Division",
    "org.res.1": "Non-ferrous sourcing",
    "org.res.2": "Slag · dross · wood pellets · kaolin",
    "org.res.3": "Kazakhstan · Perth · Kalimantan · Sulawesi · Papua",
    "org.ops.en": "Operations",
    "org.ops.t": "Two-desk operations",
    "org.ops.1": "APEX Indonesia local",
    "org.ops.2": "VL oversees Korea",
    "org.ops.3": "Source · inspect · deliver",
    "org.ele.en": "Electronics",
    "org.ele.t": "Electronics Division",
    "org.ele.1": "Interactive displays · OPS",
    "org.ele.2": "Laptops · tablets · drones",
    "org.ele.3": "Shenzhen sourcing · install",
    "prof.tag": "Company Profile · Resources Division",
    "prof.cover.title": "Intelligent scenarios, made real",
    "prof.lead": "APEX is the public-facing brand executing in Tangerang, Indonesia. Equal partner VL M&C oversees all Korea-side work. We match grade, quality, and logistics for non-ferrous scrap, smelting slag, aluminum dross, industrial wood pellets, and kaolin.",
    "prof.meta": "2026 · For buyers and partners · Tangerang · Incheon · Dar es Salaam · Jakarta",
    "prof.download": "Save PDF",
    "prof.about.kicker": "About",
    "prof.about.t": "The company",
    "prof.about.p": "APEX (PT. APEX TELCOM INKO) is the public-facing brand for Indonesia execution. Equal partner VL M&C oversees all Korea-side work. This profile covers Resources. Electronics are in a separate catalog.",
    "prof.about.box": "This is not plain brokerage. We match grade first. APEX executes in Indonesia; VL runs the Korea desk, customs, and delivery.",
    "prof.th.field": "Item",
    "prof.th.value": "Detail",
    "prof.field.name": "Name",
    "prof.field.frontnote": "(front)",
    "prof.field.partner": "Korea partner",
    "prof.field.partnote": "(oversees Korea work)",
    "prof.field.apexbase": "APEX base",
    "prof.field.vlbase": "VL base",
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
    "products.eyebrow": "Products",
    "products.title": "What we supply",
    "products.lead": "Two digital showrooms: resources and electronics. Review photos and key specs here; catalogs are sent after inquiry.",
    "network.eyebrow": "Global Network",
    "network.title": "Our sourcing network",
    "network.lead": "Aluminum from Kazakhstan and Perth, coal from Kalimantan, nickel from Sulawesi, and copper from Papua. Port hubs are Dar es Salaam and Jakarta; electronics from Shenzhen. APEX Tangerang executes in Indonesia; VL Incheon oversees Korea.",
    "network.map.alt": "World map showing aluminum in Kazakhstan and Perth, coal in Kalimantan, nickel in Sulawesi, copper in Papua, plus hubs in Dar es Salaam, Jakarta, Shenzhen, Tangerang, and Incheon",
    "network.legend.resource": "Resource sourcing",
    "network.legend.electronics": "Electronics sourcing",
    "network.legend.hub": "APEX Tangerang",
    "network.resource": "Resources",
    "network.electronics": "Electronics",
    "network.tag.resourceHub": "Resource hub",
    "network.tag.electronicsHub": "Electronics hub",
    "network.tag.apexHub": "APEX hub",
    "network.tag.vlHub": "VL hub",
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
    "network.tangerang.desc": "APEX. Indonesia local execution",
    "network.korea": "Incheon",
    "network.korea.country": "Korea",
    "network.korea.desc": "VL M&C. Oversees all Korea-side work",
    "network.korea.tag": "VL M&C",
    "network.legend.korea": "VL Korea",
    "network.hub": "APEX",
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
    "tab.resource.sub": "Metals · Slag · Dross · Biomass · Kaolin",
    "tab.electronic": "Electronics",
    "tab.electronic.sub": "Displays · PCs · Drones",
    "panel.res.lead": "From metal feedstock and smelting by-products — including aluminum dross — to cleaner fuel and industrial kaolin. Review photos and key specs; catalogs are sent after inquiry.",
    "panel.ele.lead": "Interactive flat panels, OPS modules, laptops, tablets, and agricultural drones for schools, public offices, farms, and companies. Review key specs in the showroom, request the catalog by inquiry, then ask for a sample.",
    "hall.res.kicker": "Resources Digital Showroom",
    "hall.res.t": "Resources showroom",
    "hall.res.d": "Choose items from photos and key specs. Catalogs and spec sheets are sent after you inquire.",
    "hall.ele.kicker": "Electronics Digital Showroom",
    "hall.ele.t": "Electronics showroom",
    "hall.ele.d": "Review key specs on screen. Catalogs and technical sheets are sent after you inquire.",
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
    "p.resource.kicker": "Buyer documents",
    "p.doc.profile": "Resources company profile",
    "p.doc.brief": "Resources briefing",
    "p.doc.mfr": "Manufacturer partner brief",
    "p.doc.catalog": "Factory product catalog",
    "p.doc.spec": "Technical spec sheet",
    "p.doc.brochure75": "75-inch brochure",
    "p.doc.brochure86": "86-inch brochure",
    "p.doc.drone30": "30L 6-axis brochure",
    "p.doc.drone50": "50L 4-axis brochure",
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
    "p.ask": "Inquire about this item",
    "brief.tag": "APEX · Resources Division",
    "brief.cover.title": "A supply brief that connects resources to the field",
    "brief.cover.meta": "APEX-RES-BRIEF · Rev. 2026.08 · For buyers and partners",
    "brief.download": "Download PDF",
    "brief.intro": "We source copper scrap, aluminum ingot, aluminum dross, tin and nickel slag, wood pellets, and kaolin from Kazakhstan, Australia, Tanzania, and Indonesia. APEX executes in Indonesia; VL oversees Korea. Price and stock follow the offer and inspection at inquiry.",
    "brief.s1": "Items we handle",
    "brief.s2": "Resource sourcing hubs",
    "brief.s3": "APEX · VL two desks",
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
    "mfr.lead": "APEX is the public-facing brand that executes in Indonesia. Equal partner VL M&amp;C oversees all Korea-side work. This page is for manufacturers — electronics factories and resource producers — before a quotation.",
    "mfr.s1": "Resource items",
    "mfr.s2": "Electronics lines",
    "mfr.s3": "Indonesia · Korea",
    "mfr.s4": "Inspect before ship",
    "mfr.who.t": "Who we are",
    "mfr.apex.p": "Tangerang. Local sourcing, inspection and delivery. Public-facing brand.",
    "mfr.vl.p": "Incheon. Oversees every Korea-side assignment: window, customs, delivery.",
    "mfr.range.t": "What we source",
    "mfr.range.res.t": "Resources",
    "mfr.range.res.p": "Copper scrap · Aluminium ingot · Aluminium dross · Tin / nickel slag · Wood pellets · Kaolin",
    "mfr.range.ele.t": "Electronics",
    "mfr.range.ele.p": "Interactive flat panel 65 / 75 / 86\" · OPS module · Laptop · Tablet PC · Agricultural drone 30 / 40 / 50 L",
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
    "mfr.give.t": "From APEX · VL",
    "mfr.give.1": "Indonesia local execution from Tangerang (APEX)",
    "mfr.give.2": "Korea window, customs and delivery (VL)",
    "mfr.give.3": "Orders only after specification is locked",
    "mfr.give.4": "Trial shipment, then repeat volume",
    "mfr.give.5": "Payment to company accounts only",
    "mfr.next.t": "Next step",
    "mfr.next.p": "Send item, locked spec, monthly capacity and first-lot quantity. We reply with a specification lock sheet.",
    "mfr.contact.t": "Contact",
    "mfr.disc": "General introduction only. Price, stock and schedule follow the offer at inquiry. This brief excludes internal counterparties and contract unit prices. Send it separately from the buyer profile and trade briefing.",
    "process.eyebrow": "How We Work",
    "process.title": "From inquiry to delivery",
    "process.1t": "Scope the need",
    "process.1p": "We lock item, grade or spec, volume, lead time, and install conditions first.",
    "process.2t": "Source & inspect",
    "process.2p": "We secure matching lots from domestic and overseas suppliers and check quality.",
    "process.3t": "Move & deliver",
    "process.3p": "APEX times Indonesia; VL handles Korea delivery, customs, and install.",
    "process.4t": "Keep supplying",
    "process.4p": "For repeat orders we align inventory and shipment timing; for electronics we route after-sales support.",
    "contact.eyebrow": "Contact",
    "contact.title": "Tell us the item\nand quantity",
    "contact.lead": "Send front-facing inquiries to APEX. Equal partner VL M&C oversees all Korea-side work. Resources or electronics—we reply quickly on availability and outline terms.",
    "contact.docs": "Spec sheets and catalogs are sent after you inquire.",
    "contact.person": "Contact",
    "contact.email": "Email",
    "contact.addr": "Address",
    "contact.addrv": "The Prominence Office Tower, 10F Unit H, Jl. Jalur Sutera Barat, Pinang, Tangerang, Banten 15143",
    "contact.addr.kr": "7-15, Cheongna Hannae-ro 72beon-gil, Seo-gu, Incheon, Korea",
    "form.kicker": "Inquiry",
    "form.title": "Request a quote",
    "form.name": "Name / company",
    "form.contact": "Phone or email",
    "form.contact.ph": "Phone or email",
    "form.item": "Item of interest",
    "form.optRes": "Resources",
    "form.optEle": "Electronics",
    "form.optDocs": "Documents",
    "form.msg": "Message",
    "form.msg.ph": "Spec or grade, expected quantity, lead time, etc.",
    "form.submit": "Open email inquiry",
    "form.note": "This opens an APEX mail draft. Email APEX for front-facing inquiries, or VL M&C for Korea work.",
    "form.error": "Please fill in name/company, contact, and message.",
    "form.mail.subject": "[APEX] Inquiry — {item}",
    "form.mail.body": "Name / company: {name}\nContact: {contact}\nItem: {item}\n\n{message}",
    "form.sample.prefill": "We would like to request a sample of {item}. Please advise on quantity, lead time, and installation conditions.",
    "form.catalog.prefill": "Please send the catalog and spec sheet for {item}. We will share the required specs and intended use.",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "lang.label": "Choose language",
    "brand.home": "APEX home",
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
    "form.item.profile": "Resources company profile",
    "form.item.brief": "Resources trade briefing",
    "form.item.mfr": "Manufacturer partner brief",
    "form.item.resdocs": "Resources documents",
    "form.item.other": "Other",
    "footer.blurb": "APEX is the public-facing brand. Equal partner VL M&C oversees all Korea-side work. Resources and electronics run together.",
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
    "brand.tag": "Intelligent Scenario Solutions",
    "brand.home": "Beranda APEX",
    "nav.about": "Tentang kami",
    "nav.products": "Produk",
    "nav.briefing": "Laporan",
    "nav.network": "Jaringan global",
    "nav.main": "Menu utama",
    "nav.library": "Pustaka dokumen",
    "nav.process": "Cara kerja",
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
    "prof.toc.01.d": "Struktur eksekusi ganda APEX·VL dan prinsip perdagangan",
    "prof.toc.02.t": "Data perusahaan",
    "prof.toc.02.d": "Badan hukum, pimpinan, basis, lingkup usaha, dan kontak",
    "prof.toc.03.t": "Organisasi",
    "prof.toc.03.d": "Merek depan / eksekusi Indonesia / pengawasan Korea",
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
    "prof.toc.09.d": "Kanal APEX dan VL, plus dokumen terkait",
    "brief.toc.01.t": "Ringkasan eksekutif",
    "brief.toc.01.d": "Eksekusi ganda, inspeksi dulu, spesifikasi sebagai acuan, peningkatan bertahap",
    "brief.toc.02.t": "Konteks pasar",
    "brief.toc.02.d": "Konteks permintaan skrap tembaga dan pelet kayu",
    "brief.toc.03.t": "Produk &amp; poin kontrak",
    "brief.toc.03.d": "Apa yang dikunci kontrak untuk tiap produk",
    "brief.toc.04.t": "Jaringan pengadaan",
    "brief.toc.04.d": "Kazakhstan, Perth, Kalimantan, Sulawesi, Papua, Tangerang, Incheon",
    "brief.toc.05.t": "Inspeksi &amp; pengiriman",
    "brief.toc.05.d": "Kebutuhan → pengadaan dan inspeksi → logistik → purna jual",
    "brief.toc.06.t": "Memulai transaksi",
    "brief.toc.06.d": "Tentukan kebutuhan → penawaran → pengiriman uji",
    "brief.toc.07.t": "Kontak",
    "brief.toc.07.d": "Format pertanyaan yang paling cepat dijawab",
    "p.doc.speccat": "Katalog spesifikasi sumber daya",
    "p.doc.more": "Lihat semua dokumen di pustaka",
    "lib.eyebrow": "Document Library",
    "lib.title": "Pustaka dokumen",
    "lib.lead": "Profil perusahaan, spesifikasi produk, syarat inspeksi dan perdagangan, serta formulir RFQ — dikumpulkan di satu tempat. Semua dokumen diunduh sebagai PDF.",
    "lib.new": "Baru",
    "lib.get": "Unduh PDF",
    "lib.g1": "Divisi Sumber Daya",
    "lib.g1.d": "Dokumen Divisi Sumber Daya — mutu, butir inspeksi, dan poin kontrak.",
    "lib.p1.t": "Profil perusahaan sumber daya",
    "lib.p1.d": "Ikhtisar perusahaan, organisasi dan pembagian peran, prinsip operasi, rangkaian produk, jaringan global, dan proses perdagangan ujung ke ujung.",
    "lib.p2.t": "Katalog spesifikasi sumber daya",
    "lib.p2.d": "Spesifikasi acuan, struktur mutu, butir inspeksi, satuan kemasan, dan daftar periksa pra-pengapalan untuk produk sumber daya.",
    "lib.p3.t": "Briefing perdagangan sumber daya",
    "lib.p3.d": "Konteks pasar, poin kontrak per produk, jaringan pengadaan, serta proses inspeksi dan pengiriman, diringkas untuk pembeli dan mitra.",
    "lib.g2": "Divisi Elektronik",
    "lib.g2.d": "Katalog produk, lembar spesifikasi teknis, dan brosur pabrik.",
    "lib.e1.t": "Katalog produk elektronik",
    "lib.e1.d": "Konfigurasi standar dan lingkup pasokan papan interaktif, OPS, laptop, tablet, dan drone pertanian, termasuk tender, pasokan massal, dan ekspor-impor.",
    "lib.e2.t": "Lembar spesifikasi papan interaktif",
    "lib.e2.d": "Spesifikasi acuan 86 inci 4K UHD, sentuh 40 titik, dan EDLA, opsi konfigurasi, catatan komersial, dan daftar periksa pra-pemesanan.",
    "lib.e3.t": "Brosur papan interaktif 75 inci",
    "lib.e3.d": "Brosur pabrik untuk model 75 inci.",
    "lib.e4.t": "Brosur papan interaktif 86 inci",
    "lib.e4.d": "Brosur pabrik untuk model 86 inci.",
    "lib.e5.t": "Lembar spesifikasi modul OPS",
    "lib.e5.d": "Format 80 pin standar, konfigurasi CPU, memori, dan penyimpanan, opsi Wi-Fi, dan catatan lisensi.",
    "lib.e6.t": "Lembar spesifikasi laptop",
    "lib.e6.d": "Tingkatan kantor, pendidikan, dan kinerja tinggi, dengan penawaran massal, sewa, dan opsi distribusi.",
    "lib.e7.t": "Lembar spesifikasi tablet PC",
    "lib.e7.d": "Konfigurasi Android dan Windows, opsi seluler, serta aksesori seperti casing, stand, dan kabinet pengisian daya.",
    "lib.e8.t": "Lembar spesifikasi drone pertanian",
    "lib.e8.d": "Kinerja semprot tangki 30/40/50 L dan rangka 4 atau 6 rotor, isi paket, opsi, dan syarat operasi di lapangan.",
    "lib.e9.t": "Brosur drone 30L heksakopter",
    "lib.e9.d": "Brosur pabrik untuk heksakopter 30 L.",
    "lib.e10.t": "Brosur drone 50L kuadkopter",
    "lib.e10.d": "Brosur pabrik untuk kuadkopter 50 L.",
    "lib.g3": "Umum · Operasi",
    "lib.g3.d": "Inspeksi, syarat perdagangan, dan formulir RFQ — berlaku untuk kedua divisi.",
    "lib.c1.t": "Panduan mutu dan inspeksi",
    "lib.c1.d": "Inspeksi pra-pengapalan dan pengambilan sampel, butir inspeksi per kategori, daftar periksa dokumen, dan prosedur klaim.",
    "lib.c2.t": "Syarat perdagangan",
    "lib.c2.d": "Syarat penyerahan Incoterms 2020, pembayaran, penimbangan dan penyelesaian, lead time, perizinan, dan klaim.",
    "lib.c3.t": "Formulir permintaan penawaran (RFQ)",
    "lib.c3.d": "Isi produk dan mutu, volume dan jadwal, syarat penyerahan, serta kebutuhan dokumen, lalu kirim kembali untuk memulai penawaran.",
    "lib.note": "Semua dokumen bersifat acuan umum. Harga, stok, dan jadwal pengapalan mengikuti penawaran serta hasil inspeksi pada saat pertanyaan, dan spesifikasi serta sertifikasi yang dikonfirmasi dilampirkan pada penawaran final. Jika ada yang kurang, <a href=\"#contact\">hubungi kami</a>.",
    "hero.eyebrow": "APEX Indonesia · with VL Korea",
    "hero.title1": "Sumber daya dan elektronik",
    "hero.title2": "dari Indonesia dan Korea",
    "hero.cta1": "Lihat produk",
    "hero.cta2": "Hubungi kami",
    "hero.s1": "Sumber daya · Elektronik",
    "hero.s2": "APEX Tangerang",
    "hero.s3": "Meja VL Korea",
    "strip.1t": "Sumber daya",
    "strip.1p": "Non-ferrous · Terak · Dross · Pelet kayu · Kaolin",
    "strip.2t": "Elektronik",
    "strip.2p": "Papan · OPS · Laptop · Tablet · Drone",
    "strip.3t": "APEX Indonesia",
    "strip.3p": "Eksekusi lokal di Tangerang",
    "strip.4t": "VL Korea",
    "strip.4p": "Mengawasi seluruh pekerjaan Korea",
    "about.eyebrow": "Tentang APEX",
    "about.title": "Kami mengedarkan sumber daya\ndan menempatkan teknologi di lapangan",
    "about.p1": "APEX (PT. APEX TELCOM INKO) adalah merek depan yang mengeksekusi secara lokal di Tangerang, Indonesia. VL M&amp;C adalah mitra setara dan mengawasi setiap pekerjaan yang berjalan di Korea. Bersama-sama mereka mengoperasikan Sumber Daya dan Elektronik.",
    "about.p2": "Bukan sekadar perantara. Kami mengelola spesifikasi, mutu, dan logistik bersama, menyesuaikan spek, volume, dan lead time dari pengadaan hingga pengiriman dan instalasi.",
    "about.pr1t": "Spesifikasi",
    "about.pr1p": "Mutu, spek, dan komposisi diselaraskan lebih dulu.",
    "about.pr2t": "Inspeksi",
    "about.pr2p": "Volume dan kondisi diperiksa sebelum pengiriman.",
    "about.pr3t": "Dua meja",
    "about.pr3p": "APEX menjalankan Indonesia; VL mengawasi Korea.",
    "about.cap": "APEX Tangerang dan VL Incheon bekerja dalam satu jalur.",
    "about.f1t": "Depan",
    "about.f2t": "Mitra Korea",
    "about.f3t": "Indonesia",
    "about.f3d": "Eksekusi lokal Tangerang",
    "about.f4t": "Korea",
    "about.f4d": "VL mengawasi pekerjaan Korea",
    "partner.apex.en": "Indonesia · Depan",
    "partner.apex.p": "PT. APEX TELCOM INKO. Kami mengeksekusi pengadaan, inspeksi, dan pengiriman di Indonesia. APEX adalah merek depan.",
    "partner.apex.role": "PT. APEX TELCOM INKO · eksekusi lokal",
    "partner.vl.en": "Korea · Mitra setara",
    "partner.vl.p": "Mitra setara yang mengawasi setiap tugas di sisi Korea: meja Korea, bea cukai, dan pengiriman.",
    "partner.vl.role": "Mengawasi seluruh pekerjaan sisi Korea",
    "org.eyebrow": "Organisasi",
    "org.title": "Bagan organisasi",
    "org.lead": "APEX tetap di depan. VL M&amp;C adalah mitra setara: Indonesia secara lokal, Korea melalui VL.",
    "org.company.kicker": "Depan",
    "org.company.base": "Merek depan Indonesia",
    "org.equal": "Kemitraan setara",
    "org.apex.en": "Indonesia",
    "org.apex.role": "Eksekusi lokal",
    "org.vl.en": "Mitra Korea",
    "org.vl.role": "Mengawasi pekerjaan Korea",
    "org.res.en": "Sumber daya",
    "org.res.t": "Divisi Sumber Daya",
    "org.res.1": "Pengadaan non-ferrous",
    "org.res.2": "Terak · dross · pelet kayu · kaolin",
    "org.res.3": "Kazakhstan · Perth · Kalimantan · Sulawesi · Papua",
    "org.ops.en": "Operasi",
    "org.ops.t": "Operasi dua meja",
    "org.ops.1": "APEX Indonesia lokal",
    "org.ops.2": "VL mengawasi Korea",
    "org.ops.3": "Pengadaan · inspeksi · pengiriman",
    "org.ele.en": "Elektronik",
    "org.ele.t": "Divisi Elektronik",
    "org.ele.1": "Papan interaktif · OPS",
    "org.ele.2": "Laptop · tablet · drone",
    "org.ele.3": "Pengadaan Shenzhen · instalasi",
    "prof.tag": "Profil Perusahaan · Divisi Sumber Daya",
    "prof.cover.title": "Skenario cerdas, diwujudkan",
    "prof.lead": "APEX adalah merek depan yang mengeksekusi di Tangerang, Indonesia. Mitra setara VL M&amp;C mengawasi seluruh pekerjaan sisi Korea. Kami menyesuaikan mutu, kualitas, dan logistik untuk skrap non-ferrous, terak peleburan, dross aluminium, pelet kayu industri, dan kaolin.",
    "prof.meta": "2026 · Untuk pembeli dan mitra · Tangerang · Incheon · Dar es Salaam · Jakarta",
    "prof.download": "Simpan PDF",
    "prof.about.kicker": "Tentang",
    "prof.about.t": "Perusahaan",
    "prof.about.p": "APEX (PT. APEX TELCOM INKO) adalah merek depan untuk eksekusi Indonesia. Mitra setara VL M&amp;C mengawasi seluruh pekerjaan sisi Korea. Profil ini mencakup Sumber Daya. Elektronik ada di katalog terpisah.",
    "prof.about.box": "Bukan sekadar perantara. Mutu diselaraskan lebih dulu. APEX mengeksekusi di Indonesia; VL menjalankan meja Korea, bea cukai, dan pengiriman.",
    "prof.th.field": "Butir",
    "prof.th.value": "Keterangan",
    "prof.field.name": "Nama",
    "prof.field.frontnote": "(depan)",
    "prof.field.partner": "Mitra Korea",
    "prof.field.partnote": "(mengawasi pekerjaan Korea)",
    "prof.field.apexbase": "Basis APEX",
    "prof.field.vlbase": "Basis VL",
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
    "products.eyebrow": "Produk",
    "products.title": "Yang kami pasok",
    "products.lead": "Dua ruang pamer digital: sumber daya dan elektronik. Lihat foto dan spek utama di sini; katalog dikirim setelah pertanyaan.",
    "network.eyebrow": "Jaringan Global",
    "network.title": "Jaringan pengadaan kami",
    "network.lead": "Aluminium dari Kazakhstan dan Perth, batubara dari Kalimantan, nikel dari Sulawesi, dan tembaga dari Papua. Hub pelabuhan di Dar es Salaam dan Jakarta; elektronik dari Shenzhen. APEX Tangerang mengeksekusi di Indonesia; VL Incheon mengawasi Korea.",
    "network.map.alt": "Peta dunia yang menampilkan aluminium di Kazakhstan dan Perth, batubara di Kalimantan, nikel di Sulawesi, tembaga di Papua, serta hub di Dar es Salaam, Jakarta, Shenzhen, Tangerang, dan Incheon",
    "network.legend.resource": "Pengadaan sumber daya",
    "network.legend.electronics": "Pengadaan elektronik",
    "network.legend.hub": "APEX Tangerang",
    "network.resource": "Sumber daya",
    "network.electronics": "Elektronik",
    "network.tag.resourceHub": "Hub sumber daya",
    "network.tag.electronicsHub": "Hub elektronik",
    "network.tag.apexHub": "Hub APEX",
    "network.tag.vlHub": "Hub VL",
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
    "network.tangerang.desc": "APEX. Eksekusi lokal Indonesia",
    "network.korea": "Incheon",
    "network.korea.country": "Korea",
    "network.korea.desc": "VL M&amp;C. Mengawasi seluruh pekerjaan sisi Korea",
    "network.korea.tag": "VL M&amp;C",
    "network.legend.korea": "VL Korea",
    "network.hub": "APEX",
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
    "tab.resource.sub": "Logam · Terak · Dross · Biomassa · Kaolin",
    "tab.electronic": "Elektronik",
    "tab.electronic.sub": "Papan · PC · Drone",
    "panel.res.lead": "Dari bahan baku logam dan produk samping peleburan — termasuk dross aluminium — hingga bahan bakar yang lebih bersih dan kaolin industri. Lihat foto dan spek utama; katalog dikirim setelah pertanyaan.",
    "panel.ele.lead": "Papan interaktif, modul OPS, laptop, tablet, dan drone pertanian untuk sekolah, instansi, kebun, dan perusahaan. Tinjau spek utama di ruang pamer, minta katalog lewat pertanyaan, lalu minta sampel.",
    "hall.res.kicker": "Resources Digital Showroom",
    "hall.res.t": "Ruang pamer sumber daya",
    "hall.res.d": "Pilih produk dari foto dan spek utama. Katalog dan lembar spek dikirim setelah Anda bertanya.",
    "hall.ele.kicker": "Electronics Digital Showroom",
    "hall.ele.t": "Ruang pamer elektronik",
    "hall.ele.d": "Tinjau spek utama di layar. Katalog dan lembar teknis dikirim setelah Anda bertanya.",
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
    "p.resource.kicker": "Dokumen pembeli",
    "p.doc.profile": "Profil perusahaan sumber daya",
    "p.doc.brief": "Briefing sumber daya",
    "p.doc.mfr": "Brief mitra untuk pabrik",
    "p.doc.catalog": "Katalog produk pabrik",
    "p.doc.spec": "Lembar spek teknis",
    "p.doc.brochure75": "Brosur 75 inci",
    "p.doc.brochure86": "Brosur 86 inci",
    "p.doc.drone30": "Brosur 30L 6-sumbu",
    "p.doc.drone50": "Brosur 50L 4-sumbu",
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
    "p.ask": "Tanyakan produk ini",
    "brief.tag": "APEX · Divisi Sumber Daya",
    "brief.cover.title": "Brief pasokan yang menghubungkan sumber daya ke lapangan",
    "brief.cover.meta": "APEX-RES-BRIEF · Rev. 2026.08 · Untuk pembeli dan mitra",
    "brief.download": "Unduh PDF",
    "brief.intro": "Kami mengadakan skrap tembaga, ingot aluminium, dross aluminium, terak timah dan nikel, pelet kayu, dan kaolin dari Kazakhstan, Australia, Tanzania, dan Indonesia. APEX mengeksekusi di Indonesia; VL mengawasi Korea. Harga dan stok mengikuti penawaran serta inspeksi pada saat pertanyaan.",
    "brief.s1": "Produk yang kami tangani",
    "brief.s2": "Hub pengadaan sumber daya",
    "brief.s3": "Dua meja APEX · VL",
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
    "mfr.lead": "APEX adalah merek depan yang mengeksekusi di Indonesia. Mitra setara VL M&amp;C mengawasi semua pekerjaan sisi Korea. Halaman ini untuk pabrik — pabrik elektronik dan produsen sumber daya — sebelum penawaran.",
    "mfr.s1": "Produk sumber daya",
    "mfr.s2": "Lini elektronik",
    "mfr.s3": "Indonesia · Korea",
    "mfr.s4": "Inspeksi sebelum kapal",
    "mfr.who.t": "Siapa kami",
    "mfr.apex.p": "Tangerang. Pengadaan, inspeksi, dan pengiriman lokal. Merek depan.",
    "mfr.vl.p": "Incheon. Mengawasi setiap tugas sisi Korea: jendela, bea cukai, pengiriman.",
    "mfr.range.t": "Apa yang kami adakan",
    "mfr.range.res.t": "Sumber daya",
    "mfr.range.res.p": "Skrap tembaga · ingot aluminium · dross aluminium · terak timah/nikel · pelet kayu · kaolin",
    "mfr.range.ele.t": "Elektronik",
    "mfr.range.ele.p": "Papan interaktif 65 / 75 / 86 inci · modul OPS · laptop · tablet PC · drone pertanian 30 / 40 / 50 L",
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
    "mfr.give.t": "Dari APEX · VL",
    "mfr.give.1": "Eksekusi lokal Indonesia dari Tangerang (APEX)",
    "mfr.give.2": "Jendela Korea, bea cukai, dan pengiriman (VL)",
    "mfr.give.3": "Pesanan hanya setelah spek terkunci",
    "mfr.give.4": "Pengiriman uji, lalu volume berulang",
    "mfr.give.5": "Pembayaran hanya ke rekening perusahaan",
    "mfr.next.t": "Langkah berikutnya",
    "mfr.next.p": "Kirim produk, spek terkunci, kapasitas bulanan, dan kuantitas lot pertama. Kami membalas dengan lembar kunci spek.",
    "mfr.contact.t": "Kontak",
    "mfr.disc": "Hanya pengantar umum. Harga, stok, dan jadwal mengikuti penawaran saat pertanyaan. Brief ini tidak memuat mitra internal atau harga satuan kontrak. Kirim terpisah dari profil pembeli dan briefing perdagangan.",
    "process.eyebrow": "Cara Kami Bekerja",
    "process.title": "Dari pertanyaan hingga pengiriman",
    "process.1t": "Tentukan kebutuhan",
    "process.1p": "Produk, mutu atau spek, volume, lead time, dan kondisi instalasi dikunci lebih dulu.",
    "process.2t": "Pengadaan &amp; inspeksi",
    "process.2p": "Kami mengamankan lot yang sesuai dari pemasok dalam dan luar negeri, lalu memeriksa mutu.",
    "process.3t": "Angkut &amp; kirim",
    "process.3p": "APEX mengatur waktu di Indonesia; VL menangani pengiriman Korea, bea cukai, dan instalasi.",
    "process.4t": "Pasokan berkelanjutan",
    "process.4p": "Untuk pesanan berulang kami menyelaraskan stok dan jadwal pengapalan; untuk elektronik kami menyalurkan dukungan purna jual.",
    "contact.eyebrow": "Kontak",
    "contact.title": "Sebutkan produk\ndan kuantitas",
    "contact.lead": "Kirim pertanyaan depan ke APEX. Mitra setara VL M&amp;C mengawasi seluruh pekerjaan sisi Korea. Sumber daya atau elektronik — kami membalas cepat soal ketersediaan dan kerangka syarat.",
    "contact.docs": "Lembar spek dan katalog dikirim setelah Anda bertanya.",
    "contact.person": "Kontak",
    "contact.email": "Email",
    "contact.addr": "Alamat",
    "contact.addrv": "The Prominence Office Tower, 10F Unit H, Jl. Jalur Sutera Barat, Pinang, Tangerang, Banten 15143",
    "contact.addr.kr": "7-15, Cheongna Hannae-ro 72beon-gil, Seo-gu, Incheon, Korea",
    "form.kicker": "Pertanyaan",
    "form.title": "Minta penawaran",
    "form.name": "Nama / perusahaan",
    "form.contact": "Telepon atau email",
    "form.contact.ph": "Telepon atau email",
    "form.item": "Produk yang diminati",
    "form.optRes": "Sumber daya",
    "form.optEle": "Elektronik",
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
    "form.item.profile": "Profil perusahaan sumber daya",
    "form.item.brief": "Briefing perdagangan sumber daya",
    "form.item.mfr": "Brief mitra untuk pabrik",
    "form.item.resdocs": "Dokumen sumber daya",
    "form.item.other": "Lainnya",
    "form.msg": "Pesan",
    "form.msg.ph": "Spek atau mutu, kuantitas perkiraan, lead time, dan lain-lain.",
    "form.submit": "Buka email pertanyaan",
    "form.note": "Ini membuka draf email APEX. Kirim ke APEX untuk pertanyaan depan, atau ke VL M&amp;C untuk pekerjaan Korea.",
    "form.error": "Harap isi nama/perusahaan, kontak, dan pesan.",
    "form.mail.subject": "[APEX] Pertanyaan — {item}",
    "form.mail.body": "Nama / perusahaan: {name}\nKontak: {contact}\nProduk: {item}\n\n{message}",
    "form.sample.prefill": "Kami ingin meminta sampel {item}. Mohon arahan soal kuantitas, lead time, dan kondisi instalasi.",
    "form.catalog.prefill": "Kami ingin meminta katalog dan lembar spek {item}. Kami akan menyampaikan spek dan tujuan penggunaan.",
    "menu.open": "Buka menu",
    "menu.close": "Tutup menu",
    "lang.label": "Pilih bahasa",
    "footer.blurb": "APEX adalah merek depan. Mitra setara VL M&amp;C mengawasi seluruh pekerjaan sisi Korea. Sumber daya dan elektronik dijalankan bersama.",
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
  electronic: document.getElementById("panel-electronic")
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
  drone: "electronic"
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
  const optDocs = document.getElementById("optgDocs");
  if (optRes && copy["form.optRes"]) optRes.label = copy["form.optRes"];
  if (optEle && copy["form.optEle"]) optEle.label = copy["form.optEle"];
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
