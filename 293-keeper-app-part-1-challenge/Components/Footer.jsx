import React from "react";

const date = new Date();
const year = date.getFullYear();


function Footer() {
    return(
        <div>
           <footer> <p>Copyright ⓒ {year} Timmy</p></footer>
        </div>
    )
};

export default Footer;

//Always keep the component folder inside the source "src" folder