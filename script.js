document.getElementById('generateBtn').addEventListener('click', function () {
    // Récupérer les SKU entrés sous forme de texte séparé par des virgules
    const skuList = document.getElementById('skuList').value;

    // Séparer les SKU et les trier
    const skuArray = skuList.split(',').map(sku => sku.trim());

    // Vérifier que nous avons au moins 3 SKU
    if (skuArray.length < 3) {
        alert("Veuillez entrer au moins 3 SKU.");
        return;
    }

    // Le code HTML de base avec des variables pour insérer les SKU
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

     // Afficher le code généré dans l'élément avec l'id "outputCode"
     document.getElementById('outputCodeFr').textContent = codeFr;
     document.getElementById('outputCodeEn').textContent = codeEn;
 
     // Fonction de copie pour le code en français
     document.getElementById('copyFrBtn').addEventListener('click', function() {
         const codeFrText = document.getElementById('outputCodeFr').textContent;
         navigator.clipboard.writeText(codeFrText).then(function() {
             alert('Code en français copié!');
         }).catch(function(err) {
             alert('Échec de la copie: ' + err);
         });
     });
 
     // Fonction de copie pour le code en anglais
     document.getElementById('copyEnBtn').addEventListener('click', function() {
         const codeEnText = document.getElementById('outputCodeEn').textContent;
         navigator.clipboard.writeText(codeEnText).then(function() {
             alert('Code en anglais copié!');
         }).catch(function(err) {
             alert('Échec de la copie: ' + err);
         });
     });
 });
