import Skeleton from "react-loading-skeleton";
function LoadingSkeleton() {
  return (
    <div>
      <Skeleton count={8} height={20} />
    </div>
  );
}

export default LoadingSkeleton;
