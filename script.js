
function clicKoro(idName, innerTxt, price){
    document.getElementById(idName).addEventListener('click', function(){
        const items_Entry = document.getElementById('items_Entry');
        const p = document.createElement('p');
        let count = items_Entry.childElementCount;
        p.innerText = `${count+1}. ${innerTxt}`;
        const txt = parseFloat(document.getElementById(price).innerText);
        const total = parseFloat(document.getElementById('total').innerText);
        const totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
        const discount = parseFloat(document.getElementById('discount').innerText);
        const totalSum =  totalPrice+txt;
        document.getElementById('totalPrice').innerText =totalSum.toFixed(2);
        const subTotalSum =  total+txt;
        (document.getElementById('total').innerText) =subTotalSum.toFixed(2);
        items_Entry.appendChild(p);

        if(totalSum>=200){
            const applyBtn = document.getElementById("applyBtn");
            applyBtn.style.opacity = 1;
            applyBtn.disabled = false;

            document.getElementById("applyBtn").addEventListener('click', function(){
                const inputContent = document.getElementById('inputField');

                if(inputContent.value=="SELL200"){
                    const discountSum = (totalSum*0.2)
                    document.getElementById('discount').innerText = discountSum.toFixed(2);
                    document.getElementById('total').innerText =(totalSum - discountSum).toFixed(2);
                    inputContent.value = "";
                    
                }
            })

            
        }

        document.getElementById("modalBttn").addEventListener('click', function(){
            items_Entry.removeChild(p);
            p.innerText = "";
            const afterClickTotal = 0.00;
            const afterClickTotalPrice = 0.00;
            const afterClickDiscount = 0.00;
            document.getElementById('totalPrice').innerText = afterClickTotalPrice.toFixed(2);
            document.getElementById('discount').innerText = afterClickDiscount.toFixed(2);
            document.getElementById('total').innerText = afterClickTotal.toFixed(2);

            const MakePurchaseBttn = document.getElementById("MakePurchaseBttn");
            MakePurchaseBttn.style.opacity = 0.3;
            MakePurchaseBttn.disabled = true;
            
            const applyBtn = document.getElementById("applyBtn");
            applyBtn.style.opacity = 0.3;
            applyBtn.disabled = true;
            })

        const MakePurchaseBttn = document.getElementById("MakePurchaseBttn");
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





        const MakePurchaseBttn = document.getElementById("MakePurchaseBttn");
        MakePurchaseBttn.style.opacity = 0.3;
        MakePurchaseBttn.disabled = true;
        
        const applyBtn = document.getElementById("applyBtn");
        applyBtn.style.opacity = 0.3;
        applyBtn.disabled = true;


