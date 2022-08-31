const searchRow = (table, value) => {
	let cont = 0;
	return table.filter((element) => {
		let range = element["%"].split("-");
		range = range.map((number) => {
			return number.replace(/[^0-9.]/g, "");
		});
		if (cont === 0) {
			range[1] = range[0];
			range[0] = 0;
		}
		if (value >= Number(range[0]) && value <= Number(range[1])) {
            cont++;
			return element;
		}
		cont++;
	});
};

let datab = [
    {
        "0-32.9%": 5.5,
        "%": "<=33%",
        "100-100.9%": 8.2,
        "66-99.9%": 7.5,
        "33-65.9%": 6.3,
        "Decrecío": 0,
        ">=110%": 8.6,
        "id": 0
    },
    {
        "0-32.9%": 4.6,
        "%": "34%-36.9%",
        "100-100.9%": 7.7,
        "66-99.9%": 7.5,
        "33-65.9%": 5.3,
        "Decrecío": 0,
        ">=110%": 8,
        "id": 1
    },
    {
        "0-32.9%": 3.7,
        "%": "37%-39.9%",
        "100-100.9%": 6.4,
        "66-99.9%": 5.3,
        "33-65.9%": 4.3,
        "Decrecío": 0,
        ">=110%": 7.1,
        "id": 2
    },
    {
        "0-32.9%": 2.8,
        "%": "40%-42,9%",
        "100-100.9%": 5,
        "66-99.9%": 4.1,
        "33-65.9%": 3.2,
        "Decrecío": 0,
        ">=110%": 5.6,
        "id": 3
    },
    {
        "0-32.9%": 1.9,
        "%": "43%-45,9%",
        "100-100.9%": 3.7,
        "66-99.9%": 2.9,
        "33-65.9%": 2.2,
        "Decrecío": 0,
        ">=110%": 4.1,
        "id": 4
    },
    {
        "0-32.9%": 1,
        "%": "46%-48,0%",
        "100-100.9%": 2.3,
        "66-99.9%": 1.7,
        "33-65.9%": 1.3,
        "Decrecío": 0,
        ">=110%": 2.6,
        "id": 5
    }
]

let valueIncrease = 100.67388904688256;

const accident = 10.0;
const row = searchRow(datab, accident);

console.log("row: ", row)