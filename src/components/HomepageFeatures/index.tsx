import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '개발',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        새로운 기술 탐구와 창의적 프로젝트를 통해 개발 능력을 키워가는 곳입니다. 여기서는 최신 프로그래밍 트렌드를 적용하여 실제 문제를 해결하는 과정과, 그 과정에서 얻은 핵심 노하우를 공유합니다.
      </>
    ),
  },
  {
    title: '기록',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        개발 과정의 모든 순간을 담는 기록입니다. 프로젝트의 성공, 때로는 실패에서 배운 교훈, 그리고 그 모든 경험을 통해 얻은 통찰을 솔직하게 나누는 공간입니다.
      </>
    ),
  },
  {
    title: 'AI 프로젝트',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        AI 기술의 최전선에서 진행하는 프로젝트를 소개합니다. 이 섹션에서는 AI를 활용해 복잡한 문제를 해결하고, 그 과정에서 발견된 획기적인 아이디어와 구현 방법을 탐구합니다.
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

export default function HomepageFeatures(): JSX.Element {
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
