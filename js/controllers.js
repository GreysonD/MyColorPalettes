angular.module('RNPalette',['angular-clipboard'])
  .controller('ColorListCtrl',ColorListCtrl)

ColorListCtrl.$inject = ['$scope'];

function ColorListCtrl($scope) {
  $scope.colors = [
  	{
  		"title": "BOULDER",
  		"data": [
  			{
    			"name": "dark",
    			"code": "#153c75"
  			},
  			{
    			"name": "regular",
    			"code": "#1f59ae"
  			},
  			{
    			"name": "light",
    			"code": "#4081cb"
  			}
  		],
  		"tags": []
  	},
  	{
  		"title": "YOGA",
  		"data": [
  		  {
    			"name": "dark",
    			"code": "#e3481b"
  			},
  			{
    			"name": "regular",
    			"code": "#f36717"
  			},
  			{
    			"name": "light",
    			"code": "#f7980f"
  			}
  		],
  		"tags": []
  	},
  	{
  		"title": "FITNESS",
  		"data": [
  		  {
    			"name": "dark",
    			"code": "#4b9625"
  			},
  			{
    			"name": "regular",
    			"code": "#72b623"
  			},
  			{
    			"name": "light",
    			"code": "#8cd024"
  			}
  			
  		],
  		"tags": []
  	},
  	{
  		"title": "WOMEN",
  		"data": [
  		  {
    			"name": "dark",
    			"code": "#701038"
  			},
  			{
    			"name": "regular",
    			"code": "#9c154f"
  			},
  			{
    			"name": "light",
    			"code": "#be1565"
  			}
  			
  		],
  		"tags": []
  	},
  	{
  		"title": "YOUTH",
  		"data": [
  		  {
    			"name": "dark",
    			"code": "#06837c"
  			},
  			{
    			"name": "regular",
    			"code": "#00a997"
  			},
  			{
    			"name": "light",
    			"code": "#66caa6"
  			}
  			
  		],
  		"tags": []
  	}
  ];
  for(var i = 0; i < $scope.colors.length; i++) {
    for(var j = 0; j < $scope.colors[i].data.length; j++) {
      var rgb = hexToRgb($scope.colors[i].data[j].code)
      $scope.colors[i].data[j].rgb = "rgb( "+rgb.r+", "+rgb.g+", "+rgb.b+")";
    }
  }
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }
}
