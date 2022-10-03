## Release
- `0.0.40`
    - [ED-240] 수강신청이 안되는 버그 픽스
    - [ED-235] 수강완료를 위한 설문조사내의 객관식 추가
    - [ED-230] 강의 수강 설문 미작성시에도 진척률 달성 버그 수정, 강의 수강 설문 작성 후 다음강의 영상으로 바로 이동하도록 변경
    - 결제페이지에서 이미 수강신청 완료한 강의 수강신청되지 않도록 수정

- `0.0.39`
    - 강의 시청 페이지에서 현재 에피소드의 제목을 알 수 있도록 처리
    - 수강 완료 버튼 클릭 후 강의실 페이지에서 `이어서 수강하기` 및 `다음 강의` 업데이트 되지 않는 버그 픽스
    - EduTech 문구 Super Coding으로 변경

- `0.0.38`
    - CI/CD 빌드과정중 warning을 에러로 취급하지 않도록 변경

- `0.0.37`
    - 강의 페이지 무한루프 버그 픽스

- `0.0.36`
    - 강의 길이(시간) 표기 오류 이슈 수정
    - 강좌 페이지 수강완료 체커 랜더링 이슈 수정
    - FE에서 보이는 서비스명 변경 (EduTech -> Super Coding)
    - 로그인 하지 않은 상태에서 헤더 강의실 버튼 클릭시 모달이 나타나는 버그 수정
    - 수강신청이 되지 않는 오류 수정

- `0.0.35`
    - 결제페이지 수강하기 버튼 클릭 후 강의실 페이지에서 수강현황 확인안되는 이슈 수정
    - 코스로드맵 페이지에서 수강신청된 강의 수강신청하기 클릭시 결제페이지로 진입하지 않고, 강의실 페이지로 바로 이동하도록 변경

- `0.0.34`
    - 결제 페이지 구매/수강하기 버튼 UI 변경
    - 강좌 페이지에서 라운지 입장 버튼 클릭시 `서비스 준비중입니다.` alert 나오도록 변경
    - API 서버 프로덕션 환경으로 설정

- `0.0.33`
    - 러닝커브 차트 코스로드맵 페이지, 강의 페이지 추가
    - 코스로드맵 페이지 UI 변경
    - 헤더에 이력서 기능 추가
    - vertical 탐색바 UI 제거
    - 개발 전 기능에 대해서 `서비스 준비중입니다.` alert 나오도록 변경
    - 무료 코스에 대해서 결제 프로세스 진행되지 않도록 플로우 변경
    - 수강완료 후 설문 페이지 form 컴포넌트 추가

- `0.0.32`
    - 기존에 가입한 이메일로 회원가입 시도 후, 회원가입 버튼이 동작하지 않는 버그 수정

- `0.0.31`
    - 강의바구니 컴포넌트 추가
    -  구매자정보 수정 기능 및 컴포넌트 추가

- `0.0.30`
    - 코스 로드맵 페이지에 `수강신청 하기` 버튼 추가
    - 결제 페이지 추가
    - 구매자 정보 컴포넌트 추가
    - 결제정보 컴포넌트 추가
    - 결제방식 선택 모달 추가

- `0.0.29`
    - 에피소드 단위의 강의 이어보기 기능 추가(가장 마지막으로 재생한 에피소드가 이어보기 됨)
    - 강좌페이지 복습하기 버튼 삭제
    - 강좌페이지 다음강의 바로가기 링크 추가
    - 강좌페이지 특정 에피스도 클릭시 강의 시청 페이지 랜더링
    - 강좌페이지 수강완료여부 표시
    - 테이블 row 데이터은 Toggle 값에 따라 렌더링 여부 결정

- `0.0.28`
    - 강의 시청 페이지 기능 추가
      - 선택(클릭) 에피소드를 바로 시청할 수 있는 기능
      - 클릭 가능한 컴포넌트 및 요소를 포인터로 직관적으로 표현
    - 강의 시청 페이지 버그 수정
      - 다음 에피소드 강의 제목 랜더링 이슈
      - 시즌별 에피소드 랜더링 이슈
      - 토글바를 펼쳤을때, 영상 플레이어가 함께 늘어나는 이슈
    - 데이터 전처리용 함수 분리(`utils/common.ts`)
    - 강의 시청 페이지 라우터 미연결 이슈 수정
    - 로그인하지 않은 상황에서 수강중인 강의가 없다는 모달이 나타나는 이슈 수정
    - 강좌 페이지 강의 에피소드 테이블 추가(단 토글 기능 미적용)
    - 강좌 페이지 로그아웃시 로그인 컴포넌트 보여주는 뷰로직 추가
    - 토글 기능 있는 테이블 컴포넌트 추가

- `0.0.27`
    - 미사용 스크립트 제거(`CourseGrid.tsx`, `UserPage.tsx`, `MyCourses.tsx`, `Course.tsx`)
    - 수강중인 강의가 없을시 `수강중인 강의가 없습니다.` 모달 나타나도록 수정
    - 강의실 페이지 코스 탐색하기 가기로 되어 있는 문구 수정
    - Feed Repository getFeeds 메서드 인자 추가
    - `scripts/deploy.sh` 파일에서 staging, production 환경별로 다른 포트 사용하도록 수정
    - 회원가입 비밀번호 자리수 조건 6자리 이상 15자리 이하로 수정

- `0.0.26`:
    - 피드 API 연동
    - 강의실 페이지 기능 추가
      - 이어서 수강하기 버튼
    - 강좌 페이지 수정
    - 강의 시청 페이지 레이아웃 컴포넌트 수정
    - 강의 시청 페이지, toogle 추가
    - 코드 로드맵 페이지 레이아웃 컴포넌트 수정
    - 비디오 플레이어 라이브러리 VideoJs에서 react-player로 변경
    - 로그인 정보 유효성 확인 로직 추가(auth/me API 연동)
    - Feed, Auth repository 클래스 추가
    - UserProfile interface IUserProfile로 명칭 변경
    - Overview 페이지 및 컴포넌트 Feed로 명칭 변경
    - 설문 페이지 추가

- `0.0.25`:
    - 코스 로드맵 페이지 추가
    - 강의실 페이지 추가
    - 헤더 수정
    - vertical Bar 구성 항목 변경
    - 비디오 컴포넌트 추가
    - 회원가입 컴포넌트 헤더 컴포넌트에서 제외, 회원가입 기능은 일시 중단
    - user@gamil.com으로 로그인 되도록 수정
    - 비밀번호 6자이상 10자 이하 글자수 제한
    
- `0.0.24`: ServiceFlow Musthave
    - 커리어 관련 컴포넌트 추가
    - 커리어 페이지 추가
    - 개별 코스 페이지 추가
    - 수강중인 코스 페이지 추가
    - UserProfile 객체 필드 변경(firstName, lastName 필드 삭제 => name 추가)
    - Settings 페이지 한글화
    - 결제 버튼, 결제 섹션 컴포넌트 추가
    - 결제 모듈(아임포트) 연동을 위한 jquery, 아임포트 라이브러리 추가
    - 배포환경 405 Error & Mixed content 에러 픽스

- `0.0.23`: 회원가입 기능 구현
    - 백엔드 연동
    - 회원가입 관련 컴포넌트 한글화
    - 회원가입 성공하거나 이미 가입되어 있는 경우 회원가입창에서 로그인 모달창으로 변경

- `0.0.22`: 로그인 기능 구현
    - 백엔드 연동
    - 로그인 관련 컴포넌트 한글화
    - axios, useSWR 라이브러리 추가
    - utils/fetcher.ts 추가