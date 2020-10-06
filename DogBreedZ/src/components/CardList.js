import React from 'react';
import Card from './Card';

const CardList = ({ dogs }) => {
  return (
    <div>
      {
        dogs.map((dog, i) => {
          return (
            <Card
              key={i}
              id={dogs[i].id}
              breed={dogs[i].breed}
              country={dogs[i].country}
              foto_path={dogs[i].foto_path}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
