sattelites = [{
    country: 'Russia',
    owns: 32
},
{
    country: 'US',
    owns: 33
},
{
    country: 'China',
    owns: 16
},
{
    country: 'Europe(ESA)',
    owns: 7
},
{
    country: 'India',
    owns: 4
},
{
    country: 'Japan',
    owns: 3
}
]

const reducer = (previousSattelite, currentSattelite) => {
    console.log(previousSattelite);
    console.log(currentSattelite);
    return {
        country: previousSattelite.country + " + " + currentSattelite.country,
        owns: previousSattelite.owns + currentSattelite.owns
    }
};

console.log(sattelites.reduce(reducer));
