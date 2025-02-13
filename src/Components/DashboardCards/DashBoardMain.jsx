const DashBoardMain = ({
  data,
  itemsPerView,
  currentIndex,
  renderItem,
  handleClickReview,
}) => {
  return (
    <div
      className="flex items-center mt-[0.295rem] gap-[0.875rem] transition-transform duration-300 ease-in-out"
      style={{
        transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
      }}
    >
      {data.map((item) =>
        handleClickReview ? (
          renderItem(item, handleClickReview)
        ) : (
          renderItem(item)
        )
      )}
    </div>
  );
};

export default DashBoardMain;
