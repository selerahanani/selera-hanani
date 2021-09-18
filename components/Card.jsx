/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

export default function CakeCard({ cake }) {
  const {
    name, slug, category, thumbnail,
  } = cake.fields;

  const categories = [];
  category.forEach((c) => categories.push(c));
  return (
    <div className="card">
      <div className="featured">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{ name }</h4>
        </div>
        <div className="actions">
          <div className="category">
            {categories.map((ing) => (
              <Link key={ing} href="/">
                <a>{ ing }</a>
              </Link>
            ))}
          </div>
          <Link href={`/cakes/${slug}`}><a className="read-more">Read More</a></Link>
        </div>
      </div>
    </div>
  );
}
