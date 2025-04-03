document.getElementById('geneCarrouselA').addEventListener('click', function () {
    // Récupérer les SKU 
    const carrouA = document.getElementById('carrouA').value;

    // Séparer les SKU 
    const skuArrayA= carrouA.split(',').map(sku => sku.trim());

    const codeCarrouselAEn = `

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

        <div class="tile-slick--third" data-inject-sku="${skuArrayA[0]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[1]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[2]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[3]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[4]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[5]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[6]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[7]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[8]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[9]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>

        <div class="see-all-product-tile slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide44" style="width: 378px;">
 <a href="/en/search?sortOrder=relevance&filter=%3Arelevance%3Adeal%3AFLYER_DEAL"
                target="_self" tabindex="0">See all products</a>
				</div>
    </div>
	<!-- end mirroir-->

</div>
`;
    const codeCarrouselAFr = `

    <style>
    .tile--container--image {
        width: 100%;
    }
</style>

<div class="module-template">
    <div class="product-list-header">
        <div> <h2 class="mt-0">offres de la circulaire</h2> </div>
        <a class="carousel-link"
            href="/recherche?sortOrder=relevance&filter=%3Arelevance%3Adeal%3AFLYER_DEAL"
            target="_self"
            onclick="_push_event_to_google('internal promo', 'ecomm homepage', buildGtmEventLabel('featured_A_flyerDeals', ecomUserSegment, 'flyerdeals' + ' - CTA link'));"
            style="color: !important;">Magasiner plus de produits</a>
		</div>
<!-- start mirroir-->
    <div class="carousel-template pt__carousel" data-carrousel="true" data-items-desktop="4" data-items-mobile="1" data-items-tablet="2" data-module="content">
        <!-- LARGE TILE IN CAROUSEL NEEDS AN EMPTY TILE - unEqualTile Class needed -->
        <div class="">
            <div class="tile--container--image tile--large">
                <a 
                    href="/circulaire?flyer_id=#####"
                    onclick="_push_event_to_google('internal promo', 'homepage', 'aaa1 | #########');"
                >
                    <picture>
                        <source media="(min-width:980px)" srcset="/userfiles/image/accueil/2025/2025MMDD/AAA1-fr.gif">
                        <img alt="################" class="tile-bg-image"
                            src="/userfiles/image/accueil/2025/2025MMDD/AAA1-M-fr.gif">
                    </picture>                
                </a>

                <div class="tile--button">
                    <a 
                        class="medium cta-primary dark-mode" 
                        href="/circulaire?flyer_id=#####"
                        onclick="_push_event_to_google('internal promo', 'homepage', 'aaa1 | #########');"
                    >Magasiner la circulaire
</a>
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
                        <source media="(min-width:980px)" srcset="/userfiles/image/accueil/2025/2025MMDD/AAA1-fr.png">
                        <img alt="#####" class="tile-bg-image"
                            src="/userfiles/image/accueil/2025/2025MMDD/AAA4-M-fr.png">
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

        <div class="tile-slick--third" data-inject-sku="${skuArrayA[0]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[1]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[2]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[3]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[4]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[5]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[6]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[7]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[8]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>
        <div class="tile-slick--third" data-inject-sku="${skuArrayA[9]}" data-list-name="featured_A_flyerDeals">&nbsp;</div>

        <div class="see-all-product-tile slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide44" style="width: 378px;">
 <a href="/recherche?sortOrder=relevance&filter=%3Arelevance%3Adeal%3AFLYER_DEAL"
                target="_self" tabindex="0">Voir tous les produits</a>
				</div>
    </div>
	<!-- end mirroir-->

</div>
`;


    document.getElementById('carrouselAFr').textContent = codeCarrouselAFr;
    document.getElementById('carrouselAEn').textContent = codeCarrouselAEn;

});
document.getElementById('geneCarrouselB').addEventListener('click', function () {
    // Récupérer les SKU 
    const carrouB = document.getElementById('carrouB').value;

    // Séparer les SKU 
    const skuArrayB = carrouB.split(',').map(sku => sku.trim());

    const codeCarrouselBEn = `

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
            <div data-inject-sku="${skuArrayB[0]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[1]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[2]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[3]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[4]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[5]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[6]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[7]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[8]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[9]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            
        <div class="see-all-product-tile slick-slide slick-active" tabindex="-1" role="option"
          aria-describedby="slick-slide04" style="width: 378px;" data-slick-index="4" aria-hidden="false">
                <a href="########"
            target="_self" tabindex="0">See all products</a>
        </div>
    
      </div>
    </div>`;
    const codeCarrouselBFr = `

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
            <div data-inject-sku="${skuArrayB[0]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[1]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[2]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[3]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[4]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[5]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[6]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[7]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[8]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            <div data-inject-sku="${skuArrayB[9]}" data-list-name="featured_B_carrousel">&nbsp;</div>
            
            <div class="see-all-product-tile slick-slide slick-active" data-slick-index="4" aria-hidden="false"
                tabindex="-1" role="option" aria-describedby="slick-slide44" style="width: 378px;">
                <a href="########"
                    target="_self" tabindex="0">Voir tous les produits</a>
            </div>
          
        </div>
    </div>`;


    document.getElementById('carrouselBFr').textContent = codeCarrouselBFr;
    document.getElementById('carrouselBEn').textContent = codeCarrouselBEn;

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

// Confirmer le copier - coller carrousel A
document.getElementById('copyCarrouAFrBtn').addEventListener('click', () => copyToClipboard('carrouselAFr', 'Code en français copié!'));
document.getElementById('copyCarrouAEnBtn').addEventListener('click', () => copyToClipboard('carrouselAEn', 'Code en anglais copié!'));
// Confirmer le copier - coller carrousel B
document.getElementById('copyCarrouBFrBtn').addEventListener('click', () => copyToClipboard('carrouselBFr', 'Code en français copié!'));
document.getElementById('copyCarrouBEnBtn').addEventListener('click', () => copyToClipboard('carrouselBEn', 'Code en anglais copié!'));