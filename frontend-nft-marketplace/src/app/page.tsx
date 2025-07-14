import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@heroui/button";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="bg-red-500 p-4 rounded-xl">Hello</div>
      <Button color="primary">Click me</Button>
    </div>
  );
}
