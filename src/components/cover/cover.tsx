// Assets
import styles from "./cover.module.scss";

export const Cover = ({ src }: { src: string }) => {
  return <div className={styles.cover} style={{  background: `url(${src}) no-repeat bottom` }} />;
}
