import { Injectable } from "@angular/core"

@Injectable()
export class ConfigService {
    public static initialized = false;

    public static config = {
        tenant: 'test_tenant',
        baseUrl: 'http://appoint.test',
        url: '{baseUrl}/{tenant}/',
        imageStore: '{baseUrl}/public/{tenant}/uploads/'
    }

    public static __TOKEN__: string|null = null;

    constructor(){
        if(!ConfigService.initialized){
            for (const key in ConfigService.config) {
                if (Object.prototype.hasOwnProperty.call(ConfigService.config, key)) {
                    let value: any = ConfigService.config[key]
                    let regex = new RegExp('{(.+?)}')
                    while (regex.test(value.toString())) {
                        let matches = value.toString().match(regex)
                        value = value.toString().replace(matches[0], ConfigService.config[matches[1]])
                        ConfigService.config[key] = value
                    }
                }
            }
            ConfigService.initialized = true
        }
    }
}
