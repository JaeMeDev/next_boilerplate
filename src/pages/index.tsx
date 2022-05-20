import Link from 'next/link';

const Home = () => (
  <nav>
    <Link href="./about">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>About</a>
    </Link>
  </nav>
);

export default Home;
