// "use client";
import Link from "next/link";
import { Container } from "../Container/container";
import styles from "./footer.module.css";
import { FaSquareFacebook } from "react-icons/fa6";

import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitterSquare } from "react-icons/fa";


export const Footer = () => {
    return <div className={styles.footer}>
        <Container>

            <div className={styles.content}>

                <h3>All Rights Reserved - Aon2023</h3>
                <ul>
                    <li>
                      <a href={"/"}>
                      <FaSquareFacebook />
                      </a>
                    </li>
                    <li>
                        <a href={"/"}>
                          <TiSocialInstagram/>
                        </a>
                    </li>
                    <li>
                        <a href={"/"}>
                           <FaTwitterSquare/>
                        </a>
                    </li>
                </ul>
            </div>

        </Container>

    </div>
}