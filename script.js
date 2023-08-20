
function clicKoro(idName, innerTxt, price){
    document.getElementById(idName).addEventListener('click', function(){
        let items_Entry = document.getElementById('items_Entry');
        let p = document.createElement('p');
        let count = items_Entry.childElementCount;
        p.innerText = `${count+1}. ${innerTxt}`;
        let txt = parseFloat(document.getElementById(price).innerText);
        let total = parseFloat(document.getElementById('total').innerText);
        let totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
        let discount = parseFloat(document.getElementById('discount').innerText);
        let totalSum =  totalPrice+txt;
        document.getElementById('totalPrice').innerText =totalSum.toFixed(2);
        let subTotalSum =  total+txt;
        (document.getElementById('total').innerText) =subTotalSum.toFixed(2);
        items_Entry.appendChild(p);


        if(totalSum >= 200){
            let applyBtn = document.getElementById("applyBtn");
            applyBtn.style.opacity = 1;
            applyBtn.disabled = false;
            applyBtn.addEventListener('click', function(){
                let inputContent = document.getElementById('inputField');
                
                if((inputContent.value) === "SELL200"){
                    
                    let discount = parseFloat(document.getElementById('discount').innerText);
                    discount = (totalSum*0.20);
                    document.getElementById('discount').innerText = discount.toFixed(2);
                    subTotalSum =  totalSum - discount;
                    (document.getElementById('total').innerText) =subTotalSum.toFixed(2);
                    
                }
            });
            
        }


        document.getElementById("modalBttn").addEventListener('click', function(){
            items_Entry.removeChild(p);
            p.innerText = "";
            (document.getElementById('inputField') ).value= "";

            document.getElementById('totalPrice').innerText = "00.00";
            document.getElementById('discount').innerText = "00.00";
            document.getElementById('total').innerText = "00.00";


            let MakePurchaseBttn = document.getElementById("MakePurchaseBttn");
            MakePurchaseBttn.style.opacity = 0.3;
            MakePurchaseBttn.disabled = true;
            
            let applyBtn = document.getElementById("applyBtn");
            applyBtn.style.opacity = 0.3;
            applyBtn.disabled = true;

            
        });


        let MakePurchaseBttn = document.getElementById("MakePurchaseBttn");
        MakePurchaseBttn.style.opacity = 1;
        MakePurchaseBttn.disabled = false;
    });

};



clicKoro( idName = "pro1", innerTxt = "K. Accessories(1)", price = "price1");
clicKoro( idName = "pro2", innerTxt = "K. Accessories(2)", price = "price2");
clicKoro( idName = "pro3", innerTxt = "Home Cooker", price = "price3");
clicKoro( idName = "pro4", innerTxt = "Sports Back Cap", price = "price4");
clicKoro( idName = "pro5", innerTxt = "Full Jersey Set", price = "price5");
clicKoro( idName = "pro6", innerTxt = "Sports cates", price = "price6");


        let MakePurchaseBttn = document.getElementById("MakePurchaseBttn");
        MakePurchaseBttn.style.opacity = 0.3;
        MakePurchaseBttn.disabled = true;
        
        let applyBtn = document.getElementById("applyBtn");
        applyBtn.style.opacity = 0.3;
        applyBtn.disabled = true;


