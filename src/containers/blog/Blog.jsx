import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02} from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> Find new ways to earn and spend crypto.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog02} date="mAR 25, 2021" text="SPLINTERLANDS" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog01} date="Mar 15, 2018" text="Axie Infinity" />

      </div>
    </div>
  </div>
);

export default Blog;
