import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'To test',
    Svg: require('@site/static/img/test.svg').default,
    description: (
      <>
        This blog is for testing, which means things might not work right from time to time, sorry.
      </>
    ),
  },
  {
    title: 'To learn',
    Svg: require('@site/static/img/learn.svg').default,
    description: (
      <>
          The intention is to learn, motivate myself to start writing and also documenting some situations that I might find useful in the future.
      </>
    ),
  },
  {
    title: 'To improve',
    Svg: require('@site/static/img/improve.svg').default,
    description: (
      <>
        The expectation is that with this blog I can grow and increasingly improve my skills.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
