import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import TermsCondition from "./Pages/TermsCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

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
