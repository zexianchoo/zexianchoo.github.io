import React from 'react';
import { Nav, Footer } from '../components';
import { Project } from '../sections';

const ProjectsPage = () => {
  return (
    <main className='flex flex-col'>
      <Nav />

      <section id='projects' className='flex-grow px-4 sm:px-8 sm:py-16 py-3'>
        <Project />
      </section>

      <Footer />
    </main>
  );
};

export default ProjectsPage;