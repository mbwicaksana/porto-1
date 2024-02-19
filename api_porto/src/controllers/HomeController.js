const homeController = {};

homeController.renderHomePage = async (req, res) => {
  const data = {
    title: "Halaman Depan",
    message: "Selamat datang di halaman depan!",
  };

  // Gunakan Mustache untuk render view
  const template = await fs.promises.readFile(
    "./src/views/index.mustache",
    "utf-8"
  );
  const rendered = Mustache.render(template, data);

  res.send(rendered);
};

export default homeController;
