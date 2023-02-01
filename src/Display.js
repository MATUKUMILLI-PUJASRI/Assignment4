import pic from './images/pic.jpeg'

function Display(){

    return(

            <>
                
                <div className="display-section">
                    
                <center> 
                    
                    <img src={pic} width="200" height="100"/><br></br>
                </center>
                    <center>
                        <br></br><br></br>
                    <p>A JavaScript library for building user interfaces</p><br></br><br></br>

                    <button>Get Started</button>

                     <a href="https://reactjs.org/tutorial/tutorial.html">Take the Tutorial</a>

                     <i class="chevron right icon"></i></center>

            </div>

        </>

    )

}

 

export default Display;