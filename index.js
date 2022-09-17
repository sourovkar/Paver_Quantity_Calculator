let paverWidthInch = 4;
let paverLengthInch = 8;
let paverSqft = (paverWidthInch/12) * (paverLengthInch/12);
let paverPriceDollar = 0.5;

function calculateBtn() {
    let lotWidthFeet = document.getElementById("lot-width").value;
    let lotLengthFeet = document.getElementById("lot-length").value;
    let lotSqft = lotWidthFeet * lotLengthFeet;

    let paverQty = Math.ceil(lotSqft/paverSqft);
    let totalCost = paverPriceDollar * paverQty;


    let result = `Hello! ${paverQty} pavers are necessary to cover ${lotSqft} sqft area.
    Total cost will be ${totalCost} dollars.`;

    document.getElementById("output").textContent = result;

}