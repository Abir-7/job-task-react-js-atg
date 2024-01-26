const Card = ({ logo, title, text, text2,color,display,hover }) => {
  return (
  <div className={`border ${hover} h-100 p-4 d-flex flex-column align-items-center align-items-md-start rounded-2`}>
      <div className="d-flex gap-2 align-items-center justify-content-start mb-3">
        <div ><span className={`fs-3 hover ${color}`}>{logo}</span></div>
        <div className="pt-2 fw-bold fs-4">{title}</div>
      </div>
      <div className="mb-4">
        <p>{text}</p>
      </div>
      <div>
        <button className={`btn btn-outline-primary ${display}`} style={{width:'150px'}}>{text2}</button>
      </div>
    </div>
  );
};

export default Card;
