import { default as http } from './http';
import { PluginFunction } from './httpFnStore';
/**
 * 增强的http
 */
export default class httpEnhancer extends http {
    constructor(urlPrefix: string, mockUrlPrefix: string);
    addBeforePlug: (plug: PluginFunction) => this;
    addAfterPlug: (plug: PluginFunction) => this;
    addErrorPlug: (plug: PluginFunction) => this;
    addFinallyPlug: (plug: PluginFunction) => this;
}
