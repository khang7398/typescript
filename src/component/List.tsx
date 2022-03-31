/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../css/List.css';
import { IState as IProps } from '../App';
// interface IProps{
//     people:{
//       name: string,
//       age: number,
//       bio: string
//     }[]
//   }
export default function ({ people }: IProps) {
  return (
    <div className="list-container">
      <h1>List</h1>
      {people.map((item, index) => {
        return (
          <div className="list-item-container">
            {item.name} - {item.age} - {item.bio}
          </div>
        );
      })}
    </div>
  );
}
