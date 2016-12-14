/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Name          :   NodeDDD
    * Version       :   @package.js.version
    * Description   :   Node Domain Driven Design
    * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
    * Licence       :   MIT
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Package       :   https://www.npmjs.com/package/azmisahin-node-ddd
    * Repository    :   https://github.com/azmisahin/azmisahin-node-ddd.git
    * Bugs          :   https://github.com/azmisahin/azmisahin-node-ddd/issues
    * Homepage      :   https://github.com/azmisahin/azmisahin-node-ddd#readme
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/

'use strict';

/**
 * Node DDD
 * 
 * @public
 */
var NodeDDD = (function () {    
    /**
     * Node Domain Driven Design
     * Initializer
     */
    function NodeDDD() {
    }

    /**
     * NodeDDD.Package
     * Package Information
     * 
     * @public
     */
    NodeDDD.prototype.Package = require('./package.json');
})();

/**
 * Node Domain Driven Design
 * Module Exports
 */
module.exports = NodeDDD;