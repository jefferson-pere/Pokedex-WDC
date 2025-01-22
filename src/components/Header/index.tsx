import { Container } from "./styles";
import logo from "../../assets/pokemon-logo.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export function Header() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <h1 className="srOnly">Pokédex - Reprograma Jucás</h1>

      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="pokemonName" className="srOnly">
            Pesquisar Pokémon
          </label>
          <input
            type="text"
            id="pokemonName"
            placeholder="Pesquisar Pokémon"
            {...register("pokemonName")}
          />
          <button>Pesquisar</button>
        </section>
      </form>
    </Container>
  );
}
