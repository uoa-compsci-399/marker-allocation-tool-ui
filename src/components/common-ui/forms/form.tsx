import React from 'react';
import Textbox from './textbox';
import CheckBoxes from './checkboxes';
import Dropdown from './dropdown';
import Date from './date';
import RadioBoxes from './radioboxes';
// import clsx from 'clsx';

const Form = (): JSX.Element => {
  return (
    <div className="grid max-w-full p-20 m-auto border border-gray-900 space-y-7">
      <div className="grid min-w-full grid-cols-2 row-span-1 gap-7">
        <Textbox label={'First Name'} />
        <Textbox label={'Last Name'} />
        <Textbox label={'Student ID'} />
        <Textbox label={'University of Auckland Email'} />
      </div>
      <Date label={'Current area of study'} />
      <Dropdown options={['enrolled', 'waiting']} label={'Enrolment status'} />
      <Dropdown options={['enrolled', 'waiting']} label={'Current area of study'} />
      <CheckBoxes
        label={'Avaliability'}
        options={['Summer School', 'Semester One', 'Semester Two']}
      />
      <RadioBoxes label={'Have you worked as a marker before?'} />
      <RadioBoxes label={'Do you have a nz visa?'} />
      <RadioBoxes label={'Are you located in Auckland?'} />
    </div>
  );
};

export default Form;
