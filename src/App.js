import './App.css';
import TOC from "./components/Toc"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import Control from "./components/Control"
import Subject from "./components/Subject"
import { useState } from 'react';

function App() { // 유사 자바스크립터
  const [mode, setMode] = useState('welcome');
  const [subject] = useState({title:'Web', sub:'World Wide Web!'});
  const [selected_content_id, setSelected_content_id ]= useState(2);
  const [welcome] = useState({title:'Welcome', desc:'Hello, React!!'});
  const [contents, setContents] = useState([
    {id:1, title:'HTML',desc:'HTML is HyperText ...'},
    {id:2, title:'CSS',desc:'CSS is for design'},
    {id:3, title:'JavaScript',desc:'JavaScript is for interactive'},
  ]);
  var max_countent_id = 3;
  console.log('App render');
  const getReadContent= () =>{
    var i = 0;
      while(i<contents.length){
        var data = contents[i];
        if(data.id === selected_content_id){
          return data;
          // break;
        };
        i = i + 1 ;
      };
  };
  const getContent = () =>{
    var _title, _desc, _article = null;
    
    if(mode === 'welcome'){
      _title = welcome.title;
      _desc = welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(mode === 'read')
    {
      var _contents = getReadContent();
      _article = <ReadContent title={_contents.title} desc={_contents.desc}></ReadContent>
    } else if(mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to contents // 컨텐트에 저장
        max_countent_id = max_countent_id + 1;
        // contents.push( // 오리지널 데이터를 바꿈. 안좋음.재빌드되면 입력됨.
        //   {id:max_countent_id, title:_title, desc:_desc}
        // );
        var _contents = contents.concat( // 이방법이 더 좋음.
          {id:max_countent_id, title:_title, desc:_desc}
        );
        setContents(_contents);
        console.log(_title, _desc); // 콘솔 확인
      }.bind()}></CreateContent>
    } else if(mode === 'update'){ // 저장이 안됨
      var _content = getReadContent();
      console.log(_content);
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          // add content to contents // 컨텐트에 저장
          // max_countent_id = max_countent_id + 1;
          // contents.push( // 오리지널 데이터를 바꿈. 안좋음.재빌드되면 입력됨.
          //   {id:max_countent_id, title:_title, desc:_desc}
          // );
          var _contents = Array.from(contents); // 복사한 contens 행렬이 된다.
          var i = 0;
          while(i < _contents.length){
            if( _contents[i].id === _id){
              _contents[i] = {id:_id, title:_title, desc:_desc};
              console.log(_contents[i]);
              break;
            }
            i = i + 1;
          }
          // var _contents = contents.concat( // 이방법이 더 좋음.
          //   {id:max_countent_id, title:_title, desc:_desc}
          // );
          setContents(_contents);
          console.log(_title, _desc); // 콘솔 확인
      }.bind()}></UpdateContent>
    }
    return _article; 
  }  
  return ( // props와 state가 변하면 화면이 다시 그려진다.
    
    <div className="App">
      <Subject 
        title={subject.title} 
        sub={subject.sub} 
        onChangePage={function(){
          setMode('welcome');
        }.bind()}
      >
      </Subject>
      {/* <header> // 과도기적인 코드 이게 위에 코드 로 변함.
        <h1><a href="/" onClick={function(e){ // 이벤트 onClick
          console.log(e);
          e.preventDefault(); // 기본적인 동작을 금지시킨다.
          // debugger; // 실행을 멈춤
          mode = 'welcome'; // 에러남. 이렇게 하면 리엑트는 state를 인식 못함.
          // setMode('welcome'); // setMode 를 사용해야 함.
        }.bind(this)}>{subject.title}</a></h1>
        {subject.sub} 
      </header> */}
      <TOC 
        onChangePage={function(id){
          // debugger;
          // alert('hi');
          setMode('read'); // state를 수정 할때
          setSelected_content_id(Number(id))
        }.bind()}
        data={contents}>
      </TOC>
      <Control onChangeMode={function(_mode){
        if(_mode === 'delete'){
          if(window.confirm('really')){
            var _contents = Array.from(contents);
            var i = 0;
            while(i < _contents.length){
              if(_contents[i].id === selected_content_id){
                _contents.splice(i,1);
                break;
              }
              i = i + 1;
            }
            setContents(_contents);
            setMode("welcome");
            alert('delete!');
          }
        }else{
          setMode(_mode);
        }
      }.bind()}></Control>
      {getContent()}
      {/* {_article} */}
    </div>
  );
}
// 상위 컴퍼넌트가 하위 컴퍼넌트 값을 전달할때는 props에 값을 전달하고,즉, 명령할 때는
// props를 사용한다. 하위 컴퍼넌트에서 상위 컴퍼넌트 satate값을 바꾸려면 이벤트를 
// 통해서 바꿀수 있다. 

export default App; 
 