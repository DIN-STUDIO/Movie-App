import React from 'react';

const deviceILike = [
  {
    id : 1,
    name : "imac",
    image : "https://plankim.com/file/2020/11/imac2021-rendering-design-04.jpg"
  },
  {
    id : 2,
    name : "Macbook Pro",
    image : "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5fd00ea644cd62376ce2b6c1%2F0x0.jpg"
  },
  {
    id : 3,
    name : "Ipad",
    image : "https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.jpg"
  },
  {
    id : 4,
    name : "Iphone",
    image : "https://cdn.mos.cms.futurecdn.net/7ERYa7dSS26ec59RVQXMz9-1200-80.jpg"
  }
]
// react는 jsx로 돌아간다. jsx = html + javascript
// React에선 함수는 html태그를 return한다.

function Device({devName, devPicture}){   // = props.devName , props.devPicture
  return (
    <div>
      <h2> - {devName} </h2>
      <img src={devPicture} alt={devName} />
    </div>
  )
}

function App() {   //  웹사이트에 동적 데이터 추가하는 방법
  return (
    <div>
      <h1>Device Lists</h1>
      {deviceILike.map(item => <Device key={item.id} devName={item.name} devPicture={item.image} />)}     
    </div>
  );
}
export default App;