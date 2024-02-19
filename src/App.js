import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import TermsCondition from "./components/TermsCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
