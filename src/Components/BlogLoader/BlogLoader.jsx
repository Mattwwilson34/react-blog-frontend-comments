import './BlogLoader.css';
import React from 'react';
import ContentLoader from 'react-content-loader';

const BlogLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={550}
      height={700}
      viewBox='0 0 550 700'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <rect x='0' y='0' rx='3' ry='3' width='400' height='20' />
      <rect x='25' y='50' rx='3' ry='3' width='475' height='10' />
      <rect x='0' y='80' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='110' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='140' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='170' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='200' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='230' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='260' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='290' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='320' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='350' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='380' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='410' rx='3' ry='3' width='500' height='10' />
      <rect x='0' y='440' rx='3' ry='3' width='500' height='10' />
    </ContentLoader>
  );
};

export default BlogLoader;
