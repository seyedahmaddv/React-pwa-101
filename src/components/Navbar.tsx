import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#ddd' }}>
      <Link to="/" style={{ margin: '0 1rem' }}>خانه</Link>
      <Link to="/about">درباره</Link>
    </nav>
  );
}
