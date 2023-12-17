import type { Config, GenerateKeyProps, GetWorkspaceResponse, KeyId, KeyObject, MessageTypeResponse, UpdateKeyProps, UpdateKeyResponse, VerifyKeyProps, VerifyKeyResponse } from "./types";
export declare class Datkey {
    private readonly axios;
    constructor(props: Config);
    generateKey(payload: GenerateKeyProps): Promise<MessageTypeResponse>;
    getKey(keyId: string): Promise<KeyObject>;
    revokeKey(keyId: KeyId): Promise<MessageTypeResponse>;
    verifyKey(payload: VerifyKeyProps): Promise<VerifyKeyResponse>;
    updateKey({ keyId, payload, }: {
        keyId: KeyId;
        payload: UpdateKeyProps;
    }): Promise<UpdateKeyResponse>;
    getWorkspace(): Promise<GetWorkspaceResponse>;
}
