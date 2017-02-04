


(function() {
  'use strict';

  angular.module(appObj.id)
    .factory('listSrv', listSrv);

  listSrv.$inject = ['$http'];

  function listSrv($http) {
    return {

      //http://jsonplaceholder.typicode.com/posts
      getList:function(){
        return $http({
          url:'http://jsonplaceholder.typicode.com/posts'
        })
      }

    }
  }
})();
