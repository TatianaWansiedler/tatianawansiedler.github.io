import { useState, useRef, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CvButton } from "../components/cvbtn";

const AnimatedRoutes = withRouter(() => {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const [animationKey, setAnimationKey] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPathRef.current) {
      setAnimationKey(location.pathname);
      prevPathRef.current = location.pathname;
    }
  }, [location]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={animationKey}
        timeout={{ enter: 400, exit: 400 }}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
});

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
      <CvButton />
    </div>
  );
}

export default AppRoutes;
