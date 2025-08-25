
import { query } from "wix-location-frontend";
const{careersPageOnReady} = require('sr-npm/pages/careersPage');

$w.onReady(async function () {
    
    
    await careersPageOnReady($w, this, query);

});

