import styles from "./Category.module.css";

export default function Category({ active, setActive }) {
  const categories = ["Vaccine", "Surgery", "SPA & Treatment", "Consultation"];

  return (
    <div className={styles.container}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={active === cat ? styles.active : styles.button}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
