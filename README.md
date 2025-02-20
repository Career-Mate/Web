# 💚 Career-Mate
## 📍 프로젝트 소개

커리어 메이트 (Career Mate) : 커리어 성장 과정을 함께할 동반자 👫
> 지원하는 직무에 딱 맞는 커리어 정리 템플릿과 템플릿 분석을 통한 채용 공고를 추천해주는 서비스
<br>

## 📍 개발 환경
- 언어 : React (JavaScript), styled-components
- 상태 관리 : Tanstack-query, Zustand
- 버전 및 이슈관리 : Github Issue templates, Pull Request templates
- 배포 : Vercel
- 협업 툴 : Slack, Discord, Notion
  
<br>

## 📍 역할 담당

| 이름 | 담당 업무 |
| --- | --- |
| 리아/이아현(Web 파트장) | 커리어 정리하기 전체 (인턴 경험, 프로젝트 경험, 기타 활동, 보유기술 및 업무성향, 최종정리) |
| 민/구민석  | 추천공고-기업정보, 나의 커리어-SMART 커리어 플래너 |
| 윌로우/류남경 | 추천공고-공고 및 콘텐츠 불러오기, 나의 커리어-스크랩한 콘텐츠 및 추천공고 확인하기 |
| 나나/이가영 | 메인화면, 로그인, 나의 커리어-프로필 수정하기 |
<br>

## 📍 Git flow
- main, develop, release, feature 브랜치로 나눠서 개발
<br>


## 📍 Pull Request Convention

```
## #️⃣ 관련 이슈
> ex) #이슈번호, #이슈번호

## 📝 구현한 내용
이번 PR에서 작업한 내용을 간략히 설명해주세요(이미지 첨부 가능)
> 예 : 
- [x] 로그인 페이지 UI 및 기능 구현
- [] 회원가입 페이지 UI 구현

---

## 🚨 체크리스트
- [ ] 코드 컨벤션 준수 여부 확인
- [ ] PR 제목을 컨벤션에 맞게 작성 확인
- [ ] develop/feature 브랜치의 최신 상태를 반영하고 있는지 확인
- [ ] reviewers 파트장 포함 2명 설정했는지 확인
- [ ] merge 하려는 브랜치 확인

---

## 💬 리뷰 요청 사항
- 특정 코드 영역에 대한 피드백 요청
```


- PR 올릴 때, 위의 템플릿에 내용 적어주세요!
- Reviewers는 파트장 포함 최소 2명으로 설정 ⇒ 코드 리뷰 반영 및 approve 후에 develop 브랜치로 merge 가능
<br>

## 📍 Code Convention

- 변수 : camelCase
- 컴포넌트 : PascalCase ex) Button.jsx, SideBar.jsx
- 함수 : camelCase ex) checkAvailableDate.js
- 커스텀 훅 : camelCase ex) useShareWork.js..
- 스타일 : kebab-case
<br>

## 📍 Commit Convention

- feat : 새로운 기능 추가
- setting: 빌드 수행, 패키지 설치, 환경 설정 수정 등
- style : css 위주의 UI 작업
- fix : 오류 및 버그 수정
- refactor : 코드 리팩토링
- test : 테스트 코드 추가
- docs : README 및 주석 작성
- chore : 기타 작업, 빌드 업무 수정 등

ex) `feat: 회원가입 로직 구현`
