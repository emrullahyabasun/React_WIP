import logo from './assets/logo2.png';
import './App.css';



function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="navbarlogo" width="30" height="24"></img>
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#">Anasayfa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hakkımızda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Galeri</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">İletişim</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-3 offset-md-1">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              Elektronik Ürünler
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Giyim ve Moda
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Ev ve Yaşam
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Sağlık ve Güzellik
            </a>
            <a href="#" className="list-group-item list-group-item-action">
            Mücevherat ve Takı
            </a>
            <a href="#" className="list-group-item list-group-item-action">
            Ev Dekorasyonu
            </a>
            <a href="#" className="list-group-item list-group-item-action">
            Oyuncaklar ve Oyunlar
            </a>
            <a href="#" className="list-group-item list-group-item-action">
            Elektronik Aksesuarlar
            </a>
            <a href="#" className="list-group-item list-group-item-action">
            Bahçe ve Dış Mekan Ürünleri
            </a>
            <a href="#" className="list-group-item list-group-item-action">
            Hobi ve Sanat Malzemeleri
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Kitaplar ve Eğitim
            </a>
            <a href="#" className="list-group-item list-group-item-action">
            Spor ve Aktiviteler
            </a>
          </div>
        </div>
        <div className="offset-md-1 col-md-6 offset-md-1">
          <div className="row">
          <div className="card col-md-4" style={{ width: "18rem" }}>
              <img src="https://www.gaming.gen.tr/wp-content/uploads/2022/08/dell-32-g3223d-fast-ips-165hz-1ms-qhd-adaptive-sync-usb-c-gaming-monitor-10-600x600.jpg" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Dell G3223D</h5>
                <p className="card-text">
                Dell G3223D 31.5 inç 165Hz 1ms Adaptive Sync QHD Fast IPS USB-C Gaming Monitör
                </p>
                <a href="#" className="btn btn-primary">
                  Sepete Ekle
                </a>
              </div>
            </div>
          <div className="card col-md-4" style={{ width: "18rem" }}>
              <img src="https://productimages.hepsiburada.net/s/493/550/110000542329931.jpg/format:webp" className="card-img-top" alt="..." ></img>
              <div className="card-body">
                <h5 className="card-title">iPhone 11 128GB</h5>
                <p className="card-text">
                Dokulu mat cam arka yüzeye sahip tasarım
                </p>
                <a href="#" className="btn btn-primary">
                  Sepete Ekle
                </a>
              </div>
            </div>
          <div className="card col-md-4" style={{ width: "18rem" }}>
              <img src="https://www.quntis.com/cdn/shop/products/003_11432518-db86-4f69-be35-512ea7336363.jpg?v=1698915006" className="card-img-top" alt="..." ></img>
              <div className="card-body">
                <h5 className="card-title">Monitör Lamp</h5>
                <p className="card-text">
                Monitor Light Bar PRO+ with desk top dial, for Curved/Flat Monitors
                </p>
                <a href="#" className="btn btn-primary">
                  Sepete Ekle
                </a>
              </div>
            </div>
          <div className="card col-md-4" style={{ width: "18rem", marginTop: "20px" }}>
              <img src="https://img-itopya.mncdn.com/cdn/350/yeni-proje-2023-04-28t140818945-1b175c.jpg" className="card-img-top" alt="..." ></img>
              <div className="card-body">
                <h5 className="card-title">PC Mikrofon</h5>
                <p className="card-text">
                Fifine Ampligame A6T RGB Yayıncı USB Mikrofon Seti
                </p>
                <a href="#" className="btn btn-primary">
                  Sepete Ekle
                </a>
              </div>
            </div>
          <div className="card col-md-4" style={{ width: "18rem", marginTop: "20px" }}>
              <img src="https://epomaker.com/cdn/shop/files/TH80pick.jpg?v=1682559777&width=823" className="card-img-top" alt="..." ></img>
              <div className="card-body">
                <h5 className="card-title">Epomaker Keyboard</h5>
                <p className="card-text">
                Epomaker TH80 Pro
                </p>
                <a href="#" className="btn btn-primary">
                  Sepete Ekle
                </a>
              </div>
            </div>
          <div className="card col-md-4" style={{ width: "18rem", marginTop: "20px" }}>
              <img src="https://m.media-amazon.com/images/I/61sgJ9h8IzL._AC_SX522_.jpg" className="card-img-top" alt="..." ></img>
              <div className="card-body">
                <h5 className="card-title">Deltahub Carpio 2.0</h5>
                <p className="card-text">
                DELTAHUB Carpio 2.0 - Sağ elini kullananlar için ergonomik bilek desteği
                </p>
                <a href="#" className="btn btn-primary">
                  Sepete Ekle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
