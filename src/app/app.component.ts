import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BTTH';
  ngOnInit() {
    //Bài 1:Tính S(n) = x + x^2 + x^3 + … + x^n
    // let s=0;
    // let n=3;
    // let x=2;
    // for(let i=1;i<=n;++i){
    //   s+=x/i;
    // }
    // console.log(s);

    // Bài 2:Tính S(x, n) = – x + x^2/2! – x^3/3! + … + (-1)^n * x^n/n!
    // var gt=(n)=>{
    //   let s=1;
    //   for(let i=1;i<=n;i++){
    //     s=s*i;
    //   }
    //   return s;
    // }
    // let s=0;
    // let n=3;
    // let x=2;
    // for(let i=1;i<=n;i++){
    //   s=s+Math.pow(x,i)/gt(i)+(-1)*Math.pow(x,i)/gt(i);
    // }
    // console.log(s);

    //Bài 3:Cho danh sách [{hoten: 'Nguyen Thi Mai', diemthi:9},{hoten: 'Tran Thi Anh, diemthi:7.5},{ hoten: 'Hoang Thi Dung', diemthi:8.3}]. Hãy sắp xếp danh sách trên theo thứ tự tăng dần của trường họ tên(Ưu tiên Tên sau đó đến Họ)
    // let catten = (s) => {
    //   let n = s.lastIndexOf(' ');
    //   return s.substr(n + 1) + ' ' + s.substr(0, n);
    // }
    // let s = [{ hoten: 'Nguyen Thi Mai', dthi: 9 },
    // { hoten: 'Tran Thi Anh', dthi: 7.5 },
    // { hoten: 'Hoang Thi Dung', dthi: 8.3 }
    // ].sort((a, b) => {
    //   if (catten(a.hoten) > catten(b.hoten)) return 1;
    //   else if (catten(a.hoten) < catten(b.hoten)) return -1;
    //   return 0;
    // });
    // console.log(s);

    //Bài 4: Cho danh sách [{hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi:9}, {hoten: 'Tran Thi Anh, quequan: 'Ha Noi', diemthi:7.5},{ hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi:8.3}]. Hãy lọc ra một danh sách mới những người có điểm thi lớn hơn 8 và quê ở Hai Phong.
    // let s = [{ hoten: 'Nguyen Thi Mai',quequan:'Hung Yen', dthi: 9 },
    // { hoten: 'Tran Thi Anh',quequan:'Ha Noi ', dthi: 7.5 },
    // { hoten: 'Hoang Thi Dung',quequan:'Hai Phong', dthi: 8.3 }
    // ].filter(x=>x.dthi>=8 && x.quequan=='Hai Phong');
    // console.log(s);

    //Bài 5: Cho biết các số là số chính phương có trong một dãy số
    // let sochinhphuong = (n) =>{
    //   return   Math.pow(Math.floor(Math.sqrt(n)),2)==n;
    // }
    // let s = [3,4,8,10,25,55].filter(sochinhphuong);
    // console.log(s);

    //Bài 6: Tính tổng các phần tử là các số dương có trong một dãy số.
    // var arr = [1, 2, 3, -4];
    // var total = 0;
    // for (let i in arr) { 
    //   if( arr[i]>0)
    //   {
    //   total += arr[i];
    //   }
    //  }
    //  console.log("total is : " + total);
    //Làm thêm vd
    //Tổng các số
    // let numOr0 = n => isNaN(n) ? 0 : n
    // var total = [-1, 1, 2, 3].reduce(function (a, b) {
    //   return numOr0(a) + numOr0(b)
    // });
    // console.log("total is : " + total);
    // Bài 8: Tính thể tích của hình chóp khi biết diện tích đáy và chiều cao
    class tamgiac{
      a: number;
      b: number;
      c: number;
      constructor(a: number, b: number,c: number){
        this.a = a;
        this.b = b;
        this.c = c;
      }
      dt(){
        var p = (this.a+this.b+this.c)/2;
        var s = p*(p-this.a)*(p-this.b)*(p-this.c);
        return Math.sqrt(s);
      }
    }
    class hinhchop extends tamgiac{
      h : number;
      constructor(a: number, b: number,c: number, h:number){
        super(a,b,c);
        this.h = h;
      }
      tc(){
        return 1/3 * super.dt()*this.h;
      }
    }
    var hc = new hinhchop(3,4,5,6);
    console.log(hc.tc());

    // Vd1:Tính tổng dãy số S=1+1/2+..+n(n=10)
    // let n = 10;
    //  let s = 0;
    //  for(let i=1;i<=n;++i){
    //     s += 1.0/i;
    //  }
    //  console.log(s); 

    // VD2:Chỉ ra những phần tử là số nguyên tố trong một dãy số: 4,11,45,3,13,50,7,60,77    
    // var list:number[]; 
    //   list = [4,11,45,3,13,50,7,60,77];
    //   var checkNT = (n:number) => {
    //     let ok = true;
    //     for(let i=2;i<n;++i)
    //     if(n%i==0){
    //       ok=false;
    //       break;
    //     } 
    //     return ok;
    //   }
    //   let listNT = list.filter(x=>checkNT(x)); 
    //   console.log("Các số nguyên tố là : " + listNT );
    // VD3: Dùng kỹ thuật lập trình hướng đối tượng tín thể tích hình hộp khi biết độ dài các cạnh và chiều cao

  }
}
// VD4:Dùng kỹ thuật lập trình hướng đối tượng tín thể tích hình hộp khi biết độ dài các cạnh và chiều cao
// export class HCN {
//   protected a: number;
//   protected b: number;
//   constructor(a: number, b: number) {
//     this.a = a;
//     this.b = b;
//   }
//   public DienTich(): number {
//     return this.a * this.b;
//   }
// }
// export class HH extends HCN {
//   protected h: number;
//   constructor(a: number, b: number, h: number) {
//     super(a, b);//super: thừa kế từ class con tới class cha
//     this.h = h;
//   }
//   public TheTich(): number {
//     return this.DienTich() * this.h;
//   }
// }
// var a: number = 5;
// var b: number = 6;
// var h: number = 3;
// var hh = new HH(a, b, h);
// console.log(hh.TheTich())

