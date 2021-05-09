const addConnectionTestListener = () => {
  const Span = document.querySelector('#downlink');
  let prevDownlink;
  setInterval(() => {
    const downlink = navigator.connection.downlink;
    if (prevDownlink !== downlink) {
      Span.innerHTML = downlink;
    }
    prevDownlink = downlink;
  }, 1000)
}

export default addConnectionTestListener;
