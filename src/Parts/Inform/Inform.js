import React, { useEffect, useRef } from 'react';
import './Inform.css';

// Fake Server
const data = [
  {
    id: 1,
    icon: 'icon-travel',
    number: 20,
    title: 'Years of Experience',
  },
  {
    id: 2,
    icon: 'icon-building',
    number: 50,
    title: 'Completed Projects',
  },
  {
    id: 3,
    icon: 'icon-users',
    number: 100,
    title: 'Trained Professionals',
  },
  {
    id: 4,
    icon: 'icon-globe',
    number: 7,
    title: 'Current Active States',
  },
];

function Inform() {
  const informRef = useRef(null);

  useEffect(() => {
    const informNums = informRef.current.querySelectorAll('.card-number');
    
    const counters = data.map((item, index) => ({
      endNum: item.number,
      numPlus: Math.ceil(item.number / 100),
      interval: 10,
      index: index,
    }));

    const startCounter = (counterObj, element) => {
      let number = 0;
      const { endNum, numPlus, interval } = counterObj;
      
      const setNumber = setInterval(() => {
        number += numPlus;
        if (number >= endNum) {
          number = endNum;
          clearInterval(setNumber);
        }
        element.textContent = number+"+";
      }, interval);
    };

    const onScroll = () => {
      informNums.forEach((numEl, index) => {
        if (
          numEl.getBoundingClientRect().top <= window.innerHeight &&
          numEl.textContent === '0'
        ) {
          startCounter(counters[index], numEl);
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="inform parent-semicircular" ref={informRef}>
      {/* semicircular */}
      <div className="semicircular"></div>

      <div className="container">
        <div className="parent-items">
          {data.map((item) => {
            const { id, icon, number, title } = item;

            return (
              <section key={id} className="counter-card">
                <i className={`card-icon ${icon}`}></i>
                <h4 className="card-number">0</h4> {/* Initial value set to 0 for animation */}

                <h3 className="title-sm">{title}</h3>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Inform;
