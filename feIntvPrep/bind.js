// implement function.prototype.bind()

const run = function () {
  console.log(this.bar);
};

let handleRun = run.bind((bar, "Greeting"));

handleRun();
