class Checksum {
    constructor(first, second, output) {
        printHeading("Checksum", true, "h2");

        this.first = first.split("");
        this.second = second.split("");

        this.length = parseInt ((this.first.length > this.second.length)? this.first.length : this.second.length);

        let answer = output.split("");
        if(output === "")
        {
            printHeading("Senders Side", true);
            println(getSpaces(2)+this.first.toString().replaceAll(","," "));
            println("+ "+this.second.toString().replaceAll(","," "));
            println(getSpaces(2)+getUnderlines((this.length* 2)+3 ));
            answer = this.compliment(this.add(this.first, this.second));
        }

        printHeading("Receivers Side", true);
        println(getSpaces(2)+this.first.toString().replaceAll(","," "));
        println("+ "+this.second.toString().replaceAll(","," "));
        println(getSpaces(2)+getUnderlines((this.length* 2)+3 ));
        let check = this.compliment(this.add(this.add(this.first, this.second), answer));

        if(parseInt(check.toString().replaceAll(",",""),2) !== 0)
        {
            printHeading("<span style='color: red;'>ERROR IN TRANSMISSION!</span>",true);
        }

    }

    add(f, s)
    {
        let first = parseInt(f.toString().replaceAll(",",""),2);
        let second = parseInt(s.toString().replaceAll(",",""),2);;

        let answer = dec2bin(first+second).toString(2).split("");
        while (answer.length > this.length)
            answer.shift();
        println(getSpaces(2)+answer.toString().replaceAll(",", " "));
        return answer;
    }

    compliment(of)
    {

        of = parseInt(of.toString().replaceAll(",",""),2);
        of = ~of;
        of = dec2bin(of).split("");
        while (of.length > this.length)
            of.shift();
        while (of.length < this.length)
            of.unshift(0);
        printHeading("Compliment: "+ of.toString().replaceAll(","," "), false, "h5")
        return of;
    }
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}