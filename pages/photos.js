import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';

import { getImages } from '../lib/firebase';

const ResponsiveGallery = dynamic(() => import('../components/Gallery'), {
  ssr: false,
});

export async function getStaticProps() {
  const docs = await getImages();
  const images = docs.map((doc) => {
    return {
      src: doc.url,
    };
  });
  return {
    props: {
      imagesArr: images,
    },
  };
}

const Photos = ({ imagesArr }) => {
  // const [imagesArr, setImagesArr] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const docs = await getImages();
  //     const images = docs.map((doc) => {
  //       return {
  //         src: doc.url,
  //       };
  //     });
  //     setImagesArr(images);
  //   };
  //   getData();
  // }, []);
  return (
    <Layout>
      <Head>
        <title>Photos | Stefan Nasturas Web Dev</title>
      </Head>
      {typeof window !== 'undefined' && (
        <ResponsiveGallery
          images={imagesArr}
          numOfImagesPerRow={{ xs: 1, s: 2, m: 3, l: 3, xl: 4, xxl: 4 }}
          colsPadding={{ xs: 2, s: 2, m: 2, l: 2, xl: 2, xxl: 2 }}
          imagesPaddingBottom={{ xs: 2, s: 2, m: 2, l: 2, xl: 2, xxl: 2 }}
        />
      )}
    </Layout>
  );
};

export default Photos;
