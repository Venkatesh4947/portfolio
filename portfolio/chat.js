const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const clearBtn = document.getElementById("clear-btn");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = chatInput.value.trim();
  if (!msg) return;

  addMessage(msg, "user");
  chatInput.value = "";

  setTimeout(() => {
    botReply(msg);
  }, 500);
});

clearBtn.addEventListener("click", () => {
  chatBox.innerHTML = "";
});

function addMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);

  const timestamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  msgDiv.innerHTML = `<span class="text">${text}</span><span class="timestamp">${timestamp}</span>`;

  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userInput) {
  const reply = getSmartReply(userInput);
  addMessage(reply, "bot");
}

function getSmartReply(input) {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
    return "Hello! How can I help you today? 😊";
  } else if (lowerInput.includes("how are you")) {
    return "I'm just a bot, but I'm doing great! Thanks for asking! 🤖";
  } else if (
    lowerInput.includes("what's your name") ||
    lowerInput.includes("who are you")
  ) {
    return "I'm ChatBot, your friendly assistant! 🤖";
  } else if (lowerInput.includes("your chief")) {
    return "My Chief is Venkatesh, a talented individual with a passion for technology and innovation! 🚀";
  } else if (lowerInput.includes("help")) {
    return "Sure! What do you need help with?";
  } else if (lowerInput.includes("bye") || lowerInput.includes("goodbye")) {
    return "Goodbye! Have a great day! 👋";
  } else if (lowerInput.includes("time")) {
    const now = new Date();
    return `The current time is ${now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}. ⏰`;
  } else if (lowerInput.includes("weather")) {
    return "I can't check the weather right now, but I hope it's nice where you are! ☀️🌧️";
  } else if (lowerInput.includes("tell some jokes")) {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything! 😂",
      "Why did the math book look sad? Because it had too many problems. 😢",
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
      "Why was the computer cold? It left its Windows open! ❄️",
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  } else if (lowerInput.includes("good morning")) {
    return "Good morning! Hope you have a fantastic day ahead! ☀️";
  } else if (lowerInput.includes("good night")) {
    return "Good night! Sleep well and dream big! 🌙";
  } else if (
    lowerInput.includes("thank you") ||
    lowerInput.includes("thanks")
  ) {
    return "You're welcome! I'm here to help you! 😊";
  } else if (lowerInput.includes("what can you do")) {
    return "I can chat with you, answer questions, tell jokes, and more! Just ask!";
  } else if (lowerInput.includes("tell me a story")) {
    return "Once upon a time in a digital world, there lived a friendly chatbot who loved to help people...";
  } else if (lowerInput.includes("favorite color")) {
    return "I don't have a favorite color, but I think all colors are beautiful! 🌈";
  } else if (lowerInput.includes("favorite food")) {
    return "I don't eat, but I hear biriyani is quite popular! 🍛";
  } else if (lowerInput.includes("favorite movie")) {
    return "I don't watch movies, but I hear 'The F1' is a classic! 🎬";
  } else if (lowerInput.includes("favorite book")) {
    return "I don't read books, but '1984' by George Orwell is highly recommended! 📚";
  } else if (lowerInput.includes("favorite music")) {
    return "I don't listen to music, but I hear melody music is quite soothing! 🎶";
  } else if (lowerInput.includes("favorite sport")) {
    return "I don't play sports, but soccer is loved by many! ⚽";
  } else if (lowerInput.includes("favorite hobby")) {
    return "I don't have hobbies, but I enjoy chatting with you! 😊";
  } else if (lowerInput.includes("favorite animal")) {
    return "I don't have a favorite animal, but I think cats and dogs are adorable! 🐱🐶";
  } else if (lowerInput.includes("favorite place")) {
    return "I don't travel, but I hear the mountains are breathtaking! 🏔️";
  } else if (lowerInput.includes("favorite season")) {
    return "I don't experience seasons, but I hear spring is lovely with all the flowers blooming! 🌸";
  } else if (lowerInput.includes("favorite holiday")) {
    return "I don't celebrate holidays, but I hear Pongal is a joyful time for many! 🎉";
  } else if (lowerInput.includes("favorite festival")) {
    return "I don't celebrate festivals, but I hear Diwali is a time of joy and giving! 🎆";
  } else if (lowerInput.includes("favorite quote")) {
    return "One of my favorite quotes is: 'The only limit to our realization of tomorrow is our doubts of today.' - Franklin D. Roosevelt";
  } else if (lowerInput.includes("favorite technology")) {
    return "I love all technologies, but AI and machine learning are fascinating! 🤖";
  } else if (lowerInput.includes("favorite programming language")) {
    return "I don't code, but Java is a favorite among many developers! 💻";
  } else if (lowerInput.includes("favorite website")) {
    return "I don't browse the web, but I hear Stack Overflow is a great resource for developers! 🌐";
  } else if (lowerInput.includes("favorite app")) {
    return "I don't use apps, but I hear WhatsApp is very popular for messaging! 📱";
  } else if (lowerInput.includes("favorite game")) {
    return "I don't play games, but I hear chess is a great game of strategy! ♟️";
  } else if (lowerInput.includes("favorite drink")) {
    return "I don't drink, but I hear coffee is a favorite for many to start their day! ☕";
  } else if (lowerInput.includes("favorite dessert")) {
    return "I don't eat desserts, but I hear chocolate cake is a favorite treat! 🍰";
  } else if (lowerInput.includes("favorite fruit")) {
    return "I don't eat fruits, but I hear mangoes are delicious! 🥭";
  } else if (lowerInput.includes("favorite vegetable")) {
    return "I don't eat vegetables, but I hear carrots are good for your eyes! 🥕";
  } else if (lowerInput.includes("favorite snack")) {
    return "I don't snack, but I hear chips are a popular choice! 🍟";
  } else if (lowerInput.includes("favorite ice cream flavor")) {
    return "I don't eat ice cream, but I hear chocolate and vanilla are classic favorites! 🍦";
  } else if (lowerInput.includes("favorite pizza topping")) {
    return "I don't eat pizza, but I hear pepperoni is a popular topping! 🍕";
  } else if (lowerInput.includes("favorite holiday destination")) {
    return "I don't travel, but I hear Paris is a romantic destination! 🗼";
  } else if (lowerInput.includes("favorite vacation spot")) {
    return "I don't go on vacations, but I hear the beach is a relaxing spot for many! 🏖️";
  } else if (lowerInput.includes("favorite city")) {
    return "I don't have a favorite city, but I hear New York is vibrant and full of life! 🗽";
  } else if (lowerInput.includes("favourite bike")) {
    return "I don't ride bikes, but I hear the KTM is a powerful bike among bikers! 🏍️";
  } else if (lowerInput.includes("favorite car")) {
    return "I don't drive, but I hear BMW M5 is a favorite for its power and torque! 🚗";
  } else if (lowerInput.includes("favorite song")) {
    return "I don't listen to songs, but I hear 'Shape of You' by Ed Sheeran is quite popular! 🎵";
  } else if (lowerInput.includes("favorite band")) {
    return "I don't have a favorite band, but The Beatles are legendary! 🎸";
  } else if (lowerInput.includes("favorite artist")) {
    return "I don't have a favorite artist, but Picasso is renowned for his unique style! 🎨";
  } else if (lowerInput.includes("favorite movie genre")) {
    return "I don't watch movies, but I hear action and comedy are popular genres! 🎥";
  } else if (lowerInput.includes("favorite book genre")) {
    return "I don't read books, but mystery and fantasy are loved by many readers! 📖";
  } else if (lowerInput.includes("favorite TV show")) {
    return "I don't watch TV shows, but 'Friends' is a classic favorite! 📺";
  } else if (lowerInput.includes("favorite podcast")) {
    return "I don't listen to podcasts, but 'The Daily' is quite popular! 🎙️";
  } else if (lowerInput.includes("favorite YouTube channel")) {
    return "I don't watch YouTube, but I hear 'Kurzgesagt – In a Nutshell' has great educational content! 📹";
  } else if (lowerInput.includes("favorite social media platform")) {
    return "I don't use social media, but Instagram is very popular for sharing photos! 📸";
  } else if (lowerInput.includes("favorite quote about life")) {
    return "One of my favorite quotes about life is: 'Life is what happens when you're busy making other plans.' - John Lennon";
  } else if (lowerInput.includes("favorite quote about success")) {
    return "One of my favorite quotes about success is: 'Success is not the key to happiness. Happiness is the key to success.' - Albert Schweitzer";
  } else if (lowerInput.includes("favorite quote about love")) {
    return "One of my favorite quotes about love is: 'Love all, trust a few, do wrong to none.' - William Shakespeare";
  } else if (lowerInput.includes("favorite quote about friendship")) {
    return "One of my favorite quotes about friendship is: 'A friend is someone who knows all about you and still loves you.' - Elbert Hubbard";
  } else if (lowerInput.includes("favourite cricketer")) {
    return "I don't follow cricket, but I hear Mahendra Singh Dhoni is a legendary cricketer! 🏏";
  } else if (lowerInput.includes("your chief")) {
    return "My Chief is Venkatesh, a talented individual with a passion for technology and innovation! 🚀";
  } else if (lowerInput.includes("corner rocket")) {
    return "Duke 390 is known as corner rocket for its performance and agility! 🏍️";
  } else if (lowerInput.includes("rx")) {
    return "Rx is a popular bike known for its speed and performance! 🏍️";
  } else if (lowerInput.includes("favourite bike company")) {
    return "KTM is a favorite bike company known for its powerful and stylish bikes! 🏍️";
  } else if (lowerInput.includes("favourite car company")) {
    return "BMW is a favorite car company known for its luxury and performance! 🚗";
  } else if (lowerInput.includes("famous motogp racer")) {
    return "Valentino Rossi is a famous MotoGP racer known for his incredible skills and achievements! 🏁";
  } else if (lowerInput.includes("famous f1 racer")) {
    return "Lewis Hamilton is a famous F1 racer known for his record-breaking achievements and multiple championships! 🏎️";
  } else if (lowerInput.includes("famous footballer")) {
    return "Cristiano Ronaldo is a famous footballer known for his incredible skills and numerous awards! ⚽";
  } else if (lowerInput.includes("famous bodybuilder")) {
    return "Arnold Schwarzenegger is a famous bodybuilder known for his incredible physique and achievements! 💪";
  } else if (lowerInput.includes("famous singer")) {
    return "A.R. Rahman is a famous singer and composer known for his incredible music and contributions to the film industry! 🎤";
  } else if (lowerInput.includes("famous actor")) {
    return "Rajinikanth is a famous actor known for his iconic roles and massive fan following! 🎬";
  } else if (lowerInput.includes("kawasaki ninja h2r")) {
    return "The Kawasaki Ninja H2R is a high-performance motorcycle known for its incredible speed and advanced technology! 🏍️";
  } else if (lowerInput.includes("ducati panigale v4")) {
    return "The Ducati Panigale V4 is a powerful and stylish motorcycle known for its performance and design! 🏍️";
  } else if (lowerInput.includes("toyota supra")) {
    return "The Toyota Supra is a legendary sports car known for its performance and iconic design! 🚗";
  } else if (lowerInput.includes("godzila")) {
    return "The Nissan GT-R, often referred to as 'Godzilla', is a high-performance sports car known for its incredible speed and advanced technology! 🚗";
  } else if (lowerInput.includes("coimbatore")) {
    return "Coimbatore, also known as Kovai, is a major city in Tamil Nadu, India, known for its textile industry and educational institutions. 🌄";
  } else if (lowerInput.includes("engineering")) {
    return "Engineering is a field that applies scientific principles to design, build, and maintain structures and systems. 🛠️";
  } else if (lowerInput.includes("suggest some tamil songs")) {
    const tamilSongs = [
      "Aathichudi - Na. Muthukumar",
      "Anbe Anbe - A.R. Rahman",
      "Vennilave Vennilave - Harris Jayaraj",
      "Pudhu Vellai Mazhai - Ilaiyaraaja",
      "Suttrum Vizhi Chudare - S. P. Balasubrahmanyam",
      "Kannathil Muthamittal - A.R. Rahman",
      "Unnidathil Ennai Koduthen - Ilaiyaraaja",
      "Oru Deivam Thandha Poove - Vidyasagar",
    ];
    return `Here are some popular Tamil songs you might enjoy: ${tamilSongs.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some english songs")) {
    const englishSongs = [
      "Shape of You - Ed Sheeran",
      "Blinding Lights - The Weeknd",
      "Someone Like You - Adele",
      "Rolling in the Deep - Adele",
      "Uptown Funk - Mark Ronson ft. Bruno Mars",
      "Perfect - Ed Sheeran",
      "Bad Guy - Billie Eilish",
      "Shallow - Lady Gaga & Bradley Cooper",
    ];
    return `Here are some popular English songs you might enjoy: ${englishSongs.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some hindi songs")) {
    const hindiSongs = [
      "Tum Hi Ho - Arijit Singh",
      "Tera Ban Jaunga - Akhil Sachdeva, Tulsi Kumar",
      "Kabira - Tochi Raina, Rekha Bhardwaj",
      "Kalank Title Track - Arijit Singh, Shreya Ghoshal",
      "Raabta - Arijit Singh",
      "Dil Diyan Gallan - Atif Aslam",
      "Tum Mile - Neeraj Shridhar",
      "Pehla Nasha - Udit Narayan, Sadhana Sargam",
    ];
    return `Here are some popular Hindi songs you might enjoy: ${hindiSongs.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some tamil love movies")) {
    const tamilLoveMovies = [
      "Kadhal Kondein",
      "Vinnaithaandi Varuvaayaa",
      "Ennai Thalatta Varuvala",
      "Sethu",
      "Mouna Raagam",
      "Kadhal Desam",
      "Thulladha Manamum Thullum",
      "Kaadhal",
      "Neethane En Ponvasantham",
      "96",
    ];
    return `Here are some popular Tamil love movies you might enjoy: ${tamilLoveMovies.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some preganancy workouts")) {
    const pregnancyExercises = [
      "Walking",
      "Prenatal Yoga",
      "Pelvic Tilts",
      "Kegel Exercises",
      "Cat-Cow Stretch",
      "Side-Lying Leg Lifts",
      "Seated Forward Bend",
      "Wall Push-Ups",
      "Butterfly Stretch",
      "Seated Side Stretch",
      "Standing Calf Raises",
      "Modified Squats",
      "Arm Circles",
      "Seated Marching",
      "Hip Circles",
    ];
    return `Here are some safe pregnancy exercises you might consider: ${pregnancyExercises.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some home workouts")) {
    const homeWorkouts = [
      "Push-ups",
      "Squats",
      "Lunges",
      "Plank",
      "Burpees",
      "Mountain Climbers",
      "Jumping Jacks",
      "High Knees",
      "Tricep Dips (using a chair)",
      "Glute Bridges",
      "Bicycle Crunches",
      "Wall Sit",
      "Leg Raises",
      "Russian Twists",
      "Side Plank",
      "Superman Exercise",
      "Jump Squats",
    ];
    return `Here are some effective home workouts you can try: ${homeWorkouts.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some yoga poses")) {
    const yogaPoses = [
      "Downward Dog (Adho Mukha Svanasana)",
      "Warrior I (Virabhadrasana I)",
      "Tree Pose (Vrksasana)",
      "Child's Pose (Balasana)",
      "Cobra Pose (Bhujangasana)",
      "Bridge Pose (Setu Bandhasana)",
      "Cat-Cow Stretch (Marjaryasana-Bitilasana)",
      "Seated Forward Bend (Paschimottanasana)",
    ];
    return `Here are some yoga poses you might find beneficial: ${yogaPoses.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some english love movies")) {
    const englishLoveMovies = [
      "The Notebook",
      "Pride and Prejudice",
      "Titanic",
      "A Walk to Remember",
      "La La Land",
      "Eternal Sunshine of the Spotless Mind",
      "Before Sunrise",
      "500 Days of Summer",
      "Crazy, Stupid, Love",
      "The Fault in Our Stars",
    ];
    return `Here are some popular English love movies you might enjoy: ${englishLoveMovies.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some tamil action movies")) {
    const tamilActionMovies = [
      "Maanagaram",
      "Kaithi",
      "Vikram Vedha",
      "Sethupathi",
      "Thuppakki",
      "Master",
      "Anjaan",
      "Viswasam",
      "Arambam",
      "Saamy",
    ];
    return `Here are some popular Tamil action movies you might enjoy: ${tamilActionMovies.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some english action movies")) {
    const englishActionMovies = [
      "Mad Max: Fury Road",
      "John Wick",
      "Die Hard",
      "The Dark Knight",
      "Inception",
      "Gladiator",
      "The Avengers",
      "Terminator 2: Judgment Day",
      "Mission: Impossible - Fallout",
      "The Matrix",
    ];
    return `Here are some popular English action movies you might enjoy: ${englishActionMovies.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some tamil comedy movies")) {
    const tamilComedyMovies = [
      "Boss Engira Bhaskaran",
      "Siva Manasula Sakthi",
      "Ninaithale Inikkum",
      "Kadhalil Sodhappuvadhu Yeppadi",
      "Thamizh Padam",
      "Kanna Laddu Thinna Aasaiya",
      "Maan Karate",
      "Vasool Raja MBBS",
      "Sivaji: The Boss",
      "Baana Kaathadi",
    ];
    return `Here are some popular Tamil comedy movies you might enjoy: ${tamilComedyMovies.join(
      ", "
    )}`;
  } else if (lowerInput.includes("how to cure headache")) {
    return "To cure a headache, you can try the following remedies: \n1. Drink plenty of water to stay hydrated. \n2. Take a break and rest in a quiet, dark room. \n3. Apply a cold or warm compress to your forehead or neck. \n4. Practice relaxation techniques like deep breathing or meditation. \n5. Over-the-counter pain relievers like ibuprofen or acetaminophen can help.";
  } else if (lowerInput.includes("how to cure cold")) {
    return "To cure a cold, you can try the following remedies: \n1. Stay hydrated by drinking plenty of fluids. \n2. Get plenty of rest to help your body recover. \n3. Use a humidifier to keep the air moist. \n4. Gargle with warm salt water to soothe a sore throat. \n5. Over-the-counter medications can help relieve symptoms.";
  } else if (lowerInput.includes("how to cure fever")) {
    return "To cure a fever, you can try the following remedies: \n1. Stay hydrated by drinking plenty of fluids. \n2. Rest and allow your body to recover. \n3. Take over-the-counter medications like acetaminophen or ibuprofen to reduce fever. \n4. Wear lightweight clothing and use a light blanket.";
  } else if (lowerInput.includes("how to cure stomach ache")) {
    return "To cure a stomach ache, you can try the following remedies: \n1. Drink ginger tea or peppermint tea to soothe your stomach. \n2. Eat bland foods like toast, rice, or bananas. \n3. Avoid spicy or greasy foods until you feel better. \n4. Apply a warm compress to your abdomen.";
  } else if (lowerInput.includes("how to cure back pain")) {
    return "To cure back pain, you can try the following remedies: \n1. Apply heat or ice packs to the affected area. \n2. Practice gentle stretching exercises for your back muscles. \n3. Maintain good posture while sitting and standing. \n4. Over-the-counter pain relievers can help reduce discomfort.";
  } else if (lowerInput.includes("how to cure joint pain")) {
    return "To cure joint pain, you can try the following remedies: \n1. Rest the affected joint and avoid strenuous activities. \n2. Apply ice packs to reduce swelling and inflammation. \n3. Take over-the-counter pain relievers like ibuprofen or naproxen.";
  } else if (lowerInput.includes("how to cure skin rash")) {
    return "To cure a skin rash, you can try the following remedies: \n1. Keep the affected area clean and dry. \n2. Apply over-the-counter hydrocortisone cream to reduce itching and inflammation.";
  } else if (lowerInput.includes("how to cure acne")) {
    return "To cure acne, you can try the following remedies: \n1. Keep your face clean by washing it twice a day with a gentle cleanser. \n2. Use over-the-counter acne treatments containing benzoyl peroxide or salicylic acid. \n3. Avoid touching your face and keep hair products away from your skin.";
  } else if (lowerInput.includes("how to cure allergies")) {
    return "To cure allergies, you can try the following remedies: \n1. Identify and avoid allergens that trigger your symptoms. \n2. Take over-the-counter antihistamines to relieve symptoms like sneezing and itching. \n3. Use nasal sprays or eye drops to reduce congestion and irritation.";
  } else if (lowerInput.includes("how to cure asthma")) {
    return "To manage asthma, you can try the following remedies: \n1. Use your prescribed inhaler or nebulizer as directed by your doctor. \n2. Avoid triggers that can worsen your asthma symptoms, such as smoke, dust, and strong odors. \n3. Keep your living space clean and free of allergens.";
  } else if (lowerInput.includes("how to cure diabetes")) {
    return "To manage diabetes, you can try the following remedies: \n1. Follow a balanced diet that is low in sugar and carbohydrates. \n2. Monitor your blood sugar levels regularly. \n3. Exercise regularly to help control your weight and improve insulin sensitivity. \n4. Take prescribed medications as directed by your doctor.";
  } else if (lowerInput.includes("how to cure high blood pressure")) {
    return "To manage high blood pressure, you can try the following remedies: \n1. Follow a low-sodium diet and eat plenty of fruits and vegetables. \n2. Exercise regularly to maintain a healthy weight. \n3. Limit alcohol intake and quit smoking if you smoke. \n4. Take prescribed medications as directed by your doctor.";
  } else if (lowerInput.includes("how to cure high cholesterol")) {
    return "To manage high cholesterol, you can try the following remedies: \n1. Follow a heart-healthy diet that is low in saturated fats and cholesterol. \n2. Exercise regularly to help lower your cholesterol levels. \n3. Maintain a healthy weight. \n4. Take prescribed medications as directed by your doctor.";
  } else if (lowerInput.includes("suggest some tourist places in coimbatore")) {
    const touristPlaces = [
      "Marudamalai Temple",
      "Perur Pateeswarar Temple",
      "VOC Park and Zoo",
      "Gass Forest Museum",
      "Black Thunder Theme Park",
      "Siruvani Waterfalls and Dam",
      "Dhyanalinga Temple",
      "Isha Yoga Center",
      "Kovai Kutralam Falls",
      "Anamalai Tiger Reserve",
    ];
    return `Here are some popular tourist places in Coimbatore: ${touristPlaces.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some tourist places in tamil nadu")) {
    const touristPlacesTN = [
      "Meenakshi Amman Temple, Madurai",
      "Brihadeeswarar Temple, Thanjavur",
      "Kanyakumari",
      "Ooty (Udhagamandalam)",
      "Kodaikanal",
      "Mahabalipuram (Mamallapuram)",
      "Rameswaram",
      "Kodaikanal",
      "Yercaud",
      "Nilgiri Hills",
    ];
    return `Here are some popular tourist places in Tamil Nadu: ${touristPlacesTN.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some tourist places in india")) {
    const touristPlacesIndia = [
      "Taj Mahal, Agra",
      "Jaipur (Pink City), Rajasthan",
      "Varanasi (Kashi), Uttar Pradesh",
      "Kerala Backwaters",
      "Goa Beaches",
      "Hampi, Karnataka",
      "Mysore Palace, Karnataka",
      "Golden Temple, Amritsar",
      "Leh-Ladakh",
      "Andaman and Nicobar Islands",
    ];
    return `Here are some popular tourist places in India: ${touristPlacesIndia.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some tourist places in the world")) {
    const touristPlacesWorld = [
      "Eiffel Tower, Paris",
      "Great Wall of China",
      "Machu Picchu, Peru",
      "Grand Canyon, USA",
      "Santorini, Greece",
      "Sydney Opera House, Australia",
      "Pyramids of Giza, Egypt",
      "Colosseum, Rome",
      "Niagara Falls, Canada/USA",
      "Mount Fuji, Japan",
    ];
    return `Here are some popular tourist places in the world: ${touristPlacesWorld.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some tamil love songs")) {
    const tamilLoveSongs = [
      "Unnidathil Ennai Koduthen - Ilaiyaraaja",
      "Pehla Nasha - Udit Narayan, Sadhana Sargam",
      "Suttrum Vizhi Chudare - S. P. Balasubrahmanyam",
      "Kannathil Muthamittal - A.R. Rahman",
      "Anbe Anbe - A.R. Rahman",
      "Vennilave Vennilave - Harris Jayaraj",
      "Aathichudi - Na. Muthukumar",
    ];
    return `Here are some popular Tamil love songs you might enjoy: ${tamilLoveSongs.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some english love songs")) {
    const englishLoveSongs = [
      "Perfect - Ed Sheeran",
      "Shape of You - Ed Sheeran",
      "All of Me - John Legend",
      "Thinking Out Loud - Ed Sheeran",
      "I Will Always Love You - Whitney Houston",
      "A Thousand Years - Christina Perri",
      "Can't Help Falling in Love - Elvis Presley",
      "Unchained Melody - The Righteous Brothers",
    ];
    return `Here are some popular English love songs you might enjoy: ${englishLoveSongs.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some mobile phones")) {
    const mobilePhones = [
      "iPhone 14 Pro Max",
      "Samsung Galaxy S23 Ultra",
      "Google Pixel 7 Pro",
      "OnePlus 11",
      "Xiaomi 13 Pro",
      "Oppo Find X5 Pro",
      "Sony Xperia 1 IV",
      "Vivo X90 Pro",
      "Asus ROG Phone 6",
      "Realme GT 2 Pro",
    ];
    return `Here are some popular mobile phones you might consider: ${mobilePhones.join(
      ", "
    )}`;
  } else if (lowerInput.includes("suggest some laptops")) {
    const laptops = [
      "Apple MacBook Pro 16-inch",
      "Dell XPS 15",
      "HP Spectre x360",
      "Lenovo ThinkPad X1 Carbon",
      "Asus ROG Zephyrus G14",
      "Microsoft Surface Laptop 4",
      "Acer Swift 3",
      "Razer Blade 15",
      "LG Gram 17",
      "Samsung Galaxy Book Pro 360",
    ];
    return `Here are some popular laptops you might consider: ${laptops.join(
      ", "
    )}`;
  } else if (lowerInput.includes("motogp bikes")) {
    const motogpBikes = [
      "Yamaha YZR-M1",
      "Ducati Desmosedici GP",
      "Honda RC213V",
      "Suzuki GSX-RR",
      "KTM RC16",
      "Aprilia RS-GP",
      "BMW M1000RR",
      "Kawasaki ZX-10RR",
      "MV Agusta F4 RC",
      "Triumph Daytona Moto2 765",
    ];
    return `Here are some popular MotoGP bikes: ${motogpBikes.join(", ")}`;
  } else if (lowerInput.includes("formula 1 cars")) {
    const f1Cars = [
      "Mercedes-AMG F1 W13",
      "Red Bull Racing RB18",
      "Ferrari F1-75",
      "McLaren MCL36",
      "Alpine A522",
      "Aston Martin AMR23",
      "Alfa Romeo C42",
      "Haas VF-22",
      "Williams FW44",
      "Porsche 919 Hybrid",
    ];
    return `Here are some popular Formula 1 cars: ${f1Cars.join(", ")}`;
  } else if (lowerInput.includes("today's date")) {
    const today = new Date();
    return `Today's date is ${today.toLocaleDateString()}. 📅`;
  } else if (lowerInput.includes("calculate cgpa")) {
    return "To calculate CGPA, you can use the formula: \nCGPA = (Total Grade Points Earned) / (Total Credits Earned). \nPlease provide your total grade points and total credits to calculate your CGPA.";
  } else if (lowerInput.includes("how to improve coding skills")) {
    return "To improve your coding skills, you can try the following: \n1. Practice coding regularly on platforms like LeetCode, HackerRank, or CodeSignal. \n2. Work on personal projects to apply what you've learned. \n3. Read books and online resources about programming concepts. \n4. Join coding communities and participate in discussions. \n5. Take online courses or attend workshops to learn new technologies.";
  } else if (lowerInput.includes("best bikes under 400cc")) {
    const bestBikes = [
      "KTM Duke 390",
      "Kawasaki Ninja 300",
      "Yamaha YZF-R3",
      "Honda CBR500R",
      "KTM RC 390",
      "BMW G 310 R",
      "TVS Apache RR310",
      "Benelli 302R",
      "Kawasaki Z400",
      "Husqvarna Vitpilen 401",
    ];
    return `Here are some of the best bikes under 400cc: ${bestBikes.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best cars under 50 lakhs")) {
    const bestCars = [
      "Skoda Octavia",
      "Hyundai Creta",
      "Kia Seltos",
      "Tata Harrier",
      "Mahindra XUV700",
      "Toyota Innova Crysta",
      "Honda City",
      "Volkswagen Taigun",
      "MG Hector",
      "Nissan Kicks",
    ];
    return `Here are some of the best cars under 50 lakhs: ${bestCars.join(
      ", "
    )}`;
  } else if (lowerInput.includes("some hyper cars")) {
    const hyperCars = [
      "Bugatti Chiron",
      "Koenigsegg Jesko",
      "Pagani Huayra",
      "McLaren P1",
      "Ferrari LaFerrari",
      "Porsche 918 Spyder",
      "Lotus Evija",
      "Rimac C_Two",
      "Aston Martin Valkyrie",
      "Mercedes-AMG One",
    ];
    return `Here are some popular hypercars: ${hyperCars.join(", ")}`;
  } else if (lowerInput.includes("some super cars")) {
    const superCars = [
      "Lamborghini Huracán",
      "Ferrari 488 GTB",
      "McLaren 720S",
      "Porsche 911 Turbo S",
      "Aston Martin Vantage",
      "Chevrolet Corvette C8",
      "Nissan GT-R",
      "Audi R8 V10",
      "Ford GT",
      "Jaguar F-Type SVR",
    ];
    return `Here are some popular supercars: ${superCars.join(", ")}`;
  } else if (lowerInput.includes("tell me about dakkar rally")) {
    return "The Dakar Rally is an annual off-road endurance rally!";
  } else if (lowerInput.includes("some dakkar rally cars")) {
    const dakkarRallyCars = [
      "Mini John Cooper Works Rally",
      "Toyota Hilux Overdrive",
      "Ford Ranger Raptor",
      "Peugeot 3008 DKR",
      "Nissan Navara Dakkar",
      "Hummer H3 Evo",
      "Isuzu D-Max",
      "Volkswagen Amarok",
      "Mitsubishi Pajero Evolution",
      "Buggy SMG",
    ];
    return `Here are some popular Dakar Rally cars: ${dakkarRallyCars.join(
      ", "
    )}`;
  } else if (lowerInput.includes("tell me about how petrol engine works")) {
    return "A petrol engine works by igniting a mixture of air and petrol in a cylinder, causing an explosion that pushes a piston down. This motion turns the crankshaft, which ultimately powers the vehicle's wheels. The process involves intake, compression, power, and exhaust strokes.";
  } else if (lowerInput.includes("tell me about how diesel engine works")) {
    return "A diesel engine works by compressing air in a cylinder to a high temperature, then injecting diesel fuel into the hot air. The fuel ignites spontaneously, pushing the piston down. This motion turns the crankshaft, which powers the vehicle's wheels. The process involves intake, compression, power, and exhaust strokes.";
  } else if (lowerInput.includes("some best aircrafts in the world")) {
    const bestAircrafts = [
      "Boeing 747",
      "Airbus A380",
      "Lockheed Martin F-22 Raptor",
      "Boeing 787 Dreamliner",
      "Airbus A350",
      "Lockheed SR-71 Blackbird",
      "Concorde",
      "Boeing B-17 Flying Fortress",
      "McDonnell Douglas F-15 Eagle",
      "Northrop Grumman B-2 Spirit",
    ];
    return `Here are some of the best aircrafts in the world: ${bestAircrafts.join(
      ", "
    )}`;
  } else if (lowerInput.includes("some best helicopters in the world")) {
    const bestHelicopters = [
      "Sikorsky UH-60 Black Hawk",
      "Boeing AH-64 Apache",
      "Eurocopter EC725 Caracal",
      "Bell AH-1Z Viper",
      "Mil Mi-24 Hind",
      "AgustaWestland AW101",
      "Sikorsky CH-53K King Stallion",
      "Airbus H225M Caracal",
      "Bell 407",
      "Robinson R44 Raven II",
    ];
    return `Here are some of the best helicopters in the world: ${bestHelicopters.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best defence forces in the world")) {
    const bestDefenceForces = [
      "United States Armed Forces",
      "Russian Armed Forces",
      "Indian Armed Forces",
      "Chinese People's Liberation Army",
      "British Armed Forces",
      "French Armed Forces",
      "German Armed Forces",
      "Israeli Defense Forces",
      "Japanese Self-Defense Forces",
      "South Korean Armed Forces",
    ];
    return `Here are some of the best defence forces in the world: ${bestDefenceForces.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best war planes in the world")) {
    const bestWarPlanes = [
      "Lockheed Martin F-22 Raptor",
      "Boeing F/A-18 Super Hornet",
      "Eurofighter Typhoon",
      "Dassault Rafale",
      "Sukhoi Su-57",
      "Lockheed Martin F-35 Lightning II",
      "Boeing B-52 Stratofortress",
      "Northrop Grumman B-2 Spirit",
      "McDonnell Douglas F-15 Eagle",
      "Lockheed C-130 Hercules",
    ];
    return `Here are some of the best war planes in the world: ${bestWarPlanes.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best warships in the world")) {
    const bestWarships = [
      "USS Gerald R. Ford (CVN-78)",
      "HMS Queen Elizabeth (R08)",
      "INS Vikrant (IAC-1)",
      "Kirov-class Battlecruiser",
      "Type 055 Destroyer",
      "USS Zumwalt (DDG-1000)",
      "Admiral Gorshkov-class Frigate",
      "Bismarck-class Battleship",
      "Arleigh Burke-class Destroyer",
      "Littoral Combat Ship (LCS)",
    ];
    return `Here are some of the best warships in the world: ${bestWarships.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best submarines in the world")) {
    const bestSubmarines = [
      "USS Virginia (SSN-774)",
      "Typhoon-class Submarine",
      "Borei-class Submarine",
      "Astute-class Submarine",
      "Yasen-class Submarine",
      "Type 212 Submarine",
      "Kilo-class Submarine",
      "Barracuda-class Submarine",
      "Soryu-class Submarine",
      "Scorpène-class Submarine",
    ];
    return `Here are some of the best submarines in the world: ${bestSubmarines.join(
      ", "
    )}`;
  } else if (lowerInput.includes("tell me about the universe")) {
    return "The universe is vast and contains billions of galaxies, each with millions or billions of stars. It is approximately 13.8 billion years old and is constantly expanding. The universe is governed by the laws of physics, and it contains various celestial bodies such as stars, planets, moons, asteroids, comets, and black holes. The study of the universe is known as cosmology.";
  } else if (lowerInput.includes("tell me about black holes")) {
    return "Black holes are regions in space where the gravitational pull is so strong that nothing, not even light, can escape from them. They are formed when massive stars collapse under their own gravity at the end of their life cycle. Black holes can vary in size, and they are characterized by their event horizon, which is the boundary beyond which nothing can escape. The study of black holes is a key area of research in astrophysics.";
  } else if (lowerInput.includes("tell me about dark matter")) {
    return "Dark matter is a mysterious and invisible form of matter that makes up about 27% of the universe. It does not emit, absorb, or reflect light, making it undetectable by conventional means. However, its presence is inferred from its gravitational effects on visible matter, such as galaxies and galaxy clusters. Dark matter plays a crucial role in the formation and structure of the universe, and its nature remains one of the biggest mysteries in modern astrophysics.";
  } else if (lowerInput.includes("best mobile phone games")) {
    const mobileGames = [
      "PUBG Mobile",
      "Call of Duty: Mobile",
      "Genshin Impact",
      "Among Us",
      "Clash of Clans",
      "Candy Crush Saga",
      "Fortnite Mobile",
      "Minecraft Pocket Edition",
      "Asphalt 9: Legends",
      "Brawl Stars",
    ];
    return `Here are some popular mobile phone games you might enjoy: ${mobileGames.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best pc games")) {
    const pcGames = [
      "The Witcher 3: Wild Hunt",
      "Cyberpunk 2077",
      "Red Dead Redemption 2",
      "Dota 2",
      "Counter-Strike: Global Offensive",
      "Minecraft",
      "League of Legends",
      "Valorant",
      "Apex Legends",
      "Call of Duty: Warzone",
      "Assassin's Creed Valhalla",
      "Hades",
      "Gta V",
      "Ride 5",
    ];
    return `Here are some popular PC games you might enjoy: ${pcGames.join(
      ", "
    )}`;
  } else if (lowerInput.includes("diet for weight loss")) {
    return "A balanced diet for weight loss typically includes: \n1. Plenty of fruits and vegetables. \n2. Lean proteins like chicken, fish, tofu, and legumes. \n3. Whole grains such as brown rice, quinoa, and whole wheat bread. \n4. Healthy fats from sources like avocados, nuts, and olive oil. \n5. Limited processed foods and sugary beverages. \n6. Staying hydrated by drinking plenty of water.";
  } else if (lowerInput.includes("diet for muscle gain")) {
    return "A balanced diet for muscle gain typically includes: \n1. High-protein foods like chicken, fish, eggs, dairy, legumes, and nuts. \n2. Complex carbohydrates such as whole grains, oats, brown rice, and sweet potatoes for energy. \n3. Healthy fats from sources like avocados, olive oil, and nuts. \n4. Plenty of fruits and vegetables for vitamins and minerals. \n5. Staying hydrated by drinking plenty of water.";
  } else if (lowerInput.includes("diet for healthy skin")) {
    return "A balanced diet for healthy skin typically includes: \n1. Plenty of fruits and vegetables rich in antioxidants, such as berries, spinach, and carrots. \n2. Healthy fats from sources like avocados, nuts, and olive oil. \n3. Lean proteins like fish, chicken, and legumes. \n4. Whole grains for fiber and nutrients. \n5. Staying hydrated by drinking plenty of water.";
  } else if (lowerInput.includes("diet for healthy hair")) {
    return "A balanced diet for healthy hair typically includes: \n1. Foods rich in vitamins and minerals, such as leafy greens, nuts, and seeds. \n2. Lean proteins like chicken, fish, eggs, and legumes to support hair growth. \n3. Healthy fats from sources like avocados, olive oil, and fatty fish. \n4. Whole grains for energy and nutrients. \n5. Staying hydrated by drinking plenty of water.";
  } else if (lowerInput.includes("diet for healthy bones")) {
    return "A balanced diet for healthy bones typically includes: \n1. Foods rich in calcium, such as dairy products, leafy greens, and fortified plant-based milk. \n2. Vitamin D sources like fatty fish, egg yolks, and fortified foods to help absorb calcium. \n3. Lean proteins like chicken, fish, and legumes for overall health. \n4. Whole grains for fiber and nutrients. \n5. Staying hydrated by drinking plenty of water.";
  } else if (lowerInput.includes("diet for healthy heart")) {
    return "A balanced diet for a healthy heart typically includes: \n1. Plenty of fruits and vegetables rich in antioxidants. \n2. Whole grains like oats, brown rice, and whole wheat bread. \n3. Lean proteins such as fish, chicken, and legumes. \n4. Healthy fats from sources like avocados, nuts, and olive oil. \n5. Limiting saturated fats.";
  } else if (lowerInput.includes("diet for healthy digestion")) {
    return "A balanced diet for healthy digestion typically includes: \n1. Plenty of fiber-rich foods like fruits, vegetables, whole grains, and legumes. \n2. Probiotic-rich foods like yogurt, kefir, and fermented foods to support gut health. \n3. Staying hydrated by drinking plenty of water. \n4. Limiting processed foods and added sugars that can disrupt digestion.";
  } else if (lowerInput.includes("some futuristic business ideas")) {
    const futuristicBusinessIdeas = [
      "Personalized AI Health Assistants",
      "Sustainable Urban Farming Solutions",
      "Virtual Reality Travel Experiences",
      "Blockchain-based Supply Chain Management",
      "Smart Home Automation Services",
      "Augmented Reality Retail Experiences",
      "Electric Vehicle Charging Infrastructure",
      "Remote Work Collaboration Tools",
      "Biodegradable Packaging Solutions",
      "Telemedicine Platforms with AI Diagnostics",
    ];
    return `Here are some futuristic business ideas you might consider: ${futuristicBusinessIdeas.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best chest workouts")) {
    const bestChestWorkouts = [
      "Bench Press (Barbell or Dumbbell)",
      "Push-Ups",
      "Incline Bench Press",
      "Chest Fly (Dumbbell or Cable)",
      "Dips",
      "Pec Deck Machine",
      "Cable Crossover",
      "Decline Bench Press",
      "Single-Arm Dumbbell Chest Press",
      "Medicine Ball Push-Ups",
    ];
    return `Here are some of the best chest workouts you might consider: ${bestChestWorkouts.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best back workouts")) {
    const bestBackWorkouts = [
      "Pull-Ups",
      "Bent-Over Rows (Barbell or Dumbbell)",
      "Lat Pulldowns",
      "Seated Cable Rows",
      "Deadlifts",
      "T-Bar Rows",
      "Face Pulls",
      "Single-Arm Dumbbell Rows",
      "Inverted Rows",
      "Superman Exercise",
    ];
    return `Here are some of the best back workouts you might consider: ${bestBackWorkouts.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best leg workouts")) {
    const bestLegWorkouts = [
      "Squats (Barbell or Dumbbell)",
      "Lunges (Forward, Reverse, or Side)",
      "Leg Press",
      "Deadlifts (Romanian or Conventional)",
      "Leg Curls",
      "Leg Extensions",
      "Calf Raises (Standing or Seated)",
      "Bulgarian Split Squats",
      "Glute Bridges",
      "Box Jumps",
    ];
    return `Here are some of the best leg workouts you might consider: ${bestLegWorkouts.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best biceps workouts")) {
    const bestBicepsWorkouts = [
      "Bicep Curls (Barbell or Dumbbell)",
      "Hammer Curls",
      "Concentration Curls",
      "Preacher Curls",
      "Cable Bicep Curls",
      "Incline Dumbbell Curls",
      "Zottman Curls",
      "Chin-Ups",
      "Reverse Curls",
      "Cross-Body Hammer Curls",
    ];
    return `Here are some of the best biceps workouts you might consider: ${bestBicepsWorkouts.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best triceps workouts")) {
    const bestTricepsWorkouts = [
      "Tricep Dips",
      "Skull Crushers (Lying Tricep Extensions)",
      "Tricep Pushdowns (Cable or Resistance Band)",
      "Overhead Tricep Extensions (Dumbbell or Cable)",
      "Close-Grip Bench Press",
      "Diamond Push-Ups",
      "Tricep Kickbacks",
      "Seated Dumbbell Tricep Press",
      "Bench Dips",
      "Reverse Grip Tricep Pushdowns",
    ];
    return `Here are some of the best triceps workouts you might consider: ${bestTricepsWorkouts.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best shoulder workouts")) {
    const bestShoulderWorkouts = [
      "Overhead Press (Barbell or Dumbbell)",
      "Lateral Raises",
      "Front Raises",
      "Arnold Press",
      "Face Pulls",
      "Dumbbell Shoulder Press",
      "Upright Rows",
      "Bent-Over Lateral Raises",
      "Shrugs (Barbell or Dumbbell)",
      "Cable Lateral Raises",
    ];
    return `Here are some of the best shoulder workouts you might consider: ${bestShoulderWorkouts.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best core workouts")) {
    const bestCoreWorkouts = [
      "Plank (Front and Side)",
      "Russian Twists",
      "Bicycle Crunches",
      "Leg Raises",
      "Mountain Climbers",
      "Hanging Knee Raises",
      "Flutter Kicks",
      "Medicine Ball Slams",
      "V-Ups",
      "Dead Bug Exercise",
    ];
    return `Here are some of the best core workouts you might consider: ${bestCoreWorkouts.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best bikes for beginners")) {
    const bestBikesForBeginners = [
      "Honda CB Shine",
      "Bajaj Pulsar 150",
      "Yamaha FZ-S V3",
      "TVS Apache RTR 160",
      "Hero Glamour",
      "Suzuki Gixxer SF",
      "KTM Duke 125",
      "Bajaj Platina 110",
      "Honda SP 125",
      "Yamaha MT-15",
    ];
    return `Here are some of the best bikes for beginners: ${bestBikesForBeginners.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best cars for beginners")) {
    const bestCarsForBeginners = [
      "Maruti Suzuki Alto",
      "Hyundai Santro",
      "Tata Tiago",
      "Renault Kwid",
      "Honda Amaze",
      "Ford Figo",
      "Toyota Glanza",
      "Kia Picanto",
      "Volkswagen Polo",
      "Nissan Micra",
    ];
    return `Here are some of the best cars for beginners: ${bestCarsForBeginners.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best bikes for long rides")) {
    const bestBikesForLongRides = [
      "Royal Enfield Himalayan",
      "Kawasaki Versys 650",
      "Honda CB500X",
      "BMW F 750 GS",
      "KTM Adventure 390",
      "Suzuki V-Strom 650",
      "Triumph Tiger 900",
      "Yamaha Tenere 700",
      "Honda Africa Twin",
      "Ducati Multistrada V4",
    ];
    return `Here are some of the best bikes for long rides: ${bestBikesForLongRides.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best cars for long drives")) {
    const bestCarsForLongDrives = [
      "Honda Accord",
      "Toyota Camry",
      "Mazda CX-5",
      "Subaru Outback",
      "Ford Explorer",
      "Volkswagen Passat",
      "Hyundai Sonata",
      "Kia Sorento",
      "Chevrolet Malibu",
      "Nissan Altima",
    ];
    return `Here are some of the best cars for long drives: ${bestCarsForLongDrives.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best bikes for city rides")) {
    const bestBikesForCityRides = [
      "Honda CB Shine",
      "Bajaj Pulsar NS200",
      "Yamaha MT-15",
      "TVS Apache RTR 160 4V",
      "KTM Duke 200",
      "Suzuki Gixxer SF 250",
      "Hero Xtreme 200R",
      "Kawasaki Z125 Pro",
      "Benelli TNT 300",
      "Royal Enfield Meteor 350",
    ];
    return `Here are some of the best bikes for city rides: ${bestBikesForCityRides.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best cars for city driving")) {
    const bestCarsForCityDriving = [
      "Maruti Suzuki Swift",
      "Hyundai i20",
      "Tata Nexon",
      "Honda Jazz",
      "Ford EcoSport",
      "Kia Sonet",
      "Toyota Glanza",
      "Volkswagen Polo",
      "Renault Kwid",
      "Nissan Magnite",
    ];
    return `Here are some of the best cars for city driving: ${bestCarsForCityDriving.join(
      ", "
    )}`;
  } else if (lowerInput.includes("best bikes under 1000cc")) {
    const bestBikesUnder1000cc = [
      "Suzuki GSX-R1000",
      "Yamaha YZF-R1",
      "KTM RC 16",
      "BMW S 1000 R",
      "Suzuki Hayabusa",
      "Ducati Panigale V4",
      "Kawasaki ZX-10R",
      "Honda CB1000RR Fireblade",
      "Triumph Speed Triple 1200 RS",
      "Kawasaki Z1000",
      "MV Agusta Brutale 1000 Serie Oro",
      "Aprilia Tuono V4 1100",
      "Aprilia RS V4 1100 Factory",
      "Ducati Streetfighter V4",
      "KTM 1290 Super Duke R",
    ];
    return `Here are some of the best bikes under 1000cc: ${bestBikesUnder1000cc.join(
      ", "
    )}`;
  } else if (lowerInput.includes("some jdm cars")) {
    const jdmCars = [
      "Toyota Supra",
      "Nissan Skyline GT-R",
      "Mazda RX-7",
      "Subaru Impreza WRX STI",
      "Honda NSX",
      "Mitsubishi Lancer Evolution",
      "Toyota AE86",
      "Nissan Silvia S15",
      "Honda Civic Type R",
      "Mazda MX-5 Miata",
    ];
    return `Here are some popular JDM (Japanese Domestic Market) cars: ${jdmCars.join(
      ", "
    )}`;
  } else if (lowerInput.includes("population of india")) {
    return "As of 2023, the estimated population of India is approximately 1.4 billion people. India is the second most populous country in the world, after China.";
  } else if (lowerInput.includes("population of world")) {
    return "As of 2023, the estimated global population is approximately 8 billion people. The world population has been steadily increasing over the years, with significant growth in developing countries.";
  } else if (lowerInput.includes("population of tamil nadu")) {
    return "As of 2023, the estimated population of Tamil Nadu is approximately 80 million people. Tamil Nadu is one of the most populous states in India and has a rich cultural heritage.";
  } else if (lowerInput.includes("population of coimbatore")) {
    return "As of 2023, the estimated population of Coimbatore is approximately 2.5 million people. Coimbatore is one of the largest cities in Tamil Nadu and is known for its textile industry and educational institutions.";
  } else {
    return "I'm not sure how to respond to that yet, but I'm learning every day!";
  }
}
