export interface ViessmannAPIResponse<T> {
  data: T;
}

export interface ViessmannInstallation {
  accessLevel: string;
  aggregatedStatus: string;
  description: string;
  endUserWlanCommissioned: boolean;
  id: number;
  installationType: string;
  ownedByMaintainer: boolean;
  ownershipType: string;
  registeredAt: string;
  updatedAt: string;
  withoutViCareUser: boolean;
}

export interface ViessmannGateway {
  aggregatedStatus: string;
  autoUpdate: boolean;
  createdAt: string;
  description: string | null;
  firmwareUpdateFailureCounter: number;
  gatewayType: string;
  installationId: number;
  lastStatusChangedAt: string;
  otaOngoing: boolean;
  producedAt: string;
  registeredAt: string;
  serial: string;
  targetRealm: string;
  version: string;
}

export interface ViessmannFeatureCommandParam {
  type: string;
  required: boolean;
  constraints: {
    minLength: number;
    maxLength: number;
  };
}

export interface ViessmannFeatureCommand {
  uri: string;
  name: string;
  isExecutable: boolean;
  params: Record<string, ViessmannFeatureCommandParam>;
}

export interface ViessmannFeatureProperty<T> {
  type: string;
  value: T;
}

export interface ViessmannFeature<T> {
  apiVersion: number;
  commands: Record<string, ViessmannFeatureCommand>;
  components: ViessmannSmartComponent[];
  deviceId: string;
  feature: string;
  gatewayId: string;
  isEnabled: boolean;
  isReady: boolean;
  properties?: Record<string, ViessmannFeatureProperty<T>>;
  timestamp: string;
  uri: string;
}

export interface ViessmannSmartComponent {
  id: string;
  name: string;
  selected: boolean;
  deleted: boolean;
}

export interface LocalDevice {
  name: string;
  feature: string;
  deviceId: string;
}

export interface LocalPlatform {
  platform: string;
  name: string;
  clientId: string;
  apiEndpoint: string;
  devices: LocalDevice[];
}

export interface LocalConfig {
  platforms: LocalPlatform[];
}
