
const shortenUrl = async () => {
  let Url = document.getElementById("real-id").value;
  const response = await fetch(`https://tinyurl.com/api-create.php?url=${ encodeURIComponent(Url) }`);
  if (response.ok) {
    const data = await response.text();
    document.querySelector('.shorten-result').innerHTML += `
    <div class="shorturl d-flex flex-column flex-md-row justify-content-between align-items-center bg-white p-1 rounded-1 mb-5"> <span class="main-url ">${ Url }</span> 
    <div><span class="shortUrl--span">${ data }</span> <button class="btn btn-primary m-3 " onclick="copyBtn()">Copy</button> </div>
     </div>
    `;
  }
  else {
    console.log("errrrrrrrrrr");
  }
  document.getElementById("real-id").value ="";
};

const copyBtn = () => {
  var copyText = document.querySelector(".shortUrl--span").textContent;
  navigator.clipboard.writeText(copyText);
};
