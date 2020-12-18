var nextTableID = 0;

let EditAbleLine = 0;

function println(string)
{
    document.getElementById("Output").innerHTML += string.toString() + "<BR>\n";
}

function print_(string)
{
    document.getElementById("Output").innerHTML += string.toString();
}


function addEditAbleLine()
{
    document.getElementById("Output").innerHTML += "<div id='EditAble"+EditAbleLine+"'></div>";
    return new Number(EditAbleLine++);
}

function addToEditable(string, editID)
{
    document.getElementById("EditAble" + editID).innerHTML += string;
}

function printHeading(string, center, heading)
{
    if(heading == undefined)
        heading = "h3";
    if(center == true)
        document.getElementById("Output").innerHTML += "<div style=\"text-align: center;\"><"+heading+">" + string + "</"+heading+"></div>\n";
    else document.getElementById("Output").innerHTML += "<"+heading+">" + string + "</"+heading+">\n";
}

function clearOutput()
{
    document.getElementById("Output").innerHTML="";
}

function createTable(headings)
{
    headings = headings.split(",");
    document.getElementById("Output").innerHTML += "<table id='TableNo"+nextTableID+"'></table>";

    let string = "<tr>";
    for(let i=0; i<headings.length; i++)
    {
        string += "<th>" + headings[i] + "</th>";
        console.log(headings[i]);
    }
    console.log(string);

    document.getElementById("TableNo" + nextTableID).innerHTML += string+ "</tr>";
    nextTableID++;
}

function addTableRow(data)
{
    data = data.split(",");
    let string = "<tr>";
    for(let i=0; i<data.length; i++)
    {
        string += "<td>" + data[i] + "</td>";
    }

    document.getElementById("TableNo" + (nextTableID - 1)).innerHTML += string+ "</tr>";
}