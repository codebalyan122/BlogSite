import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];
  if (!data) return notFound();
  return data;
};

const Category = ({ params }) => {
  const category = params.category;
  const data = getData(category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitles}>{category}</h1>
      {data.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Button text={"See More"} url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image className={styles.img} fill alt="" src={item.image} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
