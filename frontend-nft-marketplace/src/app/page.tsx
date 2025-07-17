import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@heroui/button";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button color="primary">Click me</Button>
    </div>
  );
}
