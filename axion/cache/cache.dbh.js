const cache = require('./path/to/cache')( { prefix: 'myapp', url: 'redis://localhost:6379' } );

// Create an index
await cache.search.createIndex({
    index: 'myIndex',
    prefix: 'myapp',
    schema: {
        title: { store: 'TEXT', sortable: true },
        content: { store: 'TEXT' }
    }
});

// Add a document to the index
await cache.hash.set({
    key: 'doc:1',
    data: {
        title: 'Hello World',
        content: 'This is a test document.'
    }
});

// Search for documents
const results = await cache.search.find({
    query: '@title:Hello',
    searchIndex: 'myIndex'
});
console.log(results);

// Add to a hyperloglog
await cache.hyperlog.add({
    key: 'uniqueUsers',
    items: ['user1', 'user2', 'user3']
});

// Count unique items
const count = await cache.hyperlog.count({ key: 'uniqueUsers' });
console.log(`Unique users: ${count}`);