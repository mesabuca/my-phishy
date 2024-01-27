
exports.status = (req, res) => {
    res.sendStatus(200);
  };
  
exports.ready = (req, res) => {
// Burada gerekli kontrolleri yapabilir ve duruma bağlı olarak 200 veya 500 döndürebilirsiniz.
const isReady = true; // Örnek: PostgreSQL ve Redis bağlantılarını kontrol et
if (isReady) {
    res.sendStatus(200);
} else {
    res.sendStatus(500);
}
};