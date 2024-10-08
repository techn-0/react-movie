import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("Call the API");
  }, []); //처음 한번만 렌더할 함수는 이곳에 넣어준다

  useEffect(() => {
    if (keyword !== "" && keyword.length > 6) {
      console.log("SERACH", keyword);
    }
  }, [keyword]); // keyword가 바뀔때만 실행

  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Serch"/>
      <h1>{counter}</h1>
      <button onClick={onClick}>나를 눌러요</button>
    </div>
  );
}

export default App;
