import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Modify from "./pages/Modify";
import PostDetail from "./pages/PostDetail";
import Create from "./pages/Create";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Modify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
