const axios = require('axios');

const baseUrl = 'https://api.datkey.dev';

class Datkey {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async generateKey(payload) {
        try {
            return await axios.post(`${baseUrl}/keys`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey,
                },
            });
        } catch (error) {
            throw error;
        }
    }

    async getKey(keyId) {
        try {
            return await axios.get(`${baseUrl}/keys/${keyId}`, {
                headers: {
                    'x-api-key': this.apiKey,
                },
            });
        } catch (error) {
            throw error;
        }
    }

    async revokeKey(keyId) {
        try {
            return await axios.delete(`${baseUrl}/keys/${keyId}`, {
                headers: {
                    'x-api-key': this.apiKey,
                },
            });
        } catch (error) {
            throw error;
        }
    }

    async verifyKey(payload) {
        try {
            return await axios.post(`${baseUrl}/keys/verify`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey,
                },
            });
        } catch (error) {
            throw error;
        }
    }

    async updateKey(payload) {
        try {
            return await axios.put(`${baseUrl}/keys`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey,
                },
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { Datkey };
