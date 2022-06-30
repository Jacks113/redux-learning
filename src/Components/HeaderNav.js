import { hoverShop } from "../Services/interaction.js"


export default function HeaderNav(props){
    return  <header>
                <nav className="navContainer"> 
                    <div className="navBasics">
                        <div><a href="#">Home</a></div>
                        <div><a href="#">About Us</a></div>
                        <div><a href="#">Contact</a></div>
                        <div id="dropdown" className="dropdown">
                            <button id="buttonShop" className="buttonShop" href="#"> Shop <img id="arrow" alt="arrow" src="/images/icon-arrow-down.svg" /> </button>
                        </div>
                    </div>
                </nav>
           </header>    
}