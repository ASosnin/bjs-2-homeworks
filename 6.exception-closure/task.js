function parseCount(value) {
  const result = Number.parseInt(value);
  if (isNaN(result)) {
    throw new Error('Невалидное значение')
  }
  return result
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
      this.a = a;
      this.b = b;
      this.c = c;
    } else {
      throw new Error('Треугольник с такими сторонами не существует')
    }
  }

  getPerimeter() {
    return Number((this.a + this.b + this.c).toFixed(3))
  }

  getArea() {
    const p = this.getPerimeter() / 2
    return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3))
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (err) {
    const message = 'Ошибка! Треугольник не существует'
    return {
      getPerimeter: () => {
        return message;
      },
      getArea: () => {
        return message;
      }
    }
  }
}
