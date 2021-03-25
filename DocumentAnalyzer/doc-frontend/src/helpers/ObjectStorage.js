import { BlobServiceClient } from "@azure/storage-blob";

export default class BlobStorage {
    constructor() {
        const blobSasUrl = 'https://soafiles.blob.core.windows.net/?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-04-25T13:35:04Z&st=2021-03-25T05:35:04Z&spr=https,http&sig=3pa3Q8quR2KbhVpXWwzOxENduRl6p8Fe3po9oXzgIMo%3D';
        const blobServiceClient = new BlobServiceClient(blobSasUrl);
        const containerName = 'files';

        this.containerClient = blobServiceClient.getContainerClient(containerName);
    }

    uploadFiles = async (files) => {

        try {
            const promises = [];
            for (const file of files) {
                const blockBlobClient = this.containerClient.getBlockBlobClient(file.name);
                promises.push(blockBlobClient.uploadBrowserData(file));
            }
            let answer = await Promise.all(promises);
            return answer;
        }
        catch (error) {
            return error.message;
        }
    }

}
