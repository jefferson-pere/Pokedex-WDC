import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "../../components/Header";

export function App() {
  return (
    <Container>
      <Header />
      <Outlet />

      <footer>
        <h1>Footer</h1>
      </footer>
    </Container>
  );
}
