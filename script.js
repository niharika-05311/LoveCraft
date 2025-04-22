function showInfo(product) {
    const contentDiv = document.getElementById('content');
    
    const products = {
        pens: {
            name: "Pens",
            description: "Quality pens for all your writing needs.The best writing experience you'll get",
            pricing: "Price range: $1 - $3 per pen"
        },
        notebooks: {
            name: "Notebooks",
            description: "High-quality papers for your printing and writing needs. Notebooks for students, professionals, and more.",
            pricing: "Price range: $5 - $20 per pack"
        },
        stickynotes: {
            name: "Sticky notes",
            description: "Sticky notes for your organization needs.",
            pricing: "Price range: $3 - $10 each"
        },
        highlighters: {
            name: "Highlighters",
            description: "Everything you need for your office. Optimum quality.",
            pricing: "Price range: Varies based on item"
        }
    };

    const productInfo = products[product];
    
    if (productInfo) {
        contentDiv.innerHTML = `
            <h3>${productInfo.name}</h3>
            <p>${productInfo.description}</p>
            <p><strong>Pricing:</strong> ${productInfo.pricing}</p>
        `;
    }
}
