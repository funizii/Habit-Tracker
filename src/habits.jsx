 import { useState } from 'react';



const Habits = (props) => {
  
      const [active, setActive] = useState(false);
      
  return (
    <>
   
      <div className='first-habit'>
     <div className='habitandicon'>
        <img className='dumbell-img' src={props.habit.img.src} alt={props.habit.img.alt}/>
   <h2>{props.habit.Name}</h2>
   <button
      onClick={() => setActive(!active)}
      aria-pressed={active}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
      }}
    >
      <svg
        width="20"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? '#22c55e' : '#9ca3af'} // Green when active, Gray when inactive
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {active ? (
          // Checkmark path
          <polyline points="20 6 9 17 4 12" />
        ) : (
          // Empty circle placeholder path
          <circle cx="12" cy="12" r="10" />
        )}
      </svg>
    </button>
      </div>
<div className='streakandicon'> 
         <p className='streak'>Streak: {props.habit.streak}</p>
   <img className="streak-img" src=".\src\assets\fire-svgrepo-com.svg" alt="streak-img"/>
    </div>
    <div>
   <p className='quote'>{props.habit.quote}</p>
   </div>
  
    
     </div>
   </>

  )
} 
export default Habits