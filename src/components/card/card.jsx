// "use client";
import Link from "next/link";
import styles from "./card.module.css";

import dayjs from "dayjs";
import Image from "next/image";

export const Card = ({blog}) => {
  return (
    <div className={styles.card}>
   
     <div class={styles.img}>
      <Image src={blog.photo_url} fill={true} /> 
     </div>
            <div className={styles.title}>{blog.title}</div>
            <p className={styles.subtitle}>{blog.category}</p>
            <div className={styles.footer}>

              <Link href={`/article/${blog.id}`}>Read Article</Link>            
              <span>{dayjs(blog.created_at).format("YYYY mm DD")}</span>
            </div>
          </div>

  );
};

 