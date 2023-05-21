import React from 'react'
import Title from '../layout/Title'
import {ai,techy, one,tech,todo,survey } from "../../assets/index";
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id = "projects" className="w-full py-20 border-b-[1px] border-b-black">
       <div className="flex justify-center items-center text-center sm:mt-96 xl:mt-5 lgl:mt-20 mdl:mt-5 xs:mt-96"> 
       <Title
            title ="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
            des = "My Projects"
        />
        </div>
        <div className ="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 sm:grid-cols-1 gap-10">
            <ProjectCard
                title ="OMNI FOOD CLONE WEBSITE"
                des = "Food delivery website using HTML5 and CSS3"
                src = {one}
            />
            <ProjectCard
                title ="GPT3 AI WEBSITE"
                des = "Modern UX/UI website using HTML5,CSS3 and ReactJs"
                src = {ai}
            />
            <ProjectCard
                title ="TECHYSTAR WEBSITE"
                des = "A website using HTML5,CSS3 and ReactJs"
                src = {techy}
            />
            <ProjectCard
                title ="TECH FOREST,INDORE CLONE WEBSITE"
                des = "IT Training and consulting website using HTML5,CSS3 and Bootstrap "
                src ={tech}
            />
            <ProjectCard
                title ="TO DO LIST"
                des = "To do list using HTML5,CSS3, ReactJs, Bootstrap"
                src ={todo}
            />
            <ProjectCard
                 title ="Survey Form"
                des = "Survey form using HTML5,CSS3,Bootstrap and JavaScript"
                src ={survey} 
            />
        </div>
    </section>
  )
}

export default Projects