class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state = this.state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(...args) {
    super(...args);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, ...args) {
    super(...args);
    this.author = author;
    this.type = 'book'
  }
}

class NovelBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'fantastic'
  }
}

class DetectiveBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let book = this.books.find((book) => book[type] === value);
    return book ? book : null;
  }

  giveBookByName(bookName) {
    const indexBook = this.books.findIndex((book) => book.name === bookName);
    if (indexBook === -1) {
      return null;
    }
    return this.books.splice(indexBook, 1)[0];
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.subjects = {};
    this.reason = null;
  }

  addMark(value, subjectName) {
    if (value < 1 || value > 5) {
      return 'Ошибка, оценка должна быть числом от 1 до 5'
    }
    if (this.subjects.hasOwnProperty(subjectName)) {
      this.subjects[subjectName].push(value);
    } else {
      this.subjects[subjectName] = [value];
    }
  }

  getAverageBySubject(subjectName) {
    if (this.subjects.hasOwnProperty(subjectName)) {
      return this.subjects[subjectName].reduce((a, b) => a + b) / this.subjects[subjectName].length;
    }
    return 'Несуществующий предмет'
  }

  getAverage() {
    let countValues = 0;
    let sum = 0;
    for (let key in this.subjects) {
      countValues = countValues + this.subjects[key].length
      sum = this.subjects[key].reduce((a, b) => a + b, sum);
    }
    return countValues ? sum / countValues : undefined;
  }

  exclude(message) {
    this.subjects = {};
    this.reason = message;
  }
}
