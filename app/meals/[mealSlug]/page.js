import Link from 'next/link';
import React, { Suspense } from 'react';
import classes from './page.module.css';
import Image from 'next/image';
import { notFound, usePathname } from 'next/navigation';
import { getMeal } from '@/lib/meals';

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    return notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
    image: meal.image,
  };
}



const MealDetails = ({params}) => {
  console.log('🚀 ~ file: page.js:10 ~ MealDetails ~ params:', params)
const meal =  getMeal(params.mealSlug);

if(!meal) {
  return notFound();
}

console.log('🚀 ~ file: page.js:13 ~ MealDetails ~ meal:', meal)
meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={
            meal.title
          } />
        </div>
        <div className={classes.headerText}>
          <h1>
            {meal.title}
          </h1>
          <p className={classes.creator}>
            by
            <a href={`mailto:${meal.creator_email}`}>
              {meal.creator}
            </a>
          </p>
          <p className={classes.summary}>
            {meal.summary}
          </p>
        </div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealDetails;
