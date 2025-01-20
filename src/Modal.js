export default function Modal({ isVisible, message = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: message ? "red" : "green" }}>
            {message ? message : " the Form has been submitted successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
