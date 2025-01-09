import React from "react";

function ReadContent(props) {
  console.log('ReadContent render');
  return (// 컴퍼넌트에서는 하나의 최상위 태그로 시작 해야한다.
    <article>
      <h2>{props.title}</h2>
      {props.desc}
    </article>
  );
}

export default ReadContent;