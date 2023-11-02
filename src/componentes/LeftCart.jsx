export const LeftCart = (props) => {
  const { proyect } = props;
  const {text} = props ;
  const {link} = props; 
  const {icon} = props;
  const {icon2} = props;
  const {icon3} = props;
  const {icon4} = props;
  const {img} = props;
  const {framework} = props;
  return (
    <>
    <a href={link}>
    <div className="dad-container">
      <div className="container-projects">
      <div className="leftcard-container">
        <img src={img} alt="" className="img" />
        </div>
        <div className="large-text">
        <h1> {proyect} </h1>
           <p className="description">{text}</p>
           
           <div className="icon-container">
           <p>Programmed By: </p>
           
           <div className="mini-icons-container">
            <img src={icon} className="mini-icons" alt="" /> 
            <img src={icon2} className="mini-icons" alt="" /> 
            <img src={icon3} className="mini-icons" alt="" /> 
            <img src={icon4} className="mini-icons" alt="" /> 
            <p className="mini-icons">{framework}</p>
           </div>
           </div>
           <p>Click to see it </p>
        </div>
      </div>
    </div>
      </a>
    </>
  )
}