document.write('<script type="text/javascript" language="JavaScript" src="components/monaca-jquery/jquery.js"></script>');

//引数にpassとjsonのオブジェクトを持った一つの引数
// constructor
Connect = function() {};

var return_value;

//-----------------------------------------UserManager系----------------------------------------------//
//サーバで生成されたTabletIDを取得する
Connect.prototype.getTabletID = function(){
    var url = "http://163.44.174.115:80/jsonNewID.php"; 
        var JSONdata = { 
            terminal: 'tablet', 
        }; 
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        async: false,
        data : JSON.stringify(JSONdata),
        contentType: 'application/JSON',
        dataType : 'HTML',
        scriptCharset: 'utf-8',
        
        success : function(data) { 
            // Success 
            //alert("success"); 
            //alert(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
            return_value = JSON.stringify(data);
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }
    }); 
    
    if(return_value != null){
        return return_value;
    };
};

//TabletIDに対応したPhoneIDを取得する
Connect.prototype.getPhones = function(url,something){
    //ajaxでサーバにTabletIDを要求する(からのIDを送信して、サーバからIDをもらう)
    var url = url; 
    return_value = null;
    //配列でDBManagerに必要な情報を渡されて、それをここで展開
        var JSONdata = {
            tabletid: something, 
        }; 
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        //async: false,
        data : JSON.stringify(JSONdata), 
        contentType: 'application/JSON', 
        dataType : 'json', 
        scriptCharset: 'utf-8', 
        
        success : function(data) { 
            // Success 
            alert("success"); 
            alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
            return_value = JSON.stringify(data);
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        } 
    }); 
    if(return_value != null){
        return return_value;
    };
};

//-----------------------------------------GoodsManager系---------------------------------------------//
//商品情報を登録する
Connect.prototype.registerGoods = function(url,tabletID,goodsName,categoryID){
    //ajaxでサーバにTabletIDを要求する(からのIDを送信して、サーバからIDをもらう)
    alert(tabletID);
    alert(goodsName); 
    alert(categoryID);
    var url = url;
    //objectをそのまま送信
        var JSONdata = {
            tabletid: tabletID,
            goodsname: goodsName,
            categoryid:categoryID
        };  
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        //async: false,
        data : JSON.stringify(JSONdata), 
        contentType: 'application/JSON', 
        dataType : 'HTML', 
        scriptCharset: 'utf-8', 
        
        success : function(data) { 
            // Success 
            alert("商品情報を登録するsuccess"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        } 
    }); 
};

//登録されている商品情報を取得する
Connect.prototype.getGoods = function(url,tabletID,categoryID){
    return_value = null;
    var JSONdata = { 
        tabletid:tabletID,
        categoryid:categoryID
    }; 
    $.ajax({ 
        
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        async: false,
        data : JSON.stringify(JSONdata),
        contentType: 'application/JSON',
        dataType : 'json',
        scriptCharset: 'utf-8',
        
        success : function(data) { 
            // Success 
            alert("商品情報を取得するsuccess"); 
            alert(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
            return_value = JSON.stringify(data);
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }
    }); 
    
    if(return_value != null){
        return return_value;
    };
};

//商品情報を更新する
Connect.prototype.editGoods = function(url,tabletID,goodsID,goodsName,categoryID){
    //ajaxでサーバにTabletIDを要求する(からのIDを送信して、サーバからIDをもらう)
    var url = url; 
    //objectをそのまま送信
    var JSONdata = {
        tabletid: tabletID,
        goodsid:goodsID,
        goodsname: goodsName,
        categoryid:categoryID
    }; 
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        //async: false,
        data : JSON.stringify(JSONdata), 
        contentType: 'application/JSON', 
        dataType : 'HTML', 
        scriptCharset: 'utf-8', 
        
        success : function(data) { 
            // Success 
            alert("商品情報を更新するsuccess"); 
            alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        } 
    }); 
};

//登録されている商品情報を削除
Connect.prototype.deleteGoods = function(url,tabletID,GoodsID){
    //ajaxでサーバにTabletIDを要求する(からのIDを送信して、サーバからIDをもらう)
    var url = url; 
    //objectをそのまま送信
        var JSONdata = {
            tabletid:tabletID,
            goodsid:GoodsID, 
        }; 
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        //async: false,
        data : JSON.stringify(JSONdata), 
        contentType: 'application/JSON', 
        dataType : 'HTML', 
        scriptCharset: 'utf-8', 
        
        success : function(data) { 
            // Success 
            alert("商品情報削除:success"); 
            alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        } 
    });
};
//カテゴリー取得
Connect.prototype.getCategoryList = function(url,tabletID){
    return_value = null;
    var JSONdata = { 
        tabletid:tabletID
    }; 
    $.ajax({ 
        
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        async: false,
        data : JSON.stringify(JSONdata),
        contentType: 'application/JSON',
        dataType : 'json',
        scriptCharset: 'utf-8',
        
        success : function(data) { 
            // Success 
            alert("カテゴリーsuccess"); 
            //alert(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
            return_value = JSON.stringify(data);
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }
    }); 
    
    if(return_value != null){
        return return_value;
    };
};
//-----------------------------------------ShopManager系----------------------------------------------//
//店情報を登録する
Connect.prototype.registerShop = function(url,tabletID,shopName,latitude,longitude){
    //ajaxでサーバにTabletIDを要求する(からのIDを送信して、サーバからIDをもらう)
    var url = url; 
    //objectをそのまま送信
        var JSONdata = {
            tabletid:tabletID,
            shopname:shopName,
            latitude:latitude,
            longitude,longitude,
        }; 
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        //async: false,
        data : JSON.stringify(JSONdata), 
        contentType: 'application/JSON', 
        dataType : 'HTML', 
        scriptCharset: 'utf-8', 
        
        success : function(data) { 
            // Success 
            alert("店情報を登録:success"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        } 
    }); 
};

//登録されている店情報を編集する
Connect.prototype.editShop = function(url,tabletID,shopID,shopName,latitude,longitude){
    //ajaxでサーバにTabletIDを要求する(からのIDを送信して、サーバからIDをもらう)
    var url = url; 
    //objectをそのまま送信
        var JSONdata = {
            tabletid:tabletID,
            shopid:shopID,
            shopname:shopName,
            latitude:latitude,
            longitude,longitude,
        }; 
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        //async: false,
        data : JSON.stringify(JSONdata), 
        contentType: 'application/JSON', 
        dataType : 'HTML', 
        scriptCharset: 'utf-8', 
        
        success : function(data) { 
            // Success 
            alert("店情報編集:success"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        } 
    });
};

//登録されている店情報を削除
Connect.prototype.deleteShop = function(url,tabletID,shopID){
    //ajaxでサーバにTabletIDを要求する(からのIDを送信して、サーバからIDをもらう)
    var url = url; 
    //objectをそのまま送信
        var JSONdata = {
            tabletid:tabletID,
            shopid: something, 
        }; 
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        //async: false,
        data : JSON.stringify(JSONdata), 
        contentType: 'application/JSON', 
        dataType : 'HTML', 
        scriptCharset: 'utf-8', 
        
        success : function(data) { 
            // Success 
            alert("店情報削除:success"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        } 
    });
};

//登録されている店情報を取得する
Connect.prototype.getShopList = function(url,tabletID){
    return_value = null;
    var JSONdata = { 
        tabletid:tabletID
    }; 
    $.ajax({ 
        
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        async: false,
        data : JSON.stringify(JSONdata),
        contentType: 'application/JSON',
        dataType : 'json',
        scriptCharset: 'utf-8',
        
        success : function(data) { 
            // Success 
            alert("店情報を取得するsuccess"); 
            //alert(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
            return_value = JSON.stringify(data);
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }
    }); 
    
    if(return_value != null){
        return return_value;
    };
};

//-----------------------------------------ListManager系----------------------------------------------//
//登録されている購入リストを取得する
Connect.prototype.getGoodsList = function(url,tabletID){
    return_value = null;
    var JSONdata = { 
        tabletid: tabletID,
    }; 
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        async: false,
        data : JSON.stringify(JSONdata),
        contentType: 'application/JSON',
        dataType : 'json',
        scriptCharset: 'utf-8',
        
        success : function(data) { 
            // Success 
            alert("GetGoodsList:success"); 
            //alert(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
            return_value = JSON.stringify(data);
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }
    }); 
    
    if(return_value != null){
        return return_value;
    };
};

//購入リストに追加する
Connect.prototype.addGoods = function(url,tabletID,goodsID){
    //ajaxでサーバにTabletIDを要求する(からのIDを送信して、サーバからIDをもらう)
    var url = url; 
    //objectをそのまま送信
        var JSONdata = {
            tabletid:tabletID,
            goodsid: goodsID, 
        }; 
    $.ajax({
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        //async: false,
        data : JSON.stringify(JSONdata),
        contentType: 'application/JSON', 
        dataType : 'HTML', 
        scriptCharset: 'utf-8', 
        
        success : function(data) { 
            // Success 
            alert("addGoods:success"); 
            alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        } 
    }); 
};

//購入リストから商品を削除
Connect.prototype.deleteGoods = function(url,tabletID,goodsID){
    //ajaxでサーバにTabletIDを要求する(からのIDを送信して、サーバからIDをもらう)
    alert("tabletID:"+tabletID);
    alert("goodsID:"+goodsID);
    var url = url; 
    //objectをそのまま送信
        var JSONdata = {
            tabletid: tabletID,
            goodsid: goodsID, 
        }; 
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        //async: false,
        data : JSON.stringify(JSONdata), 
        contentType: 'application/JSON', 
        dataType : 'HTML', 
        scriptCharset: 'utf-8', 
        
        success : function(data) { 
            // Success 
            alert("deleteGoods:success"); 
            alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        } 
    });
};

//listの商品数を増やす
Connect.prototype.plusGoods = function(url,tabletID,goodsID){
    //ajaxでサーバにTabletIDを要求する(からのIDを送信して、サーバからIDをもらう)
    var url = url; 
    //objectをそのまま送信
        var JSONdata = {
            tabletid: tabletID,
            goodsid: goodsID, 
        }; 
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        //async: false,
        data : JSON.stringify(JSONdata), 
        contentType: 'application/JSON', 
        dataType : 'HTML', 
        scriptCharset: 'utf-8', 
        
        success : function(data) { 
            // Success 
            alert("deleteGoods:success"); 
            alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        } 
    });
}

//listの商品数を減らす
Connect.prototype.minusGoods = function(url,tabletID,goodsID){
    //ajaxでサーバにTabletIDを要求する(からのIDを送信して、サーバからIDをもらう)
    alert("tabletID:"+tabletID);
    alert("goodsID:"+goodsID);
    var url = url; 
    //objectをそのまま送信
        var JSONdata = {
            tabletid: tabletID,
            goodsid: goodsID, 
        }; 
    $.ajax({ 
        type : 'post', 
        url : url, 
        //通信完了まで待たせる
        //async: false,
        data : JSON.stringify(JSONdata), 
        contentType: 'application/JSON', 
        dataType : 'HTML', 
        scriptCharset: 'utf-8', 
        
        success : function(data) { 
            // Success 
            alert("deleteGoods:success"); 
            alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        }, 
        
        error : function(data) { 
            // Error 
            alert("error"); 
            //alert(JSON.stringify(data)); 
            //$("#response").html(JSON.stringify(data)); 
            console.log(JSON.stringify(data));
        } 
    });
}