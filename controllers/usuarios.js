const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

  res.json({
    msg: "Get API - usuarioGet",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "Post API - usuariosPost",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "Put API - usuariosPut",
    id,
  });
};

const usuariosPath = (req, res) => {
  res.json({
    msg: "Path API - usuariosPath",
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "Delete API - usuariosDelete",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPath,
  usuariosDelete,
};
