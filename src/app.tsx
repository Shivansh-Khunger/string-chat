import { ThemeProvider } from "./components/theme-provider.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./landing.tsx";
import { Main } from "./main.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
