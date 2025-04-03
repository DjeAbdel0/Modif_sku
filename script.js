document.getElementById('generateBtn').addEventListener('click', function () {
    // Récupérer les SKU 
    const skuList = document.getElementById('skuList').value;

    // Séparer les SKU 
    const skuArray = skuList.split(',').map(sku => sku.trim());

    // Le code HTML de base pour les SKU
    const codeEn = `

    <!-- ZONE B Carrousel -->
    <div class="module-template">
    
      <div class="product-list-header">
        <div>
          <h2 class="mt-0" style="color: !important;">##########</h2>
        </div>
    
    
        <a class="carousel-link" href="########"
          target="_self"
          onclick="_push_event_to_google('internal promo', 'ecomm homepage', buildGtmEventLabel('featured_B_carrousel', ecomUserSegment, 'flyerdeals'  + ' - CTA link'));"
          style="color: !important;">Shop more products</a>
    
      </div>
    
      <div class="carousel-template pt__carousel" data-carrousel="true" data-items-desktop="4" data-items-mobile="1"
        data-items-tablet="2" data-module="content">
        <!-- LARGE TILE IN CAROUSEL NEEDS AN EMPTY TILE - unEqualTile Class needed -->
            <div data-inject-sku="${skuArray[0]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[1]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[2]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[3]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[4]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[5]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[6]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[7]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[8]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[9]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            
        <div class="see-all-product-tile slick-slide slick-active" tabindex="-1" role="option"
          aria-describedby="slick-slide04" style="width: 378px;" data-slick-index="4" aria-hidden="false">
                <a href="########"
            target="_self" tabindex="0">See all products</a>
        </div>
    
      </div>
    </div>`;
    const codeFr = `

    <!-- ZONE B Carrousel -->
    <div class="module-template">
    
        <div class="product-list-header">
            <div>
                <h2 class="mt-0" style="color: !important;">##########</h2>
            </div>
    
    
            <a class="carousel-link" href="########"
                target="_self"
                onclick="_push_event_to_google('internal promo', 'ecomm homepage', buildGtmEventLabel('featured_B_carrousel', ecomUserSegment, 'flyerdeals'  + ' - CTA link'));"
                style="color: !important;">Magasiner plus de produits</a>
    
        </div>
    
        <div class="carousel-template pt__carousel" data-carrousel="true" data-items-desktop="4" data-items-mobile="1"
            data-items-tablet="2" data-module="content">
            <!-- LARGE TILE IN CAROUSEL NEEDS AN EMPTY TILE - unEqualTile Class needed -->
            <div data-inject-sku="${skuArray[0]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[1]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[2]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[3]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[4]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[5]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[6]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[7]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[8]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArray[9]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            
            <div class="see-all-product-tile slick-slide slick-active" data-slick-index="4" aria-hidden="false"
                tabindex="-1" role="option" aria-describedby="slick-slide44" style="width: 378px;">
                <a href="########"
                    target="_self" tabindex="0">Voir tous les produits</a>
            </div>
          
        </div>
    </div>`;

    document.getElementById('outputCodeFr').textContent = codeFr;
    document.getElementById('outputCodeEn').textContent = codeEn;

});

// Copier - coller
function copyToClipboard(elementId, message) {
    const textElement = document.getElementById(elementId);
    const text = textElement.innerText || textElement.textContent;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            alert(message);
        }).catch(() => {
            fallbackCopyText(text, message);
        });
    } else {
        fallbackCopyText(text, message);
    }
}

// Pour Edge
function fallbackCopyText(text, message) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert(message + " (fallback utilisé)");
}

// Confirmer le copier - coller
document.getElementById('copyFrBtn').addEventListener('click', () => copyToClipboard('outputCodeFr', 'Code en français copié!'));
document.getElementById('copyEnBtn').addEventListener('click', () => copyToClipboard('outputCodeEn', 'Code en anglais copié!'));
