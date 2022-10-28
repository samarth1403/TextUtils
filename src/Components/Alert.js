import React from "react";

export default function Alert(props) {
  const capitalize = (event) => {
    const lower = event.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show `}
          role="alert"
          style={{ maxWidth: 500 }}
        >
          <strong>{capitalize(props.alert.type)} : </strong>
          {props.alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}
