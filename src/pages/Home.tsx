import { Link } from 'react-router-dom';
import { useDummyList } from 'src/api/demo';

function HomePage() {
  const { data } = useDummyList();

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <h1 className="text-4xl font-bold">Home Page</h1>
      <button
        type="button"
        className="text-blue-400 bg-black px-2 py-2 rounded-lg"
      >
        Hello
      </button>
      <ul>
        {data?.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
