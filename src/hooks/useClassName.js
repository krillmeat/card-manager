import { useMemo } from 'react';

const STATIC_CLASS_MAP = {
  bold: 'bold',
  uppercase: 'uppercase',
};

const DYNAMIC_CLASS_HANDLERS = {
  pad: val => (val != null ? `pad-${val}` : null),
  padX: val => (val != null ? `pad-x-${val}` : null),
  padY: val => (val != null ? `pad-y-${val}` : null),
}

// Custom hook
export function useClassName(flags={},buildFunction, deps = []) {
  // Allow passing buildFunction as the first arg if no flags are needed
  if (typeof flags === 'function') {
    deps = buildFunction || [];
    buildFunction = flags;
    flags = {};
  }

  return useMemo(() => {
    const list = [];
    
    // Callback sent to consumer to add to list
    const add = className => list.push(className);

    // Add static classes like bold and uppercase
    Object.keys(STATIC_CLASS_MAP).forEach((key) => {
      if (flags[key]) add(STATIC_CLASS_MAP[key]);
    });

    // Add dynamic classes like pad-x-3
    Object.keys(DYNAMIC_CLASS_HANDLERS).forEach((key) => {
      if (key in flags) {
        const generatedClass = DYNAMIC_CLASS_HANDLERS[key](flags[key]);
        if (generatedClass) add(generatedClass);
      }
    });

    if(buildFunction) buildFunction(add);

    return list.join(" ");
  }, deps);
}
