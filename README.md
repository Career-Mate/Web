# 💚 Career-Mate Frontend

## **📍 Setting**

1. 저장소 복제 (clone)
    
    ```
    git clone [깃허브 주소]
    git init
    git remote add origin [중앙 remote repository URL]
    ```
    
2. 본인 브랜치로 이동
    
    💡초기 develop 브랜치에서 각자 feature 브랜치 만드는 방법
    
    ```
    git branch [내가 만든 브랜치명] develop
    git checkout [내가 만든 브랜치명]
    // 위의 두 명령을 합하면
    git checkout -b [내가 만든 브랜치명] develop
    ```
    
    ex) login 기능을 추가할 브랜치면 [내가 만든 브랜치명]을 feature/login 으로!
    
    ```
    git checkout [브랜치명]
    ```
    
3. 작업 후 코드 커밋 및 푸시
    
    ```
    git add .
    git commit -m "[커밋 메세지]"
    git push
    ```

## **📍 Pull Request Convention**

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

---

- PR 올릴 때, 위의 템플릿에 내용 적어주세요!
- Reviewers는 파트장 포함 최소 2명으로 설정 ⇒ 코드 리뷰 반영 및 approve 후에 develop 브랜치로 merge 가능
- PR 제목 양식 : [Feat] 개발 내용 요약

ex) `[Feat] Button 컴포넌트 구현`

## 📍 Code Convention

- 변수 : 카멜 케이스(camelCase)
- 컴포넌트 : 파스칼 케이스(PascalCase) ex) Button.jsx, SideBar.jsx
- 함수 : 카멜 케이스(camelCase) ex) checkAvailableDate.js
- 커스텀 훅 : 카멜 케이스(camelCase) ex) useShareWork.js..
- 상수 : 대문자
- 스타일 : 케밥 케이스(kebab-case)

## **📍 Commit Convention**

- feat : 새로운 기능 추가
- setting: 빌드 수행, 패키지 설치, 환경 설정 수정 등
- style : css 위주의 UI 작업
- fix : 오류 및 버그 수정
- refactor : 코드 리팩토링
- test : 테스트 코드 추가
- docs : README 및 주석 작성
- chore : 기타 작업, 빌드 업무 수정 등

ex) `feat: 회원가입 로직 구현`
