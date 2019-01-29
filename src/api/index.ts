import { ONVIFDevice } from "./device";
import { ONVIFMedia } from "./media";
import { ONVIFAnalytics } from "./analytics";
import { ONVIFDisplay } from "./display";
import { ONVIFImaging } from "./imaging";
import { ONVIFProvisioning } from "./provisioning";
import { ONVIFPTZ } from "./ptz";
import { ONVIFReceiver } from "./receiver";
import { ONVIFRecording } from "./recording";
import { ONVIFReplay } from "./replay";
import { ONVIFSearch } from "./search";
import { ONVIFAdvancedSecurity } from "./advancedsecurity";
import { IDeviceConfig } from "../config";

export class ManagedONVIFApi {
    public Device = new ONVIFDevice(this.config);
    public Media = new ONVIFMedia(this.config);
    public Analytics = new ONVIFAnalytics(this.config);
    public Display = new ONVIFDisplay(this.config);
    public Imaging = new ONVIFImaging(this.config);
    public Provisioning = new ONVIFProvisioning(this.config);
    public PTZ = new ONVIFPTZ(this.config);
    public Receiver = new ONVIFReceiver(this.config);
    public Recording = new ONVIFRecording(this.config);
    public Replay = new ONVIFReplay(this.config);
    public Search = new ONVIFSearch(this.config);
    public AdvancedSecurity = new ONVIFAdvancedSecurity(this.config);

    constructor(private config: IDeviceConfig) {
    }
}

export * from "./device";
export * from "./media";
export * from "./analytics";
export * from "./display";
export * from "./imaging";
export * from "./provisioning";
export * from "./ptz";
export * from "./receiver";
export * from "./recording";
export * from "./replay";
export * from "./search";
export * from "./advancedsecurity";
