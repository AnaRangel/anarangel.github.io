const button = document.getElementById('download-cv-button') as HTMLButtonElement;

function downloadCV() {
  button.disabled = true;
  const url = 'https://drive.google.com/uc?export=download&id=1AarbQ2HUMlMa4ZpA40MfW7OsNMC-Z6OE';
  const anchorElement = document.createElement('a');
  anchorElement.download = 'cv ana rangel eng.pdf';
  anchorElement.href = url;
  anchorElement.dispatchEvent(
    new MouseEvent('click', { bubbles: true, cancelable: true, view: window })
  );
  // TODO: Averiguar si hay alguna forma menos trucha de capturar el evento de descarga
  setTimeout(() => {
    button.disabled = false;
  }, 1000);
}

if (button) {
  button.addEventListener('click', () => downloadCV());
}
