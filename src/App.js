import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import ForumBody from "./Components/ForumBody/ForumBody";
import Header from "./Components/Header/Header";
import ContactPage from "./Pages/ContactPage/ContactPage";
import NewsPage from "./Pages/NewsPage/NewsPage";
import ThreadPage from "./Pages/ThreadPage/ThreadPage";

function App() {
  let {threadId} = useParams();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<ForumBody />} />
        <Route path="/news" element={<NewsPage />}/>
        <Route path="/rules" element={<Navigate to={"/thread/0"} />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/help" element={<Navigate to={"/thread/1"} />}/>
        <Route path="/thread">
          <Route path=":threadId" element={<ThreadPage />}/>
        </Route>
        
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
