import React from "react";

function Control(props) {
  console.log('Control render');
  return (// 컴퍼넌트에서는 하나의 최상위 태그로 시작 해야한다.
    <ul>
      <li><a href="/create" onClick={function(e){
        e.preventDefault();
        props.onChangeMode('create');
      }.bind()}>create</a></li>
      <li><a href="/update" onClick={function(e){
        e.preventDefault();
        props.onChangeMode('update');
      }.bind()}>update</a></li>
      <li><input onClick={function(e){
        e.preventDefault();
        props.onChangeMode('delete');
      }.bind()} type='button' value="delete"></input></li> 
    </ul>
  );
}

export default Control;