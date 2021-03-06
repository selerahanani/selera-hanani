/* eslint-disable react/prop-types */
import React from 'react';
import { createClient } from 'contentful';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'cakes' });

  return {
    props: {
      cakes: res.items,
    },
    revalidate: 1,
  };
}

export default function Recipes({ cakes }) {
  return (
    <div className="recipe-list">
      {/* {cakes.map((cake) => (
        <Card key={cake.sys.id} cake={cake} />
      ))} */}
      <Carousel />
    </div>
  );
}
