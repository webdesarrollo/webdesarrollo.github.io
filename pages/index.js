import Circle from "../components/circle";
import Content from "../components/content";
import EmptyDiv from "../components/emptyDiv";
import Pulse from "../components/pulse";
import styles from "../styles/Home.module.css";

export default function Home() {
  const size8 = 8
  const size12 = 12
  const size20 = 20
  const size30 = 30
  const colorNone = 'none'
  const color1 = '#FAFAFAee'
  const color2 = '#E0E0E077'

  return (
    <div className={styles.container}>
     <section>
        <div className={styles.divContainerBetween}>
          <Circle height={size20} width={size20} fill={color1}/>
          <Circle height={size20} width={size20} fill={color1}/>
          <Circle height={size20} width={size20} fill={colorNone}/>
        </div>
        <div className={styles.divContainer}>
          <Pulse height={size30} width={size30} fill={color1} stroke={color2}/>
          <Circle height={size8} width={size8} fill={color1}/>
          <EmptyDiv color={colorNone} height={size20} width={60}/>
          <Circle height={size20} width={size20} fill={color1}/>
        </div>
        <div className={styles.divContainer}>

        </div>
        <div className={styles.divContainer}>
          <Circle height={size8} width={size8} fill={color1}/>
          <EmptyDiv color={colorNone} height={size20} width={60}/>
        </div>
        <div className={styles.divContainer}>
          <EmptyDiv color={colorNone} height={size20} width={60}/>
          <Pulse height={size20} width={size20} fill={color1} dur="3s"/>
        </div>
        <div className={styles.divContainer}>
          <Circle height={size8} width={size8} fill={color1}/>
          <EmptyDiv color={colorNone} height={size20} width={300}/>
        </div>
        <div className={styles.divContainer}>

        </div>
        <div className={styles.divContainer}>
          <EmptyDiv color={colorNone} height={size20} width={200}/>
          <Circle height={size8} width={size8} fill={color1}/>
        </div>
        <div className={styles.divContainer}>
          <Circle height={size8} width={size8} fill={color1}/>
          <Circle height={size8} width={size8} fill={color1}/>
        </div>
        <div className={styles.divContainer}>
        </div> 
        <div className={styles.divContainer}>
          <Circle height={size20} width={size20} fill={color1}/>
          <EmptyDiv color={colorNone} height={size20} width={200}/>
        </div> 
        <div className={styles.divContainer}>
          <Pulse height={size20} width={size20} fill={color1}/>
        </div> 
        <div className={styles.divContainer}>
          <Circle height={size12} width={size12} fill={color1}/>
          <EmptyDiv color={colorNone} height={size20} width={40}/>
        </div> 
        <div className={styles.divContainer}>
          <EmptyDiv color={colorNone} height={size20} width={200}/>
          <Pulse height={size20} width={size20} fill={color1}/>
        </div> 
        <div className={styles.divContainer}>
          <EmptyDiv color={colorNone} height={size20} width={10}/>
          <Circle height={size8} width={size8} fill={color1}/>
        </div> 
        <div className={styles.divContainer}>
          <Pulse height={size20} width={size20} fill={color1} dur="4s"/>
          <Circle height={size8} width={size8} fill={color1}/>
          <Circle height={size12} width={size12} fill={color1}/>
        </div> 
      </section>
      <Content styles={styles}/>
    </div>
  );
}
