import dndnArchitecture from '../assets/dndn-architecture.png'
import poticardArchitecture from '../assets/poticard-architecture.png'
import yapleMain from '../assets/yaple-main.webp'
import yapleArchitecture from '../assets/yaple-architecture.png'
import yapleErd from '../assets/yaple-erd.png'

export const profile = {
  name: '김민규',
  englishName: 'Kim Mingyu',
  role: 'Developer',
  shortRole: 'Developer · Data Flow · Service Reliability',
  headline: '기능 뒤의 데이터 흐름과 운영 구조를 함께 고민합니다.',
  summary:
    '화면에 보이는 기능이 어떤 데이터와 연결되고, 어떤 사용자 범위에서 보여져야 하며, 반복 조회와 중복 실행을 어떻게 줄일 수 있는지까지 함께 고민하는 개발자입니다.',
  location: 'Seoul, Korea',
  github: 'https://github.com/luel1018',
  email: 'luper1018@yonsei.ac.kr',
  phone: '',
  links: [
    { label: 'GitHub', href: 'https://github.com/luel1018' },
    { label: 'Blog', href: 'https://blog.naver.com/roopre-telcham' },
    { label: 'Notion', href: 'https://app.notion.com/p/377499a1a6048016b197e347a0829d0f?source=copy_link' },
    { label: 'DnDn Service', href: 'https://www.dndn26.kro.kr' },
  ],
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Trouble', href: '#trouble' },
  { label: 'Contact', href: '#contact' },
]

export const experience = [
  {
    period: '2025.12 — 2026.06',
    title: '한화시스템 BEYOND SW CAMP',
    subtitle: '백엔드 개발자 양성과정',
    description:
      'Java, Spring Boot, JPA 기반의 웹 서비스 구조를 학습하고, 팀 프로젝트를 통해 요구사항 분석, API 설계, 데이터베이스 설계, 프론트엔드 연동, 배포와 운영 문서화까지 경험했습니다.',
  },
  {
    period: '2026',
    title: 'Team Projects',
    subtitle: 'Yaple · Poticard · DnDn',
    description:
      '초기 설계 중심 프로젝트에서 시작해 디지털 명함 플랫폼, 건설현장 통합 관리 플랫폼까지 단계적으로 진행하며 기능 구현, 성능 개선, 운영 이슈 대응 경험을 쌓았습니다.',
  },
]

export const skillGroups = [
  {
    title: 'Backend',
    items: [
      {
        name: 'Java / Spring Boot',
        description: 'REST API, 도메인 로직, 서비스 계층, 예외 응답 구조를 구현했습니다.',
      },
      {
        name: 'Spring Data JPA',
        description: '엔티티 관계, 지연 로딩, Fetch Join, EntityGraph, 트랜잭션 흐름을 다뤘습니다.',
      },
      {
        name: 'Spring Security / JWT',
        description: '역할 기반 인증 흐름과 토큰 기반 요청 처리를 경험했습니다.',
      },
      {
        name: 'MariaDB / SQL',
        description: 'ERD 설계, 더미 데이터 구성, 조회 조건 검증, 인덱스 적용 전후 비교를 진행했습니다.',
      },
    ],
  },
  {
    title: 'Frontend',
    items: [
      {
        name: 'Vue / Vite / JavaScript',
        description: 'ESG 대시보드, 기상관제, 장비 입출차 화면을 구현하고 API 응답을 화면 데이터로 가공했습니다.',
      },
      {
        name: 'React / Vite',
        description: '포트폴리오 사이트처럼 컴포넌트와 데이터 파일을 분리한 단일 페이지 구성을 다룹니다.',
      },
      {
        name: 'Axios / Router / Store',
        description: 'API 호출 로직을 분리하고 로그인 계정과 선택 현장 기준의 화면 흐름을 정리했습니다.',
      },
    ],
  },
  {
    title: 'Infra & Operation',
    items: [
      {
        name: 'Redis / Redisson',
        description: 'ESG 대시보드 캐싱과 기상·ESG 스케줄러 중복 실행 방지를 위한 분산락을 적용했습니다.',
      },
      {
        name: 'Docker / Kubernetes / Jenkins',
        description: '컨테이너 기반 배포, Jenkins 파이프라인, Blue/Green 배포 흐름을 프로젝트에서 다뤘습니다.',
      },
      {
        name: 'Prometheus / Grafana / Jaeger',
        description: '성능 테스트와 운영 상태 확인을 위해 메트릭과 트레이싱 지표를 활용했습니다.',
      },
      {
        name: 'HAProxy / MariaDB Replication',
        description: 'Yaple에서 읽기 트래픽 분산 구조와 부하테스트 기반 성능 개선 흐름을 설계했습니다.',
      },
    ],
  },
]

export const projects = [
  {
    id: 'dndn',
    order: '01',
    name: 'DnDn',
    label: 'Final Project',
    period: '2026',
    title: '건설현장 통합 관리 플랫폼',
    summary:
      '공정계획, 작업지시, 공사일보, 인력배치, 문서관리, 장비 입출차, 기상관제, ESG 대시보드를 하나의 현장 운영 흐름으로 연결한 B2B 서비스입니다.',
    role: 'ESG 대시보드 · 기상관제 · 중장비 입출차 · Redis 캐싱/분산락',
    stack: [
      'Java 17',
      'Spring Boot',
      'Spring Data JPA',
      'MariaDB',
      'Redis',
      'Redisson',
      'Vue',
      'Vite',
      'Kubernetes',
      'Jenkins',
      'Prometheus',
      'Grafana',
    ],
    links: [
      { label: 'Service', href: 'https://www.dndn26.kro.kr' },
      { label: 'GitHub', href: 'https://github.com/beyond-sw-camp/be24-fin-Intelli_J-DnDn-BE' },
    ],
    image: dndnArchitecture,
    imageAlt: 'DnDn 시스템 아키텍처',
    highlights: [
      '본사 계정은 선택한 projectId, 현장 계정은 계정에 매핑된 고정 projectId 기준으로 같은 현장 화면을 조회하도록 흐름을 정리했습니다.',
      '작업지시에 포함된 작업 위치와 장비 정보를 기상관제, 중장비 입출차, ESG 대시보드에서 함께 활용하도록 화면 데이터 흐름을 맞췄습니다.',
      'Redis 캐시와 Redisson 분산락을 적용해 반복 조회 비용과 다중 Pod 환경의 스케줄러 중복 실행 가능성을 줄였습니다.',
    ],
    responsibilities: [
      {
        title: 'ESG 대시보드',
        text: '현장 전체 점수, 작업구역별 E/S/G 점수, ESG 미션, 현장 순위, 환경 리스크를 카드형 대시보드로 구성했습니다. 운영 데이터가 없는 구역은 임의 점수가 생성되지 않도록 기준을 정리하고, 본사와 현장 계정이 같은 projectId에서 동일한 화면을 보도록 프로젝트 기준을 검토했습니다.',
      },
      {
        title: '기상관제',
        text: '기상 데이터와 작업지시, 장비 투입 데이터를 함께 사용해 현장 즉시 조치 체크리스트와 AI 위험 통제 추천을 분리했습니다. 단순 날씨 조회가 아니라 당일 작업 위험 판단을 지원하는 화면으로 구성했습니다.',
      },
      {
        title: '중장비 입출차',
        text: '작업지시에 등록된 장비 정보를 게이트 기준으로 집계하고, 공사현장별 도면 위에 게이트 위치와 투입 장비 현황을 표시했습니다. 작업지시 기반 자동 반영과 현장 수동 관리 값을 구분했습니다.',
      },
      {
        title: 'Redis 운영 보조 계층',
        text: 'Redis를 원본 저장소로 사용하지 않고, ESG 대시보드 단기 캐시와 기상·ESG 스케줄러 분산락 용도로 분리했습니다. MariaDB는 원본 데이터, Redis는 반복 조회와 중복 실행 제어를 담당하도록 역할을 나눴습니다.',
      },
    ],
    metrics: [
      { label: '담당 화면', value: '3개', detail: 'ESG · 기상 · 장비' },
      { label: 'Redis 활용', value: 'Cache + Lock', detail: '반복 조회와 중복 실행 제어' },
      { label: '배포 구조', value: 'K8s', detail: 'Blue/Green 기반 운영 흐름' },
    ],
  },
  {
    id: 'poticard',
    order: '02',
    name: 'Poticard',
    label: 'Team Project',
    period: '2026',
    title: '디지털 명함 기반 커리어 플랫폼',
    summary:
      '포트폴리오 조각을 조합해 한 장의 디지털 명함으로 표현하고, 사용자와 기업을 연결하는 커리어 플랫폼입니다.',
    role: '도메인 설계 · 기업 공고 · 커뮤니티 · 실시간 통신 구조 학습',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'OAuth2',
      'JPA',
      'MariaDB',
      'Vue',
      'Vite',
      'WebSocket',
      'STOMP',
      'SSE',
      'Web Push',
      'AWS S3',
      'PortOne',
      'Gemini API',
    ],
    links: [
      { label: 'Service', href: 'https://www.poticard.kro.kr' },
      { label: 'GitHub', href: 'https://github.com/beyond-sw-camp/be24-3rd-DevOops-Poticard' },
    ],
    image: poticardArchitecture,
    imageAlt: 'Poticard 시스템 아키텍처',
    highlights: [
      '개인 사용자와 기업 사용자의 권한을 분리하고, 디지털 명함·포트폴리오·채용 공고·커뮤니티·채팅·결제 흐름을 하나의 서비스로 설계했습니다.',
      '지원과 관심 등록처럼 동시에 요청될 수 있는 기능에서 유니크 제약과 락 기반 정합성 제어 흐름을 학습했습니다.',
      'WebSocket/STOMP, SSE, Web Push처럼 목적별 실시간 통신 방식을 구분해 사용하는 구조를 경험했습니다.',
    ],
    responsibilities: [
      {
        title: 'User & Namecard',
        text: '일반/기업 사용자, 이메일 인증, OAuth2 로그인, JWT 인증, 사용자 1:1 디지털 명함 구조를 다뤘습니다.',
      },
      {
        title: 'Portfolio & AI',
        text: '포트폴리오 작성, 섹션 관리, S3 이미지 업로드, Gemini API 기반 AI 첨삭과 기술 스택 추출 흐름을 확인했습니다.',
      },
      {
        title: 'Company & Community',
        text: '기업 공고 등록, 지원자 관리, 관심 등록, Q&A 해결 상태, 좋아요·댓글·조회수 기반 인기글 같은 도메인 로직을 정리했습니다.',
      },
      {
        title: 'Chat & Notification',
        text: 'WebSocket/STOMP 기반 채팅, SSE 알림, Web Push, WebRTC 화상 통화 구조를 기능 목적별로 분리해 이해했습니다.',
      },
    ],
    metrics: [
      { label: '핵심 도메인', value: '7개', detail: 'User · Card · Portfolio · Company · Community · Chat · Orders' },
      { label: '실시간 통신', value: 'STOMP/SSE', detail: '채팅과 알림 분리' },
      { label: '외부 연동', value: 'S3/PortOne/Gemini', detail: '파일 · 결제 · AI' },
    ],
  },
  {
    id: 'yaple',
    order: '03',
    name: 'Yaple',
    label: 'First Project',
    period: '2026',
    title: '야구 입문자를 위한 직관 메이트 플랫폼',
    summary:
      '야구 입문자가 팀과 룰을 쉽게 배우고, 직관 동행자를 안전하게 구하며, 팬들과 소통할 수 있도록 설계한 통합 웹 플랫폼입니다.',
    role: '기획 · ERD · 요구사항 · 아키텍처 · JMeter 부하테스트',
    stack: ['MariaDB', 'HAProxy', 'Prometheus', 'Grafana', 'JMeter', 'dbdiagram.io', 'GitHub Wiki'],
    links: [],
    image: yapleMain,
    imageAlt: 'Yaple 대표 이미지',
    gallery: [yapleArchitecture, yapleErd],
    highlights: [
      '야구 입문, 팀 위키, 경기 일정, 직관 메이트, 커뮤니티, 굿즈/혜택 흐름을 하나의 서비스로 설계했습니다.',
      '경기·게시글·구매내역처럼 조회 트래픽이 많은 기능을 가정해 MariaDB Master/Slave와 HAProxy 기반 읽기 분산 구조를 설계했습니다.',
      'JMeter로 주요 조회 API를 테스트하고, 인덱스 적용 전후 평균 지연과 처리량 변화를 비교했습니다.',
    ],
    responsibilities: [
      {
        title: '서비스 기획',
        text: '야구 입문자의 학습 진입장벽, 직관 동행의 안전 문제, 경기 정보와 커뮤니티의 파편화를 문제로 정의했습니다.',
      },
      {
        title: 'DB/ERD 설계',
        text: '사용자, 구단, 경기, 게시글, 리뷰, 좋아요, 직관 메이트, 결제 흐름을 테이블 관계로 정리했습니다.',
      },
      {
        title: '성능 테스트',
        text: 'JMeter를 활용해 인덱스 적용 전후의 조회 성능을 비교하고, 데이터베이스 인덱스가 응답 지연과 처리량에 미치는 영향을 확인했습니다.',
      },
    ],
    metrics: [
      { label: '서비스 축', value: '4개', detail: '학습 · 동행 · 커뮤니티 · 혜택' },
      { label: '테스트 도구', value: 'JMeter', detail: '인덱스 적용 전후 비교' },
      { label: 'DB 구조', value: 'M/S', detail: '읽기 요청 분산 설계' },
    ],
  },
]

export const troubleCases = [
  {
    project: 'DnDn',
    title: '본사와 현장 계정의 ESG 화면 기준 불일치',
    problem:
      '본사에서 선택한 현장과 현장 계정이 보는 화면은 같은 projectId라면 동일해야 했지만, URL에 남아 있는 projectId와 로그인 계정의 projectId 기준이 섞이면 다른 현장을 보는 것처럼 보일 수 있었습니다.',
    solution:
      '현장 전용 화면을 새로 만드는 방식이 아니라, 공통 ESG 화면에서 projectId 결정 기준을 명확히 해야 한다고 판단했습니다. 본사는 선택한 projectId, 현장은 로그인 계정에 매핑된 projectId를 기준으로 같은 API와 같은 화면을 사용하도록 흐름을 정리했습니다.',
    result: '역할별 화면 분리가 아니라, 같은 화면에 어떤 projectId를 넣어 조회하는지가 핵심이라는 기준을 세웠습니다.',
  },
  {
    project: 'DnDn',
    title: '기상 체크리스트와 AI 위험 추천 문구 중복',
    problem:
      '기상관제 화면에서 날씨 기준 공통 조치와 작업지시 기반 위험 추천이 비슷한 문구를 반복해 사용자가 영역별 차이를 이해하기 어려웠습니다.',
    solution:
      '체크리스트는 작업지시가 없어도 날씨만으로 확인해야 할 공통 항목으로, AI 추천은 실제 작업지시와 장비 투입 현황을 날씨와 비교한 상세 위험 항목으로 분리했습니다.',
    result: '사용자가 공통 안전 조치와 작업 기반 위험 판단을 구분해서 볼 수 있도록 화면 목적을 명확히 했습니다.',
  },
  {
    project: 'DnDn',
    title: '다중 Pod 환경의 스케줄러 중복 실행 가능성',
    problem:
      'Kubernetes에서 백엔드 Pod가 여러 개 실행되면 기상 정기 갱신과 ESG 일일마감 스케줄러가 인스턴스마다 동시에 실행될 수 있었습니다.',
    solution:
      'Redisson RLock 기반 분산락을 적용하고, 작업별 TTL을 설정해 락 미해제 상황에서도 자동 복구될 수 있도록 구성했습니다.',
    result: '외부 API 중복 호출, ESG 스냅샷 중복 생성, 캐시 무효화 중복 실행 가능성을 줄였습니다.',
  },
  {
    project: 'Poticard',
    title: '지원/관심 등록의 동시성 문제',
    problem:
      '공고 지원자 수나 관심 등록 수는 여러 사용자가 동시에 변경할 수 있어 카운트 정합성 문제가 발생할 수 있었습니다.',
    solution:
      '공고 엔티티 조회 시 비관적 락을 사용하는 흐름과, 사용자-공고 관계 테이블의 유니크 제약을 함께 적용하는 구조를 정리했습니다.',
    result: '서비스 계층 검증과 DB 제약을 함께 사용해 중복 처리와 카운트 불일치 가능성을 줄이는 방향을 학습했습니다.',
  },
]

export const activityNotes = [
  '프로젝트마다 README, Wiki, 요구사항 정의서, ERD, 트러블슈팅 문서를 남기며 구현 배경과 선택 이유를 정리했습니다.',
  '기능 구현뿐 아니라 실제 화면에서 사용자가 어떤 기준으로 정보를 이해해야 하는지까지 함께 고민했습니다.',
  '성능 개선은 감으로 판단하지 않고, JMeter/nGrinder/Grafana/Jaeger 같은 지표를 기준으로 설명하려고 했습니다.',
]
