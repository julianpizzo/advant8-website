// Mock user data for authentication
const mockUser = {
    username: "user",
    password: "password"
};

// Handling login functionality
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === mockUser.username && password === mockUser.password) {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to dashboard on successful login
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Handling campaign submission
document.getElementById("campaign-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const campaignName = document.getElementById("campaign-name").value;
    const budget = document.getElementById("budget").value;
    const targetAudience = document.getElementById("target-audience").value;

    alert(`Campaign '${campaignName}' created with a budget of $${budget} targeting '${targetAudience}'!`);
    
    // Save campaign data (mock)
    const performanceList = document.getElementById("performance-list");
    performanceList.innerHTML = `<p>Campaign: ${campaignName}, Budget: $${budget}, Audience: ${targetAudience}</p>`;

    // Clear form
    this.reset();
});

// Payment functionality
document.getElementById("make-payment")?.addEventListener("click", function() {
    document.getElementById("payment-status").textContent = "Payment successful!";
});

// Feedback submission
document.getElementById("feedback-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const feedback = document.getElementById("feedback").value;

    alert("Thank you for your feedback: " + feedback);
    
    // Clear the feedback form
    this.reset();
});
// Handling user registration
document.getElementById("signup-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userType = document.getElementById("user-type").value;

    // Simulate registration success
    alert(`Account created successfully!\nUsername: ${username}\nEmail: ${email}\nUser Type: ${userType}`);
    
    // Here, you can implement further logic to store user data (e.g., in a database).
    
    // Clear form
    this.reset();
});

// Handling payment submission
document.getElementById("payment-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    const amount = document.getElementById("amount").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;
    const billingAddress = document.getElementById("billing-address").value;

    // Simulate payment processing (mock)
    alert(`Payment of $${amount} has been successfully processed!\n` +
          `Card Number: ${cardNumber}\n` +
          `Expiry Date: ${expiryDate}\n` +
          `CVV: ${cvv}\n` +
          `Billing Address: ${billingAddress}`);

    // Clear the form
    this.reset();
});
// Handling feedback submission
document.getElementById("feedback-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    const campaignName = document.getElementById("campaign-name").value;
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;

    // Simulate feedback submission (mock)
    alert(`Feedback submitted successfully!\n` +
          `Campaign Name: ${campaignName}\n` +
          `Rating: ${rating}\n` +
          `Comments: ${comments}`);

    // Clear the form
    this.reset();
});


let campaigns = []; // Array to hold campaigns

const influencers = {
    "LeBron James": {
        picture: "https://upload.wikimedia.org/wikipedia/commons/8/8f/LeBron_James_2014.jpg",
        brand: "Nike",
        cost: 100000,
        details: "LeBron James is one of the most recognized athletes worldwide and has a significant following on social media. His endorsement can elevate any sports-related campaign."
    },
    "Serena Williams": {
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Serena_Williams_2017_%28cropped%29.jpg",
        brand: "Wilson",
        cost: 80000,
        details: "Serena Williams is a global sports icon known for her powerful presence both on and off the court. She connects well with fitness enthusiasts."
    },
    "Cristiano Ronaldo": {
        picture: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Crino_Ronaldo_2018.jpg",
        brand: "Nike",
        cost: 120000,
        details: "Cristiano Ronaldo is one of the biggest names in football with a massive following. His influence can boost the visibility of any campaign."
    },
    "Kylie Jenner": {
        picture: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Kylie_Jenner_%282015%29.jpg",
        brand: "Kylie Cosmetics",
        cost: 75000,
        details: "Kylie Jenner is a social media mogul and entrepreneur. Her influence is significant in the beauty and fashion industry."
    },
    "Dwayne Johnson": {
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/54/Dwayne_Johnson_in_2019.jpg",
        brand: "Under Armour",
        cost: 95000,
        details: "Dwayne 'The Rock' Johnson is a prominent actor and former wrestler, known for his motivational presence and fitness lifestyle."
    },
    "Taylor Swift": {
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/58/Taylor_Swift_2019_by_Gage_Skidmore.jpg",
        brand: "Apple Music",
        cost: 90000,
        details: "Taylor Swift is a global music icon with a dedicated fanbase, making her an excellent choice for campaigns targeting young audiences."
    },
    "Neymar Jr": {
        picture: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Neymar_2018.jpg",
        brand: "Puma",
        cost: 85000,
        details: "Neymar Jr is a highly popular footballer with a massive following on social media, ideal for sports and lifestyle brands."
    },
    "Rihanna": {
        picture: "https://upload.wikimedia.org/wikipedia/commons/0/06/Rihanna_%282020%29.jpg",
        brand: "Fenty Beauty",
        cost: 100000,
        details: "Rihanna is not only a music superstar but also a successful entrepreneur in the beauty industry, perfect for beauty campaigns."
    },
    "David Beckham": {
        picture: "https://upload.wikimedia.org/wikipedia/commons/c/c3/David_Beckham_2018.jpg",
        brand: "Adidas",
        cost: 95000,
        details: "David Beckham is a retired footballer with a strong fashion presence, ideal for lifestyle and sports-related campaigns."
    },
    "Emma Watson": {
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Emma_Watson_in_2018.jpg",
        brand: "Burberry",
        cost: 70000,
        details: "Emma Watson is known for her advocacy work and as a fashion icon, making her perfect for campaigns focusing on sustainability and fashion."
    },
    "Markiplier": {
        picture: "https://upload.wikimedia.org/wikipedia/en/2/2d/Markiplier_2019.png",
        brand: "YouTube",
        cost: 60000,
        details: "Markiplier is a prominent YouTuber with a massive following in the gaming community, ideal for tech and gaming-related campaigns."
    },
    "PewDiePie": {
        picture: "https://upload.wikimedia.org/wikipedia/commons/e/ea/PewDiePie_2020.png",
        brand: "YouTube",
        cost: 65000,
        details: "PewDiePie is one of the most subscribed YouTubers, making him a great influencer for campaigns targeting young audiences."
    }
};

const companies = {
    "Apple": {
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", // URL of the logo
        budget: 100000,
        accountManager: "Jane Doe",
        targetAudience: "Tech-savvy consumers",
        campaignName: "Innovate Your Life"
    },
    "Coca-Cola": {
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg", // URL of the logo
        budget: 50000,
        accountManager: "John Smith",
        targetAudience: "General consumers",
        campaignName: "Taste the Feeling"
    },
    "Nike": {
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", // URL of the logo
        budget: 75000,
        accountManager: "Emily Johnson",
        targetAudience: "Fitness enthusiasts",
        campaignName: "Just Do It"
    },
    "Samsung": {
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", // URL of the logo
        budget: 90000,
        accountManager: "Michael Brown",
        targetAudience: "Tech enthusiasts and families",
        campaignName: "Next Generation Technology"
    },
    "Microsoft": {
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // URL of the logo
        budget: 120000,
        accountManager: "Alice Green",
        targetAudience: "Business professionals and gamers",
        campaignName: "Empowering People"
    },
    "Amazon": {
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", // URL of the logo
        budget: 200000,
        accountManager: "Bob White",
        targetAudience: "General consumers, online shoppers",
        campaignName: "Everything You Need"
    },
    "Tesla": {
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png", // URL of the logo
        budget: 150000,
        accountManager: "Charlie Black",
        targetAudience: "Eco-conscious consumers and tech enthusiasts",
        campaignName: "Electric Future"
    },
    "McDonald's": {
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/McDonald%27s_Golden_Arches.svg", // URL of the logo
        budget: 60000,
        accountManager: "Daisy Blue",
        targetAudience: "Families and fast-food lovers",
        campaignName: "I'm Lovin' It"
    },
    "Spotify": {
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Spotify_logo_with_text.svg", // URL of the logo
        budget: 70000,
        accountManager: "Eve Red",
        targetAudience: "Music enthusiasts and podcasters",
        campaignName: "Music for Everyone"
    },
    "Red Bull": {
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a0/Red_Bull_logo.svg", // URL of the logo
        budget: 80000,
        accountManager: "Frank Grey",
        targetAudience: "Adventure seekers and athletes",
        campaignName: "Gives You Wings"
    },
    "H&M": {
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/H%26M_logo.svg", // URL of the logo
        budget: 50000,
        accountManager: "Grace Pink",
        targetAudience: "Fashion-conscious consumers",
        campaignName: "Fashion for Everyone"
    }
};


// Handling campaign submission
document.getElementById("campaign-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    const selectedCompany = document.getElementById("company").value; // Get selected company
    const campaignName = document.getElementById("campaign-name").value;
    const budget = companies[selectedCompany].budget; // Get budget from selected company
    const targetAudience = companies[selectedCompany].targetAudience; // Get target audience from selected company

    // Create a new campaign object
    const newCampaign = {
        name: campaignName,
        budget: budget,
        audience: targetAudience,
        company: selectedCompany, // Add company to the campaign object
        status: "Active" // Default status
    };

    campaigns.push(newCampaign); // Add campaign to the array
    displayCampaigns(); // Update the displayed campaign list

    // Clear form
    this.reset();
    document.getElementById("company-info").style.display = "none"; // Hide company info after submission
});

// Function to display campaigns
function displayCampaigns() {
    const campaignList = document.getElementById("campaign-list");
    campaignList.innerHTML = ""; // Clear the existing list

    campaigns.forEach((campaign, index) => {
        const campaignDiv = document.createElement("div");
        campaignDiv.className = "campaign-card"; // Add class for styling

        // Create the HTML structure for the campaign card
        campaignDiv.innerHTML = `
            <h4>${campaign.name}</h4>
            <img src="${companies[campaign.company].logo}" alt="${campaign.company} Logo" class="company-logo" style="max-width: 50px; margin-right: 10px; vertical-align: middle;">
            <p>Company: ${campaign.company}</p>
            <p>Budget: $${campaign.budget}</p>
            <p>Account Manager: ${companies[campaign.company].accountManager}</p>
            <p>Target Audience: ${campaign.audience}</p>
            <p class="status">${campaign.status === "Active" ? "Status: Active" : '<span class="paused">Status: Paused</span>'}</p>
            <button onclick="pauseCampaign(${index})">Pause</button>
            <button onclick="deleteCampaign(${index})">Delete</button>
        `;
        campaignList.appendChild(campaignDiv);
    });
}

// Function to pause a campaign
function pauseCampaign(index) {
    campaigns[index].status = "Paused"; // Change the status to paused
    displayCampaigns(); // Update the displayed list
}

// Function to delete a campaign
function deleteCampaign(index) {
    campaigns.splice(index, 1); // Remove the campaign from the array
    displayCampaigns(); // Update the displayed list
}

// Add event listener for company selection
document.getElementById("company")?.addEventListener("change", function() {
    const selectedCompany = this.value;
    const companyData = companies[selectedCompany];

    // Populate the form fields with company data
    if (companyData) {
        document.getElementById("company-logo").src = companyData.logo; // Set logo
        document.getElementById("account-manager").innerText = `Account Manager: ${companyData.accountManager}`;
        document.getElementById("target-audience").innerText = `Target Audience: ${companyData.targetAudience}`;
        document.getElementById("budget").value = companyData.budget; // Set budget
        document.getElementById("campaign-name").value = companyData.campaignName; // Set campaign name

        // Show the company info section
        document.getElementById("company-info").style.display = "block";
    }
});
// Function to display influencers
function displayInfluencers() {
    const influencerList = document.getElementById("influencer-list");
    influencerList.innerHTML = ""; // Clear the existing list

    for (const [name, info] of Object.entries(influencers)) {
        const influencerDiv = document.createElement("div");
        influencerDiv.className = "influencer-card"; // Add class for styling

        // Create the HTML structure for the influencer card
        influencerDiv.innerHTML = `
            <img src="${info.picture}" alt="${name}" class="influencer-picture">
            <div class="influencer-info">
                <h4>${name}</h4>
                <p>Cost: $${info.cost}</p>
                <p>${info.details}</p>
            </div>
            <button onclick="selectInfluencer('${name}')">Select</button>
        `;
        influencerList.appendChild(influencerDiv);
    }
}


// Function to select an influencer
function selectInfluencer(name) {
    const selectedInfluencer = influencers[name];
    document.getElementById("campaign-name").value += ` with ${name}`; // Append influencer name to campaign name
    alert(`Selected influencer: ${name}\nDetails: ${selectedInfluencer.details}`);
}

// Call the function to display influencers on page load
displayInfluencers();

function goToNextStep(nextStepId) {
    const currentStep = document.querySelector('.form-step:not([style*="display: none"])');
    
    // Validation for the current step
    if (currentStep.id === 'registration-step') {
        const companyName = document.getElementById("company-name").value;
        const contactInfo = document.getElementById("contact-info").value;
        const phoneNumber = document.getElementById("phone-number").value;
        
        if (!companyName || !contactInfo || !phoneNumber) {
            alert("Please fill out all required fields.");
            return;
        }
    } else if (currentStep.id === 'profile-step') {
        const targetAudience = document.getElementById("target-audience").value;
        const budgetAllocations = document.getElementById("budget-allocations").value;
        const brandDescription = document.getElementById("brand-description").value;

        if (!targetAudience || !budgetAllocations || !brandDescription) {
            alert("Please fill out all required fields.");
            return;
        }
    }
    
    currentStep.style.display = 'none'; // Hide current step
    document.getElementById(nextStepId).style.display = 'block'; // Show next step

    if (nextStepId === 'onboarding-step') {
        // Simulate onboarding process
        setTimeout(() => {
            activateAccount();
        }, 3000); // Simulate a delay for onboarding
    }
}

function goToPreviousStep(previousStepId) {
    const currentStep = document.querySelector('.form-step:not([style*="display: none"])');
    currentStep.style.display = 'none'; // Hide current step
    document.getElementById(previousStepId).style.display = 'block'; // Show previous step
}

function activateAccount() {
    // Hide onboarding step
    document.getElementById('onboarding-step').style.display = 'none';
    // Show activation step
    document.getElementById('activation-step').style.display = 'block';

    // Simulate sending a welcome email
    alert("A welcome email has been sent to your registered email address.");
}

function resetForm() {
    document.getElementById('account-creation-form').reset(); // Reset form fields
    document.querySelectorAll('.form-step').forEach(step => step.style.display = 'none'); // Hide all steps
    document.getElementById('registration-step').style.display = 'block'; // Show the first step
}

