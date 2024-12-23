const schema = require('./managers/_common/schema.models');

// Example data to validate
const userData = {
    id: "12345",
    username: "user123",
    password: "securePassword123",
    email: "user@example.com",
    title: "My Title",
    label: "My Label",
    shortDesc: "Short description here.",
    longDesc: "This is a longer description that can go up to 2000 characters.",
    url: "https://example.com",
    emoji: ["😊", "😂"],
    price: 19.99,
    avatar: "https://example.com/avatar.png",
    text: "Hello",
    longText: "This is a longer text.",
    paragraph: "This is a paragraph.",
    phone: "1234567890",
    number: 123456,
    arrayOfStrings: ["string1", "string2"],
    obj: {},
    bool: true,
};

// Validation logic would go here, using the schema to check the data