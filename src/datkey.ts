import type {
  Config,
  GenerateKeyProps,
  GetWorkspaceResponse,
  KeyId,
  KeyObject,
  MessageTypeResponse,
  UpdateKeyProps,
  UpdateKeyResponse,
  VerifyKeyProps,
  VerifyKeyResponse,
} from "./types";

const Axios = require("axios");

export class Datkey {
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

  async generateKey(payload: GenerateKeyProps): Promise<MessageTypeResponse> {
    try {
      return await this.axios.post("/keys", payload);
    } catch (error) {
      throw error;
    }
  }

  async getKey(keyId: string): Promise<KeyObject> {
    try {
      return await this.axios.get(`/keys/${keyId}`);
    } catch (error) {
      throw error;
    }
  }

  async revokeKey(keyId: KeyId): Promise<MessageTypeResponse> {
    try {
      return await this.axios.delete(`/keys/${keyId}`);
    } catch (error) {
      throw error;
    }
  }

  async verifyKey(payload: VerifyKeyProps): Promise<VerifyKeyResponse> {
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
    payload: UpdateKeyProps;
  }): Promise<UpdateKeyResponse> {
    try {
      return await this.axios.put(`/keys/${keyId}`, payload);
    } catch (error) {
      throw error;
    }
  }

  async getWorkspace(): Promise<GetWorkspaceResponse> {
    try {
      return await this.axios.get("/workspace");
    } catch (error) {
      throw error;
    }
  }
}
