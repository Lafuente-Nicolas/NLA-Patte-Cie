import styles from "./page.module.css";
import CarteRappel from "./components/home/carte-rappel/CarteRappel";
import SearchBar from "./components/search/SearchBar";


export default function Home() {
  return (
       <main>
        <CarteRappel />
        <SearchBar />
        
       </main>
  );
}
