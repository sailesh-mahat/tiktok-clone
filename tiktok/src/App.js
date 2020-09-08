import React from 'react';
import './App.css';
import Video from "./Video";

function App() {
  return (
    //BEM naming convention
    <div className="app">

      <div className="app__videos">
        <Video url= "https://youtu.be/vM6T5s6HlTg"
        channel="Rambo"
        description="This is a MERN stack Tik Tok"
        song="Rocking Out With React"
        likes={324}
        messages={98}
        shares={23} />
        <Video url= "https://www.facebook.com/watch/?v=911824239323630&extid=9zwofduiNjqgMPLV"
        channel="Crazy"
        description="This is also MERN stack Tik Tok"
        song="Partying with Node"
        likes={223}
        messages={48}
        shares={43} />
      </div>
      
      {/* app container */}
        {/* videos */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}

    </div>
  );
}

export default App;
