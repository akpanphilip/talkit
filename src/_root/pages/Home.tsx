import { Models } from "appwrite";

import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queries";

const Home = () => {
  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  if (isErrorPosts) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      {isPostLoading && !posts ? (
        <Loader />
      ) : (
        <ul className="">
          {posts?.documents.map((post: Models.Document) => (
            <li key={post.$id} className="flex justify-center w-full">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
      {/* </div> */}
    </div>
  );
};

export default Home;
