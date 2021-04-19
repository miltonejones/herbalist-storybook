
const PATH = '/home/milton/projects/billable/herbalistsp/salespros-contractor-portal/_ui/img/email';
const fs = require('fs');
const dir = fs.readdirSync(PATH);

const recurse = (path, images) => {
    const contents = fs.readdirSync(path);
    contents.map(file => {
        const location = `${path}/${file}`;
        if (fs.lstatSync(location).isDirectory()) {
            return recurse(location, images);
        }
        images[path] = images[path] || [];
        images[path].push(location)
    })
    return images;
}

const images = recurse(PATH, {});
fs.writeFileSync('../src/herbalist-email-logos.json', JSON.stringify(images))
