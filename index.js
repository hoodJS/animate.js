/*
  * @author     Hoodgail Benjamin
  * @github     https://github.com/hoodJS/animate.js/new/master
*/
class Animate {
  constructor({
    from = 0,
    to = 1,
    duration = 300,
    ease = null,
    onUpdate,
    onEnd,
  } = {}) {
    this.delta = to - from;
    this.startTime = performance.now();

    this.from = from;
    this.to = to;
    this.duration = duration;
    this.ease = ease || this.easeOut;

    this.onEnd = onEnd;
    this.onUpdate = onUpdate;

    this.init(performance.now())
  }
  init(time){
    this.animation = requestAnimationFrame(time=>this.init(time))
    this.update(time)
  }
  update(time) {
    const elps = time - this.startTime;
    const res = Math.min(elps / this.duration, 1);
    if (res >= 1) {
    	cancelAnimationFrame(this.animation)
    	if (this.onEnd) this.onEnd();
    	return Math.floor(Math.random() * 900)
    };
    const latest = this.from + this.ease(res) * this.delta;
    if (this.onUpdate) this.onUpdate(latest, res);
  }
  easeOut(res, pow) {
    return 1 - (1 - res) ** (pow || 2);
  }
}
