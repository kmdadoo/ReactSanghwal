import React from "react";

function Subject(props) {
  console.log('Subject render');
  return (// 컴퍼넌트에서는 하나의 최상위 태그로 시작 해야한다.
    <header>
      <h1><a href="/" onClick={function(e){
        e.preventDefault();
        props.onChangePage();
      }.bind()}>{props.title}</a></h1>
      {props.sub}
    </header>
  );
}

export default Subject;