import styles from "./style";
import { Navbar, Balances,Footer, Navbar, } from "./components";

const Recipient = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

 
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Balances />
        <Footer />
      </div>
    </div>
  </div>
);

export default Recipient;
