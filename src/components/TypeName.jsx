import { useEffect, useState } from "react";

export default function TypeName({ name }) {
  const [animatedName, setAnimatedName] = useState(name[0]);

  useEffect(() => {
    const intervalIdx = setInterval(() => {
      setAnimatedName((prev) => {
        if (prev.length === name.length) {
          clearInterval(intervalIdx);
          return prev;
        }

        if (name[prev.length] === " ")
          return prev + " " + name[prev.length + 1];

        return prev + name[prev.length];
      });
    }, 1000);

    return () => {
      clearInterval(intervalIdx);
    };
  }, []);

  return <div className="name frosted-glass">{animatedName}</div>;
}
