class Hamming {
    constructor(data, check) {
        printHeading("Hamming", true, "h2");

        let hamming = new Array();
        let headings = new Array();
        let redundancyBits = 2;
        if(check == "")
        {
            this.data = data.split("");
            if(this.data.length > 7 || this.data.length < 1) return printHeading("ERROR IN DATA BITS");

            printHeading("Senders Side", true);
            printHeading("Bits Block: "+this.data.toString().replaceAll(",",""));


            if(this.data.length > 1)
                redundancyBits++;
            if(this.data.length > 4)
                redundancyBits++;

            printHeading("Data Bits: "+this.data.length);
            printHeading("Redundancy Bits: "+redundancyBits);


            let dataCopy = data.toString().split("");

            for(let i=0, pow = 0; i<data.length + redundancyBits; i++)
            {
                if(Math.pow(2,pow)-1 == i)
                {
                    headings.unshift("R"+Math.pow(2,pow).toString());
                    hamming.unshift(2);
                    pow++;
                }
                else
                {
                    headings.unshift("D"+(i-pow));
                    hamming.unshift(parseInt(dataCopy.pop()));
                }
            }
            createTable(headings);
            addTableRow(hamming);
            hamming = hamming.reverse();

            for(let i=0; i<redundancyBits; i++)
            {
                let gap = Math.pow(2,i);
                let counter = 0;
                let colorArray = new Array();
                let state = true;
                for(let x=0, change = 0; x<hamming.length; x++)
                {
                    if(gap-1 > x)
                    {
                        colorArray.push("white");
                        continue;
                    }
                    if(gap == change)
                    {
                        change = 0;
                        state = !state;
                    }
                    change++;
                    if(state)
                    {
                        if(hamming[x] == 1)
                        {
                            colorArray.push("hotpink");
                            counter++;
                        }
                        else colorArray.push("pink");
                    }
                    else
                        colorArray.push("white");
                }
                hamming[gap-1] = (counter % 2 == 0)? 0 : 1;

                addTableRow(hamming.reverse(),colorArray.reverse());
                hamming.reverse();
            }
            hamming.reverse();
            printHeading("Transmitted Code: " + hamming.toString().replaceAll(","," "));
        }
        else
        {
            this.check = check.split("");
            if(this.check.length > 11) return printHeading("ERROR IN CHECK BITS");
            if(this.check.length > 3)
                redundancyBits++;
            if(this.check.length > 7)
                redundancyBits++;

            for(let i=0, pow = 0; i<this.check.length; i++)
            {
                if(Math.pow(2,pow)-1 == i)
                    headings.unshift("R"+Math.pow(2,pow++).toString());
                else
                    headings.unshift("D"+(i-pow));
            }

            hamming = this.check;
        }
        printHeading("Receivers Side", true);

        createTable(headings);
        addTableRow(hamming);
        hamming = hamming.reverse();

        let errors = new Array();
        for(let i=0; i<redundancyBits; i++)
        {
            let gap = Math.pow(2,i);
            let counter = 0;
            let colorArray = new Array();
            let state = true;
            for(let x=0, change = 0; x<hamming.length; x++)
            {
                if(gap-1 > x)
                {
                    colorArray.push("white");
                    continue;
                }
                if(gap == change)
                {
                    change = 0;
                    state = !state;
                }
                change++;
                if(state)
                {
                    if(hamming[x] == 1)
                        counter++;
                    colorArray.push("orange");
                }
                else
                    colorArray.push("white");
            }
            if(counter % 2 == 0)
                colorArray = colorArray.toString().replaceAll("orange", "green").split(",");
            errors.unshift((counter % 2 == 0)?0:1);
            addTableRow(hamming.reverse(),colorArray.reverse());
            hamming.reverse();
        }

        printHeading("Errors parity: " + errors.toString());

        let error = parseInt(errors.toString().replaceAll(",",""),2);

        if(error != 0)
            printHeading("<span style='color: red;'>ERROR IN TRANSMISSION! AT LOCATION "+error.toString()+"</span>",true);
    }
}