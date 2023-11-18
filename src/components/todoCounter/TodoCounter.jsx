import React from "react";

function TodoCounter({ total, completed }) {
  return (
    <h3>
      Has completed {completed} of {total} tasks
    </h3>
  );
}

export { TodoCounter };
