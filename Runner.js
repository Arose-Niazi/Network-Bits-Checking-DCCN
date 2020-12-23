


function PreformCRC(Bits, Polynomial,Remainder)
{
    new CRC(Bits.value,Polynomial.value,Remainder.value);
    println("<hr>");
}

function PreformChecksum(first, second, output)
{
    new Checksum(first.value,second.value,output.value);
    println("<hr>");
}

function PreformHamming(data, check)
{
    new Hamming(data.value,check.value);
    println("<hr>");
}


function getSpaces(spaces)
{
    let string = "&nbsp;";
    for(let i=0; i<spaces; i++)
        string+="&nbsp;";
    return string;
}

function getUnderlines(dashes)
{
    let string = "-";
    for(let i=0; i<dashes; i++)
        string+="-";
    return string;
}



