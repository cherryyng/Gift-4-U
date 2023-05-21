import styles, { layout } from "../style";
import { giftCardsAvaliable } from "../constants";


const Balances = () => (
    <section>
        <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            Hello!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Here are your existing balances
        </p>

      

        <div className={`${layout.sectionImg} flex-col`}>
            {giftCardsAvaliable.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
        </div>

          <Button styles={`mt-10`} />
          <Link to="/">Home</Link>

        </div>
        <Route path="/" exact component={Home} />
    </section>
 
);

export default Balances;
