Map = function(){};
mapInstance = new Map();
var latlng;

var latitude;
var longitude;
//マーカーを削除するための配列
var mk_array = [];

navigator.geolocation.getCurrentPosition(success, error, options);

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;
    
    latitude = crd.latitude;
    longitude = crd.longitude;
    mapInstance.printMap(latitude,longitude);
};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};

//mapの表示関連
Map.prototype.printMap = function(latitude,longitude){
    
    // 地図のインスタンスを作成する
    var map = new google.maps.Map( document.getElementById( 'map-canvas' ), {
        zoom: 15 ,	// ズーム値
    	center: new google.maps.LatLng( latitude, longitude ) ,	// 中心の位置座標
    } ) ;
    
    //以下、ロングタップの処理
    google.maps.event.addListener(map, 'mousedown', function (event) {
       start = new Date().getTime();
       end = new Date().getTime();
       while (end - start < 800){
           end = new Date().getTime();
       }
       if (start) {
                end = new Date().getTime();
                longpress = (end - start < 800) ? false : true;
                latlng = new google.maps.LatLng(event.latLng.lat(),event.latLng.lng());
                
                if(longpress){
                    // マーカーのインスタンスを作成
                    var marker = new google.maps.Marker( {
                        map: map ,
                        animation: google.maps.Animation.DROP,
                        position:  latlng,
                    } ) ;
                    /*マーカーを削除*/
                    for(var i=0;i<mk_array.length;i++){
                        mk_array[i].setMap(null);//今まで置いたマーカーを削除
                    }
                    mk_array.push(marker);
                }
            }
    });    
};
