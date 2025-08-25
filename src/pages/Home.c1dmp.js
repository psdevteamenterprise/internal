const{homePageOnReady} = require('sr-npm/pages/homePage');

$w.onReady(async function () {

   await homePageOnReady($w,this);

});
