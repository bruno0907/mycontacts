const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(req, res) {
    const categories = await CategoryRepository.findAll();
    return res.status(200).json(categories);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    await CategoryRepository.create({ name });
    return res.sendStatus(201);
  }
}

module.exports = new CategoryController();
