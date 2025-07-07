import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Segura y encriptada',
    Svg: require('@site/static/img/undraw_security_0ubl.svg').default,
    description: (
      <>
        Meshtastic es una red segura y cifrada que protege tus comunicaciones mediante cifrado de extremo a extremo.
      </>
    ),
  },
  {
    title: 'Red descentralizada',
    Svg: require('@site/static/img/undraw_broadcast_gyxl.svg').default,
    description: (
      <>
        Permite comunicaciones de largo alcance sin necesidad de cobertura 4G, 5G ni Wi-Fi. Ideal para zonas rurales, montaña o situaciones sin infraestructura.
      </>
    ),
  },
  {
    title: 'Libre de uso',
    Svg: require('@site/static/img/undraw_order-coffee_pw24.svg').default,
    description: (
      <>
        Meshtastic es una red completamente gratis que opera en frecuencias libres, sin costos ni suscripciones.

      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
