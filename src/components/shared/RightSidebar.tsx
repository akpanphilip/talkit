import { useGetUsers } from "@/lib/react-query/queries";
import Loader from "./Loader";
import UserCard from "./UserCard";

const RightSidebar = () => {
  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  if (isErrorCreators) {
    <div className="home-creators">
      <p className="body-medium text-light-1">Something bad happened</p>
    </div>;
  }
  return (
    <div className="home-creators">
      <h3 className="h3-bold text-light-1">Top Creators</h3>
      {isUserLoading && !creators ? (
        <Loader />
      ) : (
        <ul className="grid 2xl:grid-cols-1 gap-6">
          {creators?.documents.map((creator) => (
            <li key={creator?.$id}>
              <UserCard user={creator} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default RightSidebar;
