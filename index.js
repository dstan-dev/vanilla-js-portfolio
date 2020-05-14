'use strict';

// Slide in navigation area when burger icon is clicked
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLink = document.querySelectorAll('.mobile-nav-link');

const navSlide = () => {
  burger.classList.toggle('toggle');
  mobileNav.classList.toggle('mobile-nav-active');

  mobileNavLink.forEach((navLink, index) => {
    if (navLink.style.animation) {
      navLink.style.animation = '';
    } else {
      navLink.style.animation = `mobileNavLinkFade 0.5s ease-in-out forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
};

burger.addEventListener('click', navSlide);

// Contact form
const submitButton = document.getElementById('submitBtn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('visitorEmail');
const reasonSelect = document.getElementById('reason');
const message = document.getElementById('message');
const status = document.querySelector('.status');

submitButton.addEventListener('click', (e) => {
  status.innerHTML = '';

  if (emailInput.value.length < 5 || !validateEmail(emailInput)) {
    e.preventDefault();
    status.innerHTML += '<p>Valid email address is required</p>';
  }

  if (message.value.length < 10) {
    e.preventDefault();
    status.innerHTML += '<p>Please add a message before submitting</p>';
  }
});

// Email input validation
const errorMessage = document.querySelector('.error-message');

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email.value)) {
    errorMessage.innerHTML = '&#10003';
    errorMessage.style.color = '#05fa8c';
    emailInput.style.border = '';
    return true;
  } else {
    errorMessage.textContent = 'Please enter a valid email address';
    errorMessage.style.color = '#ed4426';
    emailInput.style.border = '0.1rem solid #ff0000';
    return false;
  }
};

emailInput.addEventListener('change', () => {
  validateEmail(emailInput);
});

// Custom select menu
// let selectElement, createdDiv, optionList, optionItem;

// // Look for any elements with the class 'custom-select'
// const customSelect = document.getElementsByClassName('custom-select');

// for (let i = 0; i < customSelect.length; i++) {
//   selectElement = customSelect[i].getElementsByTagName('select')[0];

//   // For each element, create a new div that will act as the selected item
//   createdDiv = document.createElement('div');
//   createdDiv.setAttribute('class', 'select-selected');
//   createdDiv.innerHTML =
//     selectElement.options[selectElement.selectedIndex].innerHTML;
//   customSelect[i].appendChild(createdDiv);

//   // For each element, create a new div that will contain the option list
//   optionList = document.createElement('div');
//   optionList.setAttribute('class', 'select-items select-hide');

//   for (let j = 1; j < selectElement.length; j++) {
//     // For each option in the original select element, create a new div that will act as an option item
//     optionItem = document.createElement('div');
//     optionItem.innerHTML = selectElement.options[j].innerHTML;
//     optionItem.addEventListener('click', function (e) {
//       // When an item is clicked, update the original select box, and the selected item
//       const select = this.parentNode.parentNode.getElementsByTagName(
//         'select'
//       )[0];
//       let h, y;
//       h = this.parentNode.previousSibling;

//       for (let i = 0; i < select.length; i++) {
//         if (select.options[i].innerHTML == this.innerHTML) {
//           select.selectedIndex = i;
//           h.innerHTML = this.innerHTML;
//           y = this.parentNode.getElementsByClassName('same-as-selected');

//           for (let k = 0; k < y.length; k++) {
//             y[k].removeAttribute('class');
//           }
//           this.setAttribute('class', 'same-as-selected');
//           break;
//         }
//       }
//       h.click();
//     });
//     optionList.appendChild(optionItem);
//   }
//   customSelect[i].appendChild(optionList);
//   createdDiv.addEventListener('click', function (e) {
//     // When the select box is clicked, close any other select boxes, and open/close the current select box
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle('select-hide');
//     this.classList.toggle('select-arrow-active');
//   });
// }

// function closeAllSelect(element) {
//   // A function that will close all select boxes in the document, except the current select box
//   let selectOptions,
//     selectedOption,
//     arrNo = [];
//   selectOptions = document.getElementsByClassName('select-items');
//   selectedOption = document.getElementsByClassName('select-selected');

//   for (let i = 0; i < selectedOption.length; i++) {
//     if (element == selectedOption[i]) {
//       arrNo.push(i);
//     } else {
//       selectedOption[i].classList.remove('select-arrow-active');
//     }
//   }

//   for (let i = 0; i < selectOptions.length; i++) {
//     if (arrNo.indexOf(i)) {
//       selectOptions[i].classList.add('select-hide');
//     }
//   }
// }

// // If user clicks anywhere outside of select box, close all select boxes
// document.addEventListener('click', closeAllSelect);
