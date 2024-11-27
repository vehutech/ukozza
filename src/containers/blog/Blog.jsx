import React from 'react'
import './blog.css'
import { Article } from '../../components';
import { navLinks, blog  } from '../../edit/data/export';

const { lead, readArticle, list } = blog;

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id={navLinks[4].replaceAll(' ', '').toLowerCase()}>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>{lead.title}</h1>
      </div>
      <div className='gpt3__blog-container'>

        <div className='gpt3__blog-container_groupA'>
          <Article
            title={list[0].title}
            date={list[0].date}
            imgUrl={list[0].image.src}
            readArticle={readArticle}
          />
        </div>

        <div className='gpt3__blog-container_groupB'>
          {list.map((eachBlog, i) => (
            <>
              {i > 0 && (
                <Article
                  key={i}
                  title={eachBlog.title}
                  date={eachBlog.date}
                  imgUrl={eachBlog.image.src}
                  readArticle={readArticle}
                />
              )}
            </>
          ))}
        </div >
      </div>
    </div >
  )
}

export default Blog