 (function () {
  const el = document.querySelector('[data-testid="test-user-time"]');
        if (!el) return;
        function pad(n) {
          return n.toString().padStart(2, "0");
        }
        function tick() {
          const d = new Date();
          el.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
            d.getSeconds()
          )}`;
        }
        tick();
        setInterval(tick, 1000);
      })();

(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const subjectInput = document.getElementById('subject');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const msgBox = document.getElementById('form-message');

  const nameError = document.getElementById('name-error');
  const subjectError = document.getElementById('subject-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  function showMessage(text, type = 'success') {
    if (!msgBox) return;
    msgBox.textContent = text;
    msgBox.className = type === 'success' ? 'form-success' : 'form-error';
  }

  function validateEmailValue(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function clearFieldErrors() {
    [nameInput, subjectInput, emailInput, messageInput].forEach((el) => {
      if (!el) return;
      el.classList.remove('input-error');
    });
    [nameError, subjectError, emailError, messageError].forEach((el) => {
      if (!el) return;
      el.textContent = '';
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearFieldErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();


    const errors = [];

    if (!name) {
      errors.push('Name is required.');
      nameInput.classList.add('input-error');
      if (nameError) nameError.textContent = 'Name is required.';
    }

    if (!subjectInput.value.trim()) {
      errors.push('Subject is required.');
      subjectInput.classList.add('input-error');
      if (subjectError) subjectError.textContent = 'Subject is required.';
    }

    if (!email) {
      errors.push('Email is required.');
      emailInput.classList.add('input-error');
      if (emailError) emailError.textContent = 'Email is required.';
    } else if (!validateEmailValue(email)) {
      errors.push('Please provide a valid email address.');
      emailInput.classList.add('input-error');
      if (emailError) emailError.textContent = 'Please provide a valid email address.';
    }

    if (!message) {
      errors.push('Message is required.');
      messageInput.classList.add('input-error');
      if (messageError) messageError.textContent = 'Message is required.';
    } else if (message.length < 10) {
      errors.push('Message must be at least 10 characters.');
      messageInput.classList.add('input-error');
      if (messageError) messageError.textContent = 'Message must be at least 10 characters.';
    }

    if (errors.length) {
      showMessage(errors.join(' '), 'error');
      return;
    }

    showMessage('Thanks — your message was sent successfully!', 'success');
    form.reset();

    setTimeout(() => {
      if (msgBox) {
        msgBox.textContent = '';
        msgBox.className = '';
      }
    }, 5000);
  });
})();