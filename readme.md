##Title
Angular best practises according to:
[18 Tips For The Angular Architect](https://www.youtube.com/watch?v=MpI3HKDVZm0)

##Folders/Files
lowercase and - separated

##Jasmine Given

##CSS
Use SASS, LESS or COMPASS

<!-- include:  -->

##GRUNT
Use Grunt

##Common Links Errors and Bugfix helps
[Error: ngareq fn is not a function got string](http://chawi3.com/2015/02/17/error-ngareq-argument-fn-is-not-a-function-got-string)

##Suffixes
* .drv
* .tpl
* .ctrl
* .svc
* .fltr
* .cnst
* .val
* .mock
´´´
scripts/
    assets/
    vendor/
    common/
        services/
        directives/
            product-box.drv.js
            product-box.tpl.js
            product-box.drv.test.js
    core/
        app.mdl.js
        product/
            product-detail/
            product-list/
                product-list.tpl.html
                product-list.ctrl.js
                product-list.sass
´´´

```javascript
angular.module("myApp")
    .controller("myApp.core.product.productListCtrl",["$scope"],function($scope){});
```