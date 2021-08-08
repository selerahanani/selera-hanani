/* eslint-disable react/prop-types */
import React from 'react';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
// import Skeleton from '../../components/Skeleton';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'cakes',
  });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'cakes',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { cake: items[0] },
    revalidate: 1,
  };
};

export default function RecipeDetails({ cake }) {
//   if (!recipe) return <Skeleton />;
  const {
    name, category, thumbnail, description,
  } = cake.fields;

  //   console.log(name, category, thumbnail, description, price, images);
  return (
    <div>
      <div className="banner">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
        <h2>{ name }</h2>
      </div>
      <div className="info">
        {category.map((ing) => (
          <span key={ing}>{ ing }</span>
        ))}
      </div>
      <div className="method">
        <div>{documentToReactComponents(description)}</div>
      </div>
    </div>
  );
}
