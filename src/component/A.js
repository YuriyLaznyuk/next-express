import Link from 'next/link';

const A = ({href,text}) => {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );
};

export default A;