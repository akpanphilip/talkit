// NavLink, useLocation, useNavigate
import { Link } from "react-router-dom";
// import { INavLink } from "@/types";
// import { sidebarLinks } from "@/constants";
// import { Loader } from "@/components/shared/Loader";
// import { Button } from "@/components/ui/button";
// import { useSignOutAccount } from "@/lib/react-query/queries";
import { useUserContext } from "@/context/AuthContext";
// INITIAL_USER
interface StabBlockProps {
  value: string | number;
  label: string;
}

const StatBlock = ({ value, label }: StabBlockProps) => (
  <div className="flex-center flex-col gap-2">
    <p className="small-semibold lg:body-bold text-main-clr">{value}</p>
    <p className="small-medium lg:base-medium text-light-2">{label}</p>
  </div>
);

const LeftSidebar = () => {
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  // setUser, setIsAuthenticated,
  const { user, isLoading } = useUserContext();

  //   const { mutate: signOut } = useSignOutAccount();

  // const handleSignOut = async (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   // signOut();
  //   setIsAuthenticated(false);
  //   setUser(INITIAL_USER);
  //   navigate("/login");
  // };

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        {/* <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link> */}

        {isLoading || !user.email ? (
          <div className="h-14">{/* <Loader /> */}</div>
        ) : (
          <Link
            to={`/profile/${user.id}`}
            className="flex flex-col gap-3 items-center"
          >
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-16 w-16 rounded-full"
            />
            <div className="flex flex-col">
              <p className="body-bold text-center">{user.name}</p>
              <p className="small-regular text-light-3 text-center">
                @{user.username}
              </p>
            </div>

            <div className="flex gap-8 mt-10 items-center justify-center xl:justify-start flex-wrap z-20">
              {/* <StatBlock value={user.posts.length} label="Posts" /> */}
              <StatBlock value={1} label="Rank" />
              <StatBlock value={20} label="Followers" />
              <StatBlock value={20} label="Following" />
            </div>
          </Link>
        )}

        {/* <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul> */}
      </div>

      {/* <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={(e) => handleSignOut(e)}
      >
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button> */}
    </nav>
  );
};

export default LeftSidebar;
