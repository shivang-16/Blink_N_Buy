import { fileType } from '@/types/global';
import DatauriParser from 'datauri/parser'
import path from 'path'


const parser = new DatauriParser()

const getDataUri = async (files: fileType[]) => {
    for (let file of files) {
      const extname = path.extname(file.originalname).toString();

      return parser.format(extname, file.buffer);
    }
  };

export default getDataUri