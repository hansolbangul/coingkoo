# coingkoo
![initial](https://user-images.githubusercontent.com/71314689/120471704-004bf280-c3e0-11eb-9326-9977fd1ba82a.png)

코잉쿠(cOingkoo) 프로젝트는 front-end 개발자(hansolbangul)와 back-end 개발자(JeonBeomGu-S)가 협력하여 만든 프로젝트이다.

개인 포트폴리오 향상과, react.js 와 node.js간의 상호작용 이해 등을 직관적이게 확인하기 위함이다.

프로젝트는 javascript 기반의 프론트(react) 백(node)를 사용하여 작성되었다.

state는 리덕스를 통해 관리하도록 구성하였다. api는 업비트(upbit)와 코인게코(coingecko)의 api를 사용하였다.

# Login Page
![initial](https://user-images.githubusercontent.com/71314689/120471271-7a2fac00-c3df-11eb-8b3b-788506ad7c4c.png)
로그인 페이지이다. 회원가입을 통해 만든 아이디를 토대로 로그인을 진행할 수 있다.

로그인을 하지않으면 커뮤니티 게시글을 작성할 수 없다.

# Register Page
![initial](https://user-images.githubusercontent.com/71314689/120471310-8451aa80-c3df-11eb-84f3-0da3f9c1b24f.png)
회원가입 페이지이다.

이메일, 비밀번호, 이름, 번호를 입력받을 수 있다.

# Landing Page
![initial](https://user-images.githubusercontent.com/71314689/120471001-26bd5e00-c3df-11eb-8217-22581b464394.png)
가장 기본이되는 메인 페이지이다. 업비트에 있는 코인들의 정보를 api를 통해서 가져온다. 가져온 정보를 토대로 테이블을 구상 및 제작하였다.

정보에 있는 차트&설명보기를 통해 해당 코인의 차트와 설명을 모두 볼 수 있다.

차트는 정렬을 할 수 있고, 검색은 코인명과 가격으로만 가능하다.

# CoinChart Modal
![initial](https://user-images.githubusercontent.com/71314689/120471355-903d6c80-c3df-11eb-8e48-40fe04c27f11.png)
코인의 차트를 볼 수 있는 모달창이다.

한눈에 직관적으로 볼 수 있게 따로 페이지이동을 하지 않고 모달로 구성하였다.

아래에있는 코인 설명 버튼을 통해 코인의 설명을 볼 수 있다.

# CoinInfo Modal
![initial](https://user-images.githubusercontent.com/71314689/120471401-a2b7a600-c3df-11eb-8104-70be4aef10e8.png)
코인 설명을 볼 수 있는 모달창이다.

이것또한 한눈에 직관적으로 볼 수 있게 페이지 이동을 하지 않고 모달로 구성하였다.

# Community Page
![initial](https://user-images.githubusercontent.com/71314689/120471450-aea36800-c3df-11eb-9cb2-7c444c3425dc.png)
코인 투자자들과 소통할 수 있는 커뮤니티 공간이다.

제목과 작성자 기준으로 검색이 가능한 페이지이다.

# News Page
![initial](https://user-images.githubusercontent.com/71314689/120471540-cb3fa000-c3df-11eb-9613-a487ad862cf1.png)
코인 투자자들과 소통할 수 있는 커뮤니티의 글을 작성하는 공간이다.

로그인이 되어있지 않으면 작성할 수 없다.

작성자는 로그인한 후 작성이 가능하며 로그인정보를 토대로 글이 저장되기 때문에 제목과 내용만 따로 작성한다.

# Post Page
![initial](https://user-images.githubusercontent.com/71314689/120471488-bb27c080-c3df-11eb-9448-a782f3fdf0ea.png)
커뮤니티 공간에 있는 글을 확인할 수 있는 공간이다.

따로 폼을 구상하지는 않았으며 차차 수정해 나갈 계획이다.

현재는 한눈에 직관적으로 볼 수 있게만 해두었다.

# CoinNews Page
![initial](https://user-images.githubusercontent.com/55542095/120500241-ab1dda00-c3fb-11eb-8d0b-1b48b7873933.png)

코인관련 기사를 볼 수 있는 공간이다. 

코인 관련 기사는 "https://kr.investing.com/news/cryptocurrency-news" 에서 cheerio 라이브러리를 이용하여 크롤링하여 가져온다.

가져오는 정보는 기사 제목과 이미지, 요약, 작성일, url 을 가져온다.

url을 가져옴으로 실제 기사 페이지로 이동할 수 있도록 하였다.

코인 관련 기사는 (사이트 예시 www.google.com 처럼 작성 요망)

# CoinSite Page
![initial](https://user-images.githubusercontent.com/71314689/120471591-d98dbc00-c3df-11eb-8c78-560e6b03ecb2.png)
코인 거래소들의 신뢰도를 토대로 순위를 매긴 공간이다.

코인 거래소들의 정보는 코인게코의 api를 통해 받는다.

1~100등까지만 확인한다.

# Info Page
![initial](https://user-images.githubusercontent.com/71314689/120471631-e3afba80-c3df-11eb-9329-0f3a631fd6ea.png)
코잉쿠(cOingkoo) 사이트를 만든 계기 필요성 등을 나타낸 공간이다.

개발자들의 이름, 분야, 인스타정보까지 볼 수 있다.
