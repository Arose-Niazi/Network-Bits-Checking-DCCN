let checkingValueCRC = 0

class CRC {
    constructor(Bits, Polynomial, Remainder) {
        printHeading("Cyclic Redundancy Check (CRC)", true, "h2");
        this.Bits = Bits.split("");
        printHeading("Bits Block: "+this.Bits.toString().replaceAll(",",""));
        Polynomial = Polynomial.split("");
        let polyString = "";
        for(let i=0; i<Polynomial.length-1; i++)
        {
            polyString += "x<sup>"+Polynomial[i]+"</sup> + ";
        }
        polyString += "x<sup>"+Polynomial[Polynomial.length-1]+"</sup>";
        printHeading("Polynomial: " + polyString);
        this.BitsToCheck = new Array();
        for(checkingValueCRC=1; checkingValueCRC<=Polynomial[0]; checkingValueCRC++)
        {
            if(Polynomial.find(this.checkBit))
                this.BitsToCheck.unshift(1);
            else
                this.BitsToCheck.unshift(0);
        }
        let hash = Remainder.split("");
        if(Remainder !== "")
        {
            printHeading("Remainder: " + Remainder);
        }
        else
        {
            printHeading("Senders Side", true);
            hash = this.division([0,0,0]);
        }


        printHeading("Receivers Side", true);
        let check = this.division(hash);

        if(parseInt(check.toString().replaceAll(",",""),2) !== 0)
        {
            printHeading("<span style='color: red;'>ERROR IN TRANSMISSION!</span>",true);
        }
    }

    division(toAdd)
    {
        let toDivide = new Array();
        for(let i=0; i<this.BitsToCheck.length; i++)
            toDivide[i] = this.BitsToCheck[i];
        toDivide = toDivide.concat(toAdd);

        let editID = addEditAbleLine();

        println(this.Bits.toString().replaceAll(",", "")
            + "|<span style='text-decoration: overline'>" +
            toDivide.toString().replaceAll(",", "") + "</span>");
        let spaces = this.Bits.length + 1;
        addToEditable(getSpaces(spaces) ,editID);
        while (toDivide.length >= this.Bits.length)
        {
            if(toDivide[0] < this.Bits[0])
            {
                addToEditable("0", editID);
                print_(getSpaces(spaces));
                for(let i=0; i<this.Bits.length-1; i++)
                    print_("0");
                println("0");
                println(getSpaces(spaces) + getUnderlines(toDivide.length))
            }
            else
            {
                addToEditable("1", editID);
                print_(getSpaces(spaces));
                for(let i=0; i<this.Bits.length-1; i++)
                    print_(this.Bits[i]);
                println(this.Bits[this.Bits.length-1]);
                println(getSpaces(spaces) + getUnderlines(toDivide.length))
                for(let i=0; i<this.Bits.length; i++)
                {
                    if(this.Bits[i] != toDivide[i])
                        toDivide[i] = 1;
                    else
                        toDivide[i] = 0;
                }
            }
            toDivide.shift();
            print_(getSpaces(spaces));
            for(let i=0; i<this.Bits.length && i<toDivide.length; i++)
                print_(toDivide[i]);
            println(" ");
            spaces++;
        }
        return toDivide;
    }

    checkBit(bit) {
        return bit == checkingValueCRC;
    }
}