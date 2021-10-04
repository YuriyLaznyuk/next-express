import Head from 'next/head';
import A from './A';
import styles from '../styles/menu.module.scss'
const MainBlock = ({children,title,description,keywords}) => {
  return (
    <>
<Head>
  <meta name="description" content={description}/>
  <meta name="keywords" content={keywords}/>
  <title>{title}</title>
</Head>
      <div className={styles.menu}>
        <A href='/' text='MAIN'/>
        <span>|</span>
        <A href='/rest' text='REST'/>
      </div>
      <div>
        {children}
      </div>

    </>
  );
};

export default MainBlock;