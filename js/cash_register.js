var keys = {
  display: document.getElementById('display'),
  key1: document.getElementById('key1'),
  key2: document.getElementById('key2'),
  key3: document.getElementById('key3'),
  key4: document.getElementById('key4'),
  key5: document.getElementById('key5'),
  key6: document.getElementById('key6'),
  key7: document.getElementById('key7'),
  key8: document.getElementById('key8'),
  key9: document.getElementById('key9'),
  key0: document.getElementById('key0'),
  key00: document.getElementById('key00'),
  keyDot: document.getElementById('keyDot'),
  keyClear: document.getElementById('keyClear'),
  keyBalance: document.getElementById('keyBalance'),
  keyDeposit: document.getElementById('keyDeposit'),
  keyWithdraw: document.getElementById('keyWithdraw')
};


var press = {
  press1: keys.key1.addEventListener('click', function() {
    display.innerHTML += 1;}),
  press2: keys.key2.addEventListener('click', function() {
    display.innerHTML += 2;}),
  press3: keys.key3.addEventListener('click', function() {
    display.innerHTML += 3;}),
  press4: keys.key4.addEventListener('click', function() {
    display.innerHTML += 4;}),
  press5: keys.key5.addEventListener('click', function() {
    display.innerHTML += 5;}),
  press6: keys.key6.addEventListener('click', function() {
    display.innerHTML += 6;}),
  press7: keys.key7.addEventListener('click', function() {
    display.innerHTML += 7;}),
  press8: keys.key8.addEventListener('click', function() {
    display.innerHTML += 8;}),
  press9: keys.key9.addEventListener('click', function() {
    display.innerHTML += 9;}),
  press0: keys.key0.addEventListener('click', function() {
    display.innerHTML += 0;}),
  press00: keys.key00.addEventListener('click', function() {
    display.innerHTML += '00';}),
  pressDot: keys.keyDot.addEventListener('click', function() {display.innerHTML += '.';}),
  pressClear: keys.keyClear.addEventListener('click', function() {
    display.innerHTML = '';
    calculator.total = 0;
  })
};

var register = {

  balance: 5,
  // display: 5,

  getBalance: function() {
    return this.balance;
  },

  depositCash: function() {
    this.balance += parseFloat(display.innerHTML);
    display.innerHTML = '';
    console.log(this.balance);
  },

  withdrawCash: function () {
    this.balance -= parseFloat(display.innerHTML);
    display.innerHTML = '';
    console.log(this.balance);
  }
};

keys.keyBalance.addEventListener('click', function() {
  register.getBalance();
  console.log(register.getBalance());
  console.log(register.balance);
});

keys.keyDeposit.addEventListener('click', function() {
  register.depositCash();
  console.log(register.balance);
});

keys.keyWithdraw.addEventListener('click', function() {
  register.withdrawCash();
  console.log('Withdraw');
  console.log(register.balance);
});

var system = {

  plusButton: document.getElementById('keyPlus').addEventListener('click', function() {
    calculator.total += keys.display.innerHTML;
  }),

  minusButton: document.getElementById('keyMinus').addEventListener('click', function() {
    calculator.total -= keys.display.innerHTML;
  }),

  timesButton: document.getElementById('keyTimes').addEventListener('click', function() {
    calculator.total *= keys.display.innerHTML;
  }),

  divideButton: document.getElementById('keyDivide').addEventListener('click', function() {
    calculator.total /= keys.display.innerHTML;
  }),

  equalButton: document.getElementById('keyEqual').addEventListener('click', function() {
    calculator.total = display.innerHTML;
  })
};
