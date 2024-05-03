
// 1. db open
//var connection = new ActiveXObject("ADODB.Connection");
//var connectionstring = "Data Source=125.141.216.121,51433;Initial Catalog=NSLA007;User ID=readinggatedb;Password=rgdb@tbfri12;Provider=SQLOLEDB";
//connection.Open(connectionstring);

// 2. Recordset
//var rs = new ActiveXObject("ADODB.Recordset");

// 3. SELECT 예제
//rs.Open("SELECT * FROM tUser", connection);
//rs.MoveFirst
//while (!rs.eof) {
//    document.write(rs.fields(1));
//    rs.movenext;
//}
//rs.close;
//connection.close;

// 4. DELETE(UPDATE) 예제
//connection.Execute("DELETE FROM tUser WHERE zname <> '' ");
//connection.close;


// 5. CustomerInfo 조회
function fncSetCustInfo(pUrl) {
    //alert("CustomerInfo 조회 시작");
    //alert("pUrl = " + pUrl);

    var connection = new ActiveXObject("ADODB.Connection");
    //var connectionstring = "Data Source=125.141.216.107,51433;Initial Catalog=RgBase;User ID=readinggatedb;Password=rgdb@tbfri12;Provider=SQLOLEDB";
    var connectionstring = "Data Source=125.141.216.121,51433;Initial Catalog=ReadingGate;User ID=readinggatedb;Password=rgdb@tbfri12;Provider=SQLOLEDB";
    connection.Open(connectionstring);

    var rs = new ActiveXObject("ADODB.Recordset");

    rs.Open("EXEC [dbo].[sGetCustomerInfo] @pHomepageUrl = '" + pUrl + "' ", connection);
    rs.MoveFirst

    if (!rs.eof) {
        alert("rs 있음");

        var rsCustomerGroupCode = rs("CustomerGroupCode");

        alert("rsCustomerGroupCode = " + rsCustomerGroupCode);

        //sessionStorage.setItem(pkeStudyInfo.CustType, rs("CustomerGroupCode"));
        //sessionStorage.setItem(pkeStudyInfo.DbIp, rs("DatabaseIp"));
        //sessionStorage.setItem(pkeStudyInfo.DbPort, rs("DatabasePort"));
        //sessionStorage.setItem(pkeStudyInfo.DbName, rs("DatabaseName"));
        //sessionStorage.setItem(pkeStudyInfo.DbId, rs("DatabaseId"));
        //sessionStorage.setItem(pkeStudyInfo.DbPassword, rs("DatabasePassword"));
        //sessionStorage.setItem(pkeStudyInfo.LanguageCode, rs("LanguageCode"));

        alert("OK");
    } else {
        alert("rs 없음");
    }
}
//var objCustomerInfo = $.parseJSON(sessionStoragepkeStudyInfo);
//var gvStorageCustomerInfo = new Array();

//gvStorageCustomerInfo.Url = objCustomerInfo.url;
//gvStorageStudyInfo.DbIp = objCustomerInfo.db_ip;
//gvStorageStudyInfo.DbName = objCustomerInfo.db_name;

//alert("gvStorageCustomerInfo.Url = " + gvStorageCustomerInfo.Url);

//if ((gvStorageCustomerInfo.Url != "") && ((gvStorageStudyInfo.DbIp == "") || (gvStorageStudyInfo.DbIp == undefined) || (gvStorageStudyInfo.DbName == "") || (gvStorageStudyInfo.DbName == undefined))) {
//    alert("CustomerInfo 조회 시작");
//}

