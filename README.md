# 개인 프로젝트 ( 학습 ) 04 : 나만의 명함 제작 및 관리 서비스

<p align="center"><img src="https://helpx.adobe.com/content/dam/help/en/indesign/how-to/business-card-design/jcr_content/main-pars/image_1047841121/business-card-design-hero_900x506.jpg"></p>

&nbsp;
&nbsp;

## 학습 목표
현재 시장에서 프론트엔드 개발을 할 때 가장 많이 사용된다고 하는 React.js 라이브러리 또는 프레임워크를 활용법과 개발에 도움을 줄 수 있는 오픈 소스,툴들을 활용한 유연한 프로젝트 진행 방법

&nbsp;
&nbsp;

## 설명
간단한 소셜 로그인을 사용해서 유저를 구별하고 유저에 따라 간단한 비즈니스 카드( 명함 )를 제작하고 관리 할 수 있는 서비스입니다. 드림코딩 엘리의 리액트 강의 ( https://academy.dream-coding.com/courses/react-basic ) 참고하여 프로젝트를 진행했고 파이어베이스,클라우디너리 등의 벡엔드 라이브러리 플랫폼을 사용하여 더 많은 기능을 적용했습니다.

&nbsp;
&nbsp;

## 기능
1. 구글 로그인을 연동한 소셜 로그인,로그아웃
2. 로그인 한 유저 정보에 따른 명함 상태 로드
3. 명함 ( 명함의 이름, 제목, 소개, 나의 프로필 사진 ) 제작
4. 명함 즉석 수정 기능
5. 명함 삭제 기능

&nbsp;
&nbsp;

## 활용 스택
### <img src="https://user-images.githubusercontent.com/82381946/164891267-2360c764-827e-4661-9842-a1fd29a41b57.png"  width="50"/>  <p>CSS</p> 
### <img src="https://user-images.githubusercontent.com/82381946/164913523-01deeb5e-34f6-4344-932f-05d2a9923813.png"  width="50"/>  <p>JAVASCRIPT</p> 
### <img src="https://user-images.githubusercontent.com/82381946/164913564-7c96185b-9e74-4a7d-9bdf-18570c0043b6.png"  width="50"/>  <p>React JS</p> 

&nbsp;
&nbsp;

## 서비스 소개

## 프로젝트 소개

### 1. 소셜 로그인
#### 소셜 로그인을 사용해 유저 정보를 체크하고 이에 따른 각각 다른 명함 관리 리스트를 보여줄 수 있습니다.
![로그인 페이지에서 친구목록 페이지로 이동](https://user-images.githubusercontent.com/82381946/164914076-da8e8675-ecd2-4907-986e-cb7dc57bb72e.gif)

&nbsp;
&nbsp;

### 2. 명함 추가하기
#### 명함 작성자의 이름과 프로필 사진, 명함 제목, 명함 소개와 간단한 설명 등의 다양한 정보를 입력하여 명함을 생성할 수 있고 명함의 색깔을 light,dark,calarful 등으로 변경할 수 있습니다.
![채팅방 목록에서 채팅방안으로](https://user-images.githubusercontent.com/82381946/164914132-bf9e59cd-654d-4ee5-b91a-ea088f30d062.gif)

&nbsp;
&nbsp;

### 2. 추가한 명함 즉석 수정 및 삭제
#### 추가한 명함을 파이어베이스의 실시간 데이터베이스 라이브러리를 활용해 즉석으로 수정할 수 있으며 명함의 작성된 데이터가 수정되는 즉시 데이터베이스에 다시 저장되도록 하였습니다. 또한 delete 버튼을 통해 손쉽게 필요없는 명함을 삭제할 수 있습니다.
![채팅방 목록에서 채팅방안으로](https://user-images.githubusercontent.com/82381946/164914200-766b3962-25ff-4eac-b3c6-9926845eb78b.gif)

&nbsp;
&nbsp;

### 2. 로그아웃 후 재접속, 유저에 따른 현재 명함 정보
#### 웹 사이트를 사용하다가 로그아웃 버튼을 누르면 로그아웃하고 로그인화면으로 돌아가며 다음에 다시 로그인하면 이전에 추가하거나 수정하거나 삭제했던 명함 리스트를 그대로 다시 불러올 수 있게 했습니다. 
![채팅방 목록에서 채팅방안으로](https://user-images.githubusercontent.com/82381946/164914341-acadc135-ef87-429f-ba7a-5197b41555d4.gif)

&nbsp;
&nbsp;


## 프로젝트 후 결과 ( 배운 내용 )
1. 리액트 프레임워크 기본 문법(함수형 컴포넌트, 리액트 훅, JSX, 상태 관리, Prors)
2. 파이어베이스, 클라우디너리 등 백엔드 없이도 프로젝트를 진행할 수 있도록 해주는 유용한 오픈 라이브러리,백엔드 서비스 플랫폼 탐색 및 활용
3. 프로젝트가 커졌을 때 꼭 필요한 코드 모듈화 방법
4. 기초적인 Post CSS 활용과 문서 확인 방법

