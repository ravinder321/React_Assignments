import React from "react";

function Dynamicform() {
  const config = [
    { type: "text", name: "username" },
    { type: "number", name: "age" },
    { type: "select", name: "role", options: ["Admin", "User"] },
  ];

  return (
    <div>
      {config.map((item, index) => {
        if (item.type === "select") {
          return (
            <div key={index}>
              <select name={item.name}>
                {item.options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        return (
          <div key={index}>
            <input
              type={item.type}
              name={item.name}
              placeholder={item.name}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Dynamicform;