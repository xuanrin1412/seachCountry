import MainComponent from "@/pages/MainComponent";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./layout/Layout";
import DetailFlag from "./pages/DetailFlag";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainComponent />} />
          <Route path="/detailFlag/:name" element={<DetailFlag />} />
        </Route>
      </Routes>
    </Router>

  );
};

export default App;
