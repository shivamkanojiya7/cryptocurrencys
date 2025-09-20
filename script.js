async function fetchPrices() {
  try {
    
    let response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd"
    );
    let data = await response.json();

    document.getElementById("btcPrice").innerText = "$" + data.bitcoin.usd;
    document.getElementById("ethPrice").innerText = "$" + data.ethereum.usd;
    document.getElementById("dogePrice").innerText = "$" + data.dogecoin.usd;
  } catch (error) {
    console.error("Error fetching prices:", error);
  }
}

fetchPrices();
setInterval(fetchPrices, 10000);