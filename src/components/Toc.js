import React from "react";

function TOC(props) {
  console.log('TOC render');
  var lists = [];
  var data = props.data;
  var i = 0;
  while(i<data.length){
    lists.push(
      <li key={data[i].id}>
        <a 
          href={"/content/"+data[i].id}
          //data-id={data[i].id} // 첫번재 방법
          //onClick={function(e){
            //debugger;
            //e.preventDefault();
            //props.onChangePage(e.target.dataset.id);
          //}.bind()}
          onClick={function(id, e){ // 두번째 방법
            //debugger;
            e.preventDefault();
            props.onChangePage(id);
          }.bind(this, data[i].id)}
        >{data[i].title}</a>
      </li>);
    i=i+1;
  }
  return (// 컴퍼넌트에서는 하나의 최상위 태그로 시작 해야한다.
    <nav>
      <ul>
        {lists}
      </ul>
    </nav>
  );
}

export default TOC;