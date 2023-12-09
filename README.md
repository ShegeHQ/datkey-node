# Datkey API Client for Node.js

This Node.js module provides a simple client for interacting with the Datkey API. It allows you to perform operations such as generating keys, retrieving keys, revoking keys, verifying keys, and updating keys.

## Installation

```bash
npm install datkey-node
```

## Usage

```javascript
const { Config } = require('datkey-node');

// Initialize the Datkey workspace API client with your API key
const datkeyConfig = new Datkey('your-api-key');

// Example: Generate a key
const generateKeyPayload = {
  api_id: 'your-api-id',
  name: 'MyKey',
  length: 16,
  // Other payload fields as needed
};

datkeyConfig.generateKey(generateKeyPayload)
  .then(response => {
    console.log('Generated Key:', response.data);
  })
  .catch(error => {
    console.error('Error generating key:', error.message);
  });

// Similar usage for other operations
```

## API Operations

* **Generate Key:** Generate a new key.
* **Get Key:** Retrieve information about a specific key.
* **Revoke Key:** Revoke (delete) a key.
* **Verify Key:** Verify the validity of a key.
* **Update Key:** Update the properties of a key.

## Configuration

**ApiKey:** Your Datkey workspace API key.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or
submit a pull request.