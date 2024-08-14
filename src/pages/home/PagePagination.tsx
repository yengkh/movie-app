type Props = {
  totalMovie: number;
  moviePerPage: number;
  setCurrentPage: (value: number) => void;
  currentPage: number;
};

const PagePagination = ({
  totalMovie,
  moviePerPage,
  setCurrentPage,
  currentPage,
}: Props) => {
  const pageNumber: number[] = [];
  for (let i = 1; i <= Math.ceil(totalMovie / moviePerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <section className="flex justify-center items-center gap-5">
      {pageNumber.map((items, index) => (
        <button
          key={index}
          className={`${
            items === currentPage ? "bg-activePaginationPage " : ""
          } rounded-full w-8 h-8 ring-1`}
          onClick={() => setCurrentPage(items)}
        >
          {" "}
          {items}{" "}
        </button>
      ))}
    </section>
  );
};

export default PagePagination;
