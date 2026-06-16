# 김민규 Portfolio

김민규의 GitHub Pages 포트폴리오 사이트입니다.

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 구조

```text
src
├─ assets      # 프로젝트 이미지
├─ components  # 화면 섹션 컴포넌트
├─ data        # 포트폴리오 문구와 프로젝트 데이터
├─ App.jsx
├─ main.jsx
└─ styles.css
```

## 수정 포인트

- 프로필/연락처: `src/data/portfolio.js`의 `profile`
- 프로젝트 내용: `src/data/portfolio.js`의 `projects`
- 디자인: `src/styles.css`
- 배포: `.github/workflows/deploy.yml`

## 배포

이 레포지토리는 `luel1018.github.io` 사용자 페이지 용도입니다. GitHub Pages 설정에서 Source를 `GitHub Actions`로 지정하면 `main` 브랜치 push 시 자동 배포됩니다.
