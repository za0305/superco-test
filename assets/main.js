// sticky header
document.addEventListener('DOMContentLoaded', (e) => {
    const header = document.getElementById('main_header');
    const minScroll = document.querySelector('.header-inner').getBoundingClientRect().top + window.pageYOffset;
    const firstBanner = document.getElementById('shopify-section-index-banners');
    let firstBannerBottomPosition;
    if ( firstBanner ) {
        firstBannerBottomPosition = firstBanner.getBoundingClientRect().top + window.pageYOffset + firstBanner.offsetHeight;
    }

    header.style.height = header.offsetHeight + 'px';

    function checkScroll (){
        let pageScroled = window.pageYOffset;

        if ( pageScroled > minScroll ) {
            if ( !header.classList.contains('stiky') ) {
                header.classList.add('stiky');
                if ( firstBanner ) {
                    firstBanner.classList.add('scroll-start');
                }
            }
        } else {
            header.classList.remove('stiky');
            if ( firstBanner ) {
                firstBanner.classList.remove('scroll-start');
            }
        }

        if ( firstBanner ) {
            if ( pageScroled > firstBannerBottomPosition ) {
                if ( !header.classList.contains('long-scroll') ){
                    header.classList.add('long-scroll');
                }
            } else {
                header.classList.remove('long-scroll');
            }
        }
    }

    document.addEventListener("scroll", (e) => {
        checkScroll();
    });

    checkScroll();

});
