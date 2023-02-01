# [Woot] 프론트엔드 온라인 과제

## 목록 
- [코드 과제](#코드-과제)
- [최종 구현 화면](#최종-구현-화면)
- [실행방법](#실행방법)
- [구현 사항](#구현-사항)
- [기술 스택](#기술-스택)
- [폴더 구조](#폴더-구조)
- [주안점](#주안점)
- [한계점](#한계점)

## 코드 과제
### 1번

```js
console.log(1); // (1)
const list = [1,2,3];
list.forEach(async (item) => {
    await (new Promise((resolve) => resolve()))
    console.log(3); // (3)
})
console.log(2); // (2)
```
- 실행결과: 1=>2=>3(3번) 순으로 호출이 일어납니다.
- 이유: 1번부터 호출이 일어난 후엔 프로미스 코드가 실행이 되는데 이때 프로미스의 콜백 함수가 끝날때 까진(await) 다음줄의 3번 콘솔이 실해되지 않습니다. 따라서 비동기적으로 작동하는 프로미스 때문에 콜백함수가 전부 끝나지 않았지만 그다음 2번 콘솔을 시행시키기 때문에 1=>2=>3 순서로 콘솔 로그가 호출됩니다.

### 2번 
```js
class Parent {
    value = 'parent';
    method() {
        function childMethod() {
            console.log(this.value);
        }
				childMethod();
    }
}
```
- 실행결과: undefined
- 이유: 일반함수를 호출하게 되면 함수 내부의 this에는 전역 객체가 바인딩되기 때문에 undefined이 호출됩니다.
- 수정:
```js
class Parent {
  value = 'parent';
  childMethod() {
    console.log(this.value)
  }
}

const parent = new Parent
parent.childMethod()
```

### 3번
```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
```
- 실행결과: 7, 12
- 이유: 각각의 add 함수들이 중첩되어 값을 반환하기 때문입니다.


## 최종 구현 화면
<img width="534" alt="스크린샷 2023-02-01 오후 4 00 24" src="https://user-images.githubusercontent.com/96907766/215975660-6052519d-3297-45ba-902e-e1a639f055a8.png">

## 실행방법

```
client
npm i
npm start

```

## 구현 사항
### 1. UI 구현
타입스 앱 클론을 위해 전체적인 구조와 컬러를 맞췄습니다. 태그 버튼은 styled-components의 theme props와 custom hook을 사용해 mbti 별로 색상을 다르게 하였습니다.

### 2. 메인화면의 질문 목록 or 더 보기 클릭시 리스트 화면으로 이동
최상단의 컴포넌트의 useEffect에서 전체 db 데이터(json)를 localStorage에 저장하고, 다시 이를 불러오기 위해서 getItem으로 불러온 후, 상태값에 저장했습니다.
- 질문 목록
  - filter 함수로 mbti별 데이터의 목록만을 보여주도록 했습니다.
  - 더보기 또는 질문을 클릭하면 리스트 화면으로 이동합니다.
  - UseNavigate를 사용해 전체 리스트(/ask)와 해당 mbti 리스트(/ask/enfp)를 구분하여 라우팅 하였습니다.

### 3. Infinite Scroll

```js
const getAllAskList = async (page, perPage) => {
  const data = await getAskList();
  const totalPage = Math.ceil(data.length / perPage);
  const isLastPage = page === totalPage;

  const sliceAskList = (endpoint, isLastPage) => {
    const AskList = data.slice(0, endpoint);
    return { AskList, isLastPage };
  };

  return isLastPage
    ? sliceAskList(data.length, isLastPage)
    : sliceAskList(page * perPage, isLastPage);
};

export default getAllAskList;
```

구현하지는 못했지만 intersection observer API를 사용해 관찰 중인 요소(Element)를 맨아래의 ref로 설정하고 뷰포트(Viewport)와 교차하고 있는지를 감지하며 교차한다면, 마치 비동기 통신을 하는것과 같이 setTimeout으로 시간을 설정하여 그동안 스피너를 보여주고, 데이터가 다 받아와진다면(setTimeout시간 도달) 다음 페이지의 데이터를 불러오는 식의 코드를 구상할 것 같습니다.


### 4. 댓글 생성
```js
// create
const newState = [newItem, ...dbData];
localStorage.setItem('askData', JSON.stringify(newState));
```
다음과 같이 새로운 댓글을 업데이트하기 위해 스토리지에 패치해주는 방식을 사용할 것 같습니다.

## 기술 스택
1. CRA
2. typescript
- 강력한 타입 규제로 런타임 시점의 오류를 잡기 위해서 사용했습니다.
3. react-router-dom
- 라우팅을 통해 싱글페이지지만 여러 화면을 보여주기 위해서 사용했습니다.
4. styled-components
- css in js는 선택자를 다이렉트로 맵핑하기 때문에 순수 css보다 빠른 성능을 내기 때문에 사용했습니다. 또한 props를 통한 조건부 스타일을 설정하기 위해서 사용했습니다.

## 폴더 구조
```
//front
📦src
 ┣ 📂assets
 ┃ ┗ 📂svgs
 ┣ 📂components
 ┃ ┣ 📂button
 ┃ ┣ 📂header
 ┃ ┣ 📂layout
 ┃ ┗ 📂tag
 ┣ 📂data
 ┃ ┗ 📜db.json
 ┣ 📂pages
 ┃ ┣ 📂askList
 ┃ ┗ 📂mainPage
 ┣ 📂routes
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ┣ 📜App.tsx
 ┣ 📜custom.d.ts
 ┗ 📜index.tsx
```

- 버튼, 태그, 헤더와 같이 재사용이 가능한 컴포넌트는 따로 컴포넌트 폴더로 분리하였습니다.
- pages는 UI를 그리는 view 컴포넌트로 분리하였습니다. mainPage는 질문의 목록을 보여주는 화면/askList는 질문의 리스트를 보여주는 화면으로 분리했습니다.
- 처음엔 types와 utils, data와 같은 폴더는 mainPage안에 위치하게해 목적과 성격이 비슷한 코드로 뭉치려고 계획했으나(co-location) mainPage외 askList페이지에서도 동일한 types와 utils, data를 사용하게 되었기 때문에 src 밖으로 빼놨습니다. 

## 주안점
### localStorage의 활용
- 스토리지를 활용한 데이터 저장법에 대해 고민하다 json으로 목데이터를 미리 생성하고 이를 가장 최상단의 컴포넌트에서 먼저 데이터 패치를 시키는 것으로 결정했습니다.
- 스토리지에는 key, value값으로 나눠져 있기 때문에 현재 유저의 정보는 `{key : "userID"}`로, 데이터는 `{key: "askData"}`로 구분지어 저장한 후, 불러올때도 key값을 활용해 불러오는 방식을 선택했습니다.
- user 정보를 스토리지에 저장하는 것이 맞을까? 라는 고민이 생겼습니다. json server도 고려해보았지만, 요구사항에 따라 모든 데이터는 스토리지에서 관리하는 것으로 결정했습니다.


## 한계점
### 1. localStorage의 api
- 스토리지로 데이터를 관리해야 했기 때문에 CRUD를 구현하기 위해서는 api를 만드는 방식이 맞는 방향인지에 대해서 고민하였습니다. 시간적 여유가 생겼다면 api를 추상화하는 방식으로 구현했을 것 같습니다.

### 2. 질문/댓글 생성과 삭제
- 질문/댓글을 생성하고 삭제하기 위해서는 질문/댓글을 생성한 유저의 정보가 필요하다고 생각했습니다. 따라서 userId를 저장하고 해당 유저와 질문/댓글의 authorId가 동일하다면 댓글을 삭제할 수 있도록 버튼을 보여주는 식의 구현을 생각했으나, 완성하지 못해 아쉬운 점으로 남았습니다.






