


export const Footer = () => {
  return (
    <>
        <footer className="padre-footer">
            <div className="container-social-media">
                <div className="social-media">
                    <h1>Contact Me</h1>
                  <a href="https://www.facebook.com/alejandro.uribeguzman.3"> <div className="social"><img src="../img/facebook.svg" alt="" className="icons" /> <p>AlejoUribeGuzman</p> </div></a> 
                <a href="https://github.com/MoraxAlejo">   <div className="social"> <img src="../img/github.svg" alt="" className="icons" /> <p>MoraxAlejo</p></div> </a>
                  <div className="social"> <img src= "../img/mail.svg" alt="" className="icons" /> <p>alejodeviluke@gmail.com</p> </div>  
                </div>
                <div className="created-by">
                    <p>This page was created by MoraxAlejo in:</p>
                    <img src="../img/react.svg" alt="" className="icons" />
                    <div className="phone-contact">
                      <div className="phone-number"><img src="../img/phone.svg" alt="" /> <p>+57 3044696352</p> </div>  
                    </div>
                    <div className="phone-contact">
                    <a href="../img/mycv.jpg" download="">
 <div className="phone-number"><img src="../img/cv.svg" alt="" /> <p>Dowload My CV or Resume</p></div> </a> 
                    </div>
                    
                </div>
                    
            </div>
            
        </footer>
    </>
  )
}
