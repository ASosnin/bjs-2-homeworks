function cachingDecoratorNew(func) {
  let cache = [];
  return function (...args) {
    const hash = args.join(':');
    const idx = cache.findIndex((item) => item.hash === hash)
    if (idx === -1) {
      const result = func(...args);
      cache.push({hash, result});
      if (cache.length > 5) {
        cache.shift();
      }
      return `Вычисляем: ${result}`;
    } else {
      return `Из кэша: ${cache[idx].result}`
    }
  }
}


function debounceDecoratorNew(func, ms) {
  let timeout;
  let isFirst = true;
  return function (...args) {
    if (isFirst) {
      isFirst = false;
      func.apply(this, args);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
        isFirst = true;
      }, ms)
    }
  }
}

function debounceDecorator2(func, ms) {
  let timeout;
  let isFirst = true;
  let counter = 0;
  return function (...args) {
    if (isFirst) {
      isFirst = false;
      func.apply(this, args);
      counter += 1;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
        counter += 1;
        isFirst = true;
      }, ms)
    }
  }
}
