

function GetHoroscope() {
    
    let name = document.getElementById("name").value;

    if(name===""){
        window.alert("Please Enter Your Full Name");
        return;
    }

    let gender = document.getElementById("gender").value;
    const dob = new Date(document.getElementById('dob').value);

    const currentYear = new Date().getFullYear();
    const age = currentYear - dob.getFullYear();

    const HoroscopeDetails = `
    Dear ${name}, your zodiac sign is ${getZodiacSign(dob)}. 
    Your horoscope for today is as follows:
    - Health: Keep an eye on your energy levels, ensure to rest enough.
    - Love: A great time for self-reflection, leading to growth in your relationships.
    - Career: A stable period, with opportunities for advancement if you stay consistent.
    - Luck: Trust in your instincts, your lucky number today is ${Math.floor(Math.random() * 100)}.
    Keep being positive and the stars will align for you!

    (This is a general horoscope, feel free to explore more details for a personal reading!) `;


    document.getElementById("horoscope-name").innerText = `${name} , ${age} years old - ${gender}`;

    document.getElementById("horoscope-details").innerText = HoroscopeDetails;

    document.getElementById("horoscope-card").classList.remove("hidden");

}


function getZodiacSign(dob) {
    const month = dob.getMonth() + 1;
    const day = dob.getDate();

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return 'Aries';
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return 'Taurus';
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return 'Gemini';
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return 'Cancer';
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return 'Leo';
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return 'Virgo';
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return 'Libra';
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return 'Scorpio';
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return 'Sagittarius';
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return 'Capricorn';
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return 'Aquarius';
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return 'Pisces';
    return 'Unknown';

}


// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
