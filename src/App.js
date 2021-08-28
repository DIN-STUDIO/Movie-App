import React from 'react';

// react는 jsx로 돌아간다. jsx = html + javascript

function Food({favorite}){   // = props.favrite
  return <h3> - I like {favorite}~ </h3>
}

// function Food(props){
//   return <h3> I like {props.favorite}~ </h3>
// }

function App() {
  return (
    <div>
      <h1>Food List</h1>
      <Food favorite="연어 초밥" />
      <Food favorite="삼겹살" />
      <Food favorite="연어장" />
      <Food favorite="간장새우" />
      
    </div>
  );
}
export default App;