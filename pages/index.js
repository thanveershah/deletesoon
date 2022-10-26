import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
   const [data, setData] = useState({});
   useEffect(() => {
      (async () => {
         const response = await fetch("/api/hello").then((res) => res.json());
         setData(response);
      })();
   }, []);

   return (
      <div className={styles.container}>
         This is a fetch Client test in NextJS 13
         <br />
         {JSON.stringify(data)}
      </div>
   );
}
