import React, { useState } from 'react';
import './RandomQuote.css';
import twitter_icon from '../Assets/twitter.png';
import reload_icon from '../Assets/reload.png';

const RandomQuote = () => {
    
    const quotes = [
        { text: "Difficulties increase the nearer we get to the goal.", author: "Johann Wolfgang von Goethe" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
        { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "There is always risk, so learn to manage risk instead of avoiding it.", author: "Robert Kiyosaki" },
        { text: "When you change your thoughts, remember to also change your world.", author: "Norman Vincent Peale" },
        { text: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.", author: "Steve Jobs" },
        { text: "Either you run the day or the day runs you.", author: "Jim Rohn" },
        { text: "We don’t just sit around and wait for other people. We just make, and we do.", author: "Arlan Hamilton" },
        { text: "One man with courage makes a majority.", author: "Andrew Jackson" },
        { text: "The standard you walk past is the standard you accept.", author: "David Hurley" },
        { text: "The best fighter is never angry.", author: "Lao Tzu" },
        { text: "The two most powerful warriors are patience and time.", author: "Leo Tolstoy" },
        { text: "When the world pushes you to your knees, you're in the perfect position to pray.", author: "Rumi" },
        { text: "If you have money you made profit, if you have land and assets you have growth, if you have all that with morality you have success", author: "andaliv rahman partho" },
        { text: "Stop acting so small. You are the universe in ecstatic motion.", author: "Rumi" },
        { text: "Set your life on fire. Seek those who fan your flames.", author: "Rumi" },
        { text: "It’s your road, and yours alone, others may walk it with you, but no one can walk it for you.", author: "Rumi" },
        { text: "You are not one you are a thousand. Just light your lantern.", author: "Rumi" },
        { text: "Be a lamp, or a lifeboat, or a ladder. Help someone’s soul heal. Walk out of your house like a shepherd.", author: "Rumi" },
        { text: "Gratitude is the wine for the soul. Go on. Get drunk.", author: "Rumi" },
        { text: "Experience is simply the name we give our mistakes.", author: "Oscar Wilde" },
        { text: "If someone corrects you, and you feel offended, then you have an ego problem.", author: "Nouman Ali Khan" },
        { text: "The real dawah to Islam is the character of a Muslim.", author: "Nouman Ali Khan" },
        { text: "What you desire is what you want, what you have is what Allah wants.", author: "Nouman Ali Khan" },
        { text: "Some of the toughest ayaat in the Quran have Allah's name 'ar-Rahman' in them to make it clear that just because Allah is the Most Merciful, it doesn't mean He's not going to carry out justice.", author: "Nouman Ali Khan" },
        { text: "We live in a society where we wake up our kids for schools but not for Fajr.", author: "Nouman Ali Khan" },
        { text: "Forgiving someone isn't just about doing good to another. It's also about healing a scar in your own heart.", author: "Nouman Ali Khan" },
        { text: "If you know yourself, then you'll not be harmed by what is said about you.", author: "Sufyan al-Thawri" },
        { text: "Put aside your pride,Set down your arrogance,And remember your grave.", author: "Ali ibn Abi Talib" },
        { text: "When you find yourself in a position to help someone, be happy because Allah is answering that person’s prayer through you.", author: "Nouman Ali Khan" },
        { text: "You cried when He took away your drop of water, not knowing He'd saved for you, the sea.", author: "Yasmin Mogahed" },
        { text: "A friend cannot be considered a friend until he is tested in three occasions: in timeof need, behind your back, and after your death.", author: "Ali ibn Abi Talib" },
        { text: "This life is not real. I conquered the world and it did not bring me satisfaction.", author: "Muhammad Ali" },
        { text: "A moment of patience in a moment of anger prevents a thousand moments of regret.", author: "Ali ibn Abi Talib" },
        { text: "All that a man achieves and all that he fails to achieve is the direct result of his own thoughts.", author: "James Allen" },
        { text: "All life is an experiment. The more experiments you make, the better.", author: "Ralph Waldo Emerson" },
        { text: "I dream my painting and I paint my dream.", author: "Vincent van Gogh" },
        { text: "Don't look back - you're not going that way.", author: "Mary Engelbreit" },
        { text: "It doesn't matter where you are coming from. All that matters is where you are going.", author: "Brian Tracy" },
        { text: "Rest and be kind, you don't have to prove anything.", author: "Jack Kerouac" },
        { text: "Stop being a prisoner of your past. Become the architect of your future.", author: "Robin Sharma" },
        { text: "You cannot teach a crab to walk straight.", author: "Aristophanes" },
        { text: "Learn to sit back and observe, not everything needs a reaction.", author: "Unknown" },
        { text: "I had no idea that I would ever get involved with something like lending money to poor people, given the circumstances in which I was working in Bangladesh.", author: "President Dr. Muhammad Yunus" },
        { text: "If Bangladesh succumbs to the rule of one family, it would be a major step backward for the region.", author: "Khaleda Zia" },
        { text: " Love is like a bird. People want to cage it when it’s free. And again, people want to set it free when they see it free.", author: "Humayun Ahmed" },
        { text: " No insult is noticed in tough times.", author: "Humayun Ahmed" },
        { text: "The sea has a lot in common with tears. Sea water is salty. Tears are salty. Waves rise in the sea. Tears also come like waves. In war and love, nothing goes as planned.", author: "Humayun Ahmed" }

    ];

    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe",
    });

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    };

    return (
        <div className="container">
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"> </div>
                <div className="bottom">
                    <div className="author">{quote.author}</div>
                    <div className="icons">
                        <img
                            src={reload_icon}
                            onClick={() => { random(); }}
                            alt="Reload Icon"
                        />
                        <img
                            src={twitter_icon}
                            alt="Twitter Icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomQuote;
