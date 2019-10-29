export declare class File {
    gfs: any;
    constructor();
    addFile(path?: string, name?: string): Promise<void>;
    getFile(name?: string): Promise<any>;
    checkFileExists(name?: string): any;
    removeFile(name?: string): Promise<void>;
}
//# sourceMappingURL=grid.d.ts.map