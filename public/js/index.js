'use strict';

var signInTab = document.getElementById('sign-in-tab'),
    signInForm = document.getElementById('sign-in-form'),
    registerTab = document.getElementById('register-tab'),
    registerForm = document.getElementById('register-form');

signInTab.addEventListener('click', function () {
  if (!registerTab.classList.contains('hidden')) {
    registerForm.classList.add('hidden');
    registerForm.classList.remove('flex-col');
    signInForm.classList.remove('hidden');
    signInForm.classList.add('flex-col');
  }
});

registerTab.addEventListener('click', function () {
  if (!signInTab.classList.contains('hidden')) {
    signInForm.classList.add('hidden');
    signInForm.classList.remove('flex-col');
    registerForm.classList.remove('hidden');
    registerForm.classList.add('flex-col');
  }
});