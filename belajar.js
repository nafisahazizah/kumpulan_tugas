//1. (boolean)
var name = "icha";
var tempatL = "Jakarta";
var umur = 21 ;
var jomblo = false ;

console.log("Nama" + name + "Lahir di" + tempatL + "umur" + umur );
console.log("DIA JOMBLO : " + jomblo);

//array

var mantan = ["fiersa","besari","justin"]

console.log("Mantan Tersayang : " + mantan[mantan.length - 3])

//objek
var data = ["icha", 21, "Manajer"];

var data = {
	name: "icha",
	pekerjaan : "Manajer",
	"Jomblo": false,
	musicFav: ["Jaran Goyang", "Goyang Dumang", "Jangan Ganggu Pacarku", "EGP"],
	ucapKata: function(){
		console.log("OA OE ASEK");

	}
};

console.log(data);
console.log("Nama nya:",data.name);
console.log("Hobi ke 2", data.musicFav[3]);
data.ucapKata();

//array of object
var temanHidup = [
{
	nama : "fiersa", 
	profesi : "musisi",
	umur : 24
},
{
	nama : "afgan",
	profesi : "vocalis",
	umur : 25
},
{
	nama : "Lee min hoo",
	profesi : "aktor",
	umur : 27
}
];
console.log("Teman Hidup Icha : ", temanHidup[0].nama + " " + temanHidup[0].profesi);

// 2. looping

var orang = [
{
	name : "fardan", 
	age : 20 ,
	gender : "laki-laki"
}];

var i = 0;
while(i < orang.length){
	var no = i + 1
  console.log(no++ + " " + orang[i].name + " - " + orang[i].age + " - " + orang[i].gender);
  i++;
};

