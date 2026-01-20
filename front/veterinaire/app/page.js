import styles from "./page.module.css";
import CarteRappel from "./components/home/carte-rappel/CarteRappel";
import SearchBar from "./components/search/SearchBar";
import Category from "./components/category/Category";
import Veterinarian from "./components/veterinarian/veterinarian";
import RegisterPage from "./components/register/Register";

export default function Home() {
  return (
       <main>
        <CarteRappel />
        <SearchBar />
        <Category />
        <Veterinarian />
       </main>
  );
}
