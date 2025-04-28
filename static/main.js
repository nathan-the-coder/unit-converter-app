
function openConverter(evt, converterType) {
  tabcontents = document.getElementsByClassName("tab-contents tab-content");
  for (tc of tabcontents) {
    tc.style.display = "none";
  }

  const tabLinkBtns = document.getElementsByClassName("tab-link");
  for (btn of tabLinkBtns) {
    btn.className = btn.className.replace("active", "");
  }

  console.log(converterType);
  document.getElementById(converterType).style.display = "block";
  evt.currentTarget.className += "active";
}

