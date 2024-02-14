import React from 'react';

function Footer() {
  return (
    <footer>
        <h4 className=''>
            Made by 
            <a className='mail' href="mailto:apanasov.m@yandex.ru"> Mikhail Apanasov </a>
             in 2024
        </h4>
      <a href='https://www.linkedin.com/in/apanasovm/' target="_blank" rel="noopener noreferrer">
        <img src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png' alt="LinkedIn" width="30" height="30"/>
      </a> 
    </footer>
  );
}

export default Footer;