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