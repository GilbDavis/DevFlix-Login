// Vallidar el formulario

const inputs = document.querySelectorAll('form .campo input');

// Listener a los inputs
inputs.forEach(input => {
  input.addEventListener('blur', validarInput);
});
inputs.forEach(input => {
  input.addEventListener('input', validarInput);
});

function validarInput(e) {
  const estados = ['valido', 'no-valido'];

  let clase;
  if (e.target.value.length === 0) {
    clase = estados[1];
  } else {
    clase = estados[0];
  }
  e.target.classList.remove(...estados);
  e.target.nextElementSibling.classList.remove(...estados);

  e.target.classList.add(clase);
  e.target.nextElementSibling.classList.add(clase);

  // Inyeccion un div con el mensaje de error
  if (clase === 'no-valido') {
    if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
      const errorDiv = document.createElement('div');
      errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
      errorDiv.classList.add('alerta');
      // Insertar el div al padre
      e.target.parentElement.parentElement
        .insertBefore(errorDiv, e.target.parentElement
          .nextElementSibling);
    }
  } else {
    // Se limpia el mensaje
    if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
      e.target.parentElement.nextElementSibling.remove();
    }
  }
}

// Mostrar y ocultar la contrasena
const mostrarPassBtn = document.querySelector('form .campo span');
mostrarPassBtn.addEventListener('click', e => {
  const passwordInput = document.querySelector('#password');
  if (e.target.classList.contains('mostrar')) {
    // Se muestra el texto
    e.target.classList.remove('mostrar');
    // Cambiar el texto
    e.target.textContent = 'Ocultar';
    // Cambio a password
    passwordInput.type = 'text';
  } else {
    e.target.classList.add('mostrar');
    // Cambiar el texto
    e.target.textContent = 'Mostrar';
    // Cambio a password
    passwordInput.type = 'password';
  }
});
