
      document.addEventListener("keyup", function(event) {
        // لو كان ضغط على حرف (وليس زر كنترول لوحده)
        if (event.key.length === 1) {
          alert("Key: " + event.key + " | ASCII Code: " + event.key.charCodeAt(0));
        }

        if (event.altKey) {
          alert("Alt key is pressed");
        }

        if (event.ctrlKey) {
          alert("Ctrl key is pressed");
        }

        if (event.shiftKey) {
          alert("Shift key is pressed");
        }
      });
