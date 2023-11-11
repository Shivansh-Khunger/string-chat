// import { ThemeProvider } from "./components/theme-provider.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./landing.tsx";
import { Chat } from "./chat.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/string-chat" element={<Landing />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
