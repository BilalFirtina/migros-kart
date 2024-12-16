class MigrosBase {
    indirimOrani = 50;
    constructor(q, w, e, r) {
        this.a = q;
        this.s = w;
        this.d = e;
        this.f = r;
    }

    hesapla() {
        let odenecekTutar = 0;
        if (this.urunleriKontrolEt(this.f)) {
            if (this.d) {
                this.f.forEach(urun => {
                    odenecekTutar += urun.fiyat * (100 - this.indirimOrani) / 100;
                });
            } else {
                this.f.forEach(urun => {
                    odenecekTutar += urun.fiyat;
                });
            }
        } else {
            alert("En az bir ürün alınız!!!")
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urun) {
        if (urun != 0 && urun.length > 0) {
            return true;
        } else {
            return false;
        }
    }

}