function main() {
    const myAge = document.getElementById('age').value;
    let earlyYears = 2;

    earlyYears *= 10.5;

    let laterYears = myAge - 2;
    laterYears *= 4;

    const myAgeInDogYears = earlyYears + laterYears;
    const myName = document.getElementById('name').value.toLowerCase();

    document.getElementById('results').innerHTML = `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`;

    console.log('early years: ' + earlyYears);
    console.log('my age: ' + myAge);
    console.log('later years: ' + laterYears);
}