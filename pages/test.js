// () html --- rest is js

import Head from 'next/head';
import styles from '../styles/Home.module.css'; 
import { useEffect, useState } from 'react';

export default function test() {
  const [dataInfo, setDataInfo] = useState();
  const [loading, setLoading] = useState(true);
  // const [ex, setEx] = useState(); 
  // need a proxy apaz
  //const url = 'https://api.sampleapis.com/wines/reds';
  useEffect(() => {
    fetch("/api/get_stats").then((res) => res.json().then((body) => {
      setDataInfo(body);
      setLoading(false);
    }))
  }, []) // [ex])
  
  // const query = await fetch(url);
  // const response = await query.json();
  // console.log('response from API ', response);

// normally will input Loading component from somewhere else 
  if (!loading) {
    return (
      <div className={styles.center}>
        <Head>
          <title>Test</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <h3>ex</h3>
        {dataInfo.data.usercount}
        
      </div>
    );
  } else {
    return (
      <div>
        loading
      </div>
    )
  }
}
