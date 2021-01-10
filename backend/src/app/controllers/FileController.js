import File from '../models/File';

class FileController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const { originalName: name, fileName: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
