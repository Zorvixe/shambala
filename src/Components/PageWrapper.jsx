import { useLocation } from "react-router-dom";

const PageWrapper = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className={`page-wrapper ${!isHome ? "inner-page" : ""}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
