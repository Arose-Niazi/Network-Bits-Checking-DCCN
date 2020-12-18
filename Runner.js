


function PreformCRC(Bits, Polynomial,Remainder)
{
    clearOutput();
    new CRC(Bits.value,Polynomial.value,Remainder.value);
}

function PreformChecksum(first, second, output)
{
    clearOutput();
    new Checksum(first.value,second.value,output.value);
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



