const timetableDao = require('../dao/timetabledao');

exports.create  = async (req, res) => { try { res.status(201).json(await timetableDao.create(req.body)); } catch (e) { res.status(400).json({ error: e.message }); } };
exports.getAll  = async (req, res) => { try { res.json(await timetableDao.findAll()); } catch (e) { res.status(500).json({ error: e.message }); } };
exports.getOne  = async (req, res) => { try { res.json(await timetableDao.findById(req.params.id)); } catch (e) { res.status(404).json({ error: e.message }); } };
exports.update  = async (req, res) => { try { res.json(await timetableDao.update(req.params.id, req.body)); } catch (e) { res.status(400).json({ error: e.message }); } };
exports.remove  = async (req, res) => { try { res.json(await timetableDao.delete(req.params.id)); } catch (e) { res.status(400).json({ error: e.message }); } };
