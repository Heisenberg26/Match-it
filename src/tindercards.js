import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./tindercards.css";

function Tindercards() {
  const [people, setPeople] = useState([
    {
      name: "Andrew Tate",
      url: "https://images.news18.com/ibnlive/uploads/2022/08/andere.jpg",
    },
    {
      name: "Tristan Tate",
      url: "https://tristan-tate.com/wp-content/uploads/2022/12/tristian-tate-1024x1024.jpg",
    },
  ]);


  const swiped = (direction, nameToDelete) => {
    console.log("Removing : " + nameToDelete);
  };
  const outofFrame = (name) => {
    console.log(name + "left the screen");
  };


  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
      {people.map((person) => (
        <TinderCard
          className="swipe" 
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen= {() => outofFrame(person.name)}>
            <div style={{backgroundImage: "url(" + person.url + ")"}}
            className="card">
              <h2>{person.name}</h2>

            </div>
        </TinderCard>
      ))}
      </div>
    </div>
  );
}

export default Tindercards;
