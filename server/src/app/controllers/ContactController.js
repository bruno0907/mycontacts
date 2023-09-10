const ContactRepository = require('../repositories/ContactRepository');
const isValidUUID = require('../utils/isValidUUID');

class ContactController {
  async index(req, res) {
    const { orderBy } = req.query;

    const contacts = await ContactRepository.findAll(orderBy);

    return res.status(200).json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid user id' });
    }

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    return res.status(200).json(contact);
  }

  async store(req, res) {
    const { name, email, phone, category_id } = req.body;

    if (category_id && !isValidUUID(category_id)) {
      return res.status(400).json({ error: 'Invalid category' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (email) {
      const contactExists = await ContactRepository.findByEmail(email);

      if (contactExists) {
        return res.status(400).json({ error: 'This email is already taken' });
      }
    }

    const response = await ContactRepository.create({
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    return res.status(201).json(response);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, phone, category_id } = req.body;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid user id' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return res.status(400).json({ error: 'Invalid category id' });
    }

    if (!name) {
      return res.status(404).json({ error: 'Name is required' });
    }

    if (!email) {
      return res.status(404).json({ error: 'Email is required' });
    }

    const contactExists = await ContactRepository.findById(id);

    if (!contactExists) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    if (email) {
      const emailInUse = await ContactRepository.findByEmail(email);

      if (emailInUse && emailInUse.id !== id) {
        return res.status(404).json({ error: 'This email is already in use' });
      }
    }

    const updatedContact = await ContactRepository.update(id, {
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    return res.status(200).json(updatedContact);
  }

  async delete(req, res) {
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid user id' });
    }

    await ContactRepository.delete(id);

    return res.sendStatus(204);
  }
}

module.exports = new ContactController();
