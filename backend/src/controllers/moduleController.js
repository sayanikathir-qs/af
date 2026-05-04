const moduleDao = require('../dao/moduledao');

exports.create  = async (req, res) => { try { res.status(201).json(await moduleDao.create(req.body)); } catch (e) { res.status(400).json({ error: e.message }); } };
exports.getAll  = async (req, res) => { try { res.json(await moduleDao.findAll()); } catch (e) { res.status(500).json({ error: e.message }); } };
exports.getOne  = async (req, res) => { try { res.json(await moduleDao.findById(req.params.id)); } catch (e) { res.status(404).json({ error: e.message }); } };
exports.update  = async (req, res) => { try { res.json(await moduleDao.update(req.params.id, req.body)); } catch (e) { res.status(400).json({ error: e.message }); } };
exports.remove  = async (req, res) => { try { res.json(await moduleDao.delete(req.params.id)); } catch (e) { res.status(400).json({ error: e.message }); } };
