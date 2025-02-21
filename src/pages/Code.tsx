import React from 'react';

const Code: React.FC = () => {
   return (
      <div className="enter-code">
         <h1>Код участия</h1>
         <p>Ввиде код события, что бы отметить своё присутсвие</p>
         <div className="code-form">
            <input type="text" placeholder="Введите код" />
            <button>Отправить</button>
         </div>
         <p>* код активен в течении {} минут</p>
      </div>
   );
};

export default Code;
