"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();

  const items = [
    { id: "home", icon: "/Home.png", link: "/", alt: "Home" },
    { id: "fav", icon: "/heart.svg", link: "/favorites", alt: "Favorites" },
    { id: "msg", icon: "/message-circle.png", link: "/messages", alt: "Messages" },
    { id: "user", icon: "/user.png", link: "/profile", alt: "User" },
  ];

  return (
    <footer className={styles.footer}>
      {items.map((item) => {
        const isActive = pathname === item.link;

        return (
          <Link href={item.link} key={item.id} className={styles.link}>
            <div className={styles.iconWrapper}>
              <Image
                src={item.icon}
                alt={item.alt}
                fill
                className={`${styles.icon} ${isActive ? styles.active : ""}`}
              />
            </div>
          </Link>
        );
      })}
    </footer>
  );
}
