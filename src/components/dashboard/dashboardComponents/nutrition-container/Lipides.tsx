import React from "react";
import User from "../../../../Classes/User";

function Lipides({ user }: { user: User }) {
  const { lipidCount } = user.keyData;

  return (
    <div className="lipides-container">
      <div className="lipides-icons"></div>
      <h2>Lipides: {lipidCount}</h2>
    </div>
  );
}

export default Lipides;
