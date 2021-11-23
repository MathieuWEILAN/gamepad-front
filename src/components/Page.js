const Page = ({ page, setPage }) => {
  const addPage = () => {
    setPage(page + 1);
  };

  const removePage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <button onClick={removePage}> - </button>
      <div> {page} </div>
      <button onClick={addPage}> + </button>
    </div>
  );
};

export default Page;
