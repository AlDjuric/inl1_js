import { useState } from 'react';
import Header from "./components/Header";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="app">
      <Header onThemeChange={setIsDarkMode} />
      <div className="page-wrapper">
        <Partners isDarkMode={isDarkMode} />
        <Features />
        <Testimonials />
        <Faq />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
