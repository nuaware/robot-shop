//
// Products
//
db = db.getSiblingDB('catalogue');
db.products.insertMany([
    {sku: 'INS-1', name: 'Instana T-Shirt', description: 'Getting dressed for the occasion.', price: 15, instock: 2, categories: ['Swag']},
    {sku: 'INS-2', name: 'Squeezy Stan', description: 'Your ultimate partner for stressful moments.', price: 5, instock: 0, categories: ['Swag']},
    {sku: 'GRM-1', name: 'Gremlin Swag Pack', description: 'Unleash real-life chaos with the Gremlin mascotte.', price: 25, instock: 12, categories: ['Swag']},
    {sku: 'HSC-1', name: 'HashiCorp Mug', description: 'Do not mess with me before coffee.', price: 5, instock: 10, categories: ['Swag']},
    {sku: 'HSC-2', name: 'HashiCorp Socks', description: 'Almost as safe to store stuff in as a Vault.', price: 10, instock: 1, categories: ['Swag']},
    {sku: 'K8S-1', name: 'Kubernetes Cap', description: 'The perfect headgear.', price: 20, instock: 1, categories: ['Swag']},
    {sku: 'DCK-1', name: 'Docker Tie', description: 'The name is Dock, Moby Dock.', price: 15, instock: 12, categories: ['Swag']},
    {sku: 'NGX-1', name: 'NGINX T-Shirt', description: 'en-jin-eks.', price: 15, instock: 6, categories: ['Swag']},
    {sku: 'EXN-1', name: 'EXN Calendar', description: 'Exclusive Networks 2021 Calendar.', price: 5, instock: 10, categories: ['Swag']},
    {sku: 'GIT-1', name: 'Octocat', description: 'The official Github mascotte.', price: 15, instock: 12, categories: ['Swag']},
    {sku: 'PSC-1', name: 'Prisma Cloud T-Shirt', description: 'Feeling secure yet?', price: 15, instock: 5, categories: ['Swag']}
]);

// full text index for searching
db.products.createIndex({
    name: "text",
    description: "text"
});

// unique index for product sku
db.products.createIndex(
    { sku: 1 },
    { unique: true }
);
