class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.')
    }
    const idx = this.alarmCollection.findIndex((item) => item.id === id)
    if (idx === -1) {
      this.alarmCollection.push({id, time, callback});
    } else {
      console.error('Будильник с таким id уже существует.')
    }
  }

  removeClock(id) {
    const beforeFilterAlarmCollection = this.alarmCollection.length
    this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id);
    return beforeFilterAlarmCollection > this.alarmCollection;
  }

  getCurrentFormattedTime() {
    const current = new Date();
    const hours = current.getHours();
    const minutes = current.getMinutes();
    return [
      (hours > 9 ? '' : '0') + hours,
      (minutes > 9 ? '' : '0') + minutes,
    ].join(':');
  }


  start() {
    const checkClock = ({time, callback}) => {
      if (time === this.getCurrentFormattedTime()) {
        callback();
      }
    }
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.map(item => checkClock(item));
      }, 1000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarm() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`)
    this.alarmCollection.forEach(({id, time}) => console.log(`Будильник №${id} заведён на ${time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  console.log('start')
  const alarm = new AlarmClock();

  alarm.addClock('14:19', () => {
    console.log('Пора вставать.')
  }, 1);

  alarm.addClock('14:20', () => {
    console.log('Давай, вставай уже!!!');
    alarm.removeClock(2);
  }, 2);

  alarm.addClock('14:21', () => {
    console.log('Вставай, а то проспишь!!!.');
    alarm.clearAlarms();
    alarm.printAlarm();
  }, 3)
  alarm.addClock('15:33', () => {console.log(`тест ошибки, что id будильника есть`)}, 2);
  try {
    alarm.addClock('15:33', () => {console.log(`тест ошибки, id будильника не передан`)});
  } catch (err) {
    console.error(err);
  }
  alarm.printAlarm();
  alarm.start();
}

testCase();
