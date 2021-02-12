
const positiveAffirmations =[
['You are the architect of your life; you build its foundation and choose its contents.'],
['Today,you are brimming with energy and overflowing with joy.'],
['Your body is healthy; your mind is brilliant; your soul is tranquil.'],
['You are superior to negative thoughts and low actions.'],
['You have been given endless talents which you begin to utilize today.'],
['You forgive those who have harmed you in ypur past and peacefully detach from them.'],
['A river of compassion washes away your anger and replaces it with love.'],
['You are guided in your every step by Spirit who leads you towards what you must know and do.'],
['You possess the qualities needed to be extremely successful.'],
['Creative energy surges through you and leads you to new and brilliant ideas.'],
['Happiness is a choice. You base your happiness on your own accomplishments and the blessings you have been given.'],
['Your ability to conquer your challenges is limitless; your potential to succeed is infinite.'],
['You deserve to be employed and paid well for your time, efforts, and ideas. Each day, you are closer to finding the perfect job for you.'],
['You are courageous and you stand up for yourself.'],
['Your thoughts are filled with positivity and your life is plentiful with prosperity.'],
['Today, you abandon your old habits and take up new, more positive ones.'],
['Many people look up to you and recognize your worth; You are admired.'],
['You are blessed with an incredible family and wonderful friends.'],
['You acknowledge your own self-worth; your confidence is soaring.'],
['Everything that is happening now is happening for your ultimate good.'],
['You are a powerhouse; You are indestructible.'],
['Though these times are difficult, they are only a short phase of life.'],
['Your  future is an ideal projection of what you envision now.'],
['Your efforts are being supported by the universe; your dreams manifest into reality before your eyes.'],
['The perfect partner for you is coming into your life sooner than you expect.'],
['You radiate beauty, charm, and grace.'],
['You are conquering your illness; You are defeating it steadily each day.'],
['Your obstacles are moving out of your way; your path is carved towards greatness.'],
['You wake up today with strength in your heart and clarity in your mind.'],
['Your fears of tomorrow are simply melting away.'],
['You are at peace with all that has happened, is happening, and will happen.'],
['Your nature is Divine; You are a spiritual being.'],
['your life is just beginning.']
 ];

 let randomaffirmation = positiveAffirmations[Math.floor(Math.random() * (positiveAffirmations.length - 1))];
 let name = prompt("What's your name?");
 alert(`Hello ${name}, ${randomaffirmation}`);


