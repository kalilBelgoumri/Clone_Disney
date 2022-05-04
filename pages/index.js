import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Disney Clone</title>
          <meta name="description" content="Clone Disney" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}></main>

        <footer className={styles.footer}></footer>
      </div>
    </Layout>
  );
}
