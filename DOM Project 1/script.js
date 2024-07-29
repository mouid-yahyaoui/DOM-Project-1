// Sélectionne tous les boutons avec une certaine classe, assurez-vous que c'est ce que vous voulez
const plusButtons = document.querySelectorAll('.PLUS');
const minusButtons = document.querySelectorAll('.MINUS');
const trashButtons = document.querySelectorAll('.trash');
const heartButtons = document.querySelectorAll('.HEART')


for(const btn of plusButtons) {
    btn.addEventListener("click", function () {
        // Augmente la quantité
        btn.nextElementSibling.textContent++;

        // Sélectionne toutes les quantités et prix unitaires
        const quantities = document.querySelectorAll(".quantity");
        const unitPrices = document.querySelectorAll(".unit-price");
        const totalElement = document.querySelector(".total");
        
        
let sum = 0;
        
        // Calcule la somme totale
        for (let i = 0; i < quantities.length; i++) {
            sum += Number(quantities[i].textContent) * Number(unitPrices[i].textContent);  
        

        }
        
        // Met à jour l'élément total avec la somme calculée
        totalElement.textContent = sum;
    });
}

for (const btn of minusButtons) {
    btn.addEventListener("click", function () {
        if (Number(btn.previousElementSibling.textContent) > 0) {
            // Diminue la quantité
            btn.previousElementSibling.textContent--;

            // Sélectionne toutes les quantités et prix unitaires
            const quantities = document.querySelectorAll(".quantity");
            const unitPrices = document.querySelectorAll(".unit-price");
            const totalElement = document.querySelector(".total");
            
let sum = 0;
           
            
            // Calcule la somme totale
            for (let i = 0; i < quantities.length; i++) {
                sum += Number(quantities[i].textContent) * Number(unitPrices[i].textContent);
           
            }
            
            // Met à jour l'élément total avec la somme calculée
            totalElement.textContent = sum;
        }
    });
}


for(const trash of trashButtons){
    trash.addEventListener("click" , function(){
        trash.parentElement.parentElement.parentElement.remove();
        const quantities = document.querySelectorAll(".quantity");
        const unitPrices = document.querySelectorAll(".unit-price");
        const totalElement = document.querySelector(".total");
        let sum = 0;
           
            
            // Calcule la somme totale
            for (let i = 0; i < quantities.length; i++) {
                sum += Number(quantities[i].textContent) * Number(unitPrices[i].textContent);
           
            }
            
            // Met à jour l'élément total avec la somme calculée
            totalElement.textContent = sum;
    }


)
}
for(const heart of heartButtons){
    heart.addEventListener("click" , function(){
        heart.classList.toggle("toggle-heart");
    }



)
}


