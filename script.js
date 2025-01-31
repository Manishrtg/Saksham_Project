document.addEventListener("DOMContentLoaded", function () {
    const donateButton = document.getElementById("donateButton");
    const paymentModal = document.getElementById("paymentModal");
    const closeButton = document.querySelector(".modal .close");
    const donationForm = document.getElementById("payment-form");

    // Open donation modal
    donateButton.addEventListener("click", function () {
        paymentModal.style.display = "flex";
    });

    // Razorpay Payment Gateway Integration
    donationForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission
        
        const name = document.getElementById("donor-name").value;
        const email = document.getElementById("donor-email").value;
        const amount = document.getElementById("donation-amount").value;

        // Create Razorpay Order
        const options = {
            key: 'your-razorpay-key', // Enter your Razorpay key
            amount: amount * 100, // Convert amount to paise
            currency: "INR",
            name: name,
            description: "Donation for School Development",
            handler: function (response) {
                alert("Thank you for your donation! Payment ID: " + response.razorpay_payment_id);
                paymentModal.style.display = "none"; // Close modal
            },
            prefill: {
                name: name,
                email: email,
            },
        };

        const rzp = new Razorpay(options);
        rzp.open();
    });

    // Close the modal when clicked outside of it
    window.addEventListener("click", function (event) {
        if (event.target == paymentModal) {
            paymentModal.style.display = "none";
        }
    });
});



// document.addEventListener("DOMContentLoaded", function () {
//     const chatbot = document.getElementById('chatbot');
//     const closeButton = document.getElementById('close-chat');
//     const sendMessageButton = document.getElementById('send-message');
//     const userInput = document.getElementById('user-input');
//     const chatlog = document.getElementById('chatlog');
    
//     // Conversation state management
//     let conversationLevel = 0;
//     const userResponses = []; // To track the user's responses at each level

//     // Show chatbot when a button is clicked
//     const showChatbot = () => {
//         chatbot.style.display = 'block';
//         chatlog.innerHTML += `<div class="bot-message">Hello! How can I assist you today?</div>`;
//         chatlog.scrollTop = chatlog.scrollHeight;
//         conversationLevel = 1; // Start conversation at level 1
//     };

//     // Close the chatbot window
//     closeButton.addEventListener('click', () => {
//         chatbot.style.display = 'none';
//     });

//     // Simulate sending a message
//     const sendMessage = () => {
//         const message = userInput.value.trim();
//         if (message) {
//             // Add the user's message to the chatlog
//             chatlog.innerHTML += `<div class="user-message">${message}</div>`;
//             userInput.value = ''; // Clear input field
//             chatlog.scrollTop = chatlog.scrollHeight; // Scroll to the bottom

//             // Generate bot response based on conversation level
//             handleConversation(message);
//         }
//     };

//     // Function to handle the conversation flow
//     const handleConversation = (message) => {
//         let botMessage = '';
        
//         switch (conversationLevel) {
//             case 1:
//                 botMessage = "Great! Can you please tell me your name?";
//                 userResponses.push(message); // Store user's first response (assuming it's a greeting)
//                 conversationLevel = 2;
//                 break;
//             case 2:
//                 botMessage = `Nice to meet you, ${message}! What is your favorite color?`;
//                 userResponses.push(message); // Store user's response to name
//                 conversationLevel = 3;
//                 break;
//             case 3:
//                 botMessage = `Wow, ${message} is a great color! Do you prefer cats or dogs?`;
//                 userResponses.push(message); // Store user's favorite color
//                 conversationLevel = 4;
//                 break;
//             case 4:
//                 botMessage = `Awesome, ${message}! Thank you for chatting. If you'd like to ask more questions, feel free to ask.`;
//                 userResponses.push(message); // Store user's preference for pets
//                 conversationLevel = 5; // End conversation or reset based on your design
//                 break;
//             default:
//                 botMessage = "Thank you for chatting! Feel free to ask me more questions anytime.";
//                 break;
//         }

//         // Show the bot's response
//         chatlog.innerHTML += `<div class="bot-message">${botMessage}</div>`;
//         chatlog.scrollTop = chatlog.scrollHeight; // Scroll to the bottom
//     };

//     // Trigger sending message on button click
//     sendMessageButton.addEventListener('click', sendMessage);

//     // Trigger sending message on 'Enter' key
//     userInput.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter') {
//             sendMessage();
//         }
//     });

//     // Optionally, you can show the chatbot window when the page loads or through a button
//     showChatbot();

//     // Donation Modal functionality
//     const donateButton = document.getElementById("donateButton");
//     const paymentModal = document.getElementById("paymentModal");
//     const closeModalButton = document.querySelector(".modal .close");
//     const donationForm = document.getElementById("payment-form");

//     // Open donation modal
//     donateButton.addEventListener("click", function () {
//         paymentModal.style.display = "flex";
//     });

//     // Razorpay Payment Gateway Integration
//     donationForm.addEventListener("submit", function (e) {
//         e.preventDefault(); // Prevent form submission
        
//         const name = document.getElementById("donor-name").value;
//         const email = document.getElementById("donor-email").value;
//         const amount = document.getElementById("donation-amount").value;

//         // Create Razorpay Order
//         const options = {
//             key: 'your-razorpay-key', // Enter your Razorpay key
//             amount: amount * 100, // Convert amount to paise
//             currency: "INR",
//             name: name,
//             description: "Donation for School Development",
//             handler: function (response) {
//                 alert("Thank you for your donation! Payment ID: " + response.razorpay_payment_id);
//                 paymentModal.style.display = "none"; // Close modal
//             },
//             prefill: {
//                 name: name,
//                 email: email,
//             },
//         };

//         const rzp = new Razorpay(options);
//         rzp.open();
//     });

//     // Close the modal when clicked outside of it
//     window.addEventListener("click", function (event) {
//         if (event.target == paymentModal) {
//             paymentModal.style.display = "none";
//         }
//     });

//     // Close the modal using the close button
//     closeModalButton.addEventListener("click", function () {
//         paymentModal.style.display = "none";
//     });
// });
