const data = require('./library.json');

for (const row of data.results) {
    const apiName = row.name;
    for (const [featureName, featureObj] of Object.entries(row.features)) {
        const url = featureObj.openAPI;
        if (url.match(/v3/)) {
            const u = new URL(url);
            const fn = u.pathname.slice(1).replace(/\//g,'-') + ".json";
            console.log(`curl '${url}' > ${fn}`)
        }
    }
}
