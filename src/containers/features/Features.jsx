import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Pizza',
    text: 'If you want to eat at a table, choose a table that is not too close to the crowd and not too far away from the food.',
  },
  {
    title: 'Sides',
    text: 'We are a happy crowd at the end of a long work day. Were on a budget and on a tight schedule. Were done and were hungry. I dont want to have to spend a lot of time preparing for the occasion. I dont want to have to get the kids off to a long dinner in the car, or find a sitter. I don’t want to have to lay the table, or make a mess in the kitchen. I want to enjoy myself.',
  },
  {
    title: 'Drinks',
    text: 'i got in the car and i drove down to the beach and we had a great time we made this little boat and i would sail it over the ocean and i would like to go and see my grandma and then i really like the ocean so we went to the beach and my sister and my aunt were just like having fun but i was just chilling out and watching the waves and the sand and i just really loved it and i just was like im just going to stay here and chill.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">MENU</h1>
      <p>Store not available in your location. </p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
