var sideMenu = document.getElementById("sidebar");

function CloseMenu() {
    "use strict";

    sideMenu.style.marginLeft = '-14.5%';
}

function OpenMenu() {
    "use strict";
    
    sideMenu.style.marginLeft = '0px';
}

function ToggleMenu() {
    "use strict";
    
    if(sideMenu.style.marginLeft == '-14.5%')
        OpenMenu();
    else
        CloseMenu();
    
}

CloseMenu();