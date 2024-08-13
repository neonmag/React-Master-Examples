function Book(props) {
  const { bookName, author, genre, amountOfPages, comments } = props;

  return (
    <div>
      <h1>{bookName}</h1>
      <h1>{author}</h1>
      <h1>{genre}</h1>
      <h1>{amountOfPages}</h1>
      {comments.map((el, index) => {
        return <p key={index}>{el}</p>;
      })}
    </div>
  );
}

export default Book;
