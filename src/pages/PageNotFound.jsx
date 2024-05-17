import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>Message</p>
      <button onClick={() => navigate(-1)}>&larr;</button>
    </div>
  );
}

export default PageNotFound;
