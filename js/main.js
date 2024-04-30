

  // const shortenUrl= ()=> {
  //   let shortenedUrl =  generateShortUrl(originalUrl);
    
  //   // document.querySelector(".shorten-result").innerText = shortenedUrl;
  // }
  
  const shortenUrl= async ()=>{
    let originalUrl = document.getElementById("real-id").value;
    console.log(originalUrl)
      await fetch(`https://api.shrtco.de/v2/shorten?url=${originalUrl}`)
      .then((data) => { return data.json() })
      .then((res)=>(console.log(res)))
      .catch((e) => { console.log(e) })
      // const shortenedUrl = await result.json();
      // console.log(shortenedUrl)
    // return shortenedUrl;
  }
