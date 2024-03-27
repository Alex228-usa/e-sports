import React from 'react';
import './styles/NewsBlock.css'

const NewsBlock = () => {
  return (
    <section className="news-block">
      <h2>Новости</h2>
      <ul>
        <li>Новость 1</li>
        <li>Новость 2</li>
        <li>Новость 3</li>
      </ul>
      {/* Форма для добавления новости */}
    </section>
  );
};

export default NewsBlock;
