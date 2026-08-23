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
    "hero.title1": "시나리오를",
    "hero.title2": "실행합니다",
    "hero.lead": "비철금속·슬래그·드로스·우드펠릿을 다루는 <b>자원파트</b>와 전자칠판·OPS·노트북·태블릿PC·농업용 드론을 공급하는 <b>전자파트</b>. 전면은 <b>APEX</b>입니다. 인도네시아 현지는 APEX가 실행하고, 한국에서 진행하는 모든 업무는 동등 파트너 <b>VL M&C</b>가 총괄합니다.",
    "hero.cta1": "취급 품목 보기",
    "hero.cta2": "견적 상담",
    "hero.s1": "자원파트 · 전자파트",
    "hero.s2": "APEX 탄게랑",
    "hero.s3": "VL 한국 총괄",
    "strip.1t": "자원파트",
    "strip.1p": "비철금속 · 제련 슬래그 · 드로스 · 우드펠릿",
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
    "about.f1d": "President & CEO",
    "about.f2t": "한국 파트너",
    "about.f2d": "탄게랑, 인도네시아",
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
    "org.dir.en": "President & CEO",
    "org.dir.role": "대표이사",
    "org.res.en": "Resources",
    "org.res.t": "자원파트",
    "org.res.1": "비철금속 소싱",
    "org.res.2": "슬래그 · 드로스 · 우드펠릿",
    "org.res.3": "다르에스살람 · 자카르타",
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
    "about.doc.kicker": "Company Profile",
    "about.doc.note": "품목·거점·거래 방식을 정리한 소개서와, 시장 맥락을 담은 공개 브리핑입니다. 바이어·파트너에게 그대로 전달해도 됩니다.",
    "prof.tag": "Company Profile · Resources Division",
    "prof.cover.title": "시나리오를 실행합니다",
    "prof.lead": "전면 브랜드 APEX가 인도네시아 탄게랑에서 현지 실행하고, 한국 업무는 동등 파트너 VL M&C가 총괄합니다. 비철금속 스크랩, 제련 슬래그, 알루미늄 드로스, 산업용 우드펠릿을 규격·품질·물류와 함께 맞춥니다.",
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
    "prof.rule.t": "운영 원칙",
    "prof.rule.1p": "ISRI 등 국제 통용 등급, 성분표, 수분·이물 기준을 계약 조건으로 확정합니다.",
    "prof.rule.2p": "선적 전 검사와 필요 시 양륙지 재검정을 전제로 합니다. 서류만으로 물량을 확정하지 않습니다.",
    "prof.rule.3p": "인도네시아 일정은 APEX가, 한국 납품·통관은 VL이 맞춥니다. 반복 공급은 선적 캘린더로 관리합니다.",
    "prof.prod.t": "취급 품목",
    "prof.th.hs": "영문 / 대표 HS",
    "prof.th.desc": "설명",
    "prof.th.point": "공급 포인트",
    "prof.hs.note": "HS 코드는 대표 분류입니다. 실제 통관 코드는 성상·가공도·원산지에 따라 사전 확인합니다. 슬래그·스크랩·드로스는 수출국 허가와 한국 폐기물·순환자원 해당 여부를 거래 전에 검토합니다.",
    "prof.trade.t": "거래 방식",
    "prof.trade.1": "B2B 수출입. 제련·신동·재활용·발전 등 실수요처와 수입상사에 공급합니다.",
    "prof.trade.2": "Incoterms 2020 기준으로 CIF, FCA 등 조건과 검사·정산 시점을 계약에 명시합니다.",
    "prof.trade.3": "첫 거래는 시험 선적 후 반복 물량으로 확대하는 것을 권장합니다.",
    "prof.trade.4": "대금은 법인 계좌로만 수수하며, 선적 전 검사와 서류 대조를 지급 조건에 연결합니다.",
    "prof.net.p": "자원은 탄자니아 다르에스살람과 인도네시아 자카르타에서 소싱합니다. 인도네시아 현지는 APEX 탄게랑이, 한국 업무는 VL 인천이 총괄합니다. 전자기기는 중국 선전에서 별도 소싱합니다.",
    "prof.th.hub": "거점",
    "prof.th.country": "국가",
    "prof.th.role": "역할",
    "prof.how.1p": "품목과 등급·사양, 물량, 납기, 인도 조건을 기준으로 요구사항을 정리합니다.",
    "prof.how.2p": "국내외 공급망에서 규격에 맞는 물량을 확보하고, 지정 검사기관으로 품질·중량을 확인합니다.",
    "prof.how.3p": "인도네시아 현지 일정은 APEX가, 한국 납품·통관은 VL이 맞춥니다. 수출 서류·원산지·봉인 정보를 함께 넘깁니다.",
    "prof.how.4p": "반복 공급은 재고·선적 일정을 함께 맞추고, 클레임 기한과 정산 산식을 계약에 남겨 둡니다.",
    "prof.ask.t": "문의 시 알려 주시면 빠른 회신이 가능합니다",
    "prof.ask.1": "품목과 희망 등급 (예: 밀베리, ADC12, DR50 드로스, Sn 함량, 산업용 펠릿 I등급)",
    "prof.ask.2": "예상 수량과 납기",
    "prof.ask.3": "인도 항구 또는 국내 도착지",
    "prof.ask.4": "필요 서류 (COA, SGS, 원산지증명 등)",
    "prof.disc": "본 소개서는 일반 안내입니다. 가격·재고·선적 일정은 문의 시점의 오퍼와 검사 결과에 따릅니다. 품목별 수출입 인허가는 계약 전 관세사 및 현지 규정으로 확인합니다.",
    "div.res.en": "Resources Division",
    "div.res.t": "자원파트",
    "div.res.d": "구리 스크랩 · 알루미늄 잉곳 · 알루미늄 드로스 · 주석/니켈 슬래그 · 우드펠릿",
    "div.res.a": "자원 품목 보기",
    "div.ele.en": "Electronics Division",
    "div.ele.t": "전자파트",
    "div.ele.d": "전자칠판 · OPS 모듈 · 노트북 · 태블릿PC · 농업용 드론",
    "div.ele.a": "전자 품목 보기",
    "products.eyebrow": "Products",
    "products.title": "취급 품목",
    "products.lead": "자원파트와 전자파트, 두 갈래로 나누어 취급합니다. 탭을 눌러 확인해 주세요.",
    "network.eyebrow": "Global Network",
    "network.title": "글로벌 소싱 네트워크",
    "network.lead": "자원은 탄자니아 다르에스살람과 인도네시아 자카르타에서, 전자기기는 중국 선전에서 소싱합니다. 인도네시아 현지는 APEX 탄게랑이, 한국 업무는 VL 인천이 총괄합니다.",
    "network.map.alt": "다르에스살람, 자카르타 자원 거점과 선전 전자 거점, APEX 탄게랑과 VL 인천을 표시한 세계 지도",
    "network.legend.resource": "자원 공급 거점",
    "network.legend.electronics": "전자 공급 거점",
    "network.legend.hub": "APEX 탄게랑",
    "network.resource": "Resources",
    "network.electronics": "Electronics",
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
    "tab.resource": "자원파트",
    "tab.resource.sub": "Resources",
    "tab.electronic": "전자파트",
    "tab.electronic.sub": "Electronics",
    "panel.res.lead": "금속 원료부터 제련 부산물·드로스, 친환경 연료까지. 산업 현장에서 바로 쓰이는 자원을 공급합니다.",
    "panel.ele.lead": "전자칠판과 OPS 모듈, 노트북, 태블릿PC, 농업용 드론을 교육기관·관공서·농장·기업에 공급합니다. 핵심 사양은 디지털 쇼룸에서 확인하고, 카탈로그·기술 명세서를 내려받은 뒤 샘플을 요청할 수 있습니다.",
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
    "brief.eyebrow": "Resources Briefing",
    "brief.title": "자원무역 브리핑",
    "brief.lead": "2026년 8월 기준, 취급 품목과 시장 맥락, 소싱 거점, 검수·인도 방식을 정리한 공개 보고서입니다.",
    "brief.tag": "APEX · Resources Division",
    "brief.cover.title": "자원과 현장을 연결하는 공급 브리핑",
    "brief.cover.meta": "APEX-RES-BRIEF-20260820 · 2026.08.20 · 바이어·파트너 배포용",
    "brief.download": "보고서 PDF",
    "brief.intro": "구리 스크랩, 알루미늄 잉곳, 알루미늄 드로스, 주석·니켈 슬래그, 우드펠릿을 탄자니아·인도네시아에서 소싱합니다. 인도네시아 현지는 APEX가, 한국 업무는 VL이 총괄합니다. 가격·재고는 문의 시점의 오퍼와 검사 결과에 따릅니다.",
    "brief.s1": "취급 품목",
    "brief.s2": "자원 소싱 거점",
    "brief.s3": "APEX · VL 이원 운영",
    "brief.s4": "시험 선적 후 확대",
    "brief.market.t": "시장 맥락",
    "brief.cu.t": "구리 스크랩",
    "brief.cu.p": "한국 HS 7404 수입은 2025년 약 32.3만 톤, 2026년 상반기 약 17.6만 톤입니다. 전선·밀베리 등 국제 등급과 수분·이물이 거래의 핵심입니다.",
    "brief.wood.t": "우드펠릿",
    "brief.wood.p": "2025년 한국 수입 약 392.9만 톤. 인도네시아산은 약 90만 톤(23%)으로 주요 원산지입니다. 함수율·발열량·회분을 계약 조건으로 맞춥니다.",
    "brief.items.t": "취급 품목",
    "brief.th.item": "품목",
    "brief.th.use": "쓰임",
    "brief.th.spec": "계약에서 맞추는 것",
    "brief.cu.use": "전기·건설·제조 비철 원료",
    "brief.cu.spec": "ISRI 등급 · 수분·이물 · 이중 검사",
    "brief.alu.use": "다이캐스팅·주조 재생 잉곳",
    "brief.alu.spec": "ADC12 등 성분표 · 로트 연속성",
    "brief.dross.use": "2차 알루미늄 회수 원료",
    "brief.dross.spec": "금속 Al(DR) · 화이트/블랙 · 성분표",
    "brief.tin.use": "Sn 및 유가금속 회수 원료",
    "brief.tin.spec": "함량 · 중량 정산 · 인허가",
    "brief.nick.use": "스테인리스·합금 원료 회수",
    "brief.nick.spec": "성상 확정 · 습식 분석",
    "brief.wood.use": "산업·발전용 바이오매스 연료",
    "brief.wood.spec": "함수율 · 발열량 · COA·원산지",
    "brief.how.t": "검수와 인도",
    "brief.how.1t": "수요 파악",
    "brief.how.1p": "등급·사양, 물량, 납기, 인도 조건을 먼저 확정합니다.",
    "brief.how.2t": "소싱 · 검수",
    "brief.how.2p": "지정 검사기관으로 품질·중량을 확인합니다. 서류만으로 물량을 확정하지 않습니다.",
    "brief.how.3t": "물류 · 인도",
    "brief.how.3p": "Incoterms를 명시하고, 인도네시아 일정은 APEX가, 한국 납품은 VL이 맞춥니다.",
    "brief.how.4t": "사후 관리",
    "brief.how.4p": "반복 공급은 선적 캘린더로, 클레임·정산은 계약에 남깁니다.",
    "brief.disclaimer": "공개 브리핑이며 내부 거래 상대·계약 단가는 포함하지 않습니다. 회사 소개서와 함께 전달해도 됩니다.",
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
    "form.msg": "문의 내용",
    "form.msg.ph": "사양·등급, 예상 수량, 납기 등을 적어 주세요.",
    "form.submit": "메일로 문의 보내기",
    "form.note": "전송 시 APEX 메일 앱이 열립니다. 전면 문의는 APEX, 한국 업무는 VL M&C 이메일로 연락해 주세요.",
    "form.error": "성함/회사, 연락처, 문의 내용을 모두 입력해 주세요.",
    "form.mail.subject": "[APEX] {item} 문의",
    "form.mail.body": "성함/회사: {name}\n연락처: {contact}\n관심 품목: {item}\n\n{message}",
    "form.sample.prefill": "{item} 샘플을 요청합니다. 수량, 납기, 설치 환경을 협의하고 싶습니다.",
    "menu.open": "메뉴 열기",
    "menu.close": "메뉴 닫기",
    "lang.label": "Switch to English",
    "footer.blurb": "전면은 APEX, 한국 업무는 동등 파트너 VL M&C가 총괄합니다. 자원 트레이딩과 전자기기 솔루션을 함께 운영합니다.",
    "footer.explore": "바로가기",
    "footer.contact": "연락처",
    "footer.top": "맨 위로"
  },
  en: {
    skip: "Skip to content",
    "brand.tag": "Intelligent Scenario Solutions",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.briefing": "Reports",
    "nav.network": "Global Network",
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
    "hero.title1": "Intelligent scenarios",
    "hero.title2": "made real",
    "hero.lead": "A <b>Resources Division</b> for non-ferrous scrap, smelting slag, aluminum dross, and wood pellets, and an <b>Electronics Division</b> for interactive displays, OPS, laptops, tablets, and agricultural drones. <b>APEX</b> is the public-facing brand. APEX executes in Indonesia; equal partner <b>VL M&C</b> oversees all Korea-side work.",
    "hero.cta1": "View products",
    "hero.cta2": "Talk to us",
    "hero.s1": "Resources · Electronics",
    "hero.s2": "APEX Tangerang",
    "hero.s3": "VL Korea desk",
    "strip.1t": "Resources",
    "strip.1p": "Non-ferrous · Slag · Dross · Wood pellets",
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
    "about.f1d": "President & CEO",
    "about.f2t": "Korea partner",
    "about.f2d": "Tangerang, Indonesia",
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
    "org.dir.en": "President & CEO",
    "org.dir.role": "CEO",
    "org.res.en": "Resources",
    "org.res.t": "Resources Division",
    "org.res.1": "Non-ferrous sourcing",
    "org.res.2": "Slag · dross · wood pellets",
    "org.res.3": "Dar es Salaam · Jakarta",
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
    "about.doc.kicker": "Company Profile",
    "about.doc.note": "A company profile plus a public market briefing. Suitable to forward to buyers and partners.",
    "prof.tag": "Company Profile · Resources Division",
    "prof.cover.title": "Intelligent scenarios, made real",
    "prof.lead": "APEX is the public-facing brand executing in Tangerang, Indonesia. Equal partner VL M&C oversees all Korea-side work. We match grade, quality, and logistics for non-ferrous scrap, smelting slag, aluminum dross, and industrial wood pellets.",
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
    "prof.rule.t": "How we operate",
    "prof.rule.1p": "International grades such as ISRI, spec sheets, and moisture/impurity limits are locked as contract terms.",
    "prof.rule.2p": "Pre-shipment inspection, and destination re-inspection when needed. Paper alone does not lock a lot.",
    "prof.rule.3p": "APEX times Indonesia; VL handles Korea delivery and customs. Repeat supply follows a shipment calendar.",
    "prof.prod.t": "What we supply",
    "prof.th.hs": "English / typical HS",
    "prof.th.desc": "Description",
    "prof.th.point": "What we match",
    "prof.hs.note": "HS codes are typical classifications. Actual customs codes depend on form, processing, and origin. Slag, scrap, and dross are reviewed for export permits and Korean waste/circular-resource status before a deal.",
    "prof.trade.t": "How we trade",
    "prof.trade.1": "B2B import/export to smelters, mills, recyclers, power plants, and trading houses.",
    "prof.trade.2": "Contracts name Incoterms 2020 such as CIF or FCA, plus inspection and settlement timing.",
    "prof.trade.3": "First lots are trial shipments, then repeat volume.",
    "prof.trade.4": "Payment is corporate-to-corporate only, tied to pre-shipment inspection and document checks.",
    "prof.net.p": "We source resources from Dar es Salaam and Jakarta. APEX Tangerang executes in Indonesia; VL Incheon oversees Korea. Electronics are sourced from Shenzhen.",
    "prof.th.hub": "Hub",
    "prof.th.country": "Country",
    "prof.th.role": "Role",
    "prof.how.1p": "We lock item, grade or spec, volume, lead time, and delivery terms first.",
    "prof.how.2p": "We secure matching lots from domestic and overseas suppliers and confirm quality and weight with a nominated inspector.",
    "prof.how.3p": "APEX times Indonesia; VL handles Korea delivery and customs. Export documents, origin, and seal data travel with the lot.",
    "prof.how.4p": "Repeat supply aligns inventory and shipment timing. Claim windows and settlement formulas stay in the contract.",
    "prof.ask.t": "Tell us these and we can reply faster",
    "prof.ask.1": "Item and preferred grade (e.g. millberry, ADC12, DR50 dross, Sn content, industrial pellet I-grade)",
    "prof.ask.2": "Expected quantity and lead time",
    "prof.ask.3": "Discharge port or inland destination",
    "prof.ask.4": "Documents needed (COA, SGS, certificate of origin, etc.)",
    "prof.disc": "This profile is general guidance. Price, stock, and shipment timing follow the offer and inspection at inquiry. Import/export permits are confirmed with a customs broker and local rules before contract.",
    "div.res.en": "Metals · Slag · Biomass",
    "div.res.t": "Resources Division",
    "div.res.d": "Copper scrap · Aluminum ingot · Aluminum dross · Tin/Nickel slag · Wood pellets",
    "div.res.a": "View resource items",
    "div.ele.en": "Displays · PCs · Drones",
    "div.ele.t": "Electronics Division",
    "div.ele.d": "Interactive displays · OPS modules · Laptops · Tablets · Agricultural drones",
    "div.ele.a": "View electronic items",
    "products.eyebrow": "Products",
    "products.title": "What we supply",
    "products.lead": "Two divisions, two catalogues. Use the tabs below.",
    "network.eyebrow": "Global Network",
    "network.title": "Our sourcing network",
    "network.lead": "We source resources from Dar es Salaam and Jakarta, and electronics from Shenzhen. APEX Tangerang executes in Indonesia; VL Incheon oversees Korea.",
    "network.map.alt": "World map showing resource hubs in Dar es Salaam and Jakarta, electronics in Shenzhen, APEX in Tangerang, and VL in Incheon",
    "network.legend.resource": "Resource sourcing",
    "network.legend.electronics": "Electronics sourcing",
    "network.legend.hub": "APEX Tangerang",
    "network.resource": "Resources",
    "network.electronics": "Electronics",
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
    "tab.resource": "Resources",
    "tab.resource.sub": "Metals · Slag · Dross · Biomass",
    "tab.electronic": "Electronics",
    "tab.electronic.sub": "Displays · PCs · Drones",
    "panel.res.lead": "From metal feedstock and smelting by-products — including aluminum dross — to cleaner fuel, we supply materials that plants can use right away.",
    "panel.ele.lead": "Interactive flat panels, OPS modules, laptops, tablets, and agricultural drones for schools, public offices, farms, and companies. Review key specs in the digital showroom, download the catalog and spec sheet, then request a sample.",
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
    "brief.eyebrow": "Resources Briefing",
    "brief.title": "Resources briefing",
    "brief.lead": "A public brief as of August 2026: items we supply, market context, sourcing hubs, and how we inspect and deliver.",
    "brief.tag": "APEX · Resources Division",
    "brief.cover.title": "A supply brief that connects resources to the field",
    "brief.cover.meta": "APEX-RES-BRIEF-20260820 · 20 Aug 2026 · For buyers and partners",
    "brief.download": "Download PDF",
    "brief.intro": "We source copper scrap, aluminum ingot, aluminum dross, tin and nickel slag, and wood pellets from Tanzania and Indonesia. APEX executes in Indonesia; VL oversees Korea. Price and stock follow the offer and inspection at inquiry.",
    "brief.s1": "Items we handle",
    "brief.s2": "Resource sourcing hubs",
    "brief.s3": "APEX · VL two desks",
    "brief.s4": "Trial lot, then scale",
    "brief.market.t": "Market context",
    "brief.cu.t": "Copper scrap",
    "brief.cu.p": "Korea imported about 323,000 MT of HS 7404 in 2025 and about 176,000 MT in H1 2026. International grades such as wire and millberry, plus moisture and impurity control, sit at the center of the trade.",
    "brief.wood.t": "Wood pellets",
    "brief.wood.p": "Korea imported about 3.93 million MT in 2025. Indonesia supplied about 900,000 MT (23%) and is a core origin. Moisture, calorific value, and ash become contract terms.",
    "brief.items.t": "What we supply",
    "brief.th.item": "Item",
    "brief.th.use": "Use",
    "brief.th.spec": "What the contract locks",
    "brief.cu.use": "Non-ferrous feedstock for electrical, construction, and manufacturing",
    "brief.cu.spec": "ISRI grade · moisture/impurity · dual inspection",
    "brief.alu.use": "Recycled ingot for die-casting and foundry",
    "brief.alu.spec": "ADC12 and spec sheets · lot continuity",
    "brief.dross.use": "Feedstock for secondary aluminum recovery",
    "brief.dross.spec": "Metallic Al (DR) · white/black · spec sheet",
    "brief.tin.use": "Feedstock for recovering tin and other metals",
    "brief.tin.spec": "Sn content · weight settlement · permits",
    "brief.nick.use": "Stainless and alloy recovery",
    "brief.nick.spec": "Form confirmation · wet analysis",
    "brief.wood.use": "Industrial and power biomass fuel",
    "brief.wood.spec": "Moisture · calorific value · COA and origin",
    "brief.how.t": "Inspect and deliver",
    "brief.how.1t": "Scope the need",
    "brief.how.1p": "Grade or spec, volume, lead time, and delivery terms come first.",
    "brief.how.2t": "Source & inspect",
    "brief.how.2p": "A nominated inspector confirms quality and weight. Paper alone does not lock a lot.",
    "brief.how.3t": "Move & deliver",
    "brief.how.3p": "We name Incoterms. APEX times Indonesia; VL handles Korea delivery.",
    "brief.how.4t": "Keep supplying",
    "brief.how.4p": "Repeat lots follow a shipment calendar; claims and settlement stay in the contract.",
    "brief.disclaimer": "This is a public brief and does not include counterparties or contract prices. It can be forwarded with the company profile.",
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
    "form.msg": "Message",
    "form.msg.ph": "Spec or grade, expected quantity, lead time, etc.",
    "form.submit": "Open email inquiry",
    "form.note": "This opens an APEX mail draft. Email APEX for front-facing inquiries, or VL M&C for Korea work.",
    "form.error": "Please fill in name/company, contact, and message.",
    "form.mail.subject": "[APEX] Inquiry — {item}",
    "form.mail.body": "Name / company: {name}\nContact: {contact}\nItem: {item}\n\n{message}",
    "form.sample.prefill": "We would like to request a sample of {item}. Please advise on quantity, lead time, and installation conditions.",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "lang.label": "한국어로 전환",
    "footer.blurb": "APEX is the public-facing brand. Equal partner VL M&C oversees all Korea-side work. Resources and electronics run together.",
    "footer.explore": "Explore",
    "footer.contact": "Contact",
    "footer.top": "Back to top"
  }
};

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const overlay = document.getElementById("navOverlay");
const menuBtn = document.getElementById("menuBtn");
const langToggle = document.getElementById("langToggle");
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
  eboard: "electronic",
  ops: "electronic",
  laptop: "electronic",
  tablet: "electronic",
  drone: "electronic"
};

let lang = localStorage.getItem(LANG_KEY) || "ko";
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
  briefing: document.getElementById("sheet-briefing")
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
  if (id === "briefing") {
    activateSheet("briefing");
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
} else if (location.hash && itemPart[location.hash.replace("#", "")]) {
  activateTab(itemPart[location.hash.replace("#", "")]);
  requestAnimationFrame(() => goToItem(location.hash));
}

/* ---------- i18n ---------- */
function dict() {
  return i18n[lang] || i18n.ko;
}

function applyLang(next) {
  lang = next;
  const copy = dict();
  document.documentElement.lang = next === "en" ? "en" : "ko";
  langToggle.textContent = next === "ko" ? "EN" : "KR";
  langToggle.setAttribute("aria-pressed", String(next === "en"));
  langToggle.setAttribute("aria-label", copy["lang.label"]);
  menuBtn.setAttribute("aria-label", copy[menuOpen ? "menu.close" : "menu.open"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = copy[el.getAttribute("data-i18n")];
    if (!value) return;
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

  const optRes = document.getElementById("optgResource");
  const optEle = document.getElementById("optgElectronic");
  if (optRes && copy["form.optRes"]) optRes.label = copy["form.optRes"];
  if (optEle && copy["form.optEle"]) optEle.label = copy["form.optEle"];
}

applyLang(lang);

langToggle.addEventListener("click", () => {
  const next = lang === "ko" ? "en" : "ko";
  localStorage.setItem(LANG_KEY, next);
  applyLang(next);
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

document.querySelectorAll("[data-item]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const select = document.getElementById("itemSelect");
    if (select) select.value = btn.dataset.item;
    const message = form?.elements.namedItem("message");
    if (btn.dataset.intent === "sample" && message && !String(message.value || "").trim()) {
      message.value = fillTemplate(dict()["form.sample.prefill"] || "", {
        item: btn.dataset.item
      });
    }
    document.getElementById("contact")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth"
    });
    form.elements.namedItem("name")?.focus();
  });
});
