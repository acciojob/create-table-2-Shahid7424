function createTable() {
    // Prompt the user for the number of rows
    let rn = prompt("Input number of rows", "");
    // Prompt the user for the number of columns
    let cn = prompt("Input number of columns", "");

    // Parse the inputs to ensure they are numbers
    rn = parseInt(rn);
    cn = parseInt(cn);

    // Validate input
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive integers for rows and columns.");
        return;
    }

    // Get the table element by id
    const table = document.getElementById("myTable");

    // Clear any existing table content
    table.innerHTML = "";

    // Create the table rows and cells
    for (let i = 0; i < rn; i++) {
        // Create a new row
        const row = table.insertRow();

        for (let j = 0; j < cn; j++) {
            // Create a new cell in the current row
            const cell = row.insertCell();

            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
