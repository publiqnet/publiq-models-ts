import BaseModel from '../BaseModel';


export default class __KeyPair extends BaseModel {

    masterKey: string;
    index: number;
    publicKey: string;
    privateKey: string;

    constructor(data) {
        super();
        this.masterKey = data.master_key;
        this.index = data.index;
        this.publicKey = data.public_key;
        this.privateKey = data.private_key;
    }

    static get PropertyMap () {
        return {
            masterKey : 'master_key',
            index : 'index',
            publicKey : 'public_key',
            privateKey : 'private_key',
        }
    }

  static get Rtt () {
    return 18
  }
}
