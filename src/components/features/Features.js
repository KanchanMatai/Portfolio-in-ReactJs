import React from 'react'
import Title from '../layout/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id ="features"className='w-full h-[800px] py-20 border-b-[1px] border-b-black'>
   <Title title ="Trainings and certifications" des ="What I have done"/>
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 mdl:grid-cols-3">
<Card
  title ="Certified by UDEMY"
  des = "Trained Full Stack Developer"
/>
<Card
   title ="Certified by Tech Forest, Indore"
  des = "Trained Full Stack Developer"
  
/>
<Card
   title ="Internship from Tech Forest, Indore"
  des = "Front End Developer"
  
/>
   </div>
</section>
  )
}

export default Features