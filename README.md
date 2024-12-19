# index
- [기술 스택](#기술-스택)
- [페이지 구성](#페이지-구성)
- [페이지별 레이아웃과 기능](#페이지별-레이아웃과-기능)
- [요구사항](#요구사항)

<br><br>
# 기술 스택

<img src="https://img.shields.io/badge/type script-3178c6?style=for-the-badge&logo=typescript&logoColor=white"> 
<img src="https://img.shields.io/badge/react-61dafb.svg?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/Next.js-%2320232a.svg?style=for-the-badge&logo=nextdotjs&logoColor=white"> 
<img src="https://img.shields.io/badge/Tailwind css-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/Tanstack query-CA4245?style=for-the-badge&logo=reactquery&logoColor=white">


<br>

### 그 외 라이브러리
- Next themes

<br><br>

# 페이지 구성

* **Home**
* **Champions**
* --**Champions/[id]**
* **Items**
* --**Items/[id]**
* **Champion Rotation**

<br><br>

# 페이지별 레이아웃과 기능

## 공통 컴포넌트
---

<p align="center">
  <img src="https://velog.velcdn.com/images/heftycornerstone/post/2e1fa7f4-09d4-42f4-ab96-97c86173a3e6/image.png" width="70%"/>
</p>
<br>

**내비게이션 바**
다른 페이지로 이동할 수 있습니다.<br>
다크모드와 라이트모드를 전환할 수 있습니다

<br><br>

## Home
---

<p align="center">
  <img src="https://velog.velcdn.com/images/heftycornerstone/post/ad6b5061-91f4-4bfe-b398-50d9f67ddfc4/image.png" width="70%"/>
</p>
<br>

간단한 사이트 안내 문구가 적혀있습니다.

<br><br>

## Champions
---

<p align="center">
  <img src="https://velog.velcdn.com/images/heftycornerstone/post/d4a31db7-2cfa-4ea5-a36d-2f33379ca840/image.png" width="70%"/>
</p>
<br>

모든 챔피언의 목록을 볼 수 있습니다.<br>
챔피언 카드를 클릭하면 상세 정보 페이지로 이동합니다.

<br>

### Champions/[id]
<p align="center">
  <img src="https://velog.velcdn.com/images/heftycornerstone/post/cb1e2d95-fef8-446e-a032-47426e214165/image.gif" width="70%"/>
</p>
<br>

챔피언에 관한 정보와 보유 스킬을 보여줍니다.

<br><br>

## Items
---
<p align="center">
  <img src="https://velog.velcdn.com/images/heftycornerstone/post/085d26a2-dd51-4208-ab1b-5fc4f545836c/image.png" width="70%"/>
</p>
<br>

모든 아이템의 목록을 볼 수 있습니다.<br>
아이템 카드를 클릭하면 상세 정보 페이지로 이동합니다.

<br>

### Items/[id]

<p align="center">
  <img src="https://velog.velcdn.com/images/heftycornerstone/post/4221a269-46f2-4f55-bfa7-13639b7b812d/image.png" width="50%"/>
</p>
<br>
아이템의 이름과 스탯 정리표를 보여줍니다.

<br><br>

## Champion Rotation
---
<p align="center">
  <img src="https://velog.velcdn.com/images/heftycornerstone/post/82ad8821-2151-4dc2-bf90-0ddd037a2487/image.png" width="70%"/>
</p>
<br>

이번주에 무료로 플레이할 수 있는 챔피언의 목록을 보여줍니다.<br>
챔피언 카드를 클릭하면 챔피언 상세 정보 페이지로 이동합니다.

<br><br>

# 요구사항

## 필수기능

**완성도**
- [x] 프로젝트 셋업 및 기본 구조 구성
- [x] API 타입 정의 및 엔드포인트 구현
- [x] 클라이언트에서 API 호출 함수 작성
- [x] 각 페이지 구현 및 렌더링 방식 적용
- [x] 레이아웃 및 네비게이션 구성
- [x] 최종 점검 및 배포

**이해도**
- [x] TIL에 트러블슈팅 과정을 기록

**우수성**
- [x]  ReadMe를 작성해 과제를 소개


## 도전기능

**완성도**
- [x] 로딩 및 에러 핸들링 고도화
- [x] 성능 최적화
- [x] 반응형 디자인 및 UI 개선
- [x] 유틸리티 타입 적극 활용
- [x] 다크 모드 기능 구현

**이해도**
- [x] 디렉토리 및 파일을 분리
- [x] 변수명 등 코드를 직관적이고 이해하기 쉽게 작성
- [x] 주석을 활용해 코드를 설명

**우수성**
- [x] 특수 상황에 대한 예외 처리를 2가지 이상 구현
- [x] 커밋 컨벤션을 지킨 커밋을 10회 이상 시행
- [x] 도전기능 과제를 모두 완성

<br>

## 기능 구현

### 도전 요구사항 구현에 관한 특이사항

### 완성도

#### 로딩 및 에러 핸들링 고도화
-각 페이지의 에러를 핸들링하기 위해 error.tsx 파일을 활용하였습니다.<br>
-루트 레이아웃의 에러를 핸들링하기 위해 global-error.tsx 파일을 활용하였습니다.

<br>

#### 성능 최적화
이미지를 로드하기 위해 Image 컴포넌트를 사용하였습니다.

<br>

#### 다크모드 
<p align="center">
  <img src="https://velog.velcdn.com/images/heftycornerstone/post/b6c3c239-5a36-44e0-8f8c-c796b6c78ef4/image.gif" width="70%"/>
</p>
<br>

기능 구현을 위해 Next themes 라이브러리를 사용하였습니다.


<br><br>

### 우수성 : 예외처리
#### 1. 404 페이지
<p align="center">
  <img src="https://velog.velcdn.com/images/heftycornerstone/post/88fb9604-bfc1-4021-b871-2cc36e7b6177/image.png" width="60%"/>
</p>
<br>

존재하지 않는 페이지를 요청하면 404 페이지로 이동합니다.

#### 2. 상세정보 페이지에서 특정 항목의 데이터가 없을 때
<p align="center">
  <img src="https://velog.velcdn.com/images/heftycornerstone/post/6a179675-96be-4324-9eb4-92013d666f36/image.png" width="60%"/>
</p>
<p align="center">
  <img src="https://velog.velcdn.com/images/heftycornerstone/post/0f1b055b-204e-4571-8b87-c8bc6e04bbae/image.png" width="40%"/>
</p>
<br>

챔피언 및 아이템 상세정보 페이지에서 특정 항목의 데이터가 없을 때<br>
아직 데이터가 등록되지 않았다는 문구를 보여줍니다.
