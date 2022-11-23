
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import {useDispatch} from 'react-redux';
import { addProduct } from "../../redux/cartSlice";
const Product = ({ pizza }) => {


  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();

  console.log(extras);
  const handleChangePrice = (priceAmount)=>{
     setPrice(price + priceAmount)
  }

  const handleSize = ( sizeIndex)=>{
    const difference = pizza.prices[sizeIndex]-pizza.prices[size];
    setSize(sizeIndex)
    handleChangePrice(difference)

  }

  const handleChange=(e,option)=>{
    console.log(e.target.checked, option.price);

    if(e.target.checked){
      handleChangePrice(option.price)
      setExtras((prev) => [...prev,option])
    }
    else{
      handleChangePrice(- option.price)
      setExtras(extras.filter(extra => extra._id !== option._id))


    }

  }

  const handleClick =()=>{
    dispatch(addProduct({...pizza,extras,price,quantity}))
  }
  


  return (
    <>
      <Head>
        <title>Pizza- Description</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image
              src={"/img/pizza.png" || pizza.img}
              objectFit="contain"
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{pizza.title}</h1>
          <span className={styles.price}>${price}</span>
          <p className={styles.desc}>{pizza.desc}</p>
          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
            <div className={styles.size} onClick={() => handleSize(0)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>Small</span>
            </div>
            <div className={styles.size} onClick={() => handleSize(1)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>Medium</span>
            </div>
            <div className={styles.size} onClick={() => handleSize(2)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>Large</span>
            </div>
          </div>
          <h3 className={styles.choose}>Choose additional ingredients</h3>

          <div className={styles.ingredients}>
            {pizza.extraOption.map((option) => (
              <>
                <div className={styles.option} key={option._id}>
                  <input
                    type="checkbox"
                    id={option.text}
                    name={option.text}
                    className={styles.checkbox}
                    onChange={(e) => handleChange(e, option)}
                  />
                  <label htmlFor="double">{option.text}</label>
                </div>
              </>
            ))}
          </div>
          <div className={styles.add}>
            <input onChange={(e)=>setQuantity(Number(e.target.value))} type="number" defaultValue={1} className={styles.quantity} />
            <button className={styles.button} onClick={()=>handleClick()}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res?.data?.product,
    },
  };
};
