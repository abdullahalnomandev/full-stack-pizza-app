import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect,useState } from "react";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {

  const [porducts, setPorducts] = useState([])


  const getProducts = async ()=>{
    try {
      const {data:products} = await axios.get('/api/products');
      console.log(products.products);
      setPorducts(products.products)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Featured/> */}
      <PizzaList porducts={porducts}/>
    </div>
  );
}
