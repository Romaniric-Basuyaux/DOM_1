const produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
    { id: 5, nom: "Thé Noir", prix: 7.99 }
];

const affichageProduit = document.getElementById("produit");

// Function d'affichage
const affichage = () => {
    // Function map
    const produitHTML = produits.map(produit =>
        `<div>
            <p>${produit.nom}</p>
            <p>Prix: ${produit.prix}€</p>
            <button onclick="supprimerProduit(${produit.id})">Supprimer</button>
        </div>`
    )


    affichageProduit.innerHTML = produitHTML;
};

affichage();