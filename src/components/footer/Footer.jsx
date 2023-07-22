import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="">©2023 Balyancode. All rights reserved </div>
      <div className={styles.social}>
        <Image
          src={"/1.png"}
          width={15}
          height={15}
          alt="balyancode Facebook"
          className={styles.icon}
        />
        <Image
          src={"/2.png"}
          width={15}
          height={15}
          alt="balyancode Instagram"
          className={styles.icon}
        />
        <Image
          src={"/3.png"}
          width={15}
          height={15}
          alt="balyancode Twitter"
          className={styles.icon}
        />
        <Image
          src={"/4.png"}
          width={15}
          height={15}
          alt="balyancode Youtube"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
