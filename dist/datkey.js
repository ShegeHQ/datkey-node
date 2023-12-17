"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datkey = void 0;
const Axios = require("axios");
class Datkey {
    constructor(props) {
        this.axios = Axios.create({
            baseURL: "https://api.datkey.dev",
            headers: {
                "x-api-key": props.apiKey,
                "Content-Type": "application/json",
            },
        });
    }
    generateKey(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.axios.post("/keys", payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getKey(keyId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.axios.get(`/keys/${keyId}`);
            }
            catch (error) {
                throw error;
            }
        });
    }
    revokeKey(keyId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.axios.delete(`/keys/${keyId}`);
            }
            catch (error) {
                throw error;
            }
        });
    }
    verifyKey(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.axios.post(`/keys/verify`, payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateKey({ keyId, payload, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.axios.put(`/keys/${keyId}`, payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getWorkspace() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.axios.get("/workspace");
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.Datkey = Datkey;
