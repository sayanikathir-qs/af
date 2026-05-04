const jwt = require('jsonwebtoken');
const userDao = require('../dao/userDao');

exports.register = async (req, res) => {
  try { res.status(201).json(await userDao.create(req.body)); }
  catch (e) { res.status(400).json({ error: e.message }); }
};

exports.login = async (req, res) => {
  try {
    const user = await userDao.findByEmail(req.body.email);
    if (!user || !(await require('bcryptjs').compare(req.body.password, user.password)))
      return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, userType: user.userType }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.json({ token, user: { id: user._id, userName: user.userName, userType: user.userType } });
  } catch (e) { res.status(500).json({ error: e.message }); }
};

exports.getAll = async (req, res) => { try { res.json(await userDao.findAll()); } catch(e) { res.status(500).json(e); } };
exports.update = async (req, res) => { try { res.json(await userDao.update(req.params.id, req.body)); } catch(e) { res.status(400).json(e); } };
exports.remove = async (req, res) => { try { res.json(await userDao.delete(req.params.id)); } catch(e) { res.status(400).json(e); } };