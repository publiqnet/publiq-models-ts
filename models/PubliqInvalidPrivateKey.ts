import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqInvalidPrivateKey extends BaseModel {

    privateKey: string;

    constructor(data) { 
        super();
        this.privateKey = data.private_key;
    }

    static get PropertyMap () {
        return {
            privateKey : 'private_key',
        }
    }

    static get Rtt () {
        return 31;
    }

} 
