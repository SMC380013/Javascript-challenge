// from data.js
var tableData = data;
// var table = d3.select('table');
var tbody = d3.select('tbody');
console.log(data);

// adding table rows and cells to add data from data.js into table format

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// activating the click button/event listener and form

var button = d3.select('#filter-btn');

button.on('click', function () {
    // d3.event.preventDefault()
    var inputField = d3.select('#datetime');
    var inputValue = inputField.property('value');
    console.log(inputValue)

    var filteredData = tableData.filter(item => item.datetime === inputValue);

    console.log(filteredData);

    var outcome = d3.select('#filters');
    tbody.html("")
    filteredData.forEach((entry) => {
        console.log(entry);
        var row = tbody.append('tr');

    Object.entries(entry).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});


    // outcome.append('li').text(filteredData[i]);



});

    // outcome.forEach((fillTable) => {
    //     console.log(fillTable);
    //     var fillTable = tbody.append('tr');

    //     Object.entries(fillTable).forEach(([value]) => {
    //         console.log(value);
    //         var cell = row.append('td');
    //         cell.text(value);
    //     });
    // });

//     var outcome = d3.select('#filters')

//     outcome.append('li').text(filteredData);
// });

// remove existing data
//     // output.html("");
// });

