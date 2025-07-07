import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduccion"
            style={{ margin: '10px' }}>
            Introducción
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/primeros_pasos"
            style={{ margin: '10px' }}>
            Primeros Pasos
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/buenas_practicas"
            style={{ margin: '10px' }}>
            Buenas prácticas
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/guías"
            style={{ margin: '10px' }}>
            Guias
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
