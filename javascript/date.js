 function format(d, format) {
//        {date} d
//        日期
//        {string} format
//        日期格式：yyyy-MM-dd w hh:mm:ss
//        yyyy/yy 表示年份
//        MM/M 月份
//        w 星期
//        dd/d 日
//        hh/h 小时
//        mm/m 分
//        ss/s 秒

        var str = format;
        var Week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var month = d.getMonth() + 1;

        str = str.replace(/yyyy/, d.getFullYear());
        str = str.replace(/yy/, (d.getYear() % 100) > 9 ? (d.getYear() % 100).toString() : '0' + (d.getYear() % 100));
        str = str.replace(/MM/, month > 9 ? month.toString() : '0' + month);
        str = str.replace(/M/g, month);
        str = str.replace(/dd/, d.getDate() > 9 ? d.getDate().toString() : '0' + d.getDate());
        str = str.replace(/d/g, d.getDate());

        str = str.replace(/w/g, Week[d.getDay()]);

        str = str.replace(/hh/, d.getHours() > 9 ? d.getHours().toString() : '0' + d.getHours());
        str = str.replace(/h/g, d.getHours());
        str = str.replace(/mm/, d.getMinutes() > 9 ? d.getMinutes().toString() : '0' + d.getMinutes());
        str = str.replace(/m/g, d.getMinutes());
        str = str.replace(/ss/, d.getSeconds() > 9 ? d.getSeconds().toString() : '0' + d.getSeconds());
        str = str.replace(/s/g, d.getSeconds());
        console.log(str);
        return str;
    }
	
	format(new Date(),'yyyy-MM-dd hh:mm:ss')