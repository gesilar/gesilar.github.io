var productList = [];
var tableList = $(".table1");
productList = $.map(tableList, function($table){
    var textFields = $(".field_box1",$table);
    if(textFields.length === 4){
        return {
            imgName: "test.jpg",//这个对应你命名的图片名称
            series: textFields.eq(0).text().replace("系列：", ""),
            name: textFields.eq(1).text().replace("品名：", ""),
            price: textFields.eq(2).text().replace("价格：", ""),
            intro: textFields.eq(3).text().replace("介绍：", ""),//备注信息
        }
    } else {
        return {
            imgName: "test.jpg",//这个对应你命名的图片名称
            series: "test",
            name: textFields.eq(0).text().replace("品名：", ""),
            price: textFields.eq(1).text().replace("价格：", ""),
            intro: textFields.eq(2).text().replace("介绍：", ""),//备注信息
        }
    }
})