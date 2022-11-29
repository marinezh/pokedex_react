import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

// const Card = (props) => {
//   return (
//     <div className={classes.card}>
//       <div className={classes.img_wrap}>
//         <img src={props.image} alt={props.name} />
//       </div>

//           {/* <h3>pokename</h3> */}
//           <div className={classes.description_wrap}>
//       <h3>{props.name}</h3>
//       <p>
//                   <Link to={`${props.name}` } className={classes.link}>See more</Link>
//           </p>
//           </div>
//     </div>
//   );
// };

const Card = ({image, name}) => {
  return (
    <div className={classes.card}>
      <div className={classes.img_wrap}>
        <img src={image} alt={name} />
      </div>

          {/* <h3>pokename</h3> */}
          <div className={classes.description_wrap}>
      <h3>{name}</h3>
      <p>
                  <Link to={`${name}` } className={classes.link}>See more</Link>
          </p>
          </div>
    </div>
  );
};
export default Card;
