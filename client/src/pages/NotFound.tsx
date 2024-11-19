import { Link, useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="sg-container">
        <h2 className="text-2xl font-semibold">Tokio puslapio neradau</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque alias,
          nobis provident et iste praesentium consequuntur nostrum dicta
          aliquid, eligendi fugit asperiores hic rem sunt commodi possimus, esse
          dolorum atque.
        </p>
        <Link to="/">Eiti pradzia</Link> arba
        <button onClick={() => navigate(-1)}>Grizti atgal</button>
      </main>
    </>
  );
};
