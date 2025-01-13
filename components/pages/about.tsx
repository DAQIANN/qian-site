import styles from "../../styles/Bio.module.css";
import Link from "@/components/shared/Link";
import { LinkType } from "@/custom/types";

export default function About() {
  return (
    <div>
      <p>
        Hey, I'm Daniel! I'm currently an engineer at{" "}
        <Link
          href="https://about.google/"
          cssID="google"
          linkType={LinkType.STRING}
        >
          <span className={styles.google}>
            <span className={styles.g}>G</span>
            <span className={styles.o1}>o</span>
            <span className={styles.o2}>o</span>
            <span className={styles.g2}>g</span>
            <span className={styles.l}>l</span>
            <span className={styles.e}>e</span>
          </span>{" "}
          </Link>{" "}
        working on Cloud SQL.
      </p>
    </div>
  );
}
