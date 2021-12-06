//import the data from data.js
const tableData=data;
console.log("tableData")
console.log(tableData)

//reference the HTML table using d3
var tbody=d3.select("tbody");

//build data table function
function buildTable(facts_data){
    //clear any existing data
    tbody.html("");
//loop through each object in the data and append a row and cells for each value in row
    facts_data.forEach((dataRow)=>{
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
var filters={}

//build button for filter data by date function
// function handleClick(){
//     //selects first element that matches #datetime and stores in "date" variable
//     let date=d3.select('#datetime').property('value');
//     //set default filter = raw data
//     let filteredData=tableData
//     //if statement to filter by date
//     if (date){
//         filteredData=filteredData.filter(row=>row.datetime===date);
//     };    
//     //rebuild table using filtered data @NOTE: if no date entered, result to default/raw data
//     buildTable(filteredData);
// };

//update the filters
function updateFilters(){
    //save the element that was changed
    let changedElement=d3.select(this)
    console.log("changedElement")
    console.log(changedElement);
    //save the value that was changed
    let elementValue= changedElement.property("value");
    //print value to the console
    console.log("elementValue")
    console.log(elementValue);
    //save the id of the filter that was changed
    let filterID=changedElement.attr("id");
    //print filter name to the console
    console.log("filterID")
    console.log(filterID);
    //If filter value entered, add filterId and value to the filters list
    if (elementValue){
        filters[filterID] = elementValue
    }
    //Otherwise, clear filter from the filters object
    else {
        delete filters[filterID]
    }
    filterTable();
}

//filter the table when data is entered
function filterTable() {
    //set baseline to original, unfiltered data
    let filteredData = tableData;
    //loop through all filters and keep data that matches filter values
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
    //apply all filters to rebuilt/reset table
    buildTable(filteredData);
}

//reset/clear table
function clearResults(){
    document.getElementsByTagName("text").input = ''
}
//listen for button click event
// d3.selectAll('#filter-btn').on('click',handleClick);

//listen for changes to each filter
d3.selectAll("input").on("change",updateFilters);

//build table and call original data for initial page load
buildTable(tableData);