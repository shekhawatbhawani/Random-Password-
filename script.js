    let upper = "JRWYEKLPMTZSAXVQDCONHIBGFUqxgafjzeublrkyctowspdmhnvi1234567890!@#$%^&*()#$@*^_+-={[}]?,.<>;:"
    let input = document.querySelector("input")
    let button = document.querySelector("button")
    let copy =  document.querySelector("i");
    let p = document.querySelector(".p");
    let ne = ""
    button.addEventListener("click",()=>{
        for (let index = 0; index < 12; index++) {
            ne  += upper.charAt(Math.round(Math.random()*upper.length));
            input.value = ne;       
        }

        ne = ""

    })
    copy.addEventListener("click", () => {
    const ans = document.querySelector("input").value;
        navigator.clipboard.writeText(ans);
        let div = document.createElement("div");
        div.textContent = `Password Copied ✅`;
        div.classList.add("last-div")
        document.body.append(div)

        setTimeout(() => {
            div.style.display = "none";
        }, 1000);
    })

    