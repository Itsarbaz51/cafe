import {
  Link,
  NavLink,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { useEffect } from "react";

export default function Header() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const isOnNewsPage = location.pathname === "/news";
  const isDescriptionNewsPage = location.pathname === `/news/exploring/${id}`;

  const handleClick = (e) => {
    e.preventDefault();

    if (isOnNewsPage || isDescriptionNewsPage) {
      navigate("/#menu");
    } else {
      const el = document.getElementById("menu");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    if (location.hash === "#menu") {
      const el = document.getElementById("menu");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <header className="sticky bg-[#FFF7E6] w-full top-0 z-50">
      <nav className="px-6 lg:px-10 py-3.5 ">
        <div className="flex  justify-between items-center sm:mx-auto max-w-screen-2xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://framerusercontent.com/images/V5tIwQyz2S0O66AuNJHLQeGtQ.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div
            className="justify-between items-center  flex"
            id="mobile-menu-2"
          >
            <ul className="flex flex-row space-x-8 font-semibold">
              <li className="flex flex-col relative group h-6 overflow-hidden">
                {isOnNewsPage || isDescriptionNewsPage ? (
                  <Link
                    to="/#menu"
                    className="block relative group"
                    onClick={handleClick}
                  >
                    <span className="block transition-all duration-300 group-hover:-translate-y-full">
                      Manu
                    </span>
                    <span className="block absolute top-full left-0 transition-all duration-300 group-hover:top-0">
                      Manu
                    </span>
                  </Link>
                ) : (
                  <a
                    href="#menu"
                    className="block relative group"
                    onClick={handleClick}
                  >
                    <span className="block transition-all duration-300 group-hover:-translate-y-full">
                      Manu
                    </span>
                    <span className="block absolute top-full left-0 transition-all duration-300 group-hover:top-0">
                      Manu
                    </span>
                  </a>
                )}
              </li>

              <li className="flex flex-col relative group h-6 overflow-hidden">
                <NavLink to="/news" className="block relative">
                  <span className="block transition-all duration-300 group-hover:-translate-y-full">
                    News
                  </span>
                  <span className="block absolute top-full left-0 transition-all duration-300 group-hover:top-0">
                    News
                  </span>
                </NavLink>
              </li>
            </ul>
            {/* <button className="sm:hidden">
              <RiMenu4Fill />
            </button> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
