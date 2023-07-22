import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/button";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are we</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            magni quos molestiae consequuntur tempore repudiandae eius corrupti
            tempora vitae. Autem sapiente delectus dolorem dolor laudantium
            magni iure fugit aspernatur quo nihil, ipsam eum atque voluptates
            aliquam assumenda quaerat facere rem quas molestias excepturi, at
            quisquam modi perferendis. Accusamus sed voluptate mollitia quam
            <br />
            iure odio quas illo, reprehenderit quod distinctio repellat
            obcaecati consequuntur quos, explicabo tempora eveniet tenetur culpa
            sint expedita saepe deserunt earum nihil corrupti quia? Dolor
            doloribus voluptatibus ea, ut placeat aliquam exercitationem
            molestiae temporibus dolorem modi nemo cum laudantium. Voluptatum
            quod ipsam rerum velit molestias corporis nostrum modi!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url={"/contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  );
}
