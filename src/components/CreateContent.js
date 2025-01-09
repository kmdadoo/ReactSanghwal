import React from "react";

function CreateContent(props) {
  console.log('CreateContent render');
  return (// 컴퍼넌트에서는 하나의 최상위 태그로 시작 해야한다.
    <article>
      <h2>Create</h2>
      <form action="/create_process" method="post"
        onSubmit={function(e){
          e.preventDefault();
          // debugger;
          props.onSubmit(
            e.target.title.value,
            e.target.desc.value,
          );
          // alert('Submit!!!!!!');
        }.bind()}
      >
        <p>
          <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
          <textarea name="desc" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit"></input>
        </p>
      </form>
    </article>
  );
}

export default CreateContent;