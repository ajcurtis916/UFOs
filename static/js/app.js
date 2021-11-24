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
