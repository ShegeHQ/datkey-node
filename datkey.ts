import type {
  Config,
  GenerateKeyBody,
  KeyId,
  KeyObject,
  MessageTypeResponse,
  UpdateKeyBody,
  UpdateKeyResponse,
  VerifyKeyBody,
  VerifyKeyResponse,
} from "./types";

const Axios = require("axios");

class Datkey {
  private readonly axios;

  constructor(props: Config) {
    this.axios = Axios.create({
      baseURL: "https://api.datkey.dev",
      headers: {
        "x-api-key": props.apiKey,
        "Content-Type": "application/json",
      },
    });
  }

  async generateKey(
    payload: GenerateKeyBody
  ): Promise<MessageTypeResponse | void> {
    try {
      return await this.axios.post("/keys", payload);
    } catch (error) {
      throw error;
    }
  }

  async getKey(keyId: string): Promise<KeyObject | void> {
    try {
      return await this.axios.get(`/keys/${keyId}`);
    } catch (error) {
      throw error;
    }
  }

  async revokeKey(keyId: KeyId): Promise<MessageTypeResponse | void> {
    try {
      return await this.axios.delete(`/keys/${keyId}`);
    } catch (error) {
      throw error;
    }
  }

  async verifyKey(payload: VerifyKeyBody): Promise<VerifyKeyResponse | void> {
    try {
      return await this.axios.post(`/keys/verify`, payload);
    } catch (error) {
      throw error;
    }
  }

  async updateKey({
    keyId,
    payload,
  }: {
    keyId: KeyId;
    payload: UpdateKeyBody;
  }): Promise<UpdateKeyResponse | void> {
    try {
      return await this.axios.put(`/keys/${keyId}`, payload);
    } catch (error) {
      throw error;
    }
  }

  async getWorkspace() {
    try {
      return await this.axios.get("/workspace");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = { Datkey };
