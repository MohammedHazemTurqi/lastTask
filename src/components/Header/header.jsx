"use client";

import Image from "next/image";
import { Container } from "../container/container";
import styles from "./header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
  
    <div className={styles.header}>
      <Container>
      <div className={styles.content}>
     
          <h3>Aon 2023</h3>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li><Link href='/'>About</Link></li>
            <li><Link href='/'>Help</Link></li>
          </ul>
        </div>
       
       </Container>
    </div>
   
  );
};