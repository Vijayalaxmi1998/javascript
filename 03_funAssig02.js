console.log(
  "======================STEP 1====================================================="
);
function bankDetails(bankName, accountNumber, location, pinCode) {
  console.log("My Bank Details is:");
  return console.log(
    "\n Bank Name:",
    bankName,
    "\n Account Number:",
    accountNumber,
    "\n location:",
    location,
    "\n Pin Code:",
    pinCode
  );
}

bankDetails("CITI Bank", 3456782345, "Pune", 431202);
console.log(
  "------------------------------------------------------------------------------------\n"
);
bankDetails("Axis Bank", 7856782345, "Mumbai", 441202);
console.log(
  "------------------------------------------------------------------------------------\n"
);
bankDetails("HDFC bank", 8956782345, "Pune", "Open");
