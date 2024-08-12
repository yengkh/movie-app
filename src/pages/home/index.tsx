import RecommendMovie from "./RecommendMovie";
import TopView from "./TopView";

const HomePage = () => {
  return (
    <div className="px-2">
      <p>Top Views</p>
      <TopView />
      <div className="mt-10">
        <p>Recommend Movies and TV Series</p>
        <RecommendMovie />
      </div>
    </div>
  );
};

export default HomePage;
