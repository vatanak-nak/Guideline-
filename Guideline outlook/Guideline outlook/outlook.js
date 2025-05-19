// Sections Data
const sections = [
  {
    title: "Download and Install Outlook",
    content:
      "Visit the official Microsoft website and download the latest version of Outlook. Follow the installation instructions to set up the application on your device.",
    image: "first-step.PNG",
  },
  {
    title: "Creating an Outlook Account",
    content:
      "Open Outlook and click 'Create account.' Enter your preferred email address and choose whether to use a Microsoft domain (e.g., @outlook.com).",
    image: "second-step.PNG",
  },
  {
    title: "Create Your Own Password",
    content:
      "Choose a strong password that contains a mix of letters, numbers, and symbols. This helps keep your Outlook account secure.",
    image: "third-step.PNG",
  },
  {
    title: "Name Your Outlook Account",
    content:
      "Enter your first and last name. This name will appear on outgoing emails and in your Outlook profile.",
    image: "fourth-step.PNG",
  },
  {
    title: "Enter Your Date of Birth",
    content:
      "Provide your date of birth to verify your identity. This step ensures compliance with Microsoft's age restrictions.",
    image: "fifth-step.PNG",
  },
  {
    title: "Agree to the Privacy Policy",
    content:
      "Review Microsoft's privacy and service terms. Click 'Agree' to proceed with your account setup.",
    image: "sixth-step.PNG",
  },
  {
    title: "Verify You Are Human",
    content:
      "Complete a CAPTCHA challenge to confirm that you're not a bot. This security step prevents automated account creation.",
    image: "seventh-step.PNG",
  },
  {
    title: "Account Successfully Created!",
    content:
      "Congratulations! Your Outlook account has been successfully created. You can now sign in, customize settings, and start using Outlook.",
    image: "last.PNG",
    success: true,
  },
];

// Get container
const container = document.getElementById("sections-container");

// Populate sections dynamically
sections.forEach((section, index) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add("section");

  // Add success class if it's the last step
  if (section.success) {
    sectionDiv.classList.add("success");
  }

  sectionDiv.innerHTML = `
          <h2>${section.title}</h2>
          <p>${section.content}</p>
          <img src="${section.image}" alt="${section.title}">
      `;

  // Apply animation delay
  sectionDiv.style.animationDelay = `${index * 0.1}s`;

  container.appendChild(sectionDiv);
});
