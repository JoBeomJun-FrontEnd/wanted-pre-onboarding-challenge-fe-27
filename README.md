# React + TypeScript + Vite + Yarn

## 사용 라이브러리

- @tanstack/react-query: 상태 관리 및 서버 상태 비동기 데이터 관리 도구.
- @tanstack/react-query-devtools: React Query 개발자 도구.
- @vanilla-extract/css: TypeScript로 스타일을 작성하는 라이브러리.
- axios: HTTP 요청을 보내는 라이브러리.
- react: 사용자 인터페이스를 구축하기 위한 라이브러리.
- react-dom: React의 DOM 관련 기능을 제공.
- react-router-dom: React 애플리케이션에서 라우팅을 처리.
- vite-plugin-compression: Vite 빌드 시 파일을 압축하는 플러그인.
- zustand: 간단하고 사용하기 쉬운 상태 관리 라이브러리.

## 빌드 도구

- vite

## 사용 방법

- cd 클론할 디렉토리 명
  - cd mydirectory
- git clone https://github.com/JoBeomJun-FrontEnd/yarn_vite_tsc.git .
- 터미널을 열고 yarn install 입력
- yarn dev를 입력해 실행이 되는지 확인

## 깃 플로우 사용법

- git flow init: 초기화
- git flow feature start 기능이름: 새로운 기능 추가 할때 브랜치 생성
  - 어떤 이슈와 연결되는지 알기 쉽게 기능이름 앞에 이슈번호 붙이기 ex) feature/1-feature-makeframe
- git flow feature finish 기능이름: 기능 작업 완료 후 develop에 병합
- git flow release start 버전: 릴리스를 준비할 때 사용하는 브랜치 생성
- git flow release finish 기능이름: 릴리스 준비가 완료되면 main과 develop에 병합
- git flow hotfix start 버전: 긴급 버그수정 필요할 때 사용하는 브랜치 생성
- git flow hotfix finish 버전: 수정이 완료되면 main과 develop에 병합

- git commit -m "기능 설명": ex) Style #1: 기본 틀 만들기

## 깃 합치기

- git fetch origin: 원격 저장소에서 최신 변경 사항 가져오기
- git rebase -i origin/develop: 팀원들과 작업이 충돌하지 않도록 최신 develop 브랜치 위에 자신의 작업을 위치시킨다
  - :wq 입력후 빠져나와 성공되면 완료
  - 만약 기존 작업들과 충돌이 있다면 해결후 git rebase --continue
  - 만약 rebase 작업을 중단하고 싶다면 git rebase --abort
