import React from "react";
import { useState } from 'react';

function UpdateContent(props) {
  const id = useState(props.data.id);
  const [title, setTitle] = useState(props.data.title);
  const [desc, setDesc] = useState(props.data.desc);
  // console.log(props.data);
  console.log('UpdateContent render');

  const titleForHandler = (e) => {
    setTitle(e.target.value);
  };
  const descForHandler = (e) => {
    setDesc(e.target.value);
  };
  return (// 컴퍼넌트에서는 하나의 최상위 태그로 시작 해야한다.
    <article>
      <h2>Update</h2>
      <form action="/create_process" method="post"
        onSubmit={function(e){
          e.preventDefault();
          // debugger;
          props.onSubmit(
            id,
            title,
            desc,
          );
          // alert('Submit!!!!!!');
        }.bind()}
      >
        <input type="hidden" name="id" value={id}></input>
        <p>
          <input 
            type="text" 
            name="title" 
            placeholder="title"
            value={title}
            onChange= {titleForHandler}
          ></input>
        </p>
        <p>
          <textarea 
            onChange= {descForHandler}
            name="desc" 
            placeholder="description" 
            value={desc}></textarea>
        </p>
        <p>
          <input type="submit"></input>
        </p>
      </form>
    </article>
  );
}

export default UpdateContent;