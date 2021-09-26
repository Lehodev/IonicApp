import { Injectable } from '@angular/core'

import { Storage } from '@ionic/storage-angular'

export interface Item{
    id: number,
    title: string,
    value: string
}

const ITEMS_KEY = 'my-items'

@Injectable({
    providedIn: 'root'
  })

export class StorageService {
    private _storage: Storage | null = null;
    constructor(private storage: Storage){
        this.init()
    }

    async init() {
        const storage = await this.storage.create()
        this._storage = storage
      }

    async set(key: string, value: any): Promise<any> {
        try {
        await this.storage.set(key, value)
        console.log('set string in storage: ' )
        return true
        } catch (reason) {
        console.log(reason)
        return false
        }
    }

    async get(key: string): Promise<any> {
        try {
        const result = await this.storage.get(key)
        if (result != null) {
        return result
        }
        return null
        } catch (reason) {
        console.log(reason)
        return null
        }
        }

    updateItem(item: Item): Promise<any>{
        return this._storage?.get(ITEMS_KEY).then((items: Item[]) => {
            if(!items || items.length === 0){
                return null
            }

            let newItems: Item[] = []

            for (let i of items){
                if(i.id === item.id){
                    newItems.push(item)
                }
                else{
                    newItems.push(i)
                }
            }
            return this._storage?.set(ITEMS_KEY, newItems)
        })
    }

    remove(key: string) {
        this._storage?.remove(key)
    }
}
