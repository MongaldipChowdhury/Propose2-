// 💌 LETTER CONTENT (WITH FORMATTING)
const letterContent = `“যখন প্রথমবার তোমায় দেখেছিলাম, মনে হয়েছিল সময়টা হঠাৎ থমকে গিয়েছিল।
চারপাশের সব শব্দ নিস্তব্ধ হয়ে, শুধু তোমাকেই দেখতে ইচ্ছে করছিল। 🌸
সেই এক মুহূর্তেই হৃদয়ের গভীরে অজান্তেই ভালোবাসার বীজ বোনা হয়ে গিয়েছিল,
যেটা প্রতিদিন একটু একটু করে বড় হয়ে উঠছে—শুধুই তোমাকে ঘিরে। 💖
তোমার হাসিতে এমন এক মায়া আছে,
যেটা চোখে পড়লেই মনটা অদ্ভুত শান্তিতে ভরে যায়।
সব দুঃখ, সব ক্লান্তি যেন তোমার একটুখানি হাসিতে আর একটুখানি কথাতে গলে যায়। 😊✨
তোমার কথাগুলো শুধু শোনা নয়—
সেগুলো আমার মনে থেকে যায়, হৃদয়ে রয়ে যায়।
এখন কারুর মুখে কোয়েল নামটা শুনলেই মনটা আলতো করে হাসে। 💕
আজকাল প্রতিটি মুহূর্তেই তোমার উপস্থিতি অনুভব করি—
কথায়, নিঃশ্বাসে, ভাবনায়।
মনে হয়, তোমাকে না ভেবে থাকা দিনটা যেন অসম্পূর্ণ। 🌙💞
আর সকালবেলা…
ঘুম ভাঙতেই সবার আগে তোমার মুখটা চোখে ভেসে ওঠে।
মনে হয়, যদি দিনটা তোমার কথা দিয়ে শুরু হয়,
তাহলে সারাদিনটাই সুন্দর হয়ে যাবে। ☀️❤️
জানি না এই অনুভূতির নাম কী,
কিন্তু এটুকু জানি—
আমি তোমাকে ভালবাসতাম - ভালবাসি - সারা জীবন ভালোবাসবো।
সন্দীপের এই মনটা কেবলমাত্র একজনের জন্য,  আর নিঃসন্দেহে শুধুই তোমার জন্য। 💫💌”
`;

// ELEMENTS
const btnLetter = document.getElementById("btn__letter");
const boxLetter = document.querySelector(".box__letter");
const letterBorder = document.querySelector(".letter__border");
const textLetter = document.querySelector(".text__letter p");
const titleLetter = document.querySelector(".title__letter");
const closeBtn = document.querySelector(".close");

let index = 0;
let typingInterval;

// 🖋️ TYPEWRITER FUNCTION
function startTyping() {
    textLetter.innerHTML = "";
    index = 0;

    typingInterval = setInterval(() => {
        if (index < letterContent.length) {
            const char = letterContent[index];

            if (char === "\n") {
                textLetter.innerHTML += "<br>";
            } else {
                textLetter.innerHTML += char;
            }

            // ✅ auto scroll to bottom while typing
            const textBox = document.querySelector(".text__letter");
            textBox.scrollTop = textBox.scrollHeight;

            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 80);
}

// 💌 OPEN LETTER
let letterOpen = false;
let gifsAnimated = false;
btnLetter.addEventListener("click", () => {
    if (letterOpen) return; // Prevent double opening
    letterOpen = true;
    gifsAnimated = false; // Reset for new opening
    
    boxLetter.style.display = "block";

    setTimeout(() => {
        letterBorder.style.display = "block";
    }, 600);

    // TITLE TYPE
    titleLetter.innerHTML = "To The Special One💌";
    let tIndex = 0;

    // HEART + GIF ANIMATIONS (only once)
    setTimeout(() => {
        if (!gifsAnimated) {
            gifsAnimated = true;
            document.getElementById("heart__letter")?.classList.add("animationOp");
            document.querySelectorAll(".left-gif")?.forEach(img => 
                img.classList.add("animationOp")
            );
        }
    }, 1200);

    // START TYPING
    setTimeout(startTyping, 2500);
});

// ❌ CLOSE LETTER
closeBtn.addEventListener("click", () => {
    clearInterval(typingInterval);

    textLetter.innerHTML = "";
    titleLetter.innerHTML = "";

    document.getElementById("heart__letter")?.classList.remove("animationOp");
    document.querySelectorAll(".left-gif")?.forEach(img => 
        img.classList.remove("animationOp")
    );

    letterBorder.style.display = "none";
    boxLetter.style.display = "none";
    
    letterOpen = false; // Allow opening again
});
