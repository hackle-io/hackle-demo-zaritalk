import { useRemoteConfig } from "@hackler/react-sdk";

export default function useHackleRemoteConfig<T>(
  key: string,
  defaultConfig: T
): T {
  const remoteConfig = useRemoteConfig();

  try {
    switch (typeof defaultConfig) {
      case "number":
        return remoteConfig.get(key, defaultConfig) as T;
      case "boolean":
        return remoteConfig.get(key, defaultConfig) as T;
      case "string":
      default: {
        const value = remoteConfig.get(key, JSON.stringify(defaultConfig));
        try {
          return JSON.parse(value);
        } catch {
          return value as T;
        }
      }
    }
  } catch (e) {
    console.error(e);
    return defaultConfig;
  }
}
