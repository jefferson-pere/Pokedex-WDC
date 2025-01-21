import { Link, Outlet } from "react-router-dom";
import { Container } from "./styles";

export function App() {
  return (
    <Container>
      <header>
        <h1>Header</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/details">Details</Link>
        </nav>
      </header>

      <Outlet />

      <footer>
        <h1>Footer</h1>
      </footer>
    </Container>
  );
}
