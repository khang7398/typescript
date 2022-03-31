import React, { useState } from 'react';
import '../css/Form.css';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ people, setPeople }: IProps) {
  const [inputData, setInputData] = useState({ name: '', age: '', bio: '' });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPeople([
      ...people,
      {
        name: inputData.name,
        age: Number(inputData.age),
        bio: inputData.bio,
      },
    ]);
    setInputData({ name: '', age: '', bio: '' });
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={handleOnChange}
          value={inputData.name}
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="age"
          onChange={handleOnChange}
          value={inputData.age}
        />
        <input
          name="bio"
          id="bio"
          placeholder="Bio Description"
          onChange={handleOnChange}
          value={inputData.bio}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
