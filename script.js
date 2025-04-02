document.getElementById('generateBtn').addEventListener('click', function() {
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
    const baseCode = `

    <style>
    .tile--container--image {
        width: 100%;
    }
</style>

<div class="module-template">
    <div class="product-list-header">
        <div> <h2 class="mt-0">flyer deals</h2> </div>
        <a class="carousel-link"
            href="/en/search?sortOrder=relevance&filter=%3Arelevance%3Adeal%3AFLYER_DEAL"
            target="_self"
            onclick="_push_event_to_google('internal promo', 'ecomm homepage', buildGtmEventLabel('featured_A_flyerDeals', ecomUserSegment, 'flyerdeals' + ' - CTA link'));"
            style="color: !important;">Shop more products</a>
		</div>
<!-- start mirroir-->
    <div class="carousel-template pt__carousel" data-carrousel="true" data-items-desktop="4" data-items-mobile="1" data-items-tablet="2" data-module="content">
        <!-- LARGE TILE IN CAROUSEL NEEDS AN EMPTY TILE - unEqualTile Class needed -->
        <div class="">
            <div class="tile--container--image tile--large">
                <a 
                    href="/en/flyer?flyer_id=#####"
                    onclick="_push_event_to_google('internal promo', 'homepage', 'aaa1 | #########');"
                >
                    <picture>
                        <source media="(min-width:980px)" srcset="/userfiles/image/accueil/2025/2025MMDD/AAA1-en.gif">
                        <img alt="##############" class="tile-bg-image"
                            src="/userfiles/image/accueil/2025/2025MMDD/AAA1-M-en.gif">
                    </picture>                
                </a>

                <div class="tile--button">
                    <a 
                        class="medium cta-primary dark-mode" 
                        href="/en/flyer?flyer_id=#####"
                        onclick="_push_event_to_google('internal promo', 'homepage', 'aaa1 | #########');"
                    >Shop flyer</a>
                </div>
            </div>
        </div>

    <!-- tuile facultative-->
	<!--
		<div class="">
            <div class="tile--container--image tile--large">
                <a 
                    href="/circulaire?flyer_id=XXXXX"
                    onclick="_push_event_to_google('internal promo', 'homepage', 'aaa4 | ######');"
                >
                    <picture>
                        <source media="(min-width:980px)" srcset="/userfiles/image/accueil/2025/2025MMDD/AAA1-en.png">
                        <img alt="#####" class="tile-bg-image"
                            src="/userfiles/image/accueil/2025/2025MMDD/AAA4-M-en.png">
                    </picture>                
                </a>

                <div class="tile--button">
                    <a 
                        class="medium cta-primary" 
                        href="###"
                        onclick="_push_event_to_google('internal promo', 'homepage', 'aaa4 | ######');"
                    >
                    CTA
                    </a>
                </div>
            </div>
        </div>
	-->


        <div class="tile-slick--third" data-inject-sku="${skuArray[0]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArray[1]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArray[2]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
         <div class="tile-slick--third" data-inject-sku="${skuArray[3]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArray[4]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArray[5]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
         <div class="tile-slick--third" data-inject-sku="${skuArray[6]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArray[7]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArray[8]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
         <div class="tile-slick--third" data-inject-sku="${skuArray[9]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>

        <div class="see-all-product-tile slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide44" style="width: 378px;">
            <a href="/en/search?sortOrder=relevance&filter=%3Arelevance%3Adeal%3AFLYER_DEAL"
                target="_self" tabindex="0">See all products</a>
        </div>
    </div>
    <!-- end mirroir-->
</div>`;

    // Afficher le code généré dans l'élément avec l'id "outputCode"
    document.getElementById('outputCode').textContent = baseCode;
});
