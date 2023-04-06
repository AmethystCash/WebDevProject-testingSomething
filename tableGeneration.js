
var num_groups = Math.floor(Math.random(0, 7)) + 3;//will be pulled from chess.com api
var num_bars = num_groups * 4;
var bar_data = [];
var max_value = 0;
var group_names = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'];//use push to grab playername from chess.com api

for (var i = 0; i < num_groups; i++) {
    var group_bars = [];
    /*for (var j = 0; j < 3; j++) {
        var bar_value = Math.floor(Math.random(0, 20)) + 3;
        group_bars.push(bar_value);
        if (bar_value > max_value) {
            max_value = bar_value;
        }
    }*/
    group_bars.push(math.floor(Math.random(5, 10)));
    group_bars.push(math.floor(Math.random(5, 10)));
    group_bars.push(math.floor(Math.random(5, 10)));
    group_bars.push(0);

    bar_data.push(group_bars);
}

var chart_data = '';
for (var i = 0; i < max_value; i++) {
    chart_data += '<tr>';
    /*for (var j = 0; j < num_groups; j++) {
        /*if (i < bar_data[j].length) {
            var bar_value = bar_data[j][i];
            var bar_class = '';
           
            if (bar_value > 10) {
                bar_class = 'bar-item-red';
            } else if (bar_value > 5) {
                bar_class = 'bar-item-grey';
            } else {
                bar_class = 'bar-item-green';
            }
            chart_data += '<td class="' + bar_class + '"></td>';
        } else {
            chart_data += '<td></td>';
        }*/

    if (i%4 == 0){
        for (k = 0; k < bar_data[j]; k++){
            chart_data += '<td bgcolour="green">';
        }
        for (k = i; i < max_value; k++){
            chart_data += '<td>'
        }
    } else if (i%4 == 1){
        for (k = 0; k < bar_data[j]; k++){
            chart_data += '<td bgcolour="gray">';
        }
        for (k = i; i < max_value; k++){
            chart_data += '<td>'
        }
    }else if (i%4 == 2){
        for (k = 0; k < bar_data[j]; k++){
            chart_data += '<td bgcolour="red">';
        }
        for (k = i; i < max_value; k++){
            chart_data += '<td>'
        }
    }else{
        for (k = 0; k < max_value; k++){
            chart_data += '<td>'
        }
    }
    //}
    chart_data += '</tr>';
}
document.getElementById('chart-data').innerHTML = chart_data;

var group_list = '';
for (var i = 0; i < num_groups; i++) {
    group_list += '<li><span class="chart-name">' + group_names[i] + ':</span>';
    group_list += '<span>' + bar_data[i].reduce((a, b) => a + b, 0) + '</span></li>';
}
document.getElementById('group-list').innerHTML = group_list;