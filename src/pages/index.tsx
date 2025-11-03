import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React, { useState, useEffect } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary hero--dark', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/primeros-pasos"
            style={{ margin: '10px' }}>
            Primeros pasos
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/buenas-practicas"
            style={{ margin: '10px' }}>
            Buenas prácticas
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/mapas"
            style={{ margin: '10px' }}>
            Mapa de Nodos
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const [showBanner, setShowBanner] = useState(true);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      
      {showBanner && (
        <div className={styles.banner}>
        <span>
          📢 ¡Madrid y alrededores se pasan a MediumFast!&nbsp;
          <Link to="/blog/mediumfast-madrid" style={{ color: '#28a3e0', textDecoration: 'underline' }}>
          Click aquí
          </Link>
        </span>
        <button className={styles.closeButton} onClick={() => setShowBanner(false)}>×</button>
      </div>
      
      )}

      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
