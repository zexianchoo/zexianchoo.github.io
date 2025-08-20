import React from 'react';
import { CurrentCard, GCP, ChatBot, Deepfake, BBDC } from "../components";
import { PURE_data, Deepfake_data, BBDC_data, GCP_data, ChatBot_data } from '../constants';

// Refactored data structure for clarity
const allProjects = [
  { id: 'chatbot', Component: ChatBot, ...ChatBot_data[0] },
  { id: 'pure', Component: CurrentCard, ...PURE_data[0] },
  { id: 'deepfake', Component: Deepfake, ...Deepfake_data[0] },
  { id: 'gcp', Component: GCP, ...GCP_data[0] },
  { id: 'bbdc', Component: BBDC, ...BBDC_data[0] },
];

const Project = () => {
  return (
    <main
      id='project'
      className='max-container min-h-screen flex flex-col justify-center items-center gap-16 px-4 sm:px-8 py-6'
    >
      <h1 className='heading-text text-center font-semibold fading-right-fast'>
        Here's some projects I've worked on ✌️:
      </h1>

      <section className='fading-down-slower flex flex-col gap-12'>
        {allProjects.map((project) => {
          const { id, Component, ...projectProps } = project;
          return (
            <Component
              key={id}
              {...projectProps}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Project;