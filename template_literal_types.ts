type ReadOrWrite = 'read' | 'write';

type AccessType = `can${Capitalize<ReadOrWrite>}`;

type ErrorOrSuccess = 'Error' | 'Success';

interface ResponseT {
    result: `http${ErrorOrSuccess}`;
}

 const aType: ResponseT = {
    result: 'httpSuccess'
 }