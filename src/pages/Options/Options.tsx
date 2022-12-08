import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <div>
      <h1>Thanks for using Bandcamp Tempo Adjust!</h1>
      <p>
        Bandcamp Tempo Adjust is a free, open source project. Please consider
        donating:
      </p>
      <p>
        <a
          href="https://www.paypal.com/donate/?business=8PMHBGHW49248&no_recurring=0&item_name=Your+generosity+goes+towards+me+drinking+a+fancy+cocktail+every+once+and+a+while.&currency_code=USD"
          role="button"
        >
          Donate
        </a>
      </p>
      <hr></hr>
      <p>
        Report bugs and contribute on{' '}
        <a href="https://github.com/azarbayejani/bandcamp-tempo-adjust">
          Github
        </a>
      </p>
    </div>
  );
};

export default Options;
