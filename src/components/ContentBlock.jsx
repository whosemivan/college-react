import React from 'react';
import '../css/content-block.css';
import { ThemeContext } from '../context';

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

function ContentBlock() {
    const {theme} = React.useContext(ThemeContext);

  return (
    <section className='content-block' style={{backgroundColor: theme.background, color: theme.foreground}}>
        <h2 className='visually-hidden'>Content</h2>
        {content.map((item) => 
            <div className='content-block__item' key={item.id} style={{borderColor: theme.foreground}}>
                <h3 className='content-block__item-title'>{item.title}</h3>
            </div>)}
    </section>
  );
}

export default ContentBlock;
