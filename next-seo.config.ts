import { DefaultSeoProps } from 'next-seo';

const defaultTitle = '프로젝트 Title';
const defaultDescription = '프로젝트 Description';
const defaultUrl = 'http://localhost:3000';

const defaultNextSeoConfig: DefaultSeoProps = {
  title: defaultTitle,
  description: defaultDescription,
  canonical: defaultUrl,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: defaultUrl,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    cardType: 'summary_large_image',
  },
};

export default defaultNextSeoConfig;
