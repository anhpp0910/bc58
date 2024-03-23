function SinhVien(maSV, tenSV, mailSV, passSV, diemToan, diemVan) {
  this.maSV = maSV;
  this.tenSV = tenSV;
  this.mailSV = mailSV;
  this.passSV = passSV;
  this.diemToan = diemToan;
  this.diemVan = diemVan;
  this.tinhDTB = function () {
    return (this._diemToan + this._diemVan) / 2;
  };
}
