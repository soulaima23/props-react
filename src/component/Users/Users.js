import React from 'react';
import User from '../User/User.js';


const Users = () => {
  const data = [
      { name:  "shangai" , age : "16" , work: "developper "} ,
      { name: "carol" , age : "26" , work: "developper "},
      { name:   "tom" , age : "20" , work: "designer "},
      { name: "soulaima" , age : "24" , work: "developper "},
      { name:  "beki" , age : "18" , work: "Youtube creater "},
      { name: "chayma" , age : "21" , work: "full-stack developer"},

  ];
  return (
    <div>
      {
        data.map(hello =>(<User element={hello}/>) )
      }
    </div>
  )
  
};

export default Users;
