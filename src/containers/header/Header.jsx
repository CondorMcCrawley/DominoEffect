import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Domino Effect</h1>
      <p>Buy pizza and soda, and what I needed was the courage to admit that I was in fact in love.

We walked back to my room. I sat on the bed.

"I'm not going to stop calling you," I said. "I'm going to see if you still want to be with me."

"I do," he said.

I said, "Then I'll be with you."

We talked some more. When he left, I cried. I was so happy.

</p>
<p>
  Find the nearest Dominos and order pizza with [entercryptohere].
</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Delivery Address" />
        <button type="button">Find Store</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people}/>
        <p>1,600 people ordered pizza and soda in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
