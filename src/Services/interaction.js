
export function hoverShop(){
    var shopButton = document.getElementById("dropdown");
    var arrow = document.getElementById("arrow");

    shopButton.addEventListener("mouseover", function(){
        arrow.src="/images/icon-arrow-up.svg";
    })
    
    shopButton.addEventListener("mouseleave", function(){
        arrow.src="/images/icon-arrow-down.svg";
    })

    
    }

