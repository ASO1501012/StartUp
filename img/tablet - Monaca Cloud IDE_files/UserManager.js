document.write('<script type="text/javascript" language="JavaScript" src="components/LocalDBManager.js"></script>');
document.write('<script type="text/javascript" language="JavaScript" src="components/Connect.js"></script>');

UserManager = function(){};

//初回アクセス時に実行
UserManager.prototype.firstAccess = function(){
    var connectInstance = new Connect();
    var localDBManagerInstance = new LocalDBManager();
    var userManagerInstance = new UserManager();
    
    //すでにlocalstorageにtabletIDがあるか確認
    var result = localDBManagerInstance.selectTabletID();
    if(result == null){
        //サーバからtabletIDを取得
        var value = connectInstance.getTabletID();
        value = JSON.parse(value);
        var tabletID = value.replace(/"/g,"");
        
        userManagerInstance.addTablet(tabletID);
    }
};

UserManager.prototype.addTablet = function(tabletID){
    //alert(tabletID);
    var localDBManagerInstance = new LocalDBManager();
    //LocalDBManagerでローカルストレージにtabletIDを保存
    localDBManagerInstance.insertTabletID(tabletID);  
};

UserManager.prototype.getPhones = function(){
    var connectInstance = new Connect();
    var localDBManagerInstance = new LocalDBManager();
    var tabletID = localDBManagerInstance.selectTabletID();
    //alert(tabletID);
    var value = connectInstance.getPhones('http://163.44.174.115:80/jsonGetLinkedPhoneList.php',tabletID);
    //value = JSON.parse(value);
    //var phoneList = value.replace(/"/g,"");
};

