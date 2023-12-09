export interface GenerateKeyBody {
  api_id: string;
  name: string;
  prefix: string;
  expires_at: number;
}

export interface MessageTypeResponse {
  message: string;
}

export interface VerifyKeyBody {
  key: string;
  api_id: string;
}

export interface KeyObject {
  id: string;
  name: string;
  key: string;
  prefix: string;
  length: number;
  verifications: number;
  verification_limit: number;
  expires_at: number;
  meta: null;
  created_at: string;
  updated_at: string;
}

export interface VerifyKeyResponse {
  valid: boolean;
  key: KeyObject;
}

export interface UpdateKeyBody {
  verification_limit: string;
  expires_at: number;
}

export interface UpdateKeyResponse {
  key: KeyObject;
}

export interface Config {
  apiKey: string;
}

export type KeyId = string;
