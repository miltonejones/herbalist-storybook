import React, { useEffect, useState } from 'react';
import './ImageZoomer.css';


export function getBackgroundPosition(element) {
  return {
    x: calc(window.getComputedStyle(element).backgroundPositionX),
    y: calc(window.getComputedStyle(element).backgroundPositionY)
  };
}


export function calc(style) {
  const rex = /(\d+)/.exec(style);
  if (rex) {
    return parseInt(rex[1], 10);
  }
  return 0;
}


const adjust = (im, width, max = 400) => {
  const ratio = im.width / im.height;
  const wide = im.width > im.height;
  const bigger = im.width > width || im.height > width;
  return (function (v) {
    Object.assign(v, {
      x: (max - v.width) / 2,
      y: (max - v.height) / 2,
    })
    return v;
  })(bigger
    ? {
      width: wide ? width : (width * ratio),
      height: wide ? (width / ratio) : width,
    }
    : {
      width: Math.min(im.width, width),
      height: Math.min(im.height, width),
    });
}

const aquire = (image, width) => {
  return new Promise(callback => {
    const im = new Image();
    im.onload = () => {
      callback(adjust(im, width))
    };
    im.src = image;
  })
}

// r = w/h
// w = rh
// h = w/r


const ImageZoomer = ({ source, width }) => {
  const [css, setCss] = useState({});
  const [dragState, setDragState] = useState({});
  const [zoom, setZoom] = useState(1);

  const startDrag = e => {
    const el = document.querySelector('.ImageZoomer')
    const state = {
      startingPosition: getBackgroundPosition(el),
      draggingNow: true,
      currentPosition: {
        x: e.clientX,
        y: e.clientY
      }
    }; 
    el.style.cursor = 'grab'; // remove transition style so user can drag
    // slideClasses.map((style: string) => el.classList.remove(style));
    setDragState(Object.assign(dragState, state));
  }


  const stopDrag = () => {
    const el = document.querySelector('.ImageZoomer')
    el.style.cursor = 'pointer'; // reattach transition style
    // this.slideClasses.map((style: string) => this.el.classList.remove(style));
    // el.classList.add(this.slideClass);
    setDragState(Object.assign(dragState, {draggingNow: false}));
  }


  const dragEffect = e => {
    const el = document.querySelector('.ImageZoomer')
    if (dragState.draggingNow && zoom > 1) {
      const delta = {
        x: (e.clientX - dragState.currentPosition.x) - dragState.startingPosition.x,
        y: (e.clientY - dragState.currentPosition.y) - dragState.startingPosition.y
      };
      el.style.backgroundPosition = `${delta.x}px ${delta.y}px`;
    }
  }

  const handleMouseDown = e => {
    const { button } = e;
    // setZoom(zoom * (button === 2 ? .5 : 2));
    startDrag(e);
  }


  const commitStyle = rules => {
    const style = {
      width: `${width}px`,
      height: `${width}px`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: `${rules.width}px ${rules.height}px`,
      backgroundPosition: `${rules.x}px ${rules.y}px`,
      backgroundImage: `url(${source})`
    };
    console.log({ style })
    setCss(style);
  }

  const setStyle = () => {
    // if ('width' in css) return;
    async function awaitData() {
      const rules = await aquire(source, width * zoom);
      commitStyle(rules);
    }
    awaitData()
  }

  useEffect(setStyle, [source, css, width])

  return (
    <>
      <div 
      onMouseUp={stopDrag} 
      onMouseDown={handleMouseDown} 
      onMouseMove={dragEffect} 
      className="ImageZoomer" 
      style={css}>
    </div>
    <div className="button-controls">
      <button onClick={() => setZoom(zoom / 2)}>-</button>
      <button onClick={() => setZoom(zoom * 2)}>+</button>
    </div>
    <div>{source}</div>
    <div>
      <ul>
        {Object.keys(css).map(key => <li key={key}>{key}: {css[key]}</li>)}
      </ul>
    </div>
    </>
  );
}

ImageZoomer.defaultProps = {
  width: 400,
  source: '/img/logos/SalesPros.logo.color.1x.png'
};

export default ImageZoomer;
