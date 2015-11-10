var calculator = {
  total: 0,

  add: function (n) {
    return this.total += n;
  },

  subtract: function (n) {
    return this.total -= n;
  },

  multiply: function (n) {
    return this.total *= n;
  },

  divide: function (n) {
    return this.total /= n;
  },
  
  clear: function () {
    this.total = 0;
  },

  equals: function () {
    return this.total;
  }

};
