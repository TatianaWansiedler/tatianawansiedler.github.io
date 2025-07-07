import { useLocation } from "react-router-dom";
import { IoCloudDownloadOutline } from "react-icons/io5";
import "./style.css"; // для стилей

export const CvButton = () => {
  const location = useLocation();
  if (location.pathname === "/") return null;

  return (
    <a
      href="pdf/Vanzidler_Tatiana_CV_FE.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="resume-button"
      title="Download Resume"
    >
      <IoCloudDownloadOutline size={18} />
      <span>Download CV</span>
    </a>
  );
};
