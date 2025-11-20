"use client";

import Image from "next/image";
import styles from "./CarteRappel.module.css";

export default function CarteRappel() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.textBlock}>
          <p>
            Your <strong>Catrine</strong> will get
            <br />
            vaccination <strong>tomorrow</strong>
            <br />
            at <strong>07.00 am!</strong>
          </p>

          <button className={styles.button}>See details</button>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/chat.svg"
            alt="Chat"
            width={300}
            height={300}
            className={styles.chatImage}
          />
        </div>
      </div>
    </div>
  );
}

