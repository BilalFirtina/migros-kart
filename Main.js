urunler = [{ urunIsmı: "Süt", fiyat: 15 }, { urunIsmı: "Bebek Bezi", fiyat: 135 }, { urunIsmı: "Kuşbaşı", fiyat: 100 }]

let mesaj =
    `
    Migros'a hoşgeldiniz ☺
    Money kartınız var mı ?
    `

let sonuc = confirm(mesaj);
let odenecekTutar;
if (sonuc) {
    let isim = prompt("isim giriniz?").toUpperCase();
    let soyisim = prompt("soyisim giriniz?").toUpperCase();
    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`
        Müşteri Bilgileri:${isim} ${soyisim}
        Ödenecek Tutar: ${odenecekTutar}
        `)
} else {
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar: ${odenecekTutar}`)
}