
class Converter {
  static days2Hours(num){
    return num * 24;
  }

  /** @param {number} num */
  static days2Minutes(num){
    return this.hours2Minutes(this.days2Hours(num));
  }

  /** @param {number} num */
  static days2Seconds(num){
    return this.hours2Seconds(this.days2Hours(num));
  }

  /** @param {number} num */
  static days2Milliseconds(num){
    return this.hours2Milliseconds(this.days2Hours(num));
  }

  /** @param {number} num */
  static hours2Days(num){
    return Math.floor(num / 24);
  }

  /** @param {number} num */
  static hours2Minutes(num){
    return num * 60;
  }

  /** @param {number} num */
  static hours2Seconds(num){
    return this.minutes2Seconds(this.hours2Minutes(num));
  }

  /** @param {number} num */
  static hours2Milliseconds(num){
    return this.seconds2Milliseconds(this.hours2Seconds(num));
  }

  /** @param {number} num */
  static minutes2Days(num){
    return this.hours2Days(this.minutes2Hours(num));
  }

  /** @param {number} num */
  static minutes2Hours(num){
    return this.seconds2Minutes(num);
  }

  /** @param {number} num */
  static minutes2Seconds(num){
    return this.hours2Minutes(num);
  }

  /** @param {number} num */
  static minutes2Milliseconds(num){
    return this.seconds2Milliseconds(this.minutes2Seconds(num));
  }

  /** @param {number} num */
  static seconds2Days(num){
    return this.minutes2Days(this.seconds2Minutes(num));
  }

  /** @param {number} num */
  static seconds2Hours(num){
    return this.minutes2Hours(this.seconds2Minutes(num));
  }

  /** @param {number} num */
  static seconds2Minutes(num){
    return Math.floor(num / 60);
  }

  /** @param {number} num */
  static milliseconds2Days(num){
    return this.seconds2Days(this.milliseconds2Seconds(num));
  }

  /** @param {number} num */
  static milliseconds2Hours(num){
    return this.seconds2Hours(this.milliseconds2Seconds(num));
  }

  /** @param {number} num */
  static milliseconds2Minutes(num){
    return this.seconds2Minutes(this.milliseconds2Seconds(num));
  }

  /** @param {number} num */
  static milliseconds2Seconds(num){
    return Math.floor(num / 1000);
  }

  /** @param {number} num */
  static seconds2Milliseconds(num){
    return num * 1000;
  }
}

class TimeConverter {
  constructor(){
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
  }

  /**
   * @param {number} num 
   */
  addDays(num){
    this.days += num;
    
    return this;
  }

  /**
   * @param {number} num 
   */
  removeDays(num){
    this.days -= num;
    
    return this;
  }

  /**
   * @param {number} num 
   */
  addHours(num){
    this.hours += num;
    
    return this;
  }

  /**
   * @param {number} num 
   */
  removeHours(num){
    this.hours -= num;
    
    return this;
  }

  /**
   * @param {number} num 
   */
  addMinutes(num){
    this.minutes += num;
    
    return this;
  }

  /**
   * @param {number} num 
   */
  removeMinutes(num){
    this.minutes -= num;
    
    return this;
  }

  /**
   * @param {number} num 
   */
  addSeconds(num){
    this.seconds += num;
    
    return this;
  }

  /**
   * @param {number} num 
   */
  removeSeconds(num){
    this.seconds -= num;
    
    return this;
  }

  /**
   * @param {number} num 
   */
  addMilliseconds(num){
    this.milliseconds += num;
    
    return this;
  }

  /**
   * @param {number} num 
   */
  removeMilliseconds(num){
    this.milliseconds -= num;
    
    return this;
  }

  toMilliseconds(){
    let total = 0;

    if (this.days > 0) total += Converter.days2Milliseconds(this.days);
    if (this.hours > 0) total += Converter.hours2Milliseconds(this.hours);
    if (this.minutes > 0) total += Converter.minutes2Milliseconds(this.minutes);
    if (this.seconds > 0) total += Converter.seconds2Milliseconds(this.seconds);
    
    total += this.milliseconds;

    return total;
  }

  toDate(initialDate = new Date()){
    const now = new Date(initialDate);

    if (this.days > 0) now.setDate(now.getDate() + this.days);
    if (this.hours > 0) now.setHours(now.getHours() + this.hours);
    if (this.minutes > 0) now.setMinutes(now.getMinutes() + this.minutes);
    if (this.seconds > 0) now.setSeconds(now.getSeconds() + this.seconds);
    if (this.milliseconds > 0 ) now.setMilliseconds(now.getMilliseconds() + this.milliseconds); 

    return now;
  }
}

module.exports = {
  TimeConverter,
  Converter,
};