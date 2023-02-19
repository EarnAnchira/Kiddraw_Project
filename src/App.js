import './assets/scss/style.scss';
import React, { useState } from 'react';

function App() {
  const [dressupState, setDressupState] = useState({
    hair: {current: 0, total: 2},
  });

  function next(item){
    let next_num = dressupState[item].current + 1
    let new_current = next_num < dressupState[item].total ? next_num : 0
    updateDressUp(item, new_current)
  }

  function updateDressUp(item,new_current){
    setDressupState({
      ...dressupState,
      [item]: {
        current: dressupState[item].current = new_current, 
        total: dressupState[item].total
      }
    })
  }

  return (
    <div className="App">
      <div id="container">
        <div id="background">
            <div id="body"></div>
            { Object.keys(dressupState).map((item) => 
                <div id={item} className={item+(dressupState[item].current+1)} key={item}></div>
              )
            } 
        </div>

        <div id="btn">
          { Object.keys(dressupState).map((item) => 
            <input type="button" value={"next "+item} key={item} id={"next"+item} onClick={() => next(item)}/>
          )
          }
            
          <button> Download </button>
        </div>
      </div>
  </div>
    
  );
}

export default App;