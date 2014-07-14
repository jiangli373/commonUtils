/**
 * Created by li.jiang on 14-7-14.
 */

module.exports = function(id){

    var sub_id = id.substr(0,8);

    var timestamp = new Date();

    timestamp.setTime(parseInt(sub_id,16) * 1000);

//    console.log(timestamp);

    return timestamp;
}
