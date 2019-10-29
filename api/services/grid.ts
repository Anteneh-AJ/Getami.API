import * as fs from "fs";
import * as mongoose from "mongoose";
import * as Grid from 'gridfs-stream';

export class File {
    gfs: any;

    constructor() {
        this.gfs = Grid(mongoose.connection.db, mongoose.mongo)
    }

    async addFile(path = 'default', name = 'default') {
        await fs.createReadStream(path).pipe(this.gfs.createWriteStream({
            filename: name
        }));
    }

    async getFile(name = 'default') {
        return this.gfs.createReadStream({filename: name});
    }

    checkFileExists(name = 'default') {
        return this.gfs.exist({filename: name});
    }

    async removeFile(name = 'default') {
        this.gfs.remove({filename: name}, function (err: Error) {
            if (err) console.log(err);
        })
    }
}



