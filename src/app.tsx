import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./landing.tsx";
import { Chat } from "./chat.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
