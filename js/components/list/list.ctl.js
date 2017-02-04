(function(){

'use strict';
angular.module(appObj.id).controller('listCtl',listCtl);

listCtl.$inject = ['$scope','listSrv','$filter'];

function listCtl($scope,listSrv,$filter){

listSrv.getList().success(function(data){

	$scope.myInfo = data;


	console.log($scope.myInfo);

})

}
})();






