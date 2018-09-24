import BaseModel from '../BaseModel';


export default class __InvalidPublicKey extends BaseModel {

    publicKey: string;

    constructor(data) {
        super();
        this.publicKey = data.public_key;
    }

    static get PropertyMap () {
        return {
            publicKey : 'public_key',
        }
    }
  static get Rtt () {
    return 16
  }
}
