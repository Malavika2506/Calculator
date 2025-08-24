const display = document.querySelector('textarea[name="display"]');

    function autoResize() {
      display.style.height = "auto";
      display.style.height = display.scrollHeight + "px";
    }

    function appendChar(char) {
      display.value += char;
      autoResize();
    }

    function clearDisplay() {
      display.value = '';
      autoResize();
    }

    function deleteChar() {
      display.value = display.value.toString().slice(0, -1);
      autoResize();
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
      autoResize();
    }

    // Keyboard support
    document.addEventListener('keydown', function (event) {
      const key = event.key;

      if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendChar(key);
      }
      if (key === 'Enter') {
        event.preventDefault();
        calculate();
      }
      if (key === 'Backspace') {
        deleteChar();
      }
      if (key === 'Escape') {
        clearDisplay();
      }
    });