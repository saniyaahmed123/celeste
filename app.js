/**
 * Product Constructor
 */
function myProduct(title, brand, gender, img, hoverImg, price, desc, discount ) {
  this.title = title;
  this.brand = brand;
  this.gender = gender;
  this.img = img;
  this.hoverImg = hoverImg;
  this.price = price;
  this.desc = desc;

  // Only add discount if it exists
  if (discount) {
    this.discount = discount;
  }
}

/**
 * Store Database
 */
var celesteStore = {
  "Summer Of Us": {
    dress: {
      adidas_w_active_core: new myProduct(
        "Core Performance Training Tee",
        "Adidas",
        "women",
        "assets/summer/3.webp",
        "assets/summer/3h.webp",
        4600,
        "Engineered for movement, this tee features specialized mesh for optimal airflow during workouts.",
        null

      ),
      adidas_w_activ_core: new myProduct(
        "Core Performance Training Tee",
        "Adidas",
        "women",
        "assets/summer/4.webp",
        "assets/summer/4h.webp",
        4600,
        "Engineered for movement, this tee features specialized mesh for optimal airflow during workouts."
        ,null
      )
    },
    SHIRTS: {
      didas_w_active_core: new myProduct(
        "Core Performance Training Tee",
        "Adidas",
        "women",
        "assets/summer/1.webp",
        "assets/summer/1h.webp",
        4600,
        "Engineered for movement, this tee features specialized mesh for optimal airflow during workouts."
        ,null
      ),
      adidas_w_active_core: new myProduct(
        "Core Performance Training Tee",
        "Adidas",
        "women",
        "assets/summer/2.webp",
        "assets/summer/2h.webp",
        4600,
        "Engineered for movement, this tee features specialized mesh for optimal airflow during workouts."
        ,null
      )
    },
    TSHIRTS: {
      didas_w_active_core: new myProduct(
        "Core Performance Training Tee",
        "Adidas",
        "women",
        "assets/summer/5.webp",
        "assets/summer/5h.webp",
        4600,
        "Engineered for movement, this tee features specialized mesh for optimal airflow during workouts."
        ,null
      )
    }
  },

  women: {
    "TSHIRTS": {
      adidas: {
        adidas_w_urban_cat: new myProduct(
          "Midnight City Graphic Tee",
          "Adidas",
          "women",
          "assets/tshirts/wt4.webp",
          "assets/tshirts/wt4h.webp",
          4900,
          "A street-ready graphic tee featuring neon accents and a relaxed lifestyle fit."
          ,null
        ),
        adidas_w_active_core: new myProduct(
          "Core Performance Training Tee",
          "Adidas",
          "women",
          "assets/tshirts/wt5.webp",
          "assets/tshirts/wt5h.webp",
          4600,
          "Engineered for movement, this tee features specialized mesh for optimal airflow during workouts."
          ,null
        ),
        adidas_w_minimal_vibe: new myProduct(
          "Essential Studio Mock Neck",
          "Adidas",
          "women",
          "assets/tshirts/wt6.webp",
          "assets/tshirts/wt6h.webp",
          5100,
          "A sophisticated mock-neck training top that transitions easily from the yoga studio to the street.",
          "SALE"
        )
      },
      nike: {
        nike_w_casa_batllo: new myProduct(
          "Casa Batllo Art Tee",
          "Nike",
          "women",
          "assets/tshirts/t-shirt3-hover.jpg",
          "assets/tshirts/t-shirt3.jpg",
          5500,
          "Artistic oversized tee featuring an intricate sketch of Gaudi's famous architectural masterpiece.",
          "SALE"
        ),
        nike_w_legend_tee: new myProduct(
          "Horizontal Striped Baggy Tee",
          "Nike",
          "women",
          "assets/tshirts/hover.jpg",
          "assets/tshirts/p4.jpg",
          4200,
          "Classic Parisian-style striped tee with a relaxed, dropped-shoulder silhouette for daily comfort."
          ,null
        ),
        nike_w_strike_pro: new myProduct(
          "Strike Pro Crimson Training Top",
          "Nike",
          "women",
          "assets/tshirts/redhover.jpg",
          "assets/tshirts/red.jpg",
          4800,
          "High-performance compression top in a bold crimson hue, designed for maximum breathability.",
          "10% OFF"
        ),
        nike_w_black_long: new myProduct(
          "Essential Black Long Sleeve",
          "Nike",
          "women",
          "assets/tshirts/longblackhover.jpg",
          "assets/tshirts/longblack.jpg",
          4800,
          "A sleek, form-fitting long sleeve tee that works perfectly as a base layer or a standalone gym piece."
          ,null
        )
      }
    },
    "COATS & CARDIGANS": {
      adidas: {
        adidas_w_trench_coat: new myProduct(
          "Heritage Navy Trench Coat",
          "Adidas",
          "women",
          "assets/coat/c1h.jpg",
          "assets/coat/c1.jpg",
          8900,
          "Double-breasted navy trench with a belted waist, blending classic tailoring with modern weather protection."
          ,null
        ),
        adidas_w_adicolor_hoodie: new myProduct(
          "Adicolor Fleece Pullover Hoodie",
          "Adidas",
          "women",
          "assets/coat/c2h.jpg",
          "assets/coat/c2.jpg",
          7500,
          "Ultra-soft fleece hoodie featuring the iconic trefoil logo in a vibrant, trendy colorway."
          ,null
        ),
        adidas_w_fleece_zip: new myProduct(
          "Vivid Trefoil Quarter-Zip",
          "Adidas",
          "women",
          "assets/coat/wc1.webp",
          "assets/coat/wc1h.webp",
          7200,
          "A sporty quarter-zip pullover crafted from heavy-weight fleece for extra warmth and comfort.",
          "SALE"
        )
      }
    },
    "SHIRTS": {
      adidas: {
        adidas_w_lavender_puffed: new myProduct(
          "Lavender Puffed-Sleeve Blouse",
          "Adidas",
          "women",
          "assets/shirts/lavendershirthover.jpg",
          "assets/shirts/lavendershirt.jpg",
          5300,
          "Soft pastel lavender blouse with elegant puff sleeves and a lightweight linen feel."
          ,null
        ),
        adidas_w_cream_striped: new myProduct(
          "Cream Vertical Striped Shirt",
          "Adidas",
          "women",
          "assets/shirts/stripsshirthover.jpg",
          "assets/shirts/stripsshirt.jpg",
          4500,
          "Classic button-down with slimming vertical stripes in a neutral cream and tan palette.",
          "15% OFF"
        ),
        adidas_w_formal_stretch: new myProduct(
          "Signature Black Stretch Button-Down",
          "Adidas",
          "women",
          "assets/shirts/blackshirthover.png",
          "assets/shirts/blackshirt.png",
          6200,
          "A premium, moisture-wicking formal shirt that moves with you, suitable for office or evening wear."
          ,null
        )
      },
      zara: {
        zara_w_black_sweat: new myProduct(
          "Oversized Charcoal Sweatshirt",
          "Zara",
          "women",
          "assets/shirts/blacksweathover.webp",
          "assets/shirts/blacksweat.webp",
          5200,
          "Cozy heavy-knit sweatshirt in charcoal black, featuring a relaxed drop-shoulder fit."
          ,null
        ),
        zara_w_brown_shirt: new myProduct(
          "Earthy Brown Linen Shirt",
          "Zara",
          "women",
          "assets/shirts/brownshirthover.jpg",
          "assets/shirts/brownshirt.jpg",
          4600,
          "Relaxed linen-blend shirt in a warm brown tone, ideal for breezy summer layering."
          ,null
        ),
        zara_w_formal_stretch: new myProduct(
          "Tailored Onyx Formal Shirt",
          "Zara",
          "women",
          "assets/shirts/blackshirthover.png",
          "assets/shirts/blackshirt.png",
          6300,
          "Sharp, onyx-black formal shirt with a tapered waist for a highly professional appearance."
          ,null
        )
      }
    },
    "PANTS": {
      adidas: {
        adidas_wtiro_pants: new myProduct(
          "Tiro Tapered Training Tracksuit",
          "Adidas",
          "women",
          "assets/pants/wp2.webp",
          "assets/pants/wp2h.webp",
          6100,
          "Athletic-fit tapered pants with ankle zips, designed for soccer drills and casual street style."
          ,null
        ),
        adidas_w_all_day_pant: new myProduct(
          "Sereno Slim Performance Joggers",
          "Adidas",
          "women",
          "assets/pants/wp3.webp",
          "assets/pants/wp3h.webp",
          5800,
          "Comfortable slim-fit joggers featuring quick-dry fabric and zippered side pockets."
          ,null
        ),
        adidas_w_three_stripe_pant: new myProduct(
          "Three-Stripe Classic Open Hem",
          "Adidas",
          "women",
          "assets/pants/wp1.webp",
          "assets/pants/wp1h.webp",
          6400,
          "Iconic open-hem athletic pants offering a non-restrictive fit for all-day active wear.",
          "20% OFF"
        )
      },
      nike: {
        nike_w_blue_wide_jeans: new myProduct(
          "High-Waist Light Wash Wide Jeans",
          "Nike",
          "women",
          "assets/pants/pant1hover.webp",
          "assets/pants/pant1.webp",
          6500,
          "Retro-inspired wide-leg denim with a light wash, offering a breezy and fashion-forward fit."
          ,null
        ),
        nike_w_black_flat_jeans: new myProduct(
          "Midnight Black Straight Leg Jeans",
          "Nike",
          "women",
          "assets/pants/pant2hover.webp",
          "assets/pants/pant2.webp",
          6500,
          "Crisp black denim with a flat-front design and straight-leg cut for a sophisticated urban look.",
          "NEW"
        ),
        nike_w_printed_white_jeans: new myProduct(
          "Artistic Graphic Print White Jeans",
          "Nike",
          "women",
          "assets/pants/printed white jeans.jpg",
          "assets/pants/printed white hover.jpg",
          5900,
          "Statement denim featuring unique illustrative prints over a clean white canvas."
          ,null
        ),
        nike_w_check_trouser: new myProduct(
          "Monochrome Checkerboard Trousers",
          "Nike",
          "women",
          "assets/pants/checkerhover.jpg",
          "assets/pants/checker.jpg",
          7200,
          "Bold black-and-white checkered pants with a tailored waist, perfect for making a statement."
          ,null
        ),
        nike_w_blue_flat_jeans: new myProduct(
          "Classic Indigo Flat-Front Jeans",
          "Nike",
          "women",
          "assets/pants/pant3hover.webp",
          "assets/pants/pant3.webp",
          7200,
          "Durable deep indigo denim designed with a smooth flat-front for a clean, professional silhouette."
          ,null
        )
      },
      zara: {
        zara_w_tiro_pants: new myProduct(
          "High-Waist Slim Trousers",
          "Zara",
          "women",
          "assets/pants/p2h.jpg",
          "assets/pants/p2.jpg",
          6100,
          "Sleek, slim-fitting trousers with a high-rise waist, designed to elongate the silhouette."
          ,null
        )
      }
    },
    "DRESSES": {
      adidas: {
        adidas_w_button_down: new myProduct(
          "Midnight Button-Down Shirt Dress",
          "Adidas",
          "women",
          "assets/dress/d4h.jpg",
          "assets/dress/d4.jpg",
          5300,
          "A versatile dark-wash shirt dress that can be worn open as a light layer or closed for a sleek look."
          ,null
        ),
        adidas_w_check_dress: new myProduct(
          "Heritage Checkered Shirt Dress",
          "Adidas",
          "women",
          "assets/dress/d5h.jpg",
          "assets/dress/d5.jpg",
          5300,
          "Bold plaid pattern dress with a structured collar and comfortable button closure."
          ,null
        )
      },
      nike: {
        nike_w_gingham_dress: new myProduct(
          "Rustic Gingham Midi Dress",
          "Nike",
          "women",
          "assets/dress/d1.jpg",
          "assets/dress/d1nh.jpg",
          5200,
          "A charming checkered midi dress featuring a cinched waist and a flowing summer skirt.",
          "SALE"
        ),
        nike_w_modern_vibe: new myProduct(
          "Abstract Mosaic Shift Dress",
          "Nike",
          "women",
          "assets/tshirts/wt3.webp",
          "assets/tshirts/wt3h.webp",
          5500,
          "A contemporary shift dress with mosaic-inspired patterns designed for effortless elegance.",
          "SALE"
        )
      },
      zara: {
        zara_w_check_dress: new myProduct(
          "Monochrome Checkered Mini",
          "Zara",
          "women",
          "assets/dress/d2.jpg",
          "assets/dress/d2h.jpg",
          5400,
          "Short-length dress with a classic grid pattern, perfect for a modern minimalist wardrobe."
          ,null
        ),
        zara_w_midi_dress: new myProduct(
          "Terracotta Flowing Midi Dress",
          "Zara",
          "women",
          "assets/dress/d3h.jpg",
          "assets/dress/d3.jpg",
          5400,
          "Earth-toned midi dress with a flowing skirt and a flattering wrap-around waist detail.",
          "SALE"
        ),
        zara_w_art_tunic: new myProduct(
          "Bohemian Sketch Tunic",
          "Zara",
          "women",
          "assets/tshirts/wt2.webp",
          "assets/tshirts/wt2h.webp",
          5200,
          "Flowing tunic-style top with intricate line art, capturing a sophisticated European aesthetic.",
          "SALE"
        )
      }
    }
  },

  men: {
    "TSHIRTS": {
      nike: {
        nike_m_dri_fit: new myProduct(
          "Pro Dri-FIT Performance Tee",
          "Nike",
          "men",
          "assets/tshirts/m1h.jpg",
          "assets/tshirts/m1.jpg",
          4900,
          "Sweat-wicking Dri-FIT technology combined with breathable mesh zones for elite training."
          ,null
        ),
        nike_m_sportswear_club: new myProduct(
          "Sportswear Heritage Club Tee",
          "Nike",
          "men",
          "assets/tshirts/m2h.jpg",
          "assets/tshirts/m2.jpg",
          4100,
          "A soft cotton staple with the embroidered Futura logo on the chest for a classic look.",
          "SALE"
        ),
        nike_m_urban_limit: new myProduct(
          "Urban Skyline Graphic Tee",
          "Nike",
          "men",
          "assets/tshirts/ms7.webp",
          "assets/tshirts/ms7h.webp",
          4300,
          "Featuring a high-density print of city landscapes on premium heavyweight jersey fabric.",
          "SALE"
        )
      },
      zara: {
        zara_m_linen_blend_v1: new myProduct(
          "Slim Fit Sand Linen Shirt",
          "Zara",
          "men",
          "assets/tshirts/ms6.webp",
          "assets/tshirts/ms6h.webp",
          6800,
          "Tailored slim-fit shirt made from a premium linen blend in a versatile sandy beige."
          ,null
        ),
        zara_m_ocean_linen: new myProduct(
          "Ocean Blue Breathable Tunic",
          "Zara",
          "men",
          "assets/tshirts/ms5.webp",
          "assets/tshirts/ms5h.webp",
          6500,
          "A relaxed, airy linen top in a deep ocean blue, featuring a classic band collar."
          ,null
        )
      }
    },
    "PANTS": {
      nike: {
        nike_m_black_wide_pants: new myProduct(
          "Urban Relaxed Wide-Leg Pants",
          "Nike",
          "men",
          "assets/tshirts/mp2.webp",
          "assets/tshirts/mp2h.webp",
          5200,
          "Modern streetwear silhouette with a wide leg and adjustable some for a personalized fit."
          ,null
        ),
        nike_m_tech_utility: new myProduct(
          "Tech Utility Cargo Joggers",
          "Nike",
          "men",
          "assets/tshirts/mt1.webp",
          "assets/tshirts/mt1h.webp",
          5800,
          "Functional athletic pants featuring water-repellent finish and secure storage compartments."
          ,null
        )
      },
      adidas: {
        adidas_m_tiro_jacket: new myProduct(
          "Tiro 23 League Track Jacket",
          "Adidas",
          "men",
          "assets/tshirts/mp3.webp",
          "assets/tshirts/mp3h.webp",
          7800,
          "Professional-grade track jacket with ribbed cuffs and moisture-absorbing AEROREADY technology.",
          "20% OFF"
        ),
        adidas_m_sereno_top: new myProduct(
          "Sereno Training Zip-Up",
          "Adidas",
          "men",
          "assets/tshirts/mp4.webp",
          "assets/tshirts/mp4h.webp",
          7400,
          "Slim-fit training layer featuring mesh ventilation panels and a streamlined silhouette."
          ,null
        ),
        adidas_m_field_gear: new myProduct(
          "Field Gear Pro Windbreaker",
          "Adidas",
          "men",
          "assets/tshirts/mp5.webp",
          "assets/tshirts/mp5h.webp",
          8200,
          "A lightweight, wind-resistant outer layer designed for warm-ups and outdoor training sessions."
          ,null
        )
      },
      zara: {
        zara_m_slim_chinos: new myProduct(
          "Modern Slim-Fit Camel Chinos",
          "Zara",
          "men",
          "assets/pants/m1h.jpg",
          "assets/pants/m1.jpg",
          7900,
          "Sleek camel-colored chinos with a tapered leg, suitable for business-casual environments."
          ,null
        ),
        zara_m_cargo_joggers_v1: new myProduct(
          "Combat Style Cargo Joggers",
          "Zara",
          "men",
          "assets/pants/m2h.jpg",
          "assets/pants/m2.jpg",
          8500,
          "Utility-inspired joggers with large side cargo pockets and reinforced stitching for a rugged look.",
          "SALE"
        ),
        zara_m_cargo_joggers_v2: new myProduct(
          "Streamlined Active Joggers",
          "Zara",
          "men",
          "assets/pants/m3h.jpg",
          "assets/pants/m3.jpg",
          8500,
          "Tapered activewear joggers with a smooth finish and elasticated cuffs for maximum comfort."
          ,null
        )
      }
    },
    "SHIRTS": {
      adidas: {
        adidas_m_trefoil_v1: new myProduct(
          "Classic White Trefoil Graphic Tee",
          "Adidas",
          "men",
          "assets/tshirts/ms3h.webp",
          "assets/tshirts/ms3.webp",
          4500,
          "Vintage-inspired white cotton tee with a large centered trefoil logo in a contrast print."
          ,null
        ),
        adidas_m_trefoil_v2: new myProduct(
          "Sky Blue Heritage Logo Tee",
          "Adidas",
          "men",
          "assets/m4h.jpg",
          "assets/m4.jpg",
          4500,
          "Cool sky-blue jersey tee featuring the iconic three-stripe heritage branding."
          ,null
        ),
        adidas_m_trefoil_v3: new myProduct(
          "Forest Green Trefoil Series",
          "Adidas",
          "men",
          "assets/tshirts/ms2.webp",
          "assets/tshirts/ms2h.webp",
          4500,
          "Deep forest green tee made from sustainable cotton, featuring a classic logo graphic."
          ,null
        )
      },
      zara: {
        zara_m_resort_vibe: new myProduct(
          "Striped Resort Relaxed Shirt",
          "Zara",
          "men",
          "assets/tshirts/ms1.webp",
          "assets/tshirts/ms1h.webp",
          6200,
          "Coastal-inspired vertical striped shirt with a camp collar for a laid-back vacation look."
          ,null
        ),
        zara_m_textured_relaxed: new myProduct(
          "Textured Navy Relaxed Fit",
          "Zara",
          "men",
          "assets/shirts/m2h.jpg",
          "assets/shirts/m2.jpg",
          6400,
          "Unique textured weave fabric in deep navy, offering a breezy relaxed fit for casual outings."
          ,null
        ),
        zara_m_linen_blend: new myProduct(
          "Standard White Linen Summer Shirt",
          "Zara",
          "men",
          "assets/shirts/m3h.jpg",
          "assets/shirts/m3.jpg",
          6800,
          "The essential summer button-down in crisp white linen, featuring a standard casual collar."
          ,null
        )
      }
    },
    "OUTERWEAR": {
      adidas: {
        adidas_m_stadium_coat: new myProduct(
          "Stadium Parka Insulated Jacket",
          "Adidas",
          "men",
          "assets/coat/m1h.jpg",
          "assets/coat/m1.jpg",
          9500,
          "Long-line insulated parka designed to keep athletes warm on the sidelines in cold weather.",
          "20% OFF"
        )
      },
      zara: {
        zara_m_leather_v1: new myProduct(
          "Asymmetric Black Biker Jacket",
          "Zara",
          "men",
          "assets/coat/m2h.jpg",
          "assets/coat/m2.jpg",
          8990,
          "Faux leather jacket with silver hardware and an asymmetric zipper for a classic rebellious edge."
          ,null
        ),
        zara_m_leather_v2: new myProduct(
          "Vintage Tan Leather Bomber",
          "Zara",
          "men",
          "assets/coat/m3h.jpg",
          "assets/coat/m3.jpg",
          8990,
          "Soft-touch faux leather in a rich tan color, featuring a bomber-style ribbed collar.",
          "HOT"
        ),
        zara_m_leather_v3: new myProduct(
          "Onyx Racing Leather Jacket",
          "Zara",
          "men",
          "assets/coat/m4h.jpg",
          "assets/coat/m4.jpg",
          8990,
          "Cafe racer inspired leather jacket with a clean snap-tab collar and minimalist aesthetic."
          ,null
        )
      }
    }
  }
};


var grid = document.getElementById('productsGrid');

function createCard(product) {
    var badge = '';
    
    if (product.discount) {
        badge = '<span class="badge-sale">' + product.discount + '</span>';
    }
     var safeData = encodeURIComponent(JSON.stringify(product));
   return `
<div class="col" data-brand="${product.brand.toLowerCase()}">
    <a href="#" class="sharp-card" onclick="showDetails('${safeData}')">
        <div class="img-container">
            ${badge}
            <img src="${product.img}" class="base-img" alt="${product.title}">

            <img src="${product.hoverImg}" class="hover-img" alt="${product.title} hover">
            <button class="img-atc-btn" title="Add to Cart">
        <i class="bi bi-plus"></i>
    </button>
        </div>
        <div class="card-info">
            <span class="item-title">${product.title}</span>
            <span class="item-price">Rs. ${product.price.toLocaleString()}</span>
        </div>
    </a>
</div>`;
}

function renderAll() {
    grid.innerHTML = '';
    for (var section in celesteStore) {
        var categories = celesteStore[section];
        for (var cat in categories) {
            var content = categories[cat];
            
            if (content.title) {
                grid.innerHTML += createCard(content);
            } else {
                for (var subKey in content) {
                    var items = content[subKey];
                    for (var id in items) {
                        if (items[id].title) {
                            grid.innerHTML += createCard(items[id]);
                        }
                    }
                }
            }
        }
    }
}

function filterProducts(gender, cat) {
    grid.innerHTML = '';
    var label = document.getElementById('currentBrandLabel');
    if (label) label.innerText = "All Brands";

    var brands = celesteStore[gender][cat];
    for (var brand in brands) {
        var products = brands[brand];
        for (var id in products) {
            grid.innerHTML += createCard(products[id]);
        }
    }
    closeSidebar();
}

function newArrival(key) {
    grid.innerHTML = '';
    var categories = celesteStore[key]; 
    
    for (var cat in categories) {
        var products = categories[cat];
        for (var id in products) {
            grid.innerHTML += createCard(products[id]);
        }
    }
    
    var label = document.getElementById('currentBrandLabel');
    if (label) label.innerText = "All Brands";
    closeSidebar();
}

function handleBrandFilter(element) {
    var selectedBrand = element.getAttribute('data-brand'); 
    var brandName = element.innerText; 
    var label = document.getElementById('currentBrandLabel');
    
    if (label) {
        label.innerText = brandName;
    }

    var cards = grid.getElementsByClassName('col');
    
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var cardBrand = card.getAttribute('data-brand');
        
        if (selectedBrand === "" || cardBrand === selectedBrand) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

function closeSidebar() {
    var sidebar = document.getElementById('sidebarFilters');
    sidebar.classList.remove('show');
    var backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
    }
    document.body.style.overflow = 'auto';
}
    var dropdown = document.getElementById('ddown')

var detailDiv = document.getElementById('detail')
function showDetails(safeData) {
    console.log(dropdown)
    dropdown.style.setProperty('display', 'none', 'important');
    var product = JSON.parse(decodeURIComponent(safeData));
    grid.style.setProperty('display', 'none', 'important');
    detailDiv.innerHTML = `
<div class="container-fluid product-container">
    <a href="#" class="back-link mb-5 " onclick="goBack()">
    <i class="bi bi-arrow-left "></i> 
</a>

    <div class="row">
        <div class="col-lg-6 col-md-12 product-gallery d-flex ps-lg-5">
            <div class="thumbnails d-flex flex-column me-3">
                <img src="${product.img}" onclick="swapImg('${product.img}')" alt="Thumb 1" class="img-thumbnail active mb-2" style="width: 110px; cursor: pointer;">
                <img src="${product.hoverImg}" onclick="swapImg('${product.hoverImg}')" alt="Thumb 2" class="img-thumbnail mb-2" style="width: 110px; cursor: pointer;">
            </div>
            <div class="main-image flex-grow-1 ms-5">
                <img src="${product.img}" id="mainImg" class="img-fluid " alt="${product.title}">
            </div>
        </div>

        <div class="col-lg-6 col-md-12 product-details mt-4 mt-lg-0 pe-lg-5">
            <h1 class="h3 fw-bold product-title">${product.title}</h1>
            <p class="text-muted small mb-2">WTDO081-SML-TPN</p>
            <p class="h5 mb-3">Rs. ${product.price.toLocaleString()}</p>

            <hr class="my-4">

            <div class="option-group mb-4">
                <span class="d-block small fw-bold mb-2 text-uppercase" style="letter-spacing: 1px;">Size</span>
                <div class="size-selectors d-flex gap-2">
                    <button class="btn btn-outline-dark rounded-0 px-3 py-2">S</button>
                    <button class="btn btn-outline-dark rounded-0 px-3 py-2">M</button>
                    <button class="btn btn-outline-dark rounded-0 px-3 py-2">L</button>
                </div>
            </div>

            <div class="stock-warning mb-3 small d-flex align-items-center">
                <span class="rounded-circle bg-warning me-2" style="width: 8px; height: 8px;"></span>
                Low stock – 8 items left
            </div>

            <div class="d-grid gap-2 mb-4">
                <button class="btn btn-outline-dark btn-lg rounded-0 fw-bold py-3" style="font-size: 0.8rem;">ADD TO CART</button>
                <button class="btn btn-dark btn-lg rounded-0 fw-bold py-3" style="font-size: 0.8rem;">BUY IT NOW</button>
            </div>

            <p class="product-description small text-secondary leading-relaxed">
                ${product.desc}
            </p>
            
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Ask a Question
                        </button>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                           
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name">
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4">
                                </div>
                                
                                                         <div class="col-12">
                                    <label for="inputAddress" class="form-label  " style="font-size: 0.8rem;">Message</label>
                                   
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                        
                                <div class="col-12 d-flex">
                                    <button type="submit" class="btn px-4 ms-auto submit ">send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </h2>
                    
                </div>
            </div>
        </div>
    </div>
</div>`;
    console.log("--- Product Clicked ---");
    console.log(product);
    
    console.log("Item:", product.title);
    console.log("Price:", product.price);
}
function swapImg(url){
    var mainImg = document.getElementById('mainImg')
    mainImg.src=url
}
function goBack(){
 detailDiv.innerHTML= ""
   grid.style.setProperty('display', 'flex', 'important');
    dropdown.style.setProperty('display', 'block', 'important');

 
}
function clearAllFilters(){
 renderAll()
}
window.onload = renderAll;

// // 1. Select all links with the class 'filter-link'
// var filterLinks = document.querySelectorAll('.filter-link');

// // 2. Loop through links and add the click event
// filterLinks.forEach(function(link) {
//     link.addEventListener('click', function(e) {
//         e.preventDefault(); // Stop page from jumping

//         // Get the gender and category from the data attributes we added
//         var selectedGender = this.getAttribute('data-gender');
//         var selectedCategory = this.getAttribute('data-category');

//         // Clear the current grid
//         grid.innerHTML = '';

//         // Navigate the celesteStore: Gender -> Category -> Brand -> Product
//         var categories = celesteStore[selectedGender];
//         var brandsInCat = categories[selectedCategory];

//         for (var brand in brandsInCat) {
//             var products = brandsInCat[brand];
//             for (var id in products) {
//                 grid.innerHTML += createCard(products[id]);
//             }
//         }

//         // Optional: Close the sidebar automatically after selection (Bootstrap logic)
//         var sidebarElement = document.getElementById('sidebarFilters');
//         var bsOffcanvas = bootstrap.Offcanvas.getInstance(sidebarElement);
//         if (bsOffcanvas) bsOffcanvas.hide();
//     });
// });

// // Initial run to show all products when page opens
// renderAllProducts();
// // function updateBrand() {
// //     brandMenu.innerHTML = '<option value="">Select Brand</option>';
// //     var categories = celesteStore[genderMenu.value];
    
// //     // We need to look inside all categories to find brands
// //     var foundBrands = {}; 
// //     for (var cat in categories) {
// //         for (var b in categories[cat]) {
// //             if (!foundBrands[b]) {
// //                 brandMenu.innerHTML += '<option value="' + b + '">' + b.toUpperCase() + '</option>';
// //                 foundBrands[b] = true;
// //             }
// //         }
// //     }
// // }

// // // 4. APPLY FILTER: The simple way
// // function applyFilter() {
// //     var g = genderMenu.value;
// //     var b = brandMenu.value;
// //     var t = typeMenu.value;

// //     if (!g || !b || !t) {
// //         alert("Please select all filters");
// //         return;
// //     }

// //     grid.innerHTML = '';
// //     var items = celesteStore[g][t][b]; // Correct path: Gender -> Type -> Brand
    
// //     for (var id in items) {
// //         grid.innerHTML += createCardHTML(items[id]);
// //     }
// // }

// // // Initial Run
// // renderAllProducts();






// // // renderAllProducts();

// // // var genderMenu = document.getElementById('genderSelect');
// // // var brandMenu = document.getElementById('brandSelect');
// // // var typeMenu = document.getElementById('typeSelect');
// // // var filterBtn = document.getElementById('applyFilter');

// // // for (gender in celesteStore) {
// // //     genderMenu.innerHTML += `<option value="${gender}">${gender}</option>`
// // // }

// // // function updateBrand() {
// // //     brandMenu.innerHTML = ""
// // //     for (var brand in celesteStore[genderMenu.value]) {
// // //         console.log(brand)
// // //         brandMenu.innerHTML += `<option value="${brand}">${brand}</option>`
// // //     }
// // // }

// // // function updateType() {
// // //     typeMenu.innerHTML = " "
// // //     for (var type in celesteStore[genderMenu.value][brandMenu.value]) {
// // //         typeMenu.innerHTML += `<option value="${type}">${type}</option>`
// // //     }
// // //     var show = celesteStore[genderMenu.value][brandMenu.value]
// // //     console.log(show)
// // // }

// // // var grid = document.getElementById('productsGrid');

// // // function applyFilter() {
// // //     var selectedGender = genderMenu.value;
// // //     var selectedBrand = brandMenu.value;
// // //     var selectedType = typeMenu.value;

// // //     var productsInCategory = celesteStore[selectedGender][selectedBrand][selectedType];

// // //     var grid = document.getElementById('productsGrid');
// // //     grid.innerHTML = '';

// // //     for (var productId in productsInCategory) {
// // //         var product = productsInCategory[productId];
// // //         var badgeHTML = '';
// // //         if (product.discount) {
// // //             badgeHTML = '<span class="badge-sale">' + product.discount + '</span>';
// // //         }

// // //         // Replace the cardHTML inside your applyFilter or renderAllProducts with this:
// // //         var cardHTML = `
// // //     <div class="col">
// // //         <a href="#" class="sharp-card">
// // //             <div class="img-container">
// // //                 ${badgeHTML}
// // //                 <img src="${product.img}" class="base-img" alt="${product.title}">
// // //                 <img src="${product.hoverImg}" class="hover-img" alt="${product.title} hover">
// // //             </div>
// // //             <div class="card-info">
// // //                 <span class="item-title">${product.title}</span>
// // //                 <span class="item-price">Rs.${product.price.toLocaleString()}</span>
// // //             </div>
// // //         </a>
// // //     </div>`;
// // //         grid.innerHTML += cardHTML;
// // //     }
// // // }