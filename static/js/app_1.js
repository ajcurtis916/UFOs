//import the data from data.js
const tableData=data;

//reference the HTML table using d3
var tbody=d3.select("tbody");

//build data table function
function buildTable(data){
    //clear any existing data
    tbody.html("");
//loop through each object in the data and append a row and cells for each value in row
    data.forEach((dataRow)=>{
        //set variable to append row to tbody
        let row=tbody.append("tr");
        //reference one object from the array, place in dataRow and loop through each value
        Object.values(dataRow).forEach((val)=>{
            //set variable to append data to table as a table cell
            let cell=row.append("td");
            //holds text from each value
            cell.text(val);
            }
        );
    });
}

//create variable to keep track of all filters as an object
var keys={}

//build button for filter data by date function
function handleClick(){
    //selects first element that matches #datetime and stores in "date" variable
    let date=d3.select('#datetime').property('value');
    //set default filter = raw data
    let filteredData=tableData
    //if statement to filter by date
    if (date){
        filteredData=filteredData.filter(row=>row.datetime===date);
    };    
    //rebuild table using filtered data @NOTE: if no date entered, result to default/raw data
    buildTable(filteredData);
};

//listen for button click event
d3.selectAll('#filter-btn').on('click',handleClick);

//call original data for initial page load
buildTable(tableData);