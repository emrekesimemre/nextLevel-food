'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const validateInput = (formData) => {
  const title = formData.get('title');
  const summary = formData.get('summary');
  const instructions = formData.get('instructions');
  const image = formData.get('image');
  const name = formData.get('name');
  const email = formData.get('email');

  if (!title || !summary || !instructions || !image || !name || !email) {
    return 'Please fill all fields';
  }

  return null;
}

 export async function shareMeal(prevstate, formData) {
    const validationError = validateInput(formData);
    if (validationError) {
      return { message: validationError };
    }
   const mealData = {
     title: formData.get('title'),
     summary: formData.get('summary'),
     instructions: formData.get('instructions'),
     image: formData.get('image'),
     creator: formData.get('name'),
     creator_email: formData.get('email'),
   };
   console.log('🚀 ~ file: page.js:11 ~ shareMeal ~ mealData:', mealData);

   await saveMeal(mealData);
   revalidatePath('/meals', 'layout');
   redirect('/meals');
 }