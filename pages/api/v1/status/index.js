function index(request, response) {
  return response.status(200).json({chave: "teste"});
}

export default index;