import React from 'react';
import '../css/content-block.css';

const content = [{
    title: 'Lala',
    id: 1
},
{
    title: 'YoYo',
    id: 2
},
{
    title: 'Gogo',
    id: 3
}];

function App() {
  return (
    <section className='content-block'>
        <h2 className='visually-hidden'>Content</h2>
        {content.map((item) => 
            <div className='content-block__item' key={item.id}>
                <h3 className='content-block__item-title'>{item.title}</h3>
            </div>)}
    </section>
  );
}

export default App;
