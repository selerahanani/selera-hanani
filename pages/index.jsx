/* eslint-disable react/prop-types */
import React from 'react';
import { createClient } from 'contentful';
import CakeCard from '../components/CakeCard';

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
  // eslint-disable-next-line no-console
  console.log(cakes);

  return (
    <div className="recipe-list">
      {cakes.map((cake) => (
        <CakeCard key={cake.sys.id} cake={cake} />
      ))}
    </div>
  );
}
