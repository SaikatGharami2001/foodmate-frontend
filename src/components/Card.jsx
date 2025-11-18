const Card = (props) => {
  const { name, status, howMuchRich } = props;
  return (
    <>
      <div className="card bg-base-200 w-66 shadow-sm my-5">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{status}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{howMuchRich}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
