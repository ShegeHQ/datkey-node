# Datkey API Client for Node.js

This Node.js module provides a simple client for interacting with the Datkey API. It allows you to perform operations
such as generating keys, retrieving keys, revoking keys, verifying keys, and updating keys.

## Installation

```bash
npm install datkey-node
```

## Usage

```typescript
// const Datkey = require("datkey-node");
import Datkey from "datkey-node";

// Initialize the Datkey workspace API client with your API key
const dkInstance = new Datkey({apiKey: "your-api-key"});

// Example: Generate a key
dkInstance
    .generateKey({
        api_id: "your-api-id",
        name: "MyKey",
        prefix: "flox_sk",
        expires_at: 1733237153,
    })
    .then((response) => {
        console.log("Generated Key:", response.message);
    })
    .catch((error) => {
        console.error("Error generating key:", error.message);
    });

dkInstance
    .getKey("your-key-id")
    .then((response) => {
        console.log("Generated Key:", response.key);
    })
    .catch((error) => {
        console.error("Error generating key:", error.message);
    });

// Similar usage for other operations
```

## API Operations

- **Generate Key:** Generate a new key.
- **Get Key:** Retrieve information about a specific key.
- **Revoke Key:** Revoke (delete) a key.
- **Verify Key:** Verify the validity of a key.
- **Update Key:** Update the properties of a key.

## Configuration

**ApiKey:** Your Datkey workspace API key.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or
submit a pull request.
