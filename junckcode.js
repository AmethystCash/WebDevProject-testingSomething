//const fileInput = document.createElement('input');
            //fileInput.type = 'file';
            //fileInput.accept = '.pgn';
            /*const file = 'chess_com_games_2023-03-25.txt';
            const reader = new FileReader();
            reader.onload = () => {
                const pgnString = reader.result;
                console.log(pgnString);
            }; 
            reader.readAsText(file);*/

            //var reader = new FileReader();
            
            //reader.onload = function() {
            //    console.log(reader.result);
            //}
            //reader.readAsText('sample.txt', 'UTF-8');




//maybe put div in cell that has width = to length of bar. 
var num_groups = Math.floor(Math.random() * 10);//will be pulled from chess.com api
console.log(num_groups);
var num_bars = num_groups * 4;
var bar_data = [];
var max_value = 50;
var group_names = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'];//use push to grab playername from chess.com api

var i = 0;

console.log('set values works ' + max_value);
for (let i = 0; i < num_groups; i++) {
    var group_bars = [];

    group_bars.push(Math.floor(Math.random() * 5) + 5);
    group_bars.push(Math.floor(Math.random() * 5) + 5);
    group_bars.push(Math.floor(Math.random() * 5) + 5);
    group_bars.push(0);

    for (let k = 0; k < 3; k++) {
        if (group_bars[k] > max_value) {
            max_value = group_bars[k];
            console.log("max_value = " + k);
        }
    }
    console.log(max_value + "is max_value")
    bar_data.push(group_bars);
}

var chart_data = '';
var group_idx = Math.floor(i / 4);  //setting the colour of the cells
var color = group_idx % 3 == 0 ? 'green' : group_idx % 3 == 1 ? 'gray' : 'red';

var bar_value = bar_data[group_idx][i % 4]; 
for (let k = 0; k < bar_value; k++) {
    chart_data += '<td bgcolor="' + color + '"></td>';
}
for (let k = bar_value; k < max_value; k++){
    chart_data += '<td></td>';
}
document.getElementById('chart-data').innerHTML = chart_data;

var group_list = '';              //Temporarily disabled
for (var x = 0; x < num_groups; x++) {
    //group_list += '<li><span class="chart-name">' + group_names[x] + ':</span>';
    //group_list += '<span>' + bar_data[i].reduce((a, b) => a + b, 0) + '</span></li>';
    console.log(x + " = x")
}
document.getElementById('group-list').innerHTML = group_list;









                /*for (let j = 0; j < 3; j++) {
                    var bar_value = Math.floor(Math.random(0, 20)) + 3;
                    group_bars.push(bar_value);
                    if (bar_value > max_value) {
                        max_value = bar_value;
                    }
                }*/









                /*for (let j = 0; j < num_groups; j++) {
                    let bar_color;
                    if (i % 3 === j % 3) {
                        if (i % 3 === 0) {
                            bar_color = 'green';
                        } else if (i % 3 === 1) {
                            bar_color = 'gray';
                        } else {
                            bar_color = 'red';
                        }
                        for (let k = 0; k < bar_data[j][i/3]; k++){
                            chart_data += '<td bgcolor="' + bar_color + '"></td>';
                        }
                    } else {
                        for (let k = 0; k < bar_data[j][i/3]; k++){
                            chart_data += '<td></td>';
                        }
                    }
                }*/








                /*for (let j = 0; j < num_groups; j++) {
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
                    }
                }*/



                    
                /*var group_idx = Math.floor(i / 4);  //setting the colour of the cells
                var color = group_idx % 3 == 0 ? 'green' :
                    group_idx % 3 == 1 ? 'gray' : 'red';
                var bar_value = bar_data[group_idx][i % 4]; 
                for (let k = 0; k < bar_value; k++) {
                    chart_data += '<td bgcolor="' + color + '"></td>';
                }
                for (let k = bar_value; k < max_value; k++){
                    chart_data += '<td></td>';
                }*/

                /*if (i%4 == 0){
                    for (let k = 0; k < bar_data[i]; k++){
                        console.log(bar_data[i]);
                        chart_data += '<td bgcolor="green"></td>';
                    }
                    for (let k = i; k < max_value; k++){
                        chart_data += '<td></td>';
                    }
                } else if (i%4 == 1){
                    for (let k = 0; k < bar_data[i]; k++){
                        console.log(bar_data[i]);
                        chart_data += '<td bgcolor="gray"></td>';
                    }
                    for (let k = i; k < max_value; k++){
                        chart_data += '<td></td>';
                    }
                }else if (i%4 == 2){
                    for (let k = 0; k < bar_data[i]; k++){
                        console.log(bar_data[i]);
                        chart_data += '<td bgcolor="red"></td>';
                    }
                    for (let k = i; k < max_value; k++){
                        chart_data += '<td></td>';
                    }
                }else{
                    for (let k = 0; k < max_value; k++){
                        chart_data += '<td></td>';
                    }
                }*/
                //}