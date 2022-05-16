import React from 'react'


interface props {
    scores? : {name:string, time: number}[]
}
const Leaderboard: React.FC<props> = (scores)=> {
  return (
    <div>Leaderboard</div>
  )
}

export default Leaderboard