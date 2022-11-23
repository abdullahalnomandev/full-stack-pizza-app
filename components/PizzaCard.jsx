import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ porducts }) => {

  const router = useRouter()
  return (
    <>
      {porducts.map(({title,desc,prices,img,_id}) => (
        <>
          <div className={styles.container} onClick={()=>router.push(`/product/${_id}`)}>
            <Image src={ "/img/pizza.png" || img} alt="" width="500" height="500" />
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.price}>${prices[0]}</span>
            <p className={styles.desc}>
              {desc}
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default PizzaCard;
