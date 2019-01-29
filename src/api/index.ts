import { Device } from "./device";
import { Media } from "./media";
import { Analytics } from "./analytics";
import { Display } from "./display";
import { Imaging } from "./imaging";
import { Provisioning } from "./provisioning";
import { PTZ } from "./ptz";
import { Receiver } from "./receiver";
import { Recording } from "./recording";
import { Replay } from "./replay";
import { Search } from "./search";
import { AdvancedSecurity } from "./advancedsecurity";
import { IDeviceConfig } from "../config";

export class ManagedONVIFApi {
    public Device = new Device(this.config);
    public Media = new Media(this.config);
    public Analytics = new Analytics(this.config);
    public Display = new Display(this.config);
    public Imaging = new Imaging(this.config);
    public Provisioning = new Provisioning(this.config);
    public PTZ = new PTZ(this.config);
    public Receiver = new Receiver(this.config);
    public Recording = new Recording(this.config);
    public Replay = new Replay(this.config);
    public Search = new Search(this.config);
    public AdvancedSecurity = new AdvancedSecurity(this.config);

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
