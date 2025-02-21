import React from 'react';
import {useParams} from 'react-router-dom';

const Guild: React.FC = () => {
   const { id } = useParams();
   console.log(id)
   return (
      <div className="guild-content">
         <h1>Гильдии</h1>
         <p>Guild info {id}!</p>
      </div>
   );
};

export default Guild;
