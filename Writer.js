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
    document.getElementById("Output").innerHTML += "<div class='container'><div class='table' id='TableNo"+nextTableID+"'></div></div>";

    let string = "<div class='table-header'>";
    for(let i=0; i<headings.length; i++)
    {
        string += "<div class='header__item'><a id='"+headings[i]+"' class='filter__link' href='#'>" + headings[i] + "</a></div>";
    }

    document.getElementById("TableNo" + nextTableID).innerHTML += string+ "</div>";
    document.getElementById("TableNo" + nextTableID).innerHTML += "<div id='ContentTableNo"+nextTableID+"' class='table-content'></div>";
    nextTableID++;
}

function addTableRow(data, colors)
{
    let string = "<div class='table-row'>";
    for(let i=0; i<data.length; i++)
    {
        let col = "white";
        if(colors != undefined)
            col = colors[i];
        if(data[i] !== 2)
            string += "<div class='table-data' style='background-color: "+col+"'>" + data[i] + "</div>";
        else
            string += "<div class='table-data' style='background-color: "+col+"'> </div>";

    }

    document.getElementById("ContentTableNo" + (nextTableID - 1)).innerHTML += string+ "</div>";
}