
let checkingValueCRC = 0

function PreformCRC(Bits, Polynomial)
{
    Bits = Bits.value.split("");
    printHeading("Bits Block: "+Bits.toString().replaceAll(",",""));
    Polynomial = Polynomial.value.split("");
    let polyString = "";
    for(let i=0; i<Polynomial.length-1; i++)
    {
        polyString += "x<sup>"+Polynomial[i]+"</sup> + ";
    }
    polyString += "x<sup>"+Polynomial[Polynomial.length-1]+"</sup>";
    printHeading("Polynomial: " + polyString);
    let BitsToCheck = new Array();
    for(checkingValueCRC=1; checkingValueCRC<=Polynomial[0]; checkingValueCRC++)
    {
        if(Polynomial.find(checkBit))
            BitsToCheck.unshift(1);
        else
            BitsToCheck.unshift(0);
    }

    let toDivide = new Array();
    for(let i=0; i<BitsToCheck.length; i++)
        toDivide[i] = BitsToCheck[i];
    toDivide.push(0,0,0);

    let editID = addEditAbleLine();

    println(Bits.toString().replaceAll(",", "") + "|<span style='text-decoration: overline'>" + toDivide.toString().replaceAll(",", "") + "</span>");
    let spaces = Bits.length + 1;
    addToEditable(getSpaces(spaces) ,editID);
    console.log("To Divide Called length" + toDivide.length + " | " + Bits.length);
    while (toDivide.length >= Bits.length)
    {
        console.log("To Divide Called length" + toDivide.length + " | " + Bits.length);
        if(toDivide[0] < Bits[0])
        {
            addToEditable("0", editID);
            print_("<div><u>"+getSpaces(spaces));
            for(let i=0; i<Bits.length-1; i++)
                print_("0");
            println("0</u></div>");
        }
        else
        {
            addToEditable("1", editID);
            print_("<div>"+getSpaces(spaces)+"<u>");
            for(let i=0; i<Bits.length-1; i++)
                print_(Bits[i]);
            println(Bits[Bits.length-1]+"</u></div>");

            for(let i=0; i<Bits.length; i++)
            {
                if(Bits[i] != toDivide[i])
                    toDivide[i] = 1;
                else
                    toDivide[i] = 0;
            }
        }
        toDivide.shift();
        print_(getSpaces(spaces));
        for(let i=0; i<Bits.length && i<toDivide.length; i++)
            print_(toDivide[i]);
        println(" ");
        spaces++;
    }
}

function getSpaces(spaces)
{
    let string = "&nbsp;";
    for(let i=0; i<spaces; i++)
        string+="&nbsp;";
    return string;
}

function checkBit(bit) {
    return bit == checkingValueCRC;
}

