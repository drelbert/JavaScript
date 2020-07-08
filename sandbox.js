let _ = {};

_.map = function (list, callback) {
  let store = [];

  // for (let i = 0; i < list.length; i++) {
  //   store.push(callback(list[i], i, list));
  // }
  _.each(list, function (v, i, list) {
    store.push(callback(v, i, list));
  });

  return store;
};

// using the above utility function
_.map([1, 2, 3], function (val) {
  console.log(val + 1);
});
