document.write('<script type="text/javascript" language="JavaScript" src="tablet.js"></script>');
var tabletID = 1;
//クラス化
var LocalDBManager = function() {

};

    //ローカルストレージにtabletIDを保存する
    LocalDBManager.prototype.insertTabletID = function(tabletID){ 
        //保存
        localStorage.setItem('tabletID',tabletID);
    };
    
    //ローカルストレージからtabletIDを取得する
    LocalDBManager.prototype.selectTabletID = function(){
        //取得
        var getTableID = localStorage.getItem('tabletID');
        var result = 'null';
        if (getTableID != 'undefined') {
            result = getTableID;
        }
        return getTableID;
    };
