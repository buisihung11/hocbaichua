import { R2UploadService } from "./r2-service";
import type { UploadServiceConfig } from "./types";

export function createUploadService(config: UploadServiceConfig) {
  switch (config.provider) {
    case "r2": {
      if (
        !(
          config.endpoint &&
          config.accessKeyId &&
          config.secretAccessKey &&
          config.bucket
        )
      ) {
        throw new Error(
          "R2 provider requires endpoint, accessKeyId, secretAccessKey, and bucket"
        );
      }
      return new R2UploadService({
        endpoint: config.endpoint,
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
        bucket: config.bucket,
        region: config.region,
        urlExpirationSeconds: config.urlExpirationSeconds,
        maxFileSize: 100 * 1024 * 1024, // 100MB
        allowedFileTypes: [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "text/plain",
          "text/markdown",
          "image/*",
        ],
        maxFiles: 10,
      });
    }
    default: {
      throw new Error(`Unsupported upload provider: ${config.provider}`);
    }
  }
}

export { BaseUploadService } from "./base-upload-service";
export { R2UploadService } from "./r2-service";
export type {
  IUploadService,
  UploadConfig,
  UploadOptions,
  UploadProgress,
  UploadResult,
  UploadServiceConfig,
  UploadServiceProvider,
} from "./types";
