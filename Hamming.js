class Hamming {
    constructor(data, check) {
        printHeading("Hamming", true, "h2");

        this.data = data.split("");
        this.check = check.split("");

        if(this.data.length > 7 || this.data.length < 1) return printHeading("ERROR IN DATA BITS");
        if(this.check.length > 11) return printHeading("ERROR IN CHECK BITS");

        printHeading("Bits Block: "+this.data.toString().replaceAll(",",""));

        let redundancyBits = 2;
        if(this.data.length > 1)
            redundancyBits++;
        if(this.data.length > 4)
            redundancyBits++;

        printHeading("Data Bits: "+this.data.length);
        printHeading("Redundancy Bits: "+redundancyBits);

        let hamming = new Array();
        let dataCopy = data.toString().split(",");
        let headings = new Array();
        for(let i=0, pow = 0; i<data.length + redundancyBits; i++)
        {
            if(Math.pow(2,pow)-1 == i)
            {
                headings.unshift("R"+Math.pow(2,pow).toString());
                hamming.unshift(0);
                pow++;
            }
            else
            {
                let x = dataCopy.pop();
                headings.unshift("D"+dataCopy.x.toString());
                hamming.unshift(x);
            }
        }
        createTable(headings);
        addTableRow(hamming);

    }
}