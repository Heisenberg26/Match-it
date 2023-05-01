import React, { useState } from 'react'
import "./tindercards.css"

function Tindercards() {
  const [people, setPeople] = useState(
    [
      {
        name: "Elon Musk",
        url: "https://m.media-amazon.com/images/M/MV5BMzc1YTA1ZjItMWRhMy00ZTBlLTkzNTgtNTc4ZDE3YTM3ZDk2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg"
      },

    ]);
  return (
    <div className='tinderCards'>
      
    </div>
  )
}

export default Tindercards
