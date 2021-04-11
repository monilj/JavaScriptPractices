'use strict';
const runOnce = function () {
  console.log('Run only once ');
};

runOnce();

(function () {
  console.log('Run only once ');
})();

() => console.log('Run only once ')();
