// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("navbar-content");
//       var i;
//       d
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

  const dropdown = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.navbar-content');
  
  dropdown.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
  });
  