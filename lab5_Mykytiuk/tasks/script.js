function tabSwitch(new_tab, new_content) { 
 
    document.getElementById('content_1').style.display = 'none'; 
    document.getElementById('content_2').style.display = 'none'; 
    document.getElementById('content_3').style.display = 'none'; 
    document.getElementById(new_content).style.display = 'block';    

    document.getElementById('tab_1').className = ''; 
    document.getElementById('tab_2').className = ''; 
    document.getElementById('tab_3').className = ''; 
    document.getElementById(new_tab).className = 'active';     
         
}
//--------------------------------------------------------------
 /*function tabSwitch(active) {
        let subMenu = document.getElementsByClassName(active);
        let subMenu1 = document.getElementsByClassName("sub-nav1");
        let subMenu2 = document.getElementsByClassName("sub-nav2");
        let subSubMenu2 = document.getElementsByClassName("sub-sub-nav2");
        console.log(subMenu);
        if (active == "sub-nav1") {
          subMenu[0].classList.toggle("sub-menu-active");
          if (subMenu2[0].classList.contains("sub-menu-active")) {
            subMenu2[0].classList.remove("sub-menu-active");
          }
        }
        if (active == "sub-nav2") {
          subMenu[0].classList.toggle("sub-menu-active");
          if (subMenu1[0].classList.contains("sub-menu-active")) {
            subMenu1[0].classList.remove("sub-menu-active");
          }
          if (subSubMenu2[0].classList.contains("sub-menu-active")) {
            subSubMenu2[0].classList.remove("sub-menu-active");
          }
        }
        if (active == "sub-sub-nav2") {
          subMenu[0].classList.toggle("sub-menu-active");
        }
      }*/

      /* document.querySelector(".nav").onclick = function (event) {
        console.log(event.target.nextElementSibling);
        if (event.target.nodeName !== "A") return;

        event.target.classList.add("sub-menu-active-a");
      };*/
      function tabSwitch(active) {
        let activeMenu = document.querySelector(`.${active}`);
        let subMenus = document.querySelectorAll(".nav ul");

        subMenus.forEach((menu) => {
          if (
            menu.classList.contains("sub-menu-active") &&
            active !== "sub-sub-nav2" &&
            !activeMenu.classList.contains("sub-menu-active")
          ) {
            menu.classList.remove("sub-menu-active");
            menu.previousElementSibling.classList.remove("sub-menu-active-a");
          }
        });
        activeMenu.classList.toggle("sub-menu-active");
        activeMenu.previousElementSibling.classList.toggle("sub-menu-active-a");
      }