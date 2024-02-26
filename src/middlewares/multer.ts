import multer from 'multer'

const storage = multer.memoryStorage()

const upload = multer({
   storage
}).array("files")

export default upload
