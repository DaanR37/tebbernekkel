import "./card.scss";
// import Box from '@mui/material/Box';
// import { LinearProgress } from '@mui/material';

export default function Card({ active, title, progress }) {
  return (
    <div className={`slide-item__card card ${active ? "active" : ""}`}> 
      <h3>{title}</h3>
    </div>
  );
}



// import { CircularProgress } from '@mui/material';
// import './card.scss';
// import Box from '@mui/material/Box';
// import { LinearProgress } from '@mui/material';

// export default function Card({ active, title, progress }) {
//     return (
//         <div className={`card ${active ? 'active' : ''}`}>

//             <CircularProgress
//                 variant="determinate"
//                 value={progress}
//                 size={100}
//                 thickness={3}
//             />
//             <h3>{title}</h3>
//         </div>
//     );
// }