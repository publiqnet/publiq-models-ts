import BaseModel from '../BaseModel';

import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqPing extends BaseModel {


    constructor(data) { 
        super();
    }

    static get PropertyMap () {
        return {
        }
    }

    static get Rtt () {
        return 53;
    }

} 
