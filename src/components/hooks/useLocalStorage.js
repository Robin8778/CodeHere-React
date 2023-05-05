import { useEffect, useState } from "react";

import React from "react";

const PREFIX = "codehere";

const useLocalStorage = (key, initialValue) => {
  const prefixKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixKey);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);
  return [value, setValue];
};

export default useLocalStorage;
