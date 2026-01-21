// Makeup recommendation database
const makeupDatabase = {
    foundation: {
        oily: {
            'fair-cool': ['Fenty Beauty Pro Filt\'r Soft Matte - 110', 'Estée Lauder Double Wear - 1C1 Cool Bone', 'Maybelline Fit Me Matte - 110 Porcelain'],
            'fair-warm': ['Fenty Beauty Pro Filt\'r Soft Matte - 120', 'NARS Natural Radiant - Gobi', 'L\'Oréal True Match - W1 Golden Ivory'],
            'light-cool': ['Fenty Beauty Pro Filt\'r Soft Matte - 150', 'Urban Decay Stay Naked - 20CP', 'Revlon ColorStay - 150 Buff'],
            'light-warm': ['Fenty Beauty Pro Filt\'r Soft Matte - 160', 'Too Faced Born This Way - Light Beige', 'Maybelline Fit Me Matte - 128 Warm Nude'],
            'medium-cool': ['Fenty Beauty Pro Filt\'r Soft Matte - 240', 'MAC Studio Fix Fluid - NC35', 'Milani Conceal + Perfect - 05 Medium'],
            'medium-warm': ['Fenty Beauty Pro Filt\'r Soft Matte - 260', 'NARS Natural Radiant - Barcelona', 'L\'Oréal True Match - W5 Sand'],
            'deep-cool': ['Fenty Beauty Pro Filt\'r Soft Matte - 370', 'MAC Studio Fix Fluid - NW45', 'Black Opal True Color - Carob'],
            'deep-warm': ['Fenty Beauty Pro Filt\'r Soft Matte - 440', 'IMAN Perfect Response - Earth 4', 'Fashion Fair Perfect Finish - Espresso']
        },
        dry: {
            'fair-cool': ['Giorgio Armani Luminous Silk - 2', 'NARS Natural Radiant - Siberia', 'Bourjois Healthy Mix - 51 Light Vanilla'],
            'fair-warm': ['Giorgio Armani Luminous Silk - 3', 'Too Faced Born This Way - Snow', 'Revlon ColorStay - 110 Ivory'],
            'light-cool': ['Giorgio Armani Luminous Silk - 4', 'Charlotte Tilbury Magic Foundation - 3 Fair', 'L\'Oréal True Match - C2 Natural Ivory'],
            'light-warm': ['Giorgio Armani Luminous Silk - 4.5', 'Rare Beauty Liquid Touch - 140W', 'Maybelline Fit Me Dewy - 115 Ivory'],
            'medium-cool': ['Giorgio Armani Luminous Silk - 6', 'NARS Natural Radiant - Stromboli', 'Milani Conceal + Perfect - 04 Medium'],
            'medium-warm': ['Giorgio Armani Luminous Silk - 6.5', 'Fenty Beauty Pro Filt\'r Hydrating - 290', 'L\'Oréal True Match - W4 Natural Beige'],
            'deep-cool': ['Giorgio Armani Luminous Silk - 9', 'MAC Face and Body - C7', 'Black Opal True Color - Beautiful Bronze'],
            'deep-warm': ['Giorgio Armani Luminous Silk - 10.5', 'Fenty Beauty Pro Filt\'r Hydrating - 450', 'IMAN Perfect Response - Earth 6']
        },
        combination: {
            'fair-cool': ['NARS Natural Radiant - Mont Blanc', 'Urban Decay Stay Naked - 10NN', 'Maybelline Fit Me Matte - 102 Fair Porcelain'],
            'fair-warm': ['NARS Natural Radiant - Deauville', 'Too Faced Born This Way - Porcelain', 'L\'Oréal True Match - W2 Light Ivory'],
            'light-cool': ['NARS Natural Radiant - Light 2 Kristen', 'Fenty Beauty Pro Filt\'r Soft Matte - 145', 'Revlon ColorStay - 180 Sand Beige'],
            'light-warm': ['NARS Natural Radiant - Light 3 Cadiz', 'Charlotte Tilbury Magic Foundation - 5 Fair', 'Maybelline Fit Me Matte - 120 Classic Ivory'],
            'medium-cool': ['NARS Natural Radiant - Medium 1 Aruba', 'MAC Studio Fix Fluid - NC30', 'Milani Conceal + Perfect - 06 Medium Beige'],
            'medium-warm': ['NARS Natural Radiant - Medium 2 Cadiz', 'Fenty Beauty Pro Filt\'r Soft Matte - 280', 'L\'Oréal True Match - W6 Sun Beige'],
            'deep-cool': ['NARS Natural Radiant - Dark 1 Macao', 'MAC Studio Fix Fluid - NC42', 'Black Opal True Color - Truly Topaz'],
            'deep-warm': ['NARS Natural Radiant - Dark 2 Tahoe', 'Fenty Beauty Pro Filt\'r Soft Matte - 420', 'Fashion Fair Perfect Finish - Tender Brown']
        },
        normal: {
            'fair-cool': ['Charlotte Tilbury Magic Foundation - 1 Fair', 'Rare Beauty Liquid Touch - 110N', 'Bourjois Healthy Mix - 52 Vanilla'],
            'fair-warm': ['Charlotte Tilbury Magic Foundation - 2 Fair', 'Giorgio Armani Luminous Silk - 3.5', 'Revlon ColorStay - 150 Buff'],
            'light-cool': ['Charlotte Tilbury Magic Foundation - 4 Fair', 'NARS Natural Radiant - Light 1 Aruba', 'L\'Oréal True Match - N3 Natural Buff'],
            'light-warm': ['Charlotte Tilbury Magic Foundation - 5.5 Medium', 'Too Faced Born This Way - Light', 'Maybelline Fit Me Dewy - 125 Nude Beige'],
            'medium-cool': ['Charlotte Tilbury Magic Foundation - 7 Medium', 'NARS Natural Radiant - Medium 1 Punjab', 'Milani Conceal + Perfect - 07 Medium Tan'],
            'medium-warm': ['Charlotte Tilbury Magic Foundation - 8 Medium', 'Fenty Beauty Pro Filt\'r Hydrating - 310', 'L\'Oréal True Match - W7 Caramel Beige'],
            'deep-cool': ['Charlotte Tilbury Magic Foundation - 12 Deep', 'MAC Face and Body - C8', 'Black Opal True Color - Heavenly Honey'],
            'deep-warm': ['Charlotte Tilbury Magic Foundation - 15 Deep', 'Fenty Beauty Pro Filt\'r Hydrating - 460', 'IMAN Perfect Response - Earth 8']
        }
    },
    concealer: {
        'fair-cool': ['NARS Radiant Creamy Concealer - Chantilly', 'Tarte Shape Tape - 12B Fair Light Neutral', 'Maybelline Instant Age Rewind - Fair'],
        'fair-warm': ['NARS Radiant Creamy Concealer - Vanilla', 'Tarte Shape Tape - 16B Fair Light Beige', 'L\'Oréal True Match - W1-2-3 Fair/Light Warm'],
        'light-cool': ['NARS Radiant Creamy Concealer - Light 2.5', 'Tarte Shape Tape - 22B Light Medium Beige', 'Urban Decay Stay Naked - 20CP'],
        'light-warm': ['NARS Radiant Creamy Concealer - Ginger', 'Tarte Shape Tape - 27B Light Medium Beige', 'Maybelline Instant Age Rewind - Light'],
        'medium-cool': ['NARS Radiant Creamy Concealer - Amande', 'Tarte Shape Tape - 35B Medium Light Beige', 'Fenty Beauty Bright Fix - 240'],
        'medium-warm': ['NARS Radiant Creamy Concealer - Caramel', 'Tarte Shape Tape - 38B Medium Beige', 'L\'Oréal True Match - W4-5-6 Medium Warm'],
        'deep-cool': ['NARS Radiant Creamy Concealer - Walnut', 'Tarte Shape Tape - 47B Deep Beige', 'Black Opal True Color Concealer - Carob'],
        'deep-warm': ['NARS Radiant Creamy Concealer - Truffle', 'Tarte Shape Tape - 53B Deep Beige', 'Fashion Fair Cover Tone - Espresso']
    },
    blush: {
        'fair-cool': ['NARS Blush - Orgasm', 'Milani Baked Blush - Rose D\'Oro', 'Tarte Amazonian Clay - Paaarty'],
        'fair-warm': ['NARS Blush - Peachy', 'Milani Baked Blush - Corallina', 'Rare Beauty Soft Pinch - Joy'],
        'light-cool': ['NARS Blush - Deep Throat', 'Milani Baked Blush - Luminoso', 'Tarte Amazonian Clay - Exposed'],
        'light-warm': ['NARS Blush - Torrid', 'Milani Baked Blush - Berry Amore', 'Rare Beauty Soft Pinch - Bliss'],
        'medium-cool': ['NARS Blush - Zen', 'Milani Baked Blush - Red Vino', 'Tarte Amazonian Clay - Captivating'],
        'medium-warm': ['NARS Blush - Luster', 'Milani Baked Blush - Bella Bellini', 'Rare Beauty Soft Pinch - Encourage'],
        'deep-cool': ['NARS Blush - Exhibit A', 'Milani Baked Blush - Fantastico Mauve', 'Tarte Amazonian Clay - Feisty'],
        'deep-warm': ['NARS Blush - Taj Mahal', 'Milani Baked Blush - Dolce Pink', 'Rare Beauty Soft Pinch - Grateful']
    },
    lipstick: {
        'fair-cool': ['MAC Lipstick - Ruby Woo', 'Charlotte Tilbury - Pillow Talk', 'Fenty Beauty - Stunna Lip Paint Uncensored'],
        'fair-warm': ['MAC Lipstick - Velvet Teddy', 'Charlotte Tilbury - Very Victoria', 'Rare Beauty - Fearless'],
        'light-cool': ['MAC Lipstick - Mehr', 'Charlotte Tilbury - Walk of No Shame', 'Fenty Beauty - Griselda'],
        'light-warm': ['MAC Lipstick - Twig', 'Charlotte Tilbury - Sexy Sienna', 'Rare Beauty - Inspire'],
        'medium-cool': ['MAC Lipstick - Diva', 'Charlotte Tilbury - Red Hot Susan', 'Fenty Beauty - The MVP'],
        'medium-warm': ['MAC Lipstick - Chili', 'Charlotte Tilbury - Amazing Grace', 'Rare Beauty - Courage'],
        'deep-cool': ['MAC Lipstick - Rebel', 'Charlotte Tilbury - Love Liberty', 'Fenty Beauty - Uncuffed'],
        'deep-warm': ['MAC Lipstick - Antique Velvet', 'Charlotte Tilbury - Walk of No Shame', 'Rare Beauty - Powerful']
    }
};

// Skin concern specific recommendations
const concernRecommendations = {
    acne: {
        primer: 'Smashbox Photo Finish Primer - Pore Minimizing',
        setting: 'Urban Decay All Nighter Setting Spray',
        powder: 'Laura Mercier Translucent Loose Setting Powder'
    },
    'dark-circles': {
        corrector: 'Bobbi Brown Corrector - Peach/Bisque',
        concealer: 'Tarte Shape Tape Concealer',
        setting: 'Ben Nye Banana Powder'
    },
    redness: {
        primer: 'Smashbox Photo Finish Primer - Color Correcting Green',
        foundation: 'IT Cosmetics CC+ Cream',
        powder: 'Hourglass Ambient Lighting Powder'
    },
    dullness: {
        primer: 'Becca Backlight Priming Filter',
        highlighter: 'Fenty Beauty Killawatt - Trophy Wife',
        setting: 'MAC Fix+ Setting Spray'
    }
};

// DOM elements
const form = document.getElementById('skinAnalysisForm');
const inputSection = document.getElementById('inputSection');
const resultsSection = document.getElementById('resultsSection');
const loadingOverlay = document.getElementById('loadingOverlay');
const productsGrid = document.getElementById('productsGrid');
const backBtn = document.getElementById('backBtn');

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const skinType = formData.get('skinType');
    const skinTone = formData.get('skinTone');
    const concerns = formData.getAll('concerns');
    
    if (!skinType || !skinTone) {
        alert('Please select both your skin type and skin tone to get recommendations.');
        return;
    }
    
    // Show loading animation
    showLoading();
    
    // Simulate analysis time
    setTimeout(() => {
        generateRecommendations(skinType, skinTone, concerns);
        hideLoading();
        showResults();
    }, 2000);
});

// Back button handler
backBtn.addEventListener('click', function() {
    showInput();
});

function showLoading() {
    loadingOverlay.style.display = 'flex';
}

function hideLoading() {
    loadingOverlay.style.display = 'none';
}

function showResults() {
    inputSection.style.display = 'none';
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function showInput() {
    resultsSection.style.display = 'none';
    inputSection.style.display = 'block';
    inputSection.scrollIntoView({ behavior: 'smooth' });
}

function generateRecommendations(skinType, skinTone, concerns) {
    productsGrid.innerHTML = '';
    
    // Foundation recommendations
    const foundationRecs = makeupDatabase.foundation[skinType][skinTone];
    createProductCard('Foundation', '🧴', foundationRecs, 
        'Perfect base for your skin type and tone. These foundations will provide the right coverage and finish for your skin.',
        'linear-gradient(135deg, #ff9a9e, #fecfef)');
    
    // Concealer recommendations
    const concealerRecs = makeupDatabase.concealer[skinTone];
    createProductCard('Concealer', '✨', concealerRecs,
        'Hide imperfections and brighten your under-eye area with these perfectly matched concealers.',
        'linear-gradient(135deg, #a8edea, #fed6e3)');
    
    // Blush recommendations
    const blushRecs = makeupDatabase.blush[skinTone];
    createProductCard('Blush', '🌸', blushRecs,
        'Add a natural flush of color to your cheeks with these complementary shades.',
        'linear-gradient(135deg, #ffecd2, #fcb69f)');
    
    // Lipstick recommendations
    const lipstickRecs = makeupDatabase.lipstick[skinTone];
    createProductCard('Lipstick', '💋', lipstickRecs,
        'Complete your look with these lip colors that enhance your natural beauty.',
        'linear-gradient(135deg, #667eea, #764ba2)');
    
    // Add concern-specific recommendations
    if (concerns.length > 0) {
        concerns.forEach(concern => {
            if (concernRecommendations[concern]) {
                createConcernCard(concern, concernRecommendations[concern]);
            }
        });
    }
}

function createProductCard(title, icon, recommendations, description, gradient) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-header">
            <div class="product-icon" style="background: ${gradient};">
                ${icon}
            </div>
            <h3 class="product-title">${title}</h3>
        </div>
        <p class="product-description">${description}</p>
        <div class="product-recommendations">
            <h4>Recommended Products:</h4>
            <ul class="recommendation-list">
                ${recommendations.map(rec => `<li><strong>${rec.split(' - ')[0]}</strong> - ${rec.split(' - ')[1] || 'Perfect match'}</li>`).join('')}
            </ul>
        </div>
    `;
    
    productsGrid.appendChild(card);
}

function createConcernCard(concern, recommendations) {
    const concernTitles = {
        'acne': 'Acne & Blemish Control',
        'dark-circles': 'Dark Circle Coverage',
        'redness': 'Redness Correction',
        'dullness': 'Radiance Boost'
    };
    
    const concernIcons = {
        'acne': '🎯',
        'dark-circles': '👁️',
        'redness': '🌿',
        'dullness': '✨'
    };
    
    const concernGradients = {
        'acne': 'linear-gradient(135deg, #84fab0, #8fd3f4)',
        'dark-circles': 'linear-gradient(135deg, #a8edea, #fed6e3)',
        'redness': 'linear-gradient(135deg, #d299c2, #fef9d7)',
        'dullness': 'linear-gradient(135deg, #89f7fe, #66a6ff)'
    };
    
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const recList = Object.entries(recommendations).map(([type, product]) => 
        `<li><strong>${type.charAt(0).toUpperCase() + type.slice(1)}:</strong> ${product}</li>`
    ).join('');
    
    card.innerHTML = `
        <div class="product-header">
            <div class="product-icon" style="background: ${concernGradients[concern]};">
                ${concernIcons[concern]}
            </div>
            <h3 class="product-title">${concernTitles[concern]}</h3>
        </div>
        <p class="product-description">Targeted solutions for your specific skin concerns.</p>
        <div class="product-recommendations">
            <h4>Specialized Products:</h4>
            <ul class="recommendation-list">
                ${recList}
            </ul>
        </div>
    `;
    
    productsGrid.appendChild(card);
}

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add animation delays to form elements
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.animationDelay = `${index * 0.1}s`;
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.animation = 'fadeInUp 0.6s ease forwards';
    });
});

// Add CSS animation keyframes via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);